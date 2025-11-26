import React from 'react';

export default function ServiceCard({ badge, title, image, imageAlt, children }) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-slate-200/80 bg-card shadow-card transition hover:-translate-y-1 hover:shadow-brand-lg">
      {image && (
        <div className="h-44 w-full overflow-hidden">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {badge && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-sm font-semibold text-secondary">
            {badge}
          </div>
        )}
        <h3 className="mb-2 text-lg font-semibold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink/70">{children}</p>
      </div>
    </div>
  );
}
