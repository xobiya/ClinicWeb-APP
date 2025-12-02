import React from 'react';
import { useTranslation } from 'react-i18next';
import AppointmentForm from '../components/AppointmentForm';

export default function Appointment() {
  const { t } = useTranslation();
  const guideItems = t('appointment.guide', { returnObjects: true });
  const guide = Array.isArray(guideItems) ? guideItems : [];

  return (
    <section className="py-24">
      <div className="container grid gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            {t('appointment.badge')}
          </span>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">{t('appointment.title')}</h2>
          <p className="text-lg leading-relaxed text-ink/70">{t('appointment.description')}</p>

          <div className="grid gap-4 sm:grid-cols-3">
            {guide.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-[20px] border border-slate-200/70 bg-card p-4 text-sm text-ink/70 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="text-xs uppercase tracking-[0.35em] text-primary/80">{item.label}</div>
                <div className="mt-2 font-medium text-ink">{item.value}</div>
              </a>
            ))}
          </div>

          <div className="rounded-[20px] border border-secondary/30 bg-secondary/5 p-6 text-sm text-ink/70">
            <div className="text-secondary">{t('appointment.virtual.title')}</div>
            <p className="mt-2">{t('appointment.virtual.description')}</p>
          </div>
        </div>

        <div className="flex justify-end">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
