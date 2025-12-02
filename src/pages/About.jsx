import React from 'react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();
  const credentialItems = t('about.credentials.items', { returnObjects: true }) || [];
  const milestoneItems = t('about.milestones.items', { returnObjects: true }) || [];
  const stats = t('about.stats', { returnObjects: true }) || {};
  const title = t('about.title', { returnObjects: true }) || {};
  const image = t('about.image', { returnObjects: true }) || {};

  return (
    <div className="relative py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
                {t('about.badge')}
              </span>
              <h2 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
                {(title.prefix || '').trim()}{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{title.highlight}</span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/70">{t('about.intro')}</p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative space-y-6">
                <span className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                  {t('about.credentials.badge')}
                </span>
                <ul className="space-y-4">
                  {credentialItems.map((item, index) => (
                    <li key={`${index}-${item}`} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-sm leading-relaxed text-ink/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-3xl text-white shadow-lg">
                🏆
              </div>
              <div>
                <div className="text-2xl font-bold text-ink">{stats.years}</div>
                <div className="text-sm text-ink/70">{stats.experience}</div>
                <div className="text-xs text-ink/50">{stats.note}</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src="https://images.pexels.com/photos/5863394/pexels-photo-5863394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1"
                alt={image.alt || 'Dr. Selamawit Bekele with patient'}
                className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xl text-white shadow-lg">
                    👩‍⚕️
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">{image.badge?.name}</div>
                    <div className="text-xs text-ink/60">{image.badge?.title}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">{t('about.milestones.badge')}</span>
                </div>

                <ul className="mt-6 space-y-4">
                  {milestoneItems.map((item, index) => (
                    <li key={`${item.year}-${index}`} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-xs font-bold">{item.year?.slice(-2)}</span>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-ink">{item.year}</div>
                        <p className="text-xs leading-relaxed text-ink/70">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
