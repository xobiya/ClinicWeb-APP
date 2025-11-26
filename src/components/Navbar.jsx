import React from 'react';
import { navLinks } from '../data/navigation';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-base/95 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-4">
        <a href="#home" className="text-lg font-semibold text-ink">
          BoneCare <span className="text-primary">Clinic</span>
          <span className="ml-2 text-sm font-normal text-ink/70">· ቦንኬር ክሊኒክ</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink/80 transition hover:bg-primary/10 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded-full border border-slate-200/80 px-4 py-2 text-sm font-medium text-ink/80 transition hover:border-primary/40 hover:text-primary">
            Menu · 
          </summary>
          <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-200/80 bg-card/95 p-2 shadow-card">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-2 text-sm text-ink/80 transition hover:bg-primary/10 hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#appointment"
              className="mt-2 block rounded-xl bg-primary px-3 py-2 text-center text-sm font-semibold text-white shadow-brand-lg"
            >
              Book Appointment
            </a>
          </div>
        </details>

        <div className="hidden md:block">
          <a
            href="#appointment"
            className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-brand-lg transition hover:-translate-y-0.5 hover:bg-primary/90"
          >
            Book Appointment
          </a>
        </div>
      </div>
    </header>
  );
}
