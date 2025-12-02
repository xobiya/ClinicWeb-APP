import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { footerCtas, footerLinks } from '../data/footer';
import { clinicAddress, clinicHours } from '../data/contact';

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="border-t border-slate-200/70 bg-card/95 backdrop-blur">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-4">
          <div>
            <div className="text-lg font-semibold text-ink">{t('common.brand.primary')} • {t('common.brand.secondary')}</div>
            <p className="text-sm text-ink/60">{t('footer.description')}</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-ink/70">
            {footerLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:text-primary">
                {t(link.labelKey)}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-y-3 text-sm text-ink/70">
          <div className="text-ink font-semibold">{t('footer.addressLabel')}: {clinicAddress}</div>
          <div className="space-y-1">
            {clinicHours.map((slot) => (
              <div key={slot.label}>
                <div>{slot.label}</div>
                <p>{slot.time}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            {footerCtas.map((cta) => (
              <a
                key={cta.href}
                href={cta.href}
                className={cta.primary
                  ? 'inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-brand-lg transition hover:-translate-y-0.5 hover:bg-primary/90'
                  : 'inline-flex items-center rounded-full border border-secondary/50 px-5 py-2 text-sm font-semibold text-secondary transition hover:-translate-y-0.5 hover:border-secondary/70 hover:bg-secondary/10'}
              >
                {t(cta.labelKey)}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-4 text-center text-xs text-ink/50">
        {t('footer.rights', { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
