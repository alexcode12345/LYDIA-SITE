import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import type { PageRoute, ServicePackage } from '../data/conciergeData';
import type { LocalizedSiteContent } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Reveal } from '../components/MotionPrimitives';

interface ServicesPageProps {
  content: LocalizedSiteContent['services'];
  onNavigate: (page: PageRoute, preselectedPack?: ServicePackage['name']) => void;
}

type PackFilter = 'all' | ServicePackage['id'];

export function ServicesPage({ content, onNavigate }: ServicesPageProps) {
  const [selectedFilter, setSelectedFilter] = useState<PackFilter>('all');

  const visiblePackages =
    selectedFilter === 'all'
      ? content.packages
      : content.packages.filter((pkg) => pkg.id === selectedFilter);

  return (
    <div className="pt-28 pb-20 sm:pt-36 lg:pb-24">
      {/* Page Header */}
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

        {/* Interactive Formula Filter Control */}
        <div
          role="tablist"
          aria-label={content.kicker}
          className="mt-8 inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-[#1D1B19]/10 bg-[#F3EDE3] p-1.5"
        >
          {(
            [
              { id: 'all', label: content.filterAll },
              { id: 'pack-complet', label: 'Pack Complet' },
              { id: 'pack-digital', label: 'Pack Digital Avancé' },
              { id: 'pack-relais', label: 'Pack Relais Local' },
            ] as { id: PackFilter; label: string }[]
          ).map((tab) => {
            const active = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedFilter(tab.id)}
                className={`min-h-[40px] whitespace-nowrap rounded-xl px-4 py-2 text-xs font-medium transition-all duration-150 cursor-pointer ${
                  active
                    ? 'bg-[#1D1B19] text-[#FAF7F2] shadow-sm'
                    : 'text-[#4C453E] hover:bg-white/70 hover:text-[#1D1B19]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Verified Service Packages */}
      <section className="mx-auto mt-12 max-w-6xl space-y-10 px-5 sm:px-8">
        {visiblePackages.map((pkg) => (
          <Reveal key={pkg.id}>
            <article className="glass-panel-strong overflow-hidden rounded-3xl">
              <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
                {/* Editorial Photography */}
                <div className="group relative lg:col-span-5">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.imageAlt}
                    containerClassName="aspect-[4/3] lg:aspect-auto lg:h-full"
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="glass-panel-strong pointer-events-none absolute inset-x-4 bottom-4 rounded-2xl px-4 py-3">
                    <p className="font-editorial text-lg font-medium text-[#1D1B19]">{pkg.name}</p>
                    <p className="text-xs text-[#635950]">{pkg.subtitle}</p>
                  </div>
                </div>

                {/* Glass Content Panel */}
                <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                  <div>
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-[#1D1B19]/10 pb-4">
                      <span className="tabular-figures font-editorial text-2xl font-medium text-[#9A763A]">
                        {pkg.number}. {pkg.name}
                      </span>
                      <span className="text-xs font-medium text-[#635950]">{pkg.subtitle}</span>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#35302B] sm:text-base">
                      {pkg.summary}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
                      {pkg.pillars.map((pillar) => (
                        <div key={pillar.title} className="space-y-2">
                          <h2 className="text-sm font-semibold text-[#1D1B19]">{pillar.title}</h2>
                          <ul className="space-y-1.5 text-xs leading-relaxed text-[#4C453E]">
                            {pillar.items.map((line) => (
                              <li key={line} className="flex items-start gap-2">
                                <Check
                                  className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#9A763A]"
                                  aria-hidden="true"
                                />
                                <span>{line}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-[#1D1B19]/10 pt-5">
                    <span className="text-xs text-[#635950]">{content.customQuoteNote}</span>
                    <button
                      type="button"
                      onClick={() => onNavigate('contact', pkg.name)}
                      className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap rounded-xl bg-[#1D1B19] px-5 py-2.5 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#35302B] cursor-pointer"
                    >
                      <span>
                        {content.quoteCtaPrefix} · {pkg.name}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#D8BE8F]" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      {/* Optional Services */}
      <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8 lg:mt-24">
        <Reveal className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
            {content.optionalKicker}
          </p>
          <h2 className="font-editorial text-3xl font-medium leading-tight text-[#1D1B19] sm:text-4xl text-balance">
            {content.optionalTitle}
          </h2>
          <p className="text-base leading-relaxed text-[#4C453E]">{content.optionalLead}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {content.optionalItems.map((opt, idx) => (
            <Reveal key={opt.id} delay={idx * 0.04}>
              <article className="glass-panel flex h-full flex-col justify-between rounded-3xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div>
                  <span className="tabular-figures font-editorial text-2xl font-medium text-[#9A763A]">
                    {opt.number}.
                  </span>
                  <h3 className="mt-3 font-editorial text-2xl font-semibold text-[#1D1B19]">
                    {opt.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4C453E]">{opt.description}</p>
                </div>

                <div className="mt-6 border-t border-[#1D1B19]/10 pt-4">
                  <button
                    type="button"
                    onClick={() => onNavigate('contact', opt.title)}
                    className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-medium text-[#1D1B19] transition-colors hover:text-[#9A763A] cursor-pointer"
                  >
                    <span>{content.optionalCta}</span>
                    <ArrowUpRight className="h-3.5 w-3.5 text-[#9A763A]" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
