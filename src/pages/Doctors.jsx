import React from 'react';
import DoctorCard from '../components/DoctorCard';
import { doctors } from '../data/doctors';

export default function Doctors() {
  return (
    <div className="relative py-32">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
      </div>

      <div className="container space-y-16">
        <div className="space-y-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary backdrop-blur-sm">
            Specialist team · የስፔሻሊስቶች ቡድን
          </span>
          <h2 className="text-4xl font-bold leading-tight text-ink md:text-5xl">
            Get expert care you can
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> trust</span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-ink/70">
            A collaborative team of orthopedic surgeons, physiotherapists, and pain specialists reviews your progress every week to keep you moving forward. ቡድኑ በአማርኛ እና በእንግሊዝኛ የተዘጋጀ የንግግር እርዳታ ይሰጣል።
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/50 p-12 shadow-2xl">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-3xl" />

          <div className="relative text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-4xl text-white shadow-2xl">
              🤔
            </div>

            <h3 className="mb-4 text-3xl font-bold text-ink">Unsure which specialist to start with?</h3>
            <p className="mb-8 text-lg text-ink/70">
              Call our care coordinator and we will pair you with the right doctor for your diagnosis or second opinion. ለተለያዩ ምርመራዎች ወይም ለሁለተኛ አስተያየት ተስማሚውን ሐኪም እንመርጣለን።
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+251111234567"
                className="group inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-secondary to-primary px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-lg"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5 transition-transform duration-300 group-hover:scale-110">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="relative z-10">Talk to the Specialist · ለሐኪም ይደውሉ</span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-primary to-secondary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </a>

              <a
                href="#appointment"
                className="inline-flex items-center gap-2 rounded-full border-2 border-primary/50 bg-white px-8 py-4 text-lg font-semibold text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 hover:shadow-xl"
              >
                Book Appointment · ቀጠሮ ይያዙ
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
