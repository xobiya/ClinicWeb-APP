import React from 'react';
import DoctorCard from '../components/DoctorCard';

const doctors = [
  {
    name: 'Dr. Selamawit Bekele',
    title: 'MD, Orthopedic Surgery',
    experience: 15,
    specialization: 'Spine & Joint Reconstruction · የአጥንት እና ጅማት መገናኛ',
    photo: 'https://images.pexels.com/photos/7659866/pexels-photo-7659866.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    name: 'Dr. Victor Kamau',
    title: 'MD, Sports Medicine',
    experience: 12,
    specialization: 'Arthroscopy & Injury Prevention · የእጅ መቆራረጥ እና ቁስለት መከላከል',
    photo: 'https://images.pexels.com/photos/5452211/pexels-photo-5452211.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    name: 'Dr. Lila Fernandez',
    title: 'DPT, OCS',
    experience: 10,
    specialization: 'Neuromuscular Physiotherapy · የነርቭ እና ጡንቻ እንክብካቤ',
    photo: 'https://images.pexels.com/photos/5327588/pexels-photo-5327588.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    name: 'Dr. Isaac Boateng',
    title: 'MD, Pain Medicine',
    experience: 11,
    specialization: 'Interventional Pain & Regenerative Care · የህመም አስተዳደር እና እንደገና ማበጠር',
    photo: 'https://images.pexels.com/photos/8460136/pexels-photo-8460136.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    name: 'Dr. Mei Chen',
    title: 'DPT, PhD',
    experience: 9,
    specialization: 'Balance & Vestibular Rehab · የመመጣት እና ሚዛን መከታተያ',
    photo: 'https://images.pexels.com/photos/7580258/pexels-photo-7580258.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    name: 'Dr. Omar Farah',
    title: 'Certified Orthotist',
    experience: 8,
    specialization: 'Custom Bracing & Mobility · ተስማሚ የመንቀሳቀስ መደገፊያዎች',
    photo: 'https://images.pexels.com/photos/8413269/pexels-photo-8413269.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  }
];

export default function Doctors() {
  return (
    <section className="py-24">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Specialist team · የስፔሻሊስቶች ቡድን
          </span>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Get expert care you can trust</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
            A collaborative team of orthopedic surgeons, physiotherapists, and pain specialists reviews your progress every week to keep you moving forward. ቡድኑ በአማርኛ እና በእንግሊዝኛ የተዘጋጀ የንግግር እርዳታ ይሰጣል።
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>

        <div className="rounded-[24px] border border-slate-200/70 bg-base p-8 text-center shadow-card">
          <h3 className="text-2xl font-semibold text-ink">Unsure which specialist to start with?</h3>
          <p className="mt-3 text-base text-ink/70">
            Call our care coordinator and we will pair you with the right doctor for your diagnosis or second opinion.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+251111234567"
              className="inline-flex items-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-brand-lg transition hover:-translate-y-0.5 hover:bg-primary/90"
            >
              Talk to the Specialist · ለሐኪም ይደውሉ
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center rounded-full border border-secondary/40 px-6 py-3 text-sm font-semibold text-secondary transition hover:-translate-y-0.5 hover:border-secondary/60 hover:bg-secondary/10"
            >
              Book Appointment · ቀጠሮ ይያዙ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
