import test from 'node:test';
import assert from 'node:assert/strict';
import { buildMailtoHref, validateContactPayload } from './contactValidation';

test('validateContactPayload rejects empty required fields in French by default', () => {
  const result = validateContactPayload({
    firstName: '',
    lastName: ' ',
    email: 'invalid-email',
    phone: 'abc',
    message: 'court',
    consent: false,
  });

  assert.equal(result.valid, false);
  assert.ok(result.errors.firstName?.includes('prénom'));
  assert.ok(result.errors.lastName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.message);
  assert.ok(result.errors.consent);
});

test('validateContactPayload returns English validation errors when locale is en', () => {
  const result = validateContactPayload(
    {
      firstName: '',
      lastName: '',
      email: 'bad',
      message: 'hi',
      consent: false,
    },
    'en',
  );

  assert.equal(result.valid, false);
  assert.ok(result.errors.firstName?.includes('first name'));
  assert.ok(result.errors.email?.includes('valid email'));
  assert.ok(result.errors.consent?.includes('processing'));
});

test('validateContactPayload accepts valid complete French owner inquiry', () => {
  const result = validateContactPayload({
    firstName: '  Claire ',
    lastName: 'Dupont',
    email: 'Claire.Dupont@Example.FR ',
    phone: '+33 6 12 34 56 78',
    pack: 'Pack Complet',
    commune: 'Gaillard',
    message: 'Bonjour, je souhaite confier mon appartement T2 situé à Gaillard dès le mois prochain.',
    consent: true,
  });

  assert.equal(result.valid, true);
  assert.deepEqual(result.errors, {});
  assert.equal(result.normalized.firstName, 'Claire');
  assert.equal(result.normalized.email, 'claire.dupont@example.fr');
});

test('validateContactPayload allows optional phone to be omitted', () => {
  const result = validateContactPayload({
    firstName: 'Marc',
    lastName: 'Bernard',
    email: 'marc@example.com',
    phone: '',
    message: 'Demande de renseignements pour un studio à Annemasse.',
    consent: true,
  });

  assert.equal(result.valid, true);
  assert.equal(result.errors.phone, undefined);
});

test('buildMailtoHref encodes subject and details accurately in FR and EN', () => {
  const hrefFr = buildMailtoHref(
    {
      firstName: 'Claire',
      lastName: 'Dupont',
      email: 'claire@example.fr',
      phone: '+33 6 12 34 56 78',
      pack: 'Pack Complet',
      commune: 'Gaillard',
      message: 'Bonjour Indya, voici les détails de mon bien.',
      consent: true,
    },
    'contact@la-petite-conciergerie-indya.com',
    'fr',
  );

  assert.ok(hrefFr.startsWith('mailto:contact@la-petite-conciergerie-indya.com?subject='));
  assert.ok(hrefFr.includes(encodeURIComponent('Pack Complet')));
  assert.ok(hrefFr.includes(encodeURIComponent('Gaillard')));

  const hrefEn = buildMailtoHref(
    {
      firstName: 'Claire',
      lastName: 'Dupont',
      email: 'claire@example.fr',
      pack: 'Full Management Pack',
      commune: 'Gaillard',
      message: 'Hello Indya, here are the details of my property.',
      consent: true,
    },
    'contact@la-petite-conciergerie-indya.com',
    'en',
  );

  assert.ok(hrefEn.includes(encodeURIComponent('Concierge enquiry')));
});
