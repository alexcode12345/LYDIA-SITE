import { ArrowRight, MapPin } from 'lucide-react';
import { COMMUNES, GALLERY_IMAGES, type PageRoute } from '../data/conciergeData';
import type { LocalizedSiteContent } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Reveal } from '../components/MotionPrimitives';

interface AboutPageProps {
  content: LocalizedSiteContent['about'];
  onNavigate: (page: PageRoute) => void;
}

export function AboutPage({ content, onNavigate }: AboutPageProps) {
  return (
    <div className="pt-28 pb-20 sm:pt-36 lg:pb-24">
      {/* Founder & Genuine Business Story */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-5">
            <div className="group h-full overflow-hidden rounded-3xl border border-[#1D1B19]/10 shadow-sm">
              <ImageWithFallback
                src={GALLERY_IMAGES.alpineTerrace.src}
                alt={GALLERY_IMAGES.alpineTerrace.alt}
                loading="eager"
                containerClassName="aspect-[3/4] lg:h-full"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-6">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
                {content.kicker}
              </p>
              <h1 className="font-editorial text-4xl font-medium leading-tight tracking-tight text-[#1D1B19] sm:text-5xl text-balance">
                {content.heading}
              </h1>

              <div className="space-y-4 text-base leading-relaxed text-[#4C453E] sm:text-lg">
                {content.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="glass-panel rounded-2xl p-6 space-y-2">
                <p className="text-xs font-semibold tracking-[0.14em] uppercase text-[#9A763A]">
                  {content.hospitalityKicker}
                </p>
                <p className="text-sm leading-relaxed text-[#35302B]">{content.hospitalityText}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8 lg:mt-24">
        <Reveal>
          <div className="glass-panel-strong rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5 space-y-3">
                <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
                  {content.philosophyKicker}
                </p>
                <h2 className="font-editorial text-3xl font-medium leading-tight text-[#1D1B19] sm:text-4xl text-balance">
                  {content.philosophyHeading}
                </h2>
              </div>

              <div className="lg:col-span-7 space-y-4 text-base leading-relaxed text-[#35302B]">
                {content.philosophyParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Local Territory Presence */}
      <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8 lg:mt-24">
        <Reveal className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
              {content.territoryKicker}
            </p>
            <h2 className="font-editorial text-3xl font-medium leading-tight text-[#1D1B19] sm:text-4xl text-balance">
              {content.territoryTitle}
            </h2>
            <p className="text-base leading-relaxed text-[#4C453E]">{content.territoryLead}</p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-xl bg-[#1D1B19] px-5 py-2.5 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#35302B] cursor-pointer"
              >
                <span>{content.territoryCta}</span>
                <ArrowRight className="h-4 w-4 text-[#D8BE8F]" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center justify-between border-b border-[#1D1B19]/10 pb-4">
                <span className="font-editorial text-2xl font-medium text-[#1D1B19]">
                  {content.communesHeading}
                </span>
                <span className="tabular-figures text-xs font-medium text-[#635950]">
                  {COMMUNES.length} {content.communesCountSuffix}
                </span>
              </div>
              <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {COMMUNES.map((commune) => (
                  <li
                    key={commune}
                    className="flex items-center gap-2.5 border-b border-[#1D1B19]/6 pb-2.5 text-sm text-[#35302B]"
                  >
                    <MapPin className="h-3.5 w-3.5 shrink-0 text-[#9A763A]" aria-hidden="true" />
                    <span>{commune}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
