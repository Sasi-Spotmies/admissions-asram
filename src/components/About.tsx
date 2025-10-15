import { useEffect, useRef, useState } from "react";
import { GraduationCap, Award, Building2 } from "lucide-react";

const stats = [
  { icon: GraduationCap, value: 160, suffix: "+", label: "PG Seats" },
  { icon: Award, value: 25, suffix: "+", label: "Years of Excellence" },
  { icon: Building2, value: 15, suffix: "+", label: "Specializations" },
];

export const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="pb-20 pt-20 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Seamless continuation of Hero bottom gradient */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[70vh] bg-gradient-to-b from-blue-200/60 via-blue-100/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 fade-in-up">
          <div className="inline-block rounded-full px-5 py-2 mb-6 bg-white/80 backdrop-blur border border-gray-200">
            <span className="text-sm font-semibold text-blue-700 tracking-wide">About ASRAM</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 font-serif text-gray-900">
            Where Vision Meets Excellence
          </h2>
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Alluri Sitarama Raju Academy of Medical Sciences stands as a beacon of medical education excellence, 
            pioneering innovation while nurturing the healers of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} data-reveal-item>
              <StatCard
                {...stat}
                isVisible={isVisible}
                delay={index * 150}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
  delay: number;
}

const StatCard = ({ icon: Icon, value, suffix, label, isVisible, delay }: StatCardProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      className="group relative rounded-xl bg-white/25 backdrop-blur-md border border-white/50 shadow-[0_2px_14px_rgba(0,0,0,0.06)] transition-all duration-200 hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)] hover:-translate-y-0.5"
      style={{
        animation: isVisible ? `fade-in 0.45s ease-out ${delay}ms both` : 'none',
      }}
    >
      <div className="p-4 text-center">
        <div className="flex items-center justify-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-white/40 ring-1 ring-white/70 text-blue-700 flex items-center justify-center shadow-sm">
            <Icon className="w-4.5 h-4.5" />
          </div>
          <div className="text-2xl md:text-3xl font-semibold text-gray-900 font-serif">{count}{suffix}</div>
        </div>
        <div className="mt-3 text-[10px] md:text-xs text-gray-700/80 font-medium tracking-wide uppercase">{label}</div>
      </div>
    </div>
  );
};
