import React, { useState } from 'react';

export default function FAQSection({ faqs }) {
  const [openId, setOpenId] = useState(null);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <div
          key={faq.id}
          className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-300 hover:shadow-xl"
        >
          <button
            onClick={() => toggleFAQ(faq.id)}
            className="flex w-full items-center justify-between gap-4 p-6 text-left transition-colors duration-200 hover:bg-slate-50/50"
          >
            <div className="flex-1">
              <h3 className="text-base font-semibold text-ink lg:text-lg">
                {faq.question}
              </h3>
              <p className="mt-1 text-sm text-ink/60">{faq.questionAm}</p>
            </div>
            <div
              className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 transition-transform duration-300 ${
                openId === faq.id ? 'rotate-180' : ''
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5 text-primary"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === faq.id ? 'max-h-96' : 'max-h-0'
            }`}
          >
            <div className="border-t border-slate-200/70 bg-gradient-to-br from-slate-50/50 to-white p-6">
              <p className="text-sm leading-relaxed text-ink/70">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
