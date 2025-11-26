import React from 'react';
import {
  clinicAddress,
  clinicAddressNote,
  clinicHours,
  contactChannels,
  contactFaqs,
  contactMapEmbedSrc,
  sameDayEmail
} from '../data/contact';

export default function Contact() {
  return (
    <section className="py-24">
      <div className="container grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Contact & location · እውቂያ እና አካባቢ
          </span>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">We are ready to guide your next step</h2>
          <p className="text-lg leading-relaxed text-ink/70">
            Reach out any way you prefer. Our concierge team coordinates with your specialist to answer questions fast and keep your recovery on track. እባክዎን መረጃዎን በማንኛውም መንገድ ያጋሩ፤ ቡድናችን በፍጥነት መልስ እያቀረበ እርዳታ ይሰጣል።
          </p>

          <div className="rounded-[24px] border border-slate-200/70 bg-card p-6 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-secondary">Clinic address · አድራሻ</div>
            <p className="mt-3 text-base text-ink">{clinicAddress}</p>
            <p className="mt-1 text-sm text-ink/60">{clinicAddressNote}</p>
            <div className="mt-4 grid gap-3 text-sm text-ink/70 sm:grid-cols-2">
              {clinicHours.map((slot) => (
                <div key={slot.label}>
                  <div className="font-semibold text-ink">{slot.label}</div>
                  <p>{slot.time}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {contactChannels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                className="rounded-[20px] border border-slate-200/70 bg-base p-4 text-sm text-ink/70 shadow-card transition hover:-translate-y-0.5 hover:border-primary/40"
              >
                <div className="text-xs uppercase tracking-[0.35em] text-primary/80">{channel.label}</div>
                <div className="mt-2 font-medium text-ink">{channel.value}</div>
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[28px] border border-slate-200/70 bg-card p-6 text-sm leading-relaxed text-ink/70 shadow-card">
            <p className="text-lg font-semibold text-ink">Visit our clinic</p>
            <p className="mt-2">
              Locate the main entrance, guest parking, and mobility drop-off using the interactive map below.
            </p>
            <iframe
              title="BoneCare Clinic location"
              src={contactMapEmbedSrc}
              className="mt-4 h-64 w-full rounded-[18px] border border-slate-200/70"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-[24px] border border-slate-200/70 bg-base p-6 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Frequently asked questions · ብዙ ጥያቄዎች</div>
            <div className="mt-4 space-y-3">
              {contactFaqs.map((faq) => (
                <details key={faq.question} className="group rounded-[16px] border border-slate-200/60 bg-card p-4 text-sm text-ink/70">
                  <summary className="cursor-pointer text-base font-semibold text-ink group-open:text-primary">
                    {faq.question}
                  </summary>
                  <p className="mt-2">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="rounded-[24px] border border-secondary/30 bg-secondary/5 p-6 text-sm text-ink/70">
            <div className="text-xs uppercase tracking-[0.35em] text-secondary">Same-day questions</div>
            <p className="mt-2">
              Message our live coordination desk at <a className="text-secondary hover:underline" href={`mailto:${sameDayEmail}`}>{sameDayEmail}</a> for immediate assistance. አስቸኳይ ጥያቄዎችን በዝርዝር ለመደነቅ ይህንን ኢሜይል ይጠቀሙ።
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
