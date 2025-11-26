import React from 'react';

export default function DoctorCard({ photo, name, title, experience, specialization }) {
  return (
    <div className="flex items-center gap-5 rounded-[20px] border border-slate-200/70 bg-card p-5 shadow-card transition hover:-translate-y-1 hover:shadow-brand-lg">
      <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border-2 border-primary/20">
        {photo ? (
          <img src={photo} alt={name} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary/10 text-sm font-semibold text-primary">
            {name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <div>
        <div className="text-base font-semibold text-ink">{name}</div>
        <div className="text-sm text-ink/70">
          {title} · {specialization}
        </div>
        <div className="mt-1 text-xs uppercase tracking-wide text-primary">
          {experience}+ years experience · {experience} ዓመት ልምድ
        </div>
      </div>
    </div>
  );
}
