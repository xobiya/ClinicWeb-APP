import React from 'react';

export default function ServiceCard({ badge, title, image, imageAlt, children }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      
      {image && (
        <div className="relative h-44 w-full overflow-hidden">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )}
      
      <div className="relative flex flex-1 flex-col p-6">
        {badge && (
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-lg transition-transform duration-300 group-hover:scale-110">
            {badge}
          </div>
        )}
        <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
        <p className="text-sm leading-relaxed text-ink/70">{children}</p>
        
        <div className="mt-auto pt-4">
          <a
            href="#appointment"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
          >
            Learn More
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
              <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
