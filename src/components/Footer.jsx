import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-card/95 backdrop-blur">
      <div className="container grid gap-10 py-12 md:grid-cols-[1.1fr_.9fr]">
        <div className="space-y-4">
          <div>
            <div className="text-lg font-semibold text-ink">BoneCare Clinic · ቦንኬር ክሊኒክ</div>
            <p className="text-sm text-ink/60">ከአዲስ አበባ ልማድ ጋር የሚዋሃዱ የአጥንት እና የጅማት አገልግሎቶች | Specialised orthopedic, spine, and joint care centred on Ethiopian families.</p>
          </div>
          <div className="flex flex-wrap gap-3 text-sm text-ink/70">
            <a href="#home" className="hover:text-primary">Home · መነሻ</a>
            <a href="#about" className="hover:text-primary">About · ስለ እኛ</a>
            <a href="#services" className="hover:text-primary">Services · አገልግሎቶች</a>
            <a href="#appointment" className="hover:text-primary">Appointments · ቀጠሮ</a>
            <a href="#contact" className="hover:text-primary">Contact · እውቂያ</a>
          </div>
        </div>

        <div className="space-y-3 text-sm text-ink/70">
          <div className="text-ink font-semibold">Bole, Airport Road, Addis Ababa</div>
          <div>ሰኞ – አርብ · 2፡00 – 12፡00 ጠዋት (8:00 AM – 6:00 PM)</div>
          <div>ቅዳሜ · 3፡00 – 9፡00 ጠዋት (9:00 AM – 3:00 PM)</div>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="tel:+251111234567"
              className="inline-flex items-center rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-brand-lg transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Call Clinic · ይደውሉ
            </a>
            <a
              href="https://wa.me/251911234567"
              className="inline-flex items-center rounded-full border border-secondary/50 px-5 py-2 text-sm font-semibold text-secondary transition hover:-translate-y-0.5 hover:border-secondary/70 hover:bg-secondary/10"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200/70 py-4 text-center text-xs text-ink/50">
        © {new Date().getFullYear()} BoneCare Clinic · ቦንኬር ክሊኒክ. All rights reserved.
      </div>
    </footer>
  );
}
