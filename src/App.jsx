import React, { useEffect } from 'react';
import { Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Overview from './pages/Overview';
import About from './pages/About';
import Services from './pages/Services';
import Doctors from './pages/Doctors';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const scrollToElement = () => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };

      if (document.readyState === 'complete') {
        requestAnimationFrame(scrollToElement);
        return;
      }

      window.addEventListener('load', scrollToElement, { once: true });

      return () => {
        window.removeEventListener('load', scrollToElement);
      };
    }

    window.scrollTo({ top: 0, behavior: 'auto' });

    return undefined;
  }, [pathname, hash]);

  return null;
}

function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col text-ink">
      <Navbar />
      <main className="flex-1">
        <ScrollToHash />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Overview />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
