import { ArrowRight, ArrowUpRight, Check, Minus } from 'lucide-react';
import { GALLERY_IMAGES, type PageRoute, type ServicePackage } from '../data/conciergeData';
import type { LocalizedSiteContent } from '../data/translations';
import { ImageWithFallback } from '../components/ImageWithFallback';
import { Reveal } from '../components/MotionPrimitives';

interface OwnersPageProps {
  content: LocalizedSiteContent['owners'];
  onNavigate: (page: PageRoute, preselectedPack?: ServicePackage['name']) => void;
}

export function OwnersPage({ content, onNavigate }: OwnersPageProps) {
  return (
    <div className="pt-28 pb-20 sm:pt-36 lg:pb-24">
      {/* Intro Split */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
              {content.kicker}
            </p>
            <h1 className="font-editorial text-4xl font-medium leading-tight tracking-tight text-[#1D1B19] sm:text-5xl text-balance">
              {content.title}
            </h1>
            <p className="text-base leading-relaxed text-[#4C453E] sm:text-lg">{content.lead}</p>
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Pack Complet')}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#1D1B19] px-6 py-3 text-sm font-medium text-[#FAF7F2] transition-colors hover:bg-[#35302B] cursor-pointer"
              >
                <span>{content.primaryCta}</span>
                <ArrowRight className="h-4 w-4 text-[#D8BE8F]" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#1D1B19]/18 bg-white/75 px-5 py-3 text-sm font-medium text-[#1D1B19] transition-colors hover:bg-white cursor-pointer"
              >
                <span>{content.secondaryCta}</span>
              </button>
            </div>
          </div>

          <Reveal className="lg:col-span-6">
            <div className="group h-full overflow-hidden rounded-3xl border border-[#1D1B19]/10 shadow-sm">
              <ImageWithFallback
                src={GALLERY_IMAGES.ownerDining.src}
                alt={GALLERY_IMAGES.ownerDining.alt}
                loading="eager"
                containerClassName="aspect-[4/3] lg:h-full"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4-Step Owner Journey */}
      <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8 lg:mt-24">
        <Reveal className="max-w-2xl space-y-3">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
            {content.journeyKicker}
          </p>
          <h2 className="font-editorial text-3xl font-medium leading-tight text-[#1D1B19] sm:text-4xl text-balance">
            {content.journeyTitle}
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.journeySteps.map((step, idx) => (
            <Reveal key={step.number} delay={idx * 0.05}>
              <article className="glass-panel flex h-full flex-col rounded-3xl p-6">
                <span className="tabular-figures font-editorial text-3xl font-medium text-[#9A763A]">
                  {step.number}.
                </span>
                <h3 className="mt-4 font-editorial text-xl font-semibold text-[#1D1B19]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4C453E]">{step.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formula Comparison Matrix */}
      <section className="mx-auto mt-20 max-w-6xl px-5 sm:px-8 lg:mt-24">
        <Reveal>
          <div className="glass-panel-strong overflow-hidden rounded-3xl p-6 sm:p-10">
            <div className="max-w-2xl space-y-2">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#9A763A]">
                {content.matrixKicker}
              </p>
              <h2 className="font-editorial text-3xl font-medium text-[#1D1B19] sm:text-4xl">
                {content.matrixTitle}
              </h2>
            </div>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-b border-[#1D1B19]/12 text-xs font-semibold uppercase tracking-wider text-[#635950]">
                    <th className="py-4 pr-4">{content.matrixHeaderFeature}</th>
                    <th className="px-4 py-4 text-center text-[#1D1B19]">
                      {content.matrixHeaders[0]}
                    </th>
                    <th className="px-4 py-4 text-center text-[#1D1B19]">
                      {content.matrixHeaders[1]}
                    </th>
                    <th className="pl-4 py-4 text-center text-[#1D1B19]">
                      {content.matrixHeaders[2]}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#1D1B19]/8">
                  {content.matrixRows.map((row) => (
                    <tr key={row.feature} className="transition-colors hover:bg-white/45">
                      <td className="py-3.5 pr-4 text-[#35302B]">{row.feature}</td>
                      <td className="px-4 py-3.5 text-center">
                        {row.complet ? (
                          <Check
                            className="mx-auto h-4 w-4 text-[#9A763A]"
                            aria-label={content.includedLabel}
                          />
                        ) : (
                          <Minus
                            className="mx-auto h-4 w-4 text-[#635950]/40"
                            aria-label={content.notIncludedLabel}
                          />
                        )}
                      </td>
                      <td className="px-4 py-3.5 text-center">
                        {row.digital ? (
                          <Check
                            className="mx-auto h-4 w-4 text-[#9A763A]"
                            aria-label={content.includedLabel}
                          />
                        ) : (
                          <Minus
                            className="mx-auto h-4 w-4 text-[#635950]/40"
                            aria-label={content.notIncludedLabel}
                          />
                        )}
                      </td>
                      <td className="pl-4 py-3.5 text-center">
                        {row.relais ? (
                          <Check
                            className="mx-auto h-4 w-4 text-[#9A763A]"
                            aria-label={content.includedLabel}
                          />
                        ) : (
                          <Minus
                            className="mx-auto h-4 w-4 text-[#635950]/40"
                            aria-label={content.notIncludedLabel}
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-end gap-3 border-t border-[#1D1B19]/10 pt-6">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Pack Complet')}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl bg-[#1D1B19] px-5 py-2.5 text-xs font-medium text-[#FAF7F2] transition-colors hover:bg-[#35302B] cursor-pointer"
              >
                <span>{content.choosePackComplet}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#D8BE8F]" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Pack Digital Avancé')}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#1D1B19]/15 bg-white/80 px-4 py-2.5 text-xs font-medium text-[#1D1B19] transition-colors hover:bg-white cursor-pointer"
              >
                <span>{content.packDigitalLabel}</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Pack Relais Local')}
                className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#1D1B19]/15 bg-white/80 px-4 py-2.5 text-xs font-medium text-[#1D1B19] transition-colors hover:bg-white cursor-pointer"
              >
                <span>{content.packRelaisLabel}</span>
              </button>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
