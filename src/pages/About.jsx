import React from 'react';
import { credentials, milestones } from '../data/about';

export default function About() {
  return (
    <div className="relative py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr]">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
                About the specialist · ስለ ስፔሻሊስቱ
              </span>
              <h2 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
                Expert bone & orthopedic care led by
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Dr. Selamawit Bekele</span>
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
                Dr. Selamawit blends surgical precision with compassionate bedside care. እያንዳንዱ ጥናት በመስማት ይጀምራል፣ ከዚያም በሕይወትዎ እና በሙቀትዎ የሚስማማ የግል የመፈወሻ እቅድ ይቀርባል።
              </p>
            </div>

            {/* Enhanced Credentials Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 px-4 py-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Credentials & affiliations · ምስክሮች</span>
                </div>

                <ul className="mt-6 space-y-4">
                  {credentials.map((item, index) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-sm font-bold">{index + 1}</span>
                      </div>
                      <span className="text-sm leading-relaxed text-ink/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stats Badge */}
            <div className="flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-3xl text-white shadow-lg">
                🏆
              </div>
              <div>
                <div className="text-2xl font-bold text-ink">15+ Years</div>
                <div className="text-sm text-ink/70">Experience · ልምድ</div>
                <div className="text-xs text-ink/50">በኦርቶፔዲክ ስፔሻሊቲ የሆነ ልምድ</div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            {/* Enhanced Image Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img
                src="https://images.pexels.com/photos/5863394/pexels-photo-5863394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1"
                alt="Dr. Selamawit Bekele with patient"
                className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 rounded-2xl border border-slate-200/80 bg-white/95 p-4 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-xl text-white shadow-lg">
                    👩‍⚕️
                  </div>
                  <div>
                    <div className="text-sm font-bold text-ink">Dr. Selamawit</div>
                    <div className="text-xs text-ink/60">Orthopedic Specialist</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Milestones Card */}
            <div className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/80 p-8 shadow-2xl backdrop-blur-sm transition-all duration-300 hover:shadow-brand-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-4 py-2">
                  <span className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Milestones · ያለፈባቸው ምዕራፍ ክፍሎች</span>
                </div>

                <ul className="mt-6 space-y-4">
                  {milestones.map((item, index) => (
                    <li key={item.year} className="flex items-start gap-4">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
                        <span className="text-xs font-bold">{item.year.slice(-2)}</span>
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
