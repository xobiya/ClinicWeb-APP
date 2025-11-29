import React, { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navLinks } from '../data/navigation';

export default function Navbar() {
  const mobileMenuRef = useRef(null);

  function handleMobileNavigate() {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.removeAttribute('open');
    }
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-base/95 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-4">
        <Link to="/" className="text-lg font-semibold text-ink">
          BoneCare <span className="text-primary">Clinic</span>
          <span className="ml-2 text-sm font-normal text-ink/70">· ቦንኬር ክሊኒክ</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary/40 ${
                  isActive ? 'bg-primary/10 text-primary' : 'text-ink/80 hover:bg-primary/10 hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <details ref={mobileMenuRef} className="relative md:hidden">
          <summary className="list-none cursor-pointer rounded-full border border-slate-200/80 px-4 py-2 text-sm font-medium text-ink/80 transition hover:border-primary/40 hover:text-primary">
            Menu ·
          </summary>
          <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-slate-200/80 bg-card/95 p-2 shadow-card">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={handleMobileNavigate}
                className={({ isActive }) =>
                  `block rounded-xl px-3 py-2 text-sm transition ${
                    isActive ? 'bg-primary/10 text-primary' : 'text-ink/80 hover:bg-primary/10 hover:text-primary'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <NavLink
              to="/appointment"
              onClick={handleMobileNavigate}
              className={({ isActive }) =>
                `mt-2 block rounded-xl px-3 py-2 text-center text-sm font-semibold shadow-brand-lg ${
                  isActive ? 'bg-primary text-white' : 'bg-primary text-white hover:bg-primary/90'
                }`
              }
            >
              Book Appointment
            </NavLink>
          </div>
        </details>

        <div className="hidden md:block">
          <NavLink
            to="/appointment"
            className={({ isActive }) =>
              `inline-flex items-center rounded-full px-5 py-2 text-sm font-semibold shadow-brand-lg transition hover:-translate-y-0.5 ${
                isActive ? 'bg-primary/90 text-white' : 'bg-primary text-white hover:bg-primary/90'
              }`
            }
          >
            Book Appointment
          </NavLink>
        </div>
      </div>
    </header>
  );
}
