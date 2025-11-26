import React from 'react';

const channels = [
  { label: 'Front desk · ፊት ግቢ', value: '+251 (0)11 123 4567', href: 'tel:+251111234567' },
  { label: 'Clinic email · ኢሜይል', value: 'care@bonecare.et', href: 'mailto:care@bonecare.et' },
  { label: 'WhatsApp · ዋትስአፕ', value: '+251 91 123 4567', href: 'https://wa.me/251911234567' }
];

const faqs = [
  {
    question: 'Do you accept insurance? · ኢንሹራንስ ታቀበላችሁ?',
    answer: 'Yes, we work with Ethiopian and international insurers. Bring your card and we will help you confirm coverage before your visit.'
  },
  {
    question: 'How soon can I get an appointment? · ቀጠሮ በቀስታ እገኛለሁ?',
    answer: 'Most new patients are seen within five business days. Urgent orthopedic cases and travellers receive priority scheduling.'
  },
  {
    question: 'Are telehealth and second opinions available? · የመስመር ላይ ምክር አለ?',
    answer: 'Absolutely. Secure video visits are available in Amharic and English for follow-ups, pre-surgical prep, and second opinions.'
  }
];

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
            <p className="mt-3 text-base text-ink">Bole, Airport Road, Addis Ababa</p>
            <p className="mt-1 text-sm text-ink/60">የታላቁ ኢትዮጵያ ሃይማኖት ቤት አቅራቢያ · Free parking & wheelchair access</p>
            <div className="mt-4 grid gap-3 text-sm text-ink/70 sm:grid-cols-2">
              <div>
                <div className="font-semibold text-ink">Weekdays · ሰኞ – አርብ</div>
                <p>2፡00 – 12፡00 ጠዋት (8:00 AM – 6:00 PM)</p>
              </div>
              <div>
                <div className="font-semibold text-ink">Saturday · ቅዳሜ</div>
                <p>3፡00 – 9፡00 ጠዋት (9:00 AM – 3:00 PM)</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {channels.map((channel) => (
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126101.88559658276!2d38.68696394438706!3d8.98060339082477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d36c83c5c9%3A0x4798a4a8695e0e5e!2sBole%20International%20Airport!5e0!3m2!1sen!2set!4v1732617935000!5m2!1sen!2set"
              className="mt-4 h-64 w-full rounded-[18px] border border-slate-200/70"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-[24px] border border-slate-200/70 bg-base p-6 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Frequently asked questions · ብዙ ጥያቄዎች</div>
            <div className="mt-4 space-y-3">
              {faqs.map((faq) => (
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
              Message our live coordination desk at <a className="text-secondary hover:underline" href="mailto:hello@bonecare.et">hello@bonecare.et</a> for immediate assistance. አስቸኳይ ጥያቄዎችን በዝርዝር ለመደነቅ ይህንን ኢሜይል ይጠቀሙ።
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
