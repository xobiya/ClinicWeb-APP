import React from 'react';
import { credentials, milestones } from '../data/about';

export default function About() {

  return (
    <section className="py-24">
      <div className="container grid gap-12 lg:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-7">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            About the specialist · ስለ ስፔሻሊስቱ
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">Expert bone & orthopedic care led by Dr. Selamawit Bekele</h2>
          <p className="max-w-2xl text-lg leading-relaxed text-ink/70">
            Dr. Selamawit blends surgical precision with compassionate bedside care. እያንዳንዱ ጥናት በመስማት ይጀምራል፣ ከዚያም በሕይወትዎ እና በሙቀትዎ የሚስማማ የግል የመፈወሻ እቅድ ይቀርባል።
          </p>

          <div className="rounded-[24px] border border-slate-200/70 bg-card p-6 shadow-card">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">Credentials & affiliations · ምስክሮች</p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-ink/70">
              {credentials.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10 text-[10px] font-semibold text-secondary">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-card shadow-card">
            <img
              src="https://images.pexels.com/photos/5863394/pexels-photo-5863394.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1"
              alt="Dr. Selamawit Bekele with patient"
              className="h-80 w-full object-cover"
            />
          </div>
          <div className="rounded-[24px] border border-slate-200/70 bg-base p-6 shadow-card">
            <div className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Milestones</div>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/70">
              {milestones.map((item) => (
                <li key={item.year}>
                  <div className="font-semibold text-ink">{item.year}</div>
                  <p>{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
