import { ArrowRight, ArrowUpRight, MapPin, Phone, Mail, Check } from 'lucide-react';
import {
  BUSINESS_INFO,
  GALLERY_IMAGES,
  type PageRoute,
  type ServicePackage,
  type Testimonial,
} from '../data/conciergeData';
import type { LocalizedSiteContent } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Reveal } from '../components/MotionPrimitives';

interface HomePageProps {
  content: LocalizedSiteContent['home'];
  packages: ServicePackage[];
  testimonials: Testimonial[];
  onNavigate: (page: PageRoute, preselectedPack?: ServicePackage['name']) => void;
}

export function HomePage({ content, packages, testimonials, onNavigate }: HomePageProps) {
  return (
    <div>
      {/* 1. CINEMATIC HERO SECTION */}
      <section className="relative min-h-[88vh] min-h-[640px] w-full overflow-hidden flex items-end pb-14 pt-28 sm:items-center sm:pb-20 sm:pt-32">
        <div className="absolute inset-0">
          <ImageWithFallback
            src={GALLERY_IMAGES.hero.src}
            alt={GALLERY_IMAGES.hero.alt}
            loading="eager"
            fetchPriority="high"
            containerClassName="h-full w-full"
            className="h-full w-full object-cover object-center"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-r from-[#191614]/82 via-[#191614]/52 to-[#191614]/20"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#191614]/75 via-transparent to-[#191614]/25"
          />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-6 text-[#FAF7F2]">
              <p className="text-xs font-medium tracking-[0.18em] uppercase text-[#E4CFA8]">
                {content.heroKicker}
              </p>

              <h1 className="font-editorial text-4xl font-medium leading-[1.06] tracking-tight text-balance sm:text-5xl lg:text-6xl">
                {content.heroTitle}
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-[#F3EDE3]/92 sm:text-lg">
                {content.heroSubtitle}
              </p>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-xl bg-[#FAF7F2] px-6 py-3 text-sm font-medium text-[#1D1B19] shadow-lg transition-all duration-150 hover:bg-[#EFE6D8] active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4CFA8] sm:w-auto cursor-pointer"
                >
                  <span>{content.heroPrimaryCta}</span>
                  <ArrowRight className="h-4 w-4 text-[#9A763A]" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="glass-panel-dark inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-xl px-6 py-3 text-sm font-medium text-[#FAF7F2] transition-all duration-150 hover:bg-[#1D1B19]/85 active:scale-[0.99] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E4CFA8] sm:w-auto cursor-pointer"
                >
                  <span>{content.heroSecondaryCta}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#E4CFA8]" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="glass-panel-dark rounded-2xl p-5 sm:p-6 text-[#FAF7F2]">
                <p className="text-xs font-medium tracking-[0.14em] uppercase text-[#E4CFA8]">
                  {content.heroCardKicker}
                </p>
                <p className="mt-2 font-editorial text-xl font-medium leading-snug">
                  {content.heroCardTitle}
                </p>
                <ul className="mt-4 space-y-2 border-t border-white/15 pt-4 text-xs text-[#F3EDE3]/88">
                  {content.heroCardBullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <Check className="h-3.5 w-3.5 shrink-0 text-[#E4CFA8]" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION TO THE BUSINESS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-6">
            <div className="group h-full overflow-hidden rounded-3xl border border-[#1D1B19]/10 shadow-sm">
              <ImageWithFallback
                src={GALLERY_IMAGES.keyHandover.src}
                alt={GALLERY_IMAGES.keyHandover.alt}
                containerClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
                {content.introKicker}
              </p>
              <h2 className="font-editorial text-3xl font-medium leading-tight tracking-tight text-[#1D1B19] sm:text-4xl text-balance">
                {content.introTitle}
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-[#4C453E]">
                {content.introParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('apropos')}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-[#1D1B19]/18 bg-white/70 px-5 py-2.5 text-sm font-medium text-[#1D1B19] transition-colors duration-150 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9A763A] cursor-pointer"
                >
                  <span>{content.introAboutCta}</span>
                  <ArrowRight className="h-4 w-4 text-[#9A763A]" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('proprietaires')}
                  className="inline-flex min-h-[44px] items-center gap-1.5 text-sm font-medium text-[#635950] underline-offset-4 transition-colors hover:text-[#1D1B19] hover:underline cursor-pointer"
                >
                  <span>{content.introOwnersCta}</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. OVERVIEW OF SERVICES */}
      <section className="border-y border-[#1D1B19]/8 bg-[#F3EDE3]/70 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl space-y-3">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
                {content.servicesKicker}
              </p>
              <h2 className="font-editorial text-3xl font-medium leading-tight tracking-tight text-[#1D1B19] sm:text-4xl text-balance">
                {content.servicesTitle}
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('services')}
              className="inline-flex min-h-[44px] items-center gap-2 self-start whitespace-nowrap rounded-xl bg-[#1D1B19] px-5 py-2.5 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#35302B] sm:self-auto cursor-pointer"
            >
              <span>{content.servicesCta}</span>
              <ArrowRight className="h-4 w-4 text-[#D8BE8F]" aria-hidden="true" />
            </button>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {packages.map((pkg, idx) => (
              <Reveal key={pkg.id} delay={idx * 0.06}>
                <article className="glass-panel flex h-full flex-col justify-between rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7">
                  <div>
                    <div className="flex items-baseline justify-between border-b border-[#1D1B19]/10 pb-4">
                      <span className="tabular-figures font-editorial text-2xl font-medium text-[#9A763A]">
                        {pkg.number}.
                      </span>
                      <span className="text-xs text-[#635950]">{pkg.subtitle}</span>
                    </div>
                    <h3 className="mt-5 font-editorial text-2xl font-semibold text-[#1D1B19]">
                      {pkg.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4C453E]">{pkg.summary}</p>
                    <ul className="mt-5 space-y-2 border-t border-[#1D1B19]/8 pt-4 text-xs text-[#35302B]">
                      {pkg.pillars.slice(0, 4).map((pillar) => (
                        <li key={pillar.title} className="flex items-start gap-2">
                          <Check
                            className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9A763A]"
                            aria-hidden="true"
                          />
                          <span>{pillar.title}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex items-center justify-between gap-3 border-t border-[#1D1B19]/10 pt-4">
                    <button
                      type="button"
                      onClick={() => onNavigate('services')}
                      className="text-xs font-medium text-[#635950] underline-offset-4 transition-colors hover:text-[#1D1B19] hover:underline cursor-pointer"
                    >
                      {content.packDetailsCta}
                    </button>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact', pkg.name)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-xl border border-[#1D1B19]/15 bg-white/75 px-3.5 py-2 text-xs font-medium text-[#1D1B19] transition-colors hover:bg-white cursor-pointer"
                    >
                      <span>{content.packQuoteCta}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-[#9A763A]" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE THE CONCIERGE SERVICE */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 space-y-5">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
              {content.whyKicker}
            </p>
            <h2 className="font-editorial text-3xl font-medium leading-tight tracking-tight text-[#1D1B19] sm:text-4xl text-balance">
              {content.whyTitle}
            </h2>
            <p className="text-base leading-relaxed text-[#4C453E]">{content.whyLead}</p>
          </Reveal>

          <div className="lg:col-span-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {content.whyItems.map((item, idx) => (
              <Reveal key={item.number} delay={idx * 0.05}>
                <div className="glass-panel h-full rounded-2xl p-6">
                  <span className="tabular-figures font-editorial text-2xl font-medium text-[#9A763A]">
                    {item.number}.
                  </span>
                  <h3 className="mt-3 font-editorial text-xl font-semibold text-[#1D1B19]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4C453E]">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ELEGANT IMAGE GALLERY */}
      <section className="border-t border-[#1D1B19]/8 bg-[#EFE7DA]/60 py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
              {content.galleryKicker}
            </p>
            <h2 className="font-editorial text-3xl font-medium leading-tight text-[#1D1B19] sm:text-4xl text-balance">
              {content.galleryTitle}
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <div className="group relative overflow-hidden rounded-3xl border border-[#1D1B19]/10">
                <ImageWithFallback
                  src={GALLERY_IMAGES.bedroomLinen.src}
                  alt={GALLERY_IMAGES.bedroomLinen.alt}
                  containerClassName="aspect-[4/3]"
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="glass-panel-strong absolute inset-x-4 bottom-4 rounded-2xl px-4 py-3 sm:inset-x-6 sm:bottom-6">
                  <p className="font-editorial text-lg font-medium text-[#1D1B19]">
                    {content.galleryCards[0].title}
                  </p>
                  <p className="text-xs text-[#635950]">{content.galleryCards[0].subtitle}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08} className="md:col-span-5">
              <div className="group relative h-full overflow-hidden rounded-3xl border border-[#1D1B19]/10">
                <ImageWithFallback
                  src={GALLERY_IMAGES.ownerDining.src}
                  alt={GALLERY_IMAGES.ownerDining.alt}
                  containerClassName="aspect-[4/3] md:aspect-auto md:h-full"
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="glass-panel-strong absolute inset-x-4 bottom-4 rounded-2xl px-4 py-3 sm:inset-x-6 sm:bottom-6">
                  <p className="font-editorial text-lg font-medium text-[#1D1B19]">
                    {content.galleryCards[1].title}
                  </p>
                  <p className="text-xs text-[#635950]">{content.galleryCards[1].subtitle}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. VERIFIED TESTIMONIALS */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-24">
        <Reveal className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
            {content.testimonialsKicker}
          </p>
          <h2 className="font-editorial text-3xl font-medium leading-tight text-[#1D1B19] sm:text-4xl text-balance">
            {content.testimonialsTitle}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((item, idx) => (
            <Reveal key={item.id} delay={idx * 0.05}>
              <blockquote className="glass-panel flex h-full flex-col justify-between rounded-3xl p-6 sm:p-8">
                <p className="font-editorial text-xl leading-relaxed text-[#1D1B19] sm:text-[1.35rem]">
                  « {item.quote} »
                </p>
                <footer className="mt-6 flex items-center gap-2 border-t border-[#1D1B19]/10 pt-4 text-xs text-[#635950]">
                  <span className="font-semibold text-[#1D1B19]">{item.author}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.context}</span>
                </footer>
              </blockquote>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. STRONG CONTACT INVITATION */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 lg:pb-24">
        <Reveal>
          <div className="glass-panel-strong relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7 space-y-4">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
                  {content.contactKicker}
                </p>
                <h2 className="font-editorial text-3xl font-medium leading-tight text-[#1D1B19] sm:text-4xl text-balance">
                  {content.contactTitle}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-[#4C453E]">
                  {content.contactLead}
                </p>
              </div>

              <div className="lg:col-span-5 flex flex-col gap-3 sm:items-start lg:items-end">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-xl bg-[#1D1B19] px-6 py-3 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#35302B] sm:w-auto cursor-pointer"
                >
                  <span>{content.contactCta}</span>
                  <ArrowRight className="h-4 w-4 text-[#D8BE8F]" aria-hidden="true" />
                </button>
                <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-[#4C453E]">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center gap-1.5 tabular-figures hover:text-[#9A763A]"
                  >
                    <Phone className="h-3.5 w-3.5 text-[#9A763A]" aria-hidden="true" />
                    <span>{BUSINESS_INFO.phoneDisplay}</span>
                  </a>
                  <a
                    href={BUSINESS_INFO.emailHref}
                    className="inline-flex items-center gap-1.5 hover:text-[#9A763A]"
                  >
                    <Mail className="h-3.5 w-3.5 text-[#9A763A]" aria-hidden="true" />
                    <span>{BUSINESS_INFO.email}</span>
                  </a>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#9A763A]" aria-hidden="true" />
                    <span>Gaillard 74240</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
