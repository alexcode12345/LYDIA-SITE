export type Locale = 'fr' | 'en';

export interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  pack?: string;
  commune?: string;
  message: string;
  consent: boolean;
}

export interface ValidationErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  message?: string;
  consent?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+\d\s().-]{7,22}$/;

const VALIDATION_MESSAGES: Record<Locale, Required<ValidationErrors>> = {
  fr: {
    firstName: 'Veuillez saisir votre prénom (2 caractères minimum).',
    lastName: 'Veuillez saisir votre nom (2 caractères minimum).',
    email: 'Veuillez saisir une adresse e-mail valide.',
    phone: 'Le numéro de téléphone saisi semble invalide.',
    message: 'Merci de décrire brièvement votre besoin ou votre bien (10 caractères minimum).',
    consent: 'Veuillez accepter le traitement de vos données dans le cadre de votre demande.',
  },
  en: {
    firstName: 'Please enter your first name (at least 2 characters).',
    lastName: 'Please enter your last name (at least 2 characters).',
    email: 'Please enter a valid email address.',
    phone: 'The phone number entered appears invalid.',
    message: 'Please briefly describe your property or request (at least 10 characters).',
    consent: 'Please accept the processing of your data for this enquiry.',
  },
};

export function sanitizeField(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim().replace(/\s+/g, ' ');
}

export function sanitizeMessage(value: unknown): string {
  if (typeof value !== 'string') return '';
  return value.trim();
}

export function validateContactPayload(
  raw: Partial<ContactPayload>,
  locale: Locale = 'fr',
): {
  valid: boolean;
  errors: ValidationErrors;
  normalized: ContactPayload;
} {
  const msg = VALIDATION_MESSAGES[locale] ?? VALIDATION_MESSAGES.fr;

  const normalized: ContactPayload = {
    firstName: sanitizeField(raw.firstName),
    lastName: sanitizeField(raw.lastName),
    email: sanitizeField(raw.email).toLowerCase(),
    phone: sanitizeField(raw.phone),
    pack: sanitizeField(raw.pack),
    commune: sanitizeField(raw.commune),
    message: sanitizeMessage(raw.message),
    consent: Boolean(raw.consent),
  };

  const errors: ValidationErrors = {};

  if (normalized.firstName.length < 2) {
    errors.firstName = msg.firstName;
  }

  if (normalized.lastName.length < 2) {
    errors.lastName = msg.lastName;
  }

  if (!normalized.email || !EMAIL_PATTERN.test(normalized.email)) {
    errors.email = msg.email;
  }

  if (normalized.phone && !PHONE_PATTERN.test(normalized.phone)) {
    errors.phone = msg.phone;
  }

  if (normalized.message.length < 10) {
    errors.message = msg.message;
  }

  if (!normalized.consent) {
    errors.consent = msg.consent;
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
    normalized,
  };
}

export function buildMailtoHref(
  payload: ContactPayload,
  recipientEmail: string,
  locale: Locale = 'fr',
): string {
  const isEn = locale === 'en';
  const subjectParts = [isEn ? 'Concierge enquiry' : 'Demande de conciergerie'];
  if (payload.pack) subjectParts.push(payload.pack);
  if (payload.commune) subjectParts.push(payload.commune);

  const lines = [
    `${isEn ? 'Name' : 'Nom'} : ${payload.firstName} ${payload.lastName}`,
    `${isEn ? 'Email' : 'E-mail'} : ${payload.email}`,
    payload.phone ? `${isEn ? 'Phone' : 'Téléphone'} : ${payload.phone}` : null,
    payload.pack ? `${isEn ? 'Selected package' : 'Formule envisagée'} : ${payload.pack}` : null,
    payload.commune ? `${isEn ? 'Property town' : 'Commune du bien'} : ${payload.commune}` : null,
    '',
    payload.message,
  ].filter((line): line is string => line !== null);

  const subject = encodeURIComponent(subjectParts.join(' — '));
  const body = encodeURIComponent(lines.join('\n'));
  return `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
}
