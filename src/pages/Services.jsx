import React from 'react';
import ServiceCard from '../components/ServiceCard';

export default function Services() {
  const data = [
    {
      badge: 'BP',
      title: 'Bone & fracture care',
      desc: 'Precision fracture management, bone density testing, and regenerative support for strong healing. · ትክክለኛ የአጥንት ስብራት እንክብካቤ እና መመርመሪያዎች.'
    },
    {
      badge: 'JT',
      title: 'Joint & arthritis relief',
      desc: 'Custom plans for knee, hip, and shoulder pain using injections, bracing, and guided therapy. · ለጅማት ህመም የተገጠመ እቅድ እና መቀጠል መከታተያ.'
    },
    {
      badge: 'SP',
      title: 'Spine alignment program',
      desc: 'Minimally invasive spine procedures, posture training, and targeted pain modulation with bilingual coaching.'
    },
    {
      badge: 'PT',
      title: 'Physiotherapy studio',
      desc: 'Hands-on therapy, Pilates-based conditioning, and return-to-sport coaching with motion tracking for Addis runners.'
    },
    {
      badge: 'SM',
      title: 'Sports medicine',
      desc: 'Performance evaluations, injury prevention labs, and rapid return-to-play protocols for athletes across Ethiopia.'
    },
    {
      badge: 'VR',
      title: 'Virtual recovery',
      desc: 'Telehealth check-ins, Amharic guidance, and progress dashboards available to diaspora patients abroad.'
    }
  ];

  return (
    <section className="py-24">
      <div className="container space-y-12">
        <div className="space-y-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Our services · አገልግሎቶቻችን
          </span>
          <h2 className="text-3xl font-semibold text-ink md:text-4xl">Advanced treatment for joint, spine & bone pain</h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
            Each program is crafted by Dr. Selamawit and our multidisciplinary team in Addis Ababa. እቅዶቻችን የተስፋፋ ቴክኖሎጂን እና የኢትዮጵያ አገልግሎት ባህልን በመዋደም የሚያቀርቡ ትክክለኛ ውጤቶችን ያበረከቱልዎታል።
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {data.map((service) => (
            <ServiceCard key={service.title} badge={service.badge} title={service.title}>
              {service.desc}
            </ServiceCard>
          ))}
        </div>

        <div className="rounded-[24px] border border-slate-200/70 bg-base p-8 text-center shadow-card">
          <h3 className="text-2xl font-semibold text-ink">Not sure which service fits your symptoms?</h3>
          <p className="mt-3 text-base text-ink/70">
            Share your story in a quick call and we will guide you to the right specialist or program. ጥያቄዎን በአማርኛ ወይም በእንግሊዝኛ ይካፈሉ፣ ተስማሚውን ዕቅድ እንመርጣለን።
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="tel:+251111234567"
              className="inline-flex items-center rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-secondary/90"
            >
              Call Care Coordinator · የህክምና መምሪያ ይደውሉ
            </a>
            <a
              href="#appointment"
              className="inline-flex items-center rounded-full border border-primary/20 px-6 py-3 text-sm font-semibold text-primary transition hover:-translate-y-0.5 hover:border-primary/40"
            >
              Book Appointment · ቀጠሮ ይያዙ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
