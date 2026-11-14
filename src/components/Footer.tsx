import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, COMMUNES, type PageRoute } from '../data/conciergeData';
import type { LocalizedSiteContent } from '../data/translations';

interface FooterProps {
  content: LocalizedSiteContent['footer'];
  onNavigate: (page: PageRoute) => void;
  onOpenLegal: (tab: 'mentions' | 'confidentialite') => void;
}

export function Footer({ content, onNavigate, onOpenLegal }: FooterProps) {
  return (
    <footer className="border-t border-[#1D1B19]/10 bg-[#F3EDE3] text-[#1D1B19]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Direct Contact */}
          <div className="lg:col-span-4 space-y-5">
            <div>
              <p className="font-editorial text-2xl font-semibold tracking-tight text-[#1D1B19]">
                {BUSINESS_INFO.name}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#635950]">
                {content.description}
              </p>
            </div>

            <div className="space-y-2.5 text-sm text-[#35302B]">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#9A763A]" aria-hidden="true" />
                <span>
                  {BUSINESS_INFO.addressLine1}, {BUSINESS_INFO.addressLine2}
                </span>
              </div>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="flex items-center gap-2.5 tabular-figures transition-colors hover:text-[#9A763A]"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#9A763A]" aria-hidden="true" />
                <span>{BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.emailHref}
                className="flex items-center gap-2.5 break-all transition-colors hover:text-[#9A763A]"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#9A763A]" aria-hidden="true" />
                <span>{BUSINESS_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Site Navigation */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#635950]">
              {content.navigationHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {content.navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.id);
                    }}
                    className="inline-flex min-h-[32px] items-center text-[#35302B] transition-colors hover:text-[#9A763A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Haute-Savoie Service Area */}
          <div className="lg:col-span-3 space-y-4">
            <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#635950]">
              {content.areaHeading}
            </h2>
            <p className="text-sm leading-relaxed text-[#35302B]">{COMMUNES.join(' · ')}</p>
            <p className="text-xs leading-relaxed text-[#635950]">{content.areaNote}</p>
          </div>

          {/* Socials & Legal */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-xs font-semibold tracking-[0.14em] uppercase text-[#635950]">
              {content.socialHeading}
            </h2>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={BUSINESS_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#35302B] transition-colors hover:text-[#9A763A]"
                >
                  <span>Instagram</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-65" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#35302B] transition-colors hover:text-[#9A763A]"
                >
                  <span>Facebook</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-65" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href={BUSINESS_INFO.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#35302B] transition-colors hover:text-[#9A763A]"
                >
                  <span>WhatsApp</span>
                  <ExternalLink className="h-3.5 w-3.5 opacity-65" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[#1D1B19]/10 pt-6 text-xs text-[#635950] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BUSINESS_INFO.name} — Gaillard, Haute-Savoie.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() => onOpenLegal('mentions')}
              className="min-h-[36px] underline-offset-4 transition-colors hover:text-[#1D1B19] hover:underline cursor-pointer"
            >
              {content.legalNotices}
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('confidentialite')}
              className="min-h-[36px] underline-offset-4 transition-colors hover:text-[#1D1B19] hover:underline cursor-pointer"
            >
              {content.privacyPolicy}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
