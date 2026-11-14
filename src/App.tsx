import { useEffect, useState } from 'react';
import type { PageRoute } from './data/conciergeData';
import { getSiteContent } from './data/translations';
import type { Locale } from './utils/contactValidation';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { OwnersPage } from './pages/OwnersPage';
import { ContactPage } from './pages/ContactPage';

const LOCALE_STORAGE_KEY = 'lpci_locale';

function parseRouteFromHash(): PageRoute {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (
    hash === 'services' ||
    hash === 'apropos' ||
    hash === 'proprietaires' ||
    hash === 'contact' ||
    hash === 'accueil'
  ) {
    return hash;
  }
  return 'accueil';
}

function getInitialLocale(): Locale {
  try {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === 'en' || saved === 'fr') return saved;
  } catch {
    // ignore storage errors
  }
  return 'fr';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => parseRouteFromHash());
  const [locale, setLocale] = useState<Locale>(() => getInitialLocale());
  const [preselectedPack, setPreselectedPack] = useState<string>('');
  const [legalOpen, setLegalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState<'mentions' | 'confidentialite'>('mentions');

  const siteContent = getSiteContent(locale);

  useEffect(() => {
    document.title = siteContent.pageTitles[currentPage];
    document.documentElement.lang = locale;
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // ignore storage errors
    }
  }, [currentPage, locale, siteContent]);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(parseRouteFromHash());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, pack?: string) => {
    if (pack !== undefined) {
      setPreselectedPack(pack);
    }
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLegal = (tab: 'mentions' | 'confidentialite') => {
    setLegalTab(tab);
    setLegalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#1D1B19]">
      <Navbar
        currentPage={currentPage}
        locale={locale}
        content={siteContent.nav}
        onChangeLocale={setLocale}
        onNavigate={(page) => handleNavigate(page)}
      />

      <main className="flex-1">
        {currentPage === 'accueil' && (
          <HomePage
            content={siteContent.home}
            packages={siteContent.services.packages}
            testimonials={siteContent.testimonials}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage content={siteContent.services} onNavigate={handleNavigate} />
        )}
        {currentPage === 'apropos' && (
          <AboutPage content={siteContent.about} onNavigate={handleNavigate} />
        )}
        {currentPage === 'proprietaires' && (
          <OwnersPage content={siteContent.owners} onNavigate={handleNavigate} />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            locale={locale}
            content={siteContent.contact}
            optionalItems={siteContent.services.optionalItems}
            preselectedPack={preselectedPack}
            onOpenLegal={handleOpenLegal}
          />
        )}
      </main>

      <Footer
        content={siteContent.footer}
        onNavigate={(page) => handleNavigate(page)}
        onOpenLegal={handleOpenLegal}
      />

      <LegalModal
        open={legalOpen}
        tab={legalTab}
        content={siteContent.legal}
        onChangeTab={setLegalTab}
        onClose={() => setLegalOpen(false)}
      />
    </div>
  );
}
