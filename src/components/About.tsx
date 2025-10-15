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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            The Institution of Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alluri Sitarama Raju Academy of Medical Sciences (ASRAM) stands as a beacon of medical education 
            excellence in Andhra Pradesh. With state-of-the-art facilities, renowned faculty, and a commitment 
            to holistic medical training, we shape the healers of tomorrow.
          </p>
        </div>

        {/* Animated Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
      className="bg-card rounded-2xl p-8 shadow-soft hover-lift text-center"
      style={{
        animation: isVisible ? `fade-in 0.6s ease-out ${delay}ms both` : 'none',
      }}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <div className="text-4xl font-bold mb-2 font-poppins gradient-text">
        {count}{suffix}
      </div>
      <div className="text-muted-foreground font-medium">{label}</div>
    </div>
  );
};
