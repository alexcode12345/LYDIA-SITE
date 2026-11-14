import 'dotenv/config';
import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { validateContactPayload } from './src/utils/contactValidation';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = Number(process.env.PORT || 3000);
const DATA_DIR = path.join(__dirname, 'data');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.json');

interface StoredInquiry {
  referenceId: string;
  receivedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  pack?: string;
  commune?: string;
  message: string;
  forwardedToWebhook: boolean;
}

async function persistInquiry(entry: StoredInquiry): Promise<void> {
  await fs.mkdir(DATA_DIR, { recursive: true });
  let existing: StoredInquiry[] = [];
  try {
    const raw = await fs.readFile(INQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed;
    }
  } catch {
    existing = [];
  }
  existing.unshift(entry);
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(existing.slice(0, 500), null, 2), 'utf-8');
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '100kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({
      ok: true,
      service: "La Petite Conciergerie d'Indya",
      webhookConfigured: Boolean(process.env.CONTACT_WEBHOOK_URL),
    });
  });

  app.post('/api/contact', async (req, res) => {
    const locale = req.body?.locale === 'en' ? 'en' : 'fr';
    const { valid, errors, normalized } = validateContactPayload(req.body ?? {}, locale);

    if (!valid) {
      res.status(400).json({
        ok: false,
        message:
          locale === 'en'
            ? 'Please review the highlighted fields before submitting.'
            : 'Certains champs du formulaire nécessitent votre attention.',
        errors,
      });
      return;
    }

    const referenceId = `LPCI-${crypto.randomBytes(3).toString('hex').toUpperCase()}`;
    const receivedAt = new Date().toISOString();
    let forwardedToWebhook = false;

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL?.trim();
    if (webhookUrl) {
      try {
        const webhookResponse = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            referenceId,
            receivedAt,
            ...normalized,
          }),
        });
        forwardedToWebhook = webhookResponse.ok;
      } catch (err) {
        console.error('Webhook forwarding error:', err);
      }
    }

    try {
      await persistInquiry({
        referenceId,
        receivedAt,
        firstName: normalized.firstName,
        lastName: normalized.lastName,
        email: normalized.email,
        phone: normalized.phone || undefined,
        pack: normalized.pack || undefined,
        commune: normalized.commune || undefined,
        message: normalized.message,
        forwardedToWebhook,
      });

      res.status(201).json({
        ok: true,
        referenceId,
        receivedAt,
        forwardedToWebhook,
        message:
          'Votre demande a bien été enregistrée. Nous vous répondrons dans les plus brefs délais.',
      });
    } catch (err) {
      console.error('Failed to persist inquiry:', err);
      res.status(500).json({
        ok: false,
        message:
          'Impossible d’enregistrer la demande pour le moment. Vous pouvez nous joindre directement par téléphone ou par e-mail.',
      });
    }
  });

  if (process.env.NODE_ENV === 'production') {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  } else {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
