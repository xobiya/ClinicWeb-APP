import React from 'react';

const iconMap = {
  calendar: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  diagnostic: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  treatment: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="22 4 12 14.01 9 11.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  followup: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function ProcessSteps({ steps }) {
  return (
    <div className="relative">
      {/* Connection Line - Hidden on mobile */}
      <div className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary/20 via-secondary/20 to-primary/20 lg:block" />

      <div className="space-y-8 lg:space-y-16">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon];
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.id}
              className={`relative flex flex-col items-center gap-6 lg:flex-row ${
                isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Content Card */}
              <div className={`w-full lg:w-5/12 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-3 flex items-center gap-3 lg:hidden">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-white shadow-lg">
                        {Icon && <Icon />}
                      </div>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-sm font-bold text-white">
                        {step.id}
                      </div>
                    </div>
                    <h3 className="mb-2 text-xl font-bold text-ink">
                      {step.title}
                      <span className="ml-2 text-sm font-normal text-ink/60">· {step.titleAm}</span>
                    </h3>
                    <p className="text-sm leading-relaxed text-ink/70">{step.description}</p>
                    <p className="mt-2 text-xs text-ink/50">{step.descriptionAm}</p>
                  </div>
                </div>
              </div>

              {/* Center Icon - Desktop only */}
              <div className="hidden lg:block lg:w-2/12">
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
                  {/* Animated Ring */}
                  <div className="absolute inset-0 animate-ping rounded-full bg-gradient-to-br from-primary/20 to-secondary/20" style={{ animationDuration: '3s' }} />
                  
                  {/* Main Circle */}
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-primary to-secondary shadow-xl">
                    <div className="text-white">{Icon && <Icon />}</div>
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-secondary to-primary text-sm font-bold text-white shadow-lg">
                    {step.id}
                  </div>
                </div>
              </div>

              {/* Spacer for alignment */}
              <div className="hidden w-5/12 lg:block" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
