import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col text-ink">
      <Navbar />
      <main className="flex-1 space-y-28 pb-24 pt-24 md:pt-32">
        <section id="home" className="scroll-mt-32">
          <Home />
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
      </main>
      <Footer />
    </div>
  );
}
