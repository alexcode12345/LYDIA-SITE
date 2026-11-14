import { useEffect, useState, type FormEvent } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ExternalLink,
  Send,
} from 'lucide-react';
import {
  BUSINESS_INFO,
  COMMUNES,
  SERVICE_PACKAGES,
  type OptionalService,
} from '../data/conciergeData';
import type { LocalizedSiteContent } from '../data/translations';
import {
  buildMailtoHref,
  validateContactPayload,
  type ContactPayload,
  type Locale,
  type ValidationErrors,
} from '../utils/contactValidation';
import { Reveal } from '../components/MotionPrimitives';

interface ContactPageProps {
  locale: Locale;
  content: LocalizedSiteContent['contact'];
  optionalItems: OptionalService[];
  preselectedPack?: string;
  onOpenLegal: (tab: 'mentions' | 'confidentialite') => void;
}

interface SubmissionSuccess {
  referenceId: string;
  receivedAt: string;
  forwardedToWebhook: boolean;
  payload: ContactPayload;
}

export function ContactPage({
  locale,
  content,
  optionalItems,
  preselectedPack = '',
  onOpenLegal,
}: ContactPageProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pack, setPack] = useState(preselectedPack);
  const [commune, setCommune] = useState('');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(false);

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState<SubmissionSuccess | null>(null);

  const packOptions = [
    ...SERVICE_PACKAGES.map((p) => p.name),
    ...optionalItems.map((o) => o.title),
    content.otherRequestOption,
  ];

  useEffect(() => {
    if (preselectedPack) {
      setPack(preselectedPack);
    }
  }, [preselectedPack]);

  // Clear stale validation errors when switching locale so labels and errors stay synced
  useEffect(() => {
    setErrors({});
    setServerError(null);
  }, [locale]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const candidate: Partial<ContactPayload> = {
      firstName,
      lastName,
      email,
      phone,
      pack,
      commune,
      message,
      consent,
    };

    const validation = validateContactPayload(candidate, locale);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...validation.normalized, locale }),
      });

      const data = await response.json();

      if (!response.ok || !data.ok) {
        if (data.errors) {
          setErrors(data.errors);
        }
        setServerError(data.message || content.genericError);
        return;
      }

      setSubmitted({
        referenceId: data.referenceId,
        receivedAt: data.receivedAt,
        forwardedToWebhook: Boolean(data.forwardedToWebhook),
        payload: validation.normalized,
      });

      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setCommune('');
      setMessage('');
      setConsent(false);
    } catch {
      setServerError(content.networkError);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-28 pb-20 sm:pt-36 lg:pb-24">
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-3xl space-y-4">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
            {content.kicker}
          </p>
          <h1 className="font-editorial text-4xl font-medium leading-tight tracking-tight text-[#1D1B19] sm:text-5xl text-balance">
            {content.title}
          </h1>
          <p className="text-base leading-relaxed text-[#4C453E] sm:text-lg">{content.lead}</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Verified Contact Card + Territory */}
          <div className="lg:col-span-5 space-y-6">
            <Reveal>
              <div className="glass-panel-strong rounded-3xl p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="font-editorial text-2xl font-semibold text-[#1D1B19]">
                    {content.directTitle}
                  </h2>
                  <p className="mt-1.5 text-sm text-[#635950]">{content.directSubtitle}</p>
                </div>

                <div className="space-y-4 border-t border-[#1D1B19]/10 pt-5 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#9A763A]" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-[#1D1B19]">{content.addressLabel}</p>
                      <p className="text-[#4C453E]">
                        {BUSINESS_INFO.addressLine1},{' '}
                        <br />
                        {BUSINESS_INFO.addressLine2}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#9A763A]" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-[#1D1B19]">{content.phoneLabel}</p>
                      <a
                        href={BUSINESS_INFO.phoneHref}
                        className="tabular-figures text-[#4C453E] underline-offset-4 transition-colors hover:text-[#9A763A] hover:underline"
                      >
                        {BUSINESS_INFO.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#9A763A]" aria-hidden="true" />
                    <div>
                      <p className="font-medium text-[#1D1B19]">{content.emailLabel}</p>
                      <a
                        href={BUSINESS_INFO.emailHref}
                        className="break-all text-[#4C453E] underline-offset-4 transition-colors hover:text-[#9A763A] hover:underline"
                      >
                        {BUSINESS_INFO.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="border-t border-[#1D1B19]/10 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#635950]">
                    {content.socialLabel}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <a
                      href={BUSINESS_INFO.socials.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#1D1B19]/12 bg-white/75 px-3.5 py-2 text-xs font-medium text-[#1D1B19] transition-colors hover:bg-white"
                    >
                      <span>WhatsApp</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#9A763A]" aria-hidden="true" />
                    </a>
                    <a
                      href={BUSINESS_INFO.socials.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#1D1B19]/12 bg-white/75 px-3.5 py-2 text-xs font-medium text-[#1D1B19] transition-colors hover:bg-white"
                    >
                      <span>Instagram</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#9A763A]" aria-hidden="true" />
                    </a>
                    <a
                      href={BUSINESS_INFO.socials.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#1D1B19]/12 bg-white/75 px-3.5 py-2 text-xs font-medium text-[#1D1B19] transition-colors hover:bg-white"
                    >
                      <span>Facebook</span>
                      <ExternalLink className="h-3.5 w-3.5 text-[#9A763A]" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Interactive Map of Gaillard, Haute-Savoie */}
            <Reveal delay={0.08}>
              <div className="glass-panel overflow-hidden rounded-3xl">
                <div className="border-b border-[#1D1B19]/10 px-6 py-4">
                  <p className="font-editorial text-xl font-medium text-[#1D1B19]">
                    {content.mapTitle}
                  </p>
                  <p className="mt-0.5 text-xs text-[#635950]">{content.mapSubtitle}</p>
                </div>
                <div className="h-64 w-full bg-[#ECE4D8]">
                  <iframe
                    title="Carte de Gaillard, Haute-Savoie"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=6.185%2C46.170%2C6.245%2C46.202&layer=mapnik&marker=46.1852%2C6.2165"
                    className="h-full w-full border-0"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between border-t border-[#1D1B19]/10 px-6 py-3 text-xs text-[#635950]">
                  <span>{content.mapFooterLabel}</span>
                  <a
                    href="https://www.openstreetmap.org/?mlat=46.1852&mlon=6.2165#map=14/46.1852/6.2165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-[#1D1B19] underline-offset-4 hover:text-[#9A763A] hover:underline"
                  >
                    <span>{content.mapOpenLink}</span>
                    <ExternalLink className="h-3 w-3 text-[#9A763A]" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Real Validated Enquiry Form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.05}>
              <div className="glass-panel-strong rounded-3xl p-6 sm:p-10">
                {submitted ? (
                  <div className="space-y-6 py-4" role="status" aria-live="polite">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#1D1B19] text-[#E4CFA8]">
                        <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#9A763A]">
                          {content.successKicker}
                        </p>
                        <h2 className="mt-1 font-editorial text-3xl font-medium text-[#1D1B19]">
                          {content.successTitlePrefix} {submitted.payload.firstName}
                          {content.successTitleSuffix}
                        </h2>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#1D1B19]/10 bg-white/70 p-5 text-sm text-[#35302B] space-y-2">
                      <p>
                        <strong>{content.successRefLabel}</strong>{' '}
                        <span className="tabular-figures font-medium text-[#1D1B19]">
                          {submitted.referenceId}
                        </span>
                      </p>
                      {submitted.payload.pack && (
                        <p>
                          <strong>{content.successPackLabel}</strong> {submitted.payload.pack}
                        </p>
                      )}
                      {submitted.payload.commune && (
                        <p>
                          <strong>{content.successCommuneLabel}</strong> {submitted.payload.commune}
                        </p>
                      )}
                      <p className="pt-1 text-xs leading-relaxed text-[#635950]">
                        {submitted.forwardedToWebhook
                          ? content.successWebhookNote
                          : content.successLocalNote}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={buildMailtoHref(submitted.payload, BUSINESS_INFO.email, locale)}
                        className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#1D1B19] px-5 py-2.5 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#35302B]"
                      >
                        <Mail className="h-4 w-4 text-[#D8BE8F]" aria-hidden="true" />
                        <span>{content.successMailtoCta}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setSubmitted(null)}
                        className="inline-flex min-h-[44px] items-center rounded-xl border border-[#1D1B19]/18 bg-white/80 px-5 py-2.5 text-sm font-medium text-[#1D1B19] transition-colors hover:bg-white cursor-pointer"
                      >
                        {content.successResetCta}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-6">
                    <div className="border-b border-[#1D1B19]/10 pb-4">
                      <h2 className="font-editorial text-2xl font-semibold text-[#1D1B19] sm:text-3xl">
                        {content.formTitle}
                      </h2>
                      <p className="mt-1 text-sm text-[#635950]">{content.formRequiredNote}</p>
                    </div>

                    {serverError && (
                      <div
                        role="alert"
                        className="flex items-start gap-3 rounded-2xl border border-[#9E3B33]/30 bg-[#FDF2F1] p-4 text-sm text-[#7A2721]"
                      >
                        <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                        <span>{serverError}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-firstName"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#35302B]"
                        >
                          {content.firstNameLabel}
                        </label>
                        <input
                          id="contact-firstName"
                          name="firstName"
                          type="text"
                          required
                          autoComplete="given-name"
                          value={firstName}
                          onChange={(e) => {
                            setFirstName(e.target.value);
                            if (errors.firstName)
                              setErrors((prev) => ({ ...prev, firstName: undefined }));
                          }}
                          aria-invalid={Boolean(errors.firstName)}
                          placeholder={content.firstNamePlaceholder}
                          className="mt-2 min-h-[46px] w-full rounded-xl border border-[#1D1B19]/15 bg-white/85 px-4 py-2.5 text-sm text-[#1D1B19] placeholder:text-[#8E8378] focus:border-[#9A763A] focus:outline-none focus:ring-2 focus:ring-[#9A763A]/20"
                        />
                        {errors.firstName && (
                          <p className="mt-1.5 text-xs text-[#9E3B33]">{errors.firstName}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-lastName"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#35302B]"
                        >
                          {content.lastNameLabel}
                        </label>
                        <input
                          id="contact-lastName"
                          name="lastName"
                          type="text"
                          required
                          autoComplete="family-name"
                          value={lastName}
                          onChange={(e) => {
                            setLastName(e.target.value);
                            if (errors.lastName)
                              setErrors((prev) => ({ ...prev, lastName: undefined }));
                          }}
                          aria-invalid={Boolean(errors.lastName)}
                          placeholder={content.lastNamePlaceholder}
                          className="mt-2 min-h-[46px] w-full rounded-xl border border-[#1D1B19]/15 bg-white/85 px-4 py-2.5 text-sm text-[#1D1B19] placeholder:text-[#8E8378] focus:border-[#9A763A] focus:outline-none focus:ring-2 focus:ring-[#9A763A]/20"
                        />
                        {errors.lastName && (
                          <p className="mt-1.5 text-xs text-[#9E3B33]">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#35302B]"
                        >
                          {content.emailLabelField}
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                          }}
                          aria-invalid={Boolean(errors.email)}
                          placeholder={content.emailPlaceholder}
                          className="mt-2 min-h-[46px] w-full rounded-xl border border-[#1D1B19]/15 bg-white/85 px-4 py-2.5 text-sm text-[#1D1B19] placeholder:text-[#8E8378] focus:border-[#9A763A] focus:outline-none focus:ring-2 focus:ring-[#9A763A]/20"
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-[#9E3B33]">{errors.email}</p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#35302B]"
                        >
                          {content.phoneLabelField}
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={phone}
                          onChange={(e) => {
                            setPhone(e.target.value);
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                          }}
                          aria-invalid={Boolean(errors.phone)}
                          placeholder={content.phonePlaceholder}
                          className="mt-2 min-h-[46px] w-full rounded-xl border border-[#1D1B19]/15 bg-white/85 px-4 py-2.5 text-sm tabular-figures text-[#1D1B19] placeholder:text-[#8E8378] focus:border-[#9A763A] focus:outline-none focus:ring-2 focus:ring-[#9A763A]/20"
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-[#9E3B33]">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="contact-pack"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#35302B]"
                        >
                          {content.packLabel}
                        </label>
                        <select
                          id="contact-pack"
                          name="pack"
                          value={pack}
                          onChange={(e) => setPack(e.target.value)}
                          className="mt-2 min-h-[46px] w-full rounded-xl border border-[#1D1B19]/15 bg-white/85 px-4 py-2.5 text-sm text-[#1D1B19] focus:border-[#9A763A] focus:outline-none focus:ring-2 focus:ring-[#9A763A]/20"
                        >
                          <option value="">{content.packPlaceholder}</option>
                          {packOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="contact-commune"
                          className="block text-xs font-semibold uppercase tracking-wider text-[#35302B]"
                        >
                          {content.communeLabel}
                        </label>
                        <select
                          id="contact-commune"
                          name="commune"
                          value={commune}
                          onChange={(e) => setCommune(e.target.value)}
                          className="mt-2 min-h-[46px] w-full rounded-xl border border-[#1D1B19]/15 bg-white/85 px-4 py-2.5 text-sm text-[#1D1B19] focus:border-[#9A763A] focus:outline-none focus:ring-2 focus:ring-[#9A763A]/20"
                        >
                          <option value="">{content.communePlaceholder}</option>
                          {COMMUNES.map((c) => (
                            <option key={c} value={c}>
                              {c}
                            </option>
                          ))}
                          <option value={content.otherCommuneOption}>
                            {content.otherCommuneOption}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#35302B]"
                      >
                        {content.messageLabel}
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => {
                          setMessage(e.target.value);
                          if (errors.message)
                            setErrors((prev) => ({ ...prev, message: undefined }));
                        }}
                        aria-invalid={Boolean(errors.message)}
                        placeholder={content.messagePlaceholder}
                        className="mt-2 w-full rounded-xl border border-[#1D1B19]/15 bg-white/85 px-4 py-3 text-sm text-[#1D1B19] placeholder:text-[#8E8378] focus:border-[#9A763A] focus:outline-none focus:ring-2 focus:ring-[#9A763A]/20"
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-[#9E3B33]">{errors.message}</p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="flex items-start gap-3 cursor-pointer">
                        <input
                          id="contact-consent"
                          name="consent"
                          type="checkbox"
                          checked={consent}
                          onChange={(e) => {
                            setConsent(e.target.checked);
                            if (errors.consent)
                              setErrors((prev) => ({ ...prev, consent: undefined }));
                          }}
                          aria-invalid={Boolean(errors.consent)}
                          className="mt-1 h-4 w-4 shrink-0 rounded border-[#1D1B19]/30 accent-[#1D1B19]"
                        />
                        <span className="text-xs leading-relaxed text-[#4C453E]">
                          {content.consentBeforeLink}
                          <button
                            type="button"
                            onClick={() => onOpenLegal('confidentialite')}
                            className="font-medium text-[#1D1B19] underline underline-offset-4 hover:text-[#9A763A] cursor-pointer"
                          >
                            {content.consentLinkText}
                          </button>
                          . *
                        </span>
                      </label>
                      {errors.consent && (
                        <p className="text-xs text-[#9E3B33]">{errors.consent}</p>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-xl bg-[#1D1B19] px-7 py-3 text-sm font-medium text-[#FAF7F2] transition-all duration-150 hover:bg-[#35302B] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                            <span>{content.submittingLabel}</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4 text-[#D8BE8F]" aria-hidden="true" />
                            <span>{content.submitLabel}</span>
                          </>
                        )}
                      </button>

                      <span className="text-xs text-[#635950]">
                        {content.directCallPrefix}{' '}
                        <a
                          href={BUSINESS_INFO.phoneHref}
                          className="tabular-figures font-medium text-[#1D1B19] underline-offset-4 hover:underline"
                        >
                          {BUSINESS_INFO.phoneDisplay}
                        </a>
                      </span>
                    </div>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
