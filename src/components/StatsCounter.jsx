import React, { useState, useEffect, useRef } from 'react';

export default function StatsCounter({ stats }) {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    stats.forEach((stat, index) => {
      const target = parseInt(stat.number);
      const increment = target / steps;
      let current = 0;
      let step = 0;

      const timer = setInterval(() => {
        step++;
        current = Math.min(current + increment, target);
        
        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = Math.floor(current);
          return newCounts;
        });

        if (step >= steps) {
          clearInterval(timer);
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = target;
            return newCounts;
          });
        }
      }, stepDuration);
    });
  }, [isVisible, stats]);

  return (
    <div ref={sectionRef} className="grid grid-cols-2 gap-6 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="group relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="relative">
            <div className="mb-2 text-4xl font-bold text-primary lg:text-5xl">
              {counts[index]}
              <span className="text-secondary">{stat.suffix}</span>
            </div>
            <div className="text-sm font-semibold text-ink">{stat.label}</div>
            <div className="mt-1 text-xs text-ink/60">{stat.labelAm}</div>
          </div>
          <div className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-2xl transition-all duration-300 group-hover:scale-150" />
        </div>
      ))}
    </div>
  );
}
