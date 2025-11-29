import React from 'react';
import Landing from './Landing';
import About from './About';
import Services from './Services';
import Doctors from './Doctors';
import Appointment from './Appointment';
import Contact from './Contact';

export default function Overview() {
  return (
    <div className="space-y-28 pb-24 pt-24 md:pt-32">
      <section id="home" className="scroll-mt-32">
        <Landing />
      </section>
      <section id="about" className="scroll-mt-32">
        <About />
      </section>
      <section id="services" className="scroll-mt-32">
        <Services />
      </section>
      <section id="doctors" className="scroll-mt-32">
        <Doctors />
      </section>
      <section id="appointment" className="scroll-mt-32">
        <Appointment />
      </section>
      <section id="contact" className="scroll-mt-32">
        <Contact />
      </section>
    </div>
  );
}
