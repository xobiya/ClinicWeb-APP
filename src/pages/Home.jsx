import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const strengthIconMap = {
  check: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-primary">
      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M5 12l4 4L19 6" />
    </svg>
  ),
  team: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-primary">
      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M6 21v-1a4 4 0 014-4h4a4 4 0 014 4v1" />
    </svg>
  ),
  clinic: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-primary">
      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 8h18v11H3z" />
      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 12h18" />
      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M7 8V6a5 5 0 0110 0v2" />
    </svg>
  ),
  clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6 text-primary">
      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      <circle cx="12" cy="12" r="9" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function Home() {
  const { t } = useTranslation();
  const trustBadges = t('home.trustBadges', { returnObjects: true });
  const strengths = t('home.strengths', { returnObjects: true });
  const testimonials = t('home.testimonials.items', { returnObjects: true });
  const gallery = t('home.gallery.items', { returnObjects: true });
  const heroBenefits = t('home.hero.benefits', { returnObjects: true });

  return (
    <div className="space-y-28">
      <section className="pt-12">
        <div className="container grid items-center gap-12 rounded-[28px] border border-slate-200/70 bg-card p-10 shadow-card lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t('home.hero.badge')}
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              {t('home.hero.title')}
            </h1>
            <p className="text-base text-ink/60">{t('home.hero.intro')}</p>
            <p className="max-w-xl text-lg leading-relaxed text-ink/70">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-brand-lg transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                {t('common.cta.bookAppointment')}
              </Link>
              <a
                href="tel:+251111234567"
                className="inline-flex items-center rounded-full border border-secondary/50 px-6 py-3 text-sm font-semibold text-secondary transition hover:-translate-y-0.5 hover:border-secondary/70 hover:bg-secondary/10"
              >
                {t('common.cta.talkToSpecialist')}
              </a>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-primary/15 px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary/30"
              >
                {t('common.cta.getDiagnosis')}
              </Link>
            </div>
            <ul className="grid gap-3 text-sm text-ink/70 sm:grid-cols-2">
              {heroBenefits.map((benefit, index) => (
                <li key={benefit} className="inline-flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[24px]">
              <img
                src="https://images.pexels.com/photos/5794050/pexels-photo-5794050.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1"
                alt="Orthopedic specialist supporting patient"
                className="h-full w-full rounded-[24px] object-cover"
              />
            </div>
            <div className="absolute bottom-6 right-6 rounded-[16px] border border-slate-200/80 bg-card/90 p-4 text-xs font-medium text-ink/70 shadow-card">
              <div className="text-sm font-semibold text-ink">{t('home.hero.figure.title')}</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-secondary">{t('home.hero.figure.caption')}</div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustBadges.map((badge) => (
            <div key={badge.label} className="rounded-[20px] border border-slate-200/70 bg-card p-6 shadow-card">
              <div className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">{badge.label}</div>
              <p className="mt-3 text-base text-ink/70">{badge.detail}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="container space-y-10">
          <div className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t('home.why.badge')}
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">{t('home.why.title')}</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">{t('home.why.description')}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {strengths.map((item) => {
              const Icon = strengthIconMap[item.icon];

              return (
                <div key={item.id} className="flex gap-4 rounded-[20px] border border-slate-200/70 bg-card p-6 shadow-card">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">{Icon ? <Icon /> : null}</div>
                  <div>
                    <div className="text-base font-semibold text-ink">{item.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container rounded-[28px] border border-slate-200/70 bg-card p-12 shadow-card">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              {t('home.testimonials.badge')}
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">{t('home.testimonials.title')}</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">{t('home.testimonials.description')}</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.name} className="flex h-full flex-col gap-4 rounded-[20px] border border-slate-200/70 bg-base p-6 text-left shadow-card">
                <p className="text-sm leading-relaxed text-ink/70">“{item.quote}”</p>
                <div className="mt-auto flex items-center gap-3">
                  <img src={item.photo} alt={item.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="text-sm font-semibold text-ink">{item.name}</div>
                    <div className="text-xs uppercase tracking-[0.3em] text-secondary">{item.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-12">
        <div className="container space-y-6">
          <div className="space-y-3 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t('home.gallery.badge')}
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">{t('home.gallery.title')}</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">{t('home.gallery.description')}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {gallery.map((item) => (
              <div key={item.src} className="overflow-hidden rounded-[24px] border border-slate-200/70 bg-card shadow-card">
                <img src={item.src} alt={item.alt} className="h-56 w-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
