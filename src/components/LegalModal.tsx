import { useEffect } from 'react';
import { X } from 'lucide-react';
import { BUSINESS_INFO } from '../data/conciergeData';
import type { LocalizedSiteContent } from '../data/translations';

interface LegalModalProps {
  open: boolean;
  tab: 'mentions' | 'confidentialite';
  content: LocalizedSiteContent['legal'];
  onChangeTab: (tab: 'mentions' | 'confidentialite') => void;
  onClose: () => void;
}

export function LegalModal({ open, tab, content, onChangeTab, onClose }: LegalModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1D1B19]/45 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={onClose}
    >
      <div
        className="glass-panel-strong relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#1D1B19]/10 pb-4">
          <div>
            <h2 id="legal-modal-title" className="font-editorial text-2xl font-semibold text-[#1D1B19]">
              {tab === 'mentions' ? content.mentionsTitle : content.privacyTitle}
            </h2>
            <p className="mt-1 text-xs text-[#635950]">{BUSINESS_INFO.name}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label={content.closeLabel}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#1D1B19]/12 bg-white/70 text-[#1D1B19] transition-colors hover:bg-white cursor-pointer"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-4 flex gap-2 border-b border-[#1D1B19]/10 pb-3">
          <button
            type="button"
            onClick={() => onChangeTab('mentions')}
            className={`min-h-[38px] rounded-xl px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              tab === 'mentions'
                ? 'bg-[#1D1B19] text-[#FAF7F2]'
                : 'bg-white/60 text-[#635950] hover:text-[#1D1B19]'
            }`}
          >
            {content.mentionsTab}
          </button>
          <button
            type="button"
            onClick={() => onChangeTab('confidentialite')}
            className={`min-h-[38px] rounded-xl px-4 py-1.5 text-xs font-medium transition-colors cursor-pointer ${
              tab === 'confidentialite'
                ? 'bg-[#1D1B19] text-[#FAF7F2]'
                : 'bg-white/60 text-[#635950] hover:text-[#1D1B19]'
            }`}
          >
            {content.privacyTab}
          </button>
        </div>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#35302B]">
          {tab === 'mentions' ? (
            <>
              <p>
                <strong>{content.mentionsParagraphs.editorLabel}</strong> {BUSINESS_INFO.name},{' '}
                {content.mentionsParagraphs.managedBy}
              </p>
              <p>
                <strong>{content.mentionsParagraphs.addressLabel}</strong>{' '}
                {BUSINESS_INFO.addressLine1}, {BUSINESS_INFO.addressLine2}.
              </p>
              <p>
                <strong>{content.mentionsParagraphs.contactLabel}</strong>{' '}
                <a href={BUSINESS_INFO.phoneHref} className="underline underline-offset-4">
                  {BUSINESS_INFO.phoneDisplay}
                </a>{' '}
                ·{' '}
                <a href={BUSINESS_INFO.emailHref} className="underline underline-offset-4">
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p>
                <strong>{content.mentionsParagraphs.activityLabel}</strong>{' '}
                {content.mentionsParagraphs.activityText}
              </p>
            </>
          ) : (
            <>
              <p>{content.privacyParagraphs[0]}</p>
              <p>{content.privacyParagraphs[1]}</p>
              <p>
                {content.privacyParagraphs[2]}{' '}
                <a href={BUSINESS_INFO.emailHref} className="underline underline-offset-4">
                  {BUSINESS_INFO.email}
                </a>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
