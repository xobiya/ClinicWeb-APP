import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';

export default function Services() {
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
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              badge={service.badge}
              title={service.title}
              image={service.image}
              imageAlt={service.imageAlt}
            >
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

