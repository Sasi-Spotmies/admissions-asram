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
    <section ref={sectionRef} className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary-light/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20 fade-in-up">
          <div className="inline-block glass rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-primary">About ASRAM</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-display">
            Where <span className="gradient-text">Vision</span> Meets Excellence
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Alluri Sitarama Raju Academy of Medical Sciences stands as a beacon of medical education excellence, 
            pioneering innovation while nurturing the healers of tomorrow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              {...stat}
              isVisible={isVisible}
              delay={index * 150}
            />
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
      className="glass-card tilt-hover glow-on-hover"
      style={{
        animation: isVisible ? `fade-in 0.6s ease-out ${delay}ms both` : 'none',
      }}
    >
      <div className="relative">
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <div className="glass rounded-2xl p-4 pulse-glow">
            <Icon className="w-8 h-8 text-primary" />
          </div>
        </div>
        <div className="pt-8 text-center">
          <div className="text-5xl font-bold gradient-text mb-2 font-display">{count}{suffix}</div>
          <div className="text-muted-foreground font-medium">{label}</div>
        </div>
      </div>
    </div>
  );
};
