import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BUSINESS_INFO, type PageRoute } from '../data/conciergeData';
import type { LocalizedSiteContent } from '../data/translations';
import type { Locale } from '../utils/contactValidation';

interface NavbarProps {
  currentPage: PageRoute;
  locale: Locale;
  content: LocalizedSiteContent['nav'];
  onChangeLocale: (locale: Locale) => void;
  onNavigate: (page: PageRoute) => void;
}

export function Navbar({
  currentPage,
  locale,
  content,
  onChangeLocale,
  onNavigate,
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 28);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const handleNavClick = (page: PageRoute) => {
    setMobileOpen(false);
    onNavigate(page);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between gap-2 rounded-2xl px-3.5 py-2.5 transition-all duration-200 sm:px-6 lg:gap-8 ${
          scrolled ? 'glass-nav-scrolled' : 'glass-nav'
        }`}
      >
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#accueil"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('accueil');
          }}
          className="inline-flex min-w-0 items-center gap-2 whitespace-nowrap shrink-0 rounded-lg py-1 text-[#1D1B19] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A763A] sm:gap-2.5"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
            className="h-5 w-5 shrink-0 text-[#9A763A] sm:h-6 sm:w-6"
          >
            <rect
              x="2"
              y="2"
              width="24"
              height="24"
              rx="6"
              stroke="currentColor"
              strokeWidth="1.25"
            />
            <path
              d="M9.5 18.5V12.2L14 8.5L18.5 12.2V18.5"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="14" cy="15" r="1.4" fill="currentColor" />
          </svg>
          <span className="font-editorial text-[13.5px] font-semibold tracking-tight min-[375px]:text-base sm:text-xl">
            {BUSINESS_INFO.name}
          </span>
        </a>

        {/* Zone 2: Concise single-line navigation links */}
        <nav aria-label="Navigation principale" className="hidden lg:flex items-center gap-6">
          {content.items.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative whitespace-nowrap shrink-0 py-1.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9A763A] ${
                  isActive ? 'text-[#1D1B19]' : 'text-[#635950] hover:text-[#1D1B19]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 bottom-0 h-[1.5px] bg-[#9A763A] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Subtle Glass Language Toggle + Primary Action + Mobile Menu */}
        <div className="flex items-center gap-2 shrink-0 sm:gap-2.5">
          <div
            role="group"
            aria-label={content.languageGroupLabel}
            className="inline-flex shrink-0 items-center rounded-xl border border-[#1D1B19]/12 bg-white/45 p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] backdrop-blur-sm"
          >
            <button
              type="button"
              onClick={() => onChangeLocale('fr')}
              aria-pressed={locale === 'fr'}
              className={`font-editorial min-h-[30px] min-w-[28px] whitespace-nowrap rounded-[9px] px-2 py-0.5 text-xs font-semibold tracking-wider transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A763A] sm:min-h-[32px] sm:px-2.5 sm:text-sm cursor-pointer ${
                locale === 'fr'
                  ? 'bg-white/90 text-[#1D1B19] shadow-xs ring-1 ring-[#9A763A]/30'
                  : 'text-[#635950] hover:text-[#1D1B19]'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => onChangeLocale('en')}
              aria-pressed={locale === 'en'}
              className={`font-editorial min-h-[30px] min-w-[28px] whitespace-nowrap rounded-[9px] px-2 py-0.5 text-xs font-semibold tracking-wider transition-all duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A763A] sm:min-h-[32px] sm:px-2.5 sm:text-sm cursor-pointer ${
                locale === 'en'
                  ? 'bg-white/90 text-[#1D1B19] shadow-xs ring-1 ring-[#9A763A]/30'
                  : 'text-[#635950] hover:text-[#1D1B19]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-2 whitespace-nowrap shrink-0 rounded-xl bg-[#1D1B19] px-4 py-2 text-xs font-medium tracking-wide text-[#FAF7F2] transition-colors duration-150 hover:bg-[#35302B] active:bg-[#141210] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A763A] cursor-pointer"
          >
            <span>{content.cta}</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#D8BE8F]" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? content.closeMenuLabel : content.openMenuLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#1D1B19]/12 bg-white/60 text-[#1D1B19] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A763A] lg:hidden cursor-pointer"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Glass Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Navigation mobile"
          className="glass-panel-strong mx-auto mt-2.5 max-w-6xl rounded-2xl p-4 lg:hidden"
        >
          <div className="flex flex-col divide-y divide-[#1D1B19]/8">
            {content.items.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] items-center justify-between px-2 py-2.5 text-base font-medium transition-colors ${
                    isActive ? 'text-[#9A763A]' : 'text-[#1D1B19] hover:text-[#9A763A]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs text-[#9A763A]">{content.activePageLabel}</span>
                  )}
                </a>
              );
            })}
          </div>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-[#1D1B19]/10 pt-4">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#1D1B19] px-5 py-2.5 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#35302B] cursor-pointer"
            >
              <span>{content.mobileCta}</span>
              <ArrowUpRight className="h-4 w-4 text-[#D8BE8F]" aria-hidden="true" />
            </button>
            <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-xs text-[#635950]">
              <a
                href={BUSINESS_INFO.phoneHref}
                className="tabular-figures underline-offset-4 hover:underline"
              >
                {BUSINESS_INFO.phoneDisplay}
              </a>
              <a href={BUSINESS_INFO.emailHref} className="underline-offset-4 hover:underline">
                {BUSINESS_INFO.email}
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
