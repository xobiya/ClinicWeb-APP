import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import StatsCounter from '../components/StatsCounter';
import ProcessSteps from '../components/ProcessSteps';
import FAQSection from '../components/FAQSection';
import {
  heroStats,
  processSteps,
  services,
  faqs,
  achievements,
  testimonialsFull,
  emergencyContact
} from '../data/landing';

const serviceIconMap = {
  bone: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  therapy: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  spine: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 6v12M8 12h8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  sports: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <circle cx="12" cy="12" r="10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  pain: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  child: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-8 w-8">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="7" r="4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
};

export default function Landing() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonialsFull.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonialsFull.length) % testimonialsFull.length);
  };

  return (
    <div className="space-y-32">
      {/* Hero Section with Gradient Background */}
      <section className="relative overflow-hidden pt-12">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gradient-to-br from-secondary/20 to-primary/20 blur-3xl" />
        </div>

        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-2 backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                  Advanced Orthopedic Care · የተሻሻለ የአጥንት እንክብካቤ
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-tight text-ink md:text-6xl lg:text-7xl">
                Your Trusted
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Orthopedic</span>
                <br />
                Care Partner
              </h1>

              <p className="text-lg leading-relaxed text-ink/70 md:text-xl">
                Relief for joint, spine, and bone pain with compassionate doctors, precision diagnostics, and personalized rehabilitation.
              </p>
              <p className="text-base text-ink/60">
                እርስዎ የሚታመኑት የአጥንት እና የጅማት ስፔሻሊስት፣ በአዲስ አበባ የሚገኘው የሙያ ባለሙያ ቡድን ነን።
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/appointment"
                  className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-4 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-lg"
                >
                  <span className="relative z-10">Book Appointment · ቀጠሮ ይያዙ</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <div className="absolute inset-0 -z-0 bg-gradient-to-r from-secondary to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </Link>

                <a
                  href={`tel:${emergencyContact.phone}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-secondary/50 bg-white px-8 py-4 text-sm font-semibold text-secondary transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-secondary/5 hover:shadow-xl"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Emergency Call · የአደጋ ጊዜ ጥሪ
                </a>
              </div>

              {/* Quick Features */}
              <div className="grid gap-3 text-sm sm:grid-cols-2">
                {[
                  { icon: '⚡', text: 'Same-day imaging & consultation', textAm: 'በዚያኑ ቀን ምርመራ' },
                  { icon: '🏥', text: 'MoH Ethiopia accredited', textAm: 'በጤና ሚኒስቴር የተረጋገጠ' },
                  { icon: '👨‍⚕️', text: '25+ specialist doctors', textAm: '25+ ስፔሻሊስት ሐኪሞች' },
                  { icon: '⭐', text: '97% patient satisfaction', textAm: '97% የታካሚ እርካታ' }
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/50 p-3 backdrop-blur-sm">
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      <div className="text-sm font-semibold text-ink">{feature.text}</div>
                      <div className="text-xs text-ink/60">{feature.textAm}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.pexels.com/photos/5794050/pexels-photo-5794050.jpeg?auto=compress&cs=tinysrgb&w=1200&h=900&dpr=1"
                  alt="Orthopedic specialist supporting patient"
                  className="h-full w-full rounded-3xl object-cover shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200/80 bg-white/95 p-6 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-2xl text-white shadow-lg">
                    ⭐
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-ink">12,000+</div>
                    <div className="text-sm text-ink/70">Happy Patients</div>
                    <div className="text-xs text-ink/50">ደስተኛ ታካሚዎች</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section>
        <div className="container">
          <StatsCounter stats={heroStats} />
        </div>
      </section>

      {/* Services Section */}
      <section>
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Our Services · አገልግሎቶቻችን
            </span>
            <h2 className="text-4xl font-bold text-ink md:text-5xl">
              Comprehensive Orthopedic Solutions
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
              From diagnosis to recovery, we offer complete care for all your bone and joint needs
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`} />
                  
                  <div className="relative space-y-4">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                      {Icon && <Icon />}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                      <p className="mt-1 text-sm text-ink/60">{service.titleAm}</p>
                    </div>
                    
                    <p className="text-sm leading-relaxed text-ink/70">{service.description}</p>
                    
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300 group-hover:gap-3"
                    >
                      Learn More
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section>
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              How It Works · እንዴት ይሰራል
            </span>
            <h2 className="text-4xl font-bold text-ink md:text-5xl">
              Your Journey to Recovery
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
              Simple, transparent process from booking to complete recovery
            </p>
          </div>

          <ProcessSteps steps={processSteps} />
        </div>
      </section>

      {/* Achievements Section */}
      <section>
        <div className="container">
          <div className="rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/50 p-12 shadow-2xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-4xl text-white shadow-xl">
                    {achievement.icon === 'certificate' && '🏆'}
                    {achievement.icon === 'award' && '⭐'}
                    {achievement.icon === 'technology' && '🔬'}
                    {achievement.icon === 'team' && '👨‍⚕️'}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-ink">{achievement.title}</h3>
                  <p className="text-sm text-ink/60">{achievement.titleAm}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink/50">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section>
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Testimonials · ምስክርነቶች
            </span>
            <h2 className="text-4xl font-bold text-ink md:text-5xl">
              What Our Patients Say
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
              Real stories from real people who trusted us with their recovery
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 shadow-2xl md:p-12">
              <div className="mx-auto max-w-4xl">
                {testimonialsFull.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`transition-all duration-500 ${
                      index === activeTestimonial ? 'block' : 'hidden'
                    }`}
                  >
                    <div className="mb-6 flex justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-accent">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="mb-8 text-center text-xl leading-relaxed text-ink md:text-2xl">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="h-16 w-16 rounded-full object-cover shadow-lg"
                      />
                      <div className="text-left">
                        <div className="text-lg font-bold text-ink">{testimonial.name}</div>
                        <div className="text-sm text-ink/60">{testimonial.nameAm}</div>
                        <div className="mt-1 text-xs text-secondary">{testimonial.role}</div>
                        <div className="text-xs text-ink/50">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="mt-6 flex items-center justify-center gap-4">
              <button
                onClick={prevTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-white text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <div className="flex gap-2">
                {testimonialsFull.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === activeTestimonial
                        ? 'w-8 bg-gradient-to-r from-primary to-secondary'
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-white text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white hover:shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <div className="container space-y-12">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-secondary/10 to-primary/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
              FAQ · ተደጋጋሚ ጥያቄዎች
            </span>
            <h2 className="text-4xl font-bold text-ink md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-ink/70">
              Find answers to common questions about our services and procedures
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <FAQSection faqs={faqs} />
          </div>
        </div>
      </section>

      {/* Emergency CTA Section */}
      <section>
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-red-50 to-orange-50 p-12 shadow-2xl">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-gradient-to-br from-red-500/10 to-orange-500/10 blur-3xl" />
            
            <div className="relative text-center">
              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-4xl text-white shadow-2xl">
                🚨
              </div>
              
              <h2 className="mb-4 text-3xl font-bold text-ink md:text-4xl">
                Need Emergency Care?
              </h2>
              <p className="mb-2 text-lg text-ink/70">
                We're available 24/7 for urgent orthopedic emergencies
              </p>
              <p className="mb-8 text-sm text-ink/60">
                የአደጋ ጊዜ የአጥንት እንክብካቤ 24/7 ይገኛል
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`tel:${emergencyContact.phone}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-brand-lg"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Emergency: {emergencyContact.phone}
                </a>
                
                <a
                  href={`https://wa.me/${emergencyContact.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-green-500 bg-white px-8 py-4 text-lg font-semibold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:bg-green-50 hover:shadow-xl"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp: {emergencyContact.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="pb-12">
        <div className="container">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-primary to-secondary p-12 text-center text-white shadow-2xl md:p-16">
            <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            
            <div className="relative">
              <h2 className="mb-4 text-4xl font-bold md:text-5xl">
                Ready to Start Your Recovery?
              </h2>
              <p className="mb-2 text-xl">
                Book your appointment today and take the first step towards a pain-free life
              </p>
              <p className="mb-8 text-lg opacity-90">
                ዛሬ ቀጠሮዎን ያስይዙ እና ወደ ህመም-ነጻ ህይወት የመጀመሪያውን እርምጃ ይውሰዱ
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white px-8 py-4 text-lg font-semibold text-primary shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:bg-slate-50"
                >
                  Book Appointment Now
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5">
                    <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
