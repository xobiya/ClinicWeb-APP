import React, { useState } from 'react';

export default function AppointmentForm() {
  const [form, setForm] = useState({ name: '', age: '', phone: '', symptoms: '', date: '' });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.phone || !form.date) {
      setStatus({ type: 'error', message: 'Please complete required fields / እባክዎን ያስፈልጉትን መረጃ ይሙሉ.' });
      return;
    }

    setStatus({ type: 'success', message: 'Appointment request submitted. We will contact you shortly. / የቀጠሮ ጥያቄዎ ተቀብሏል። በቅርቡ እናደውልዎታለን።' });
    setForm({ name: '', age: '', phone: '', symptoms: '', date: '' });
  }

  const fieldClass =
    'mt-2 w-full rounded-[14px] border border-slate-200/80 bg-card px-4 py-3 text-sm text-ink/80 placeholder:text-ink/40 focus:border-primary focus:outline-none focus:ring-4 focus:ring-primary/15 transition';

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-4 rounded-[24px] border border-slate-200/80 bg-card p-8 shadow-card">
      {status && (
        <div
          className={`rounded-2xl px-4 py-3 text-sm ${
            status.type === 'success'
              ? 'bg-secondary/10 text-secondary'
              : 'bg-red-50 text-red-500'
          }`}
        >
          {status.message}
        </div>
      )}

      <label className="block text-sm font-medium text-ink/80">
        Name * / ስም
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className={fieldClass}
          placeholder="Selamawit Bekele"
        />
      </label>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink/80">
          Age / እድሜ
          <input
            name="age"
            value={form.age}
            onChange={handleChange}
            className={fieldClass}
            placeholder="32"
          />
        </label>
        <label className="block text-sm font-medium text-ink/80">
          Contact Number * / ስልክ ቁጥር
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={fieldClass}
            placeholder="+251 91 123 4567"
          />
        </label>
      </div>

      <label className="block text-sm font-medium text-ink/80">
        Symptoms / Issue · ምልክቶች
        <textarea
          name="symptoms"
          value={form.symptoms}
          onChange={handleChange}
          className={`${fieldClass} resize-none`}
          rows={4}
          placeholder="Describe pain, injury, or mobility concerns"
        />
      </label>

      <label className="block text-sm font-medium text-ink/80">
        Preferred Date * / የሚመረጡት ቀን
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          className={fieldClass}
        />
      </label>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-3">
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-brand-lg transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Book Appointment · ቀጠሮ ይያዙ
          </button>
          <a
            href="tel:+251111234567"
            className="inline-flex items-center justify-center rounded-full border border-secondary/40 px-6 py-3 text-sm font-semibold text-secondary transition hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/10"
          >
            Talk to the Specialist · ለሐኪም ይደውሉ
          </a>
        </div>
        <div className="text-xs uppercase tracking-wider text-ink/50">* Required fields · አስፈላጊ ስፍራዎች</div>
      </div>
    </form>
  );
}
