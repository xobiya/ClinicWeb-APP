import React from 'react';
import { Link } from 'react-router-dom';
import { gallery, strengths, testimonials, trustBadges } from '../data/home';

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

  return (
    <div className="space-y-28">
      <section className="pt-12">
        <div className="container grid items-center gap-12 rounded-[28px] border border-slate-200/70 bg-card p-10 shadow-card lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Advanced orthopedic care · የተሻሻለ የአጥንት እንክብካቤ
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Your trusted orthopedic & bone care specialist
            </h1>
            <p className="text-base text-ink/60">እርስዎ የሚታመኑት የአጥንት እና የጅማት ስፔሻሊስት፣ በአዲስ አበባ የሚገኘው የሙያ ባለሙያ ቡድን ነን።</p>
            <p className="max-w-xl text-lg leading-relaxed text-ink/70">
              Relief for joint, spine, and bone pain with compassionate doctors, precision diagnostics, and personalised rehabilitation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/appointment"
                className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-brand-lg transition hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Book Appointment · ቀጠሮ ይያዙ
              </Link>
              <a
                href="tel:+251111234567"
                className="inline-flex items-center rounded-full border border-secondary/50 px-6 py-3 text-sm font-semibold text-secondary transition hover:-translate-y-0.5 hover:border-secondary/70 hover:bg-secondary/10"
              >
                Talk to a Specialist · ለሐኪም ይደውሉ
              </a>
              <Link
                to="/services"
                className="inline-flex items-center rounded-full border border-primary/15 px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary/30"
              >
                Get Diagnosis · ምርመራ ይጀምሩ
              </Link>
            </div>
            <ul className="grid gap-3 text-sm text-ink/70 sm:grid-cols-2">
              <li className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">01</span>
                Same-day imaging & consultation · በዚያኑ ቀን ምርመራ እና ምክር
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">02</span>
                Dedicated recovery concierge · የመድሃኒት እና መከታተያ አገልግሎት
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">03</span>
                Hybrid in-clinic + digital rehab · በክሊኒክ ውስጥ እና በዲጂታል የሚከናወን መከታተያ
              </li>
              <li className="inline-flex items-center gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-secondary/10 text-xs font-semibold text-secondary">04</span>
                Transparent treatment pricing · ግልጽ የክፍያ መረጃ
              </li>
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
              <div className="text-sm font-semibold text-ink">Trusted by 12,000+ patients · በ12,000+ ታካሚዎች የሚታመን</div>
              <div className="mt-1 text-xs uppercase tracking-[0.3em] text-secondary">Compassion · Precision · Results · ርኅራኄ · ትክክለኛነት · ውጤት</div>
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
              Why choose BoneCare · ለምን ቦንኬርን ይመርጣሉ?
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">Expert care, designed around your recovery goals</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
              We combine hospital-grade technology with personalised attention so every visit feels calm, clear, and reassuring. በሆስፒታል ደረጃ ቴክኖሎጂ እና በግል ትኩረት እያንዳንዱ ጉብኝት ጸጥታ እና የሚያሳርፍ ሆኖ እንዲሰማዎት እንደምንያደርገው ይወቁ።
            </p>
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
              Testimonials
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">Patients trust us with their movement</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
              Hear how people regained comfort, confidence, and strength with our coordinated orthopedic programs.
            </p>
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
              Clinic gallery
            </span>
            <h2 className="text-3xl font-semibold md:text-4xl">A calm, modern space designed for healing</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
              Explore our welcoming reception, treatment rooms, and physiotherapy studios before you arrive.
            </p>
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
