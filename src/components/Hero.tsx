import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden parallax-container"
      style={{
        background: 'linear-gradient(135deg, hsl(210 40% 98%) 0%, hsl(200 60% 96%) 50%, hsl(180 40% 97%) 100%)',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div 
          className="absolute w-96 h-96 rounded-full bg-primary/20 blur-3xl floating"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute w-96 h-96 rounded-full bg-secondary/20 blur-3xl floating"
          style={{
            bottom: '10%',
            right: '10%',
            animationDelay: '-3s',
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full bg-accent/15 blur-3xl floating"
          style={{
            top: '50%',
            right: '20%',
            animationDelay: '-1.5s',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(hsl(200 95% 65%) 1px, transparent 1px), linear-gradient(90deg, hsl(200 95% 65%) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Glassmorphic Content Card */}
      <div className="relative z-10 container mx-auto px-4">
        <div 
          className="glass-strong rounded-3xl p-12 md:p-16 max-w-5xl mx-auto text-center magnetic-hover"
          style={{
            transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* Sparkle Icon */}
          <div className="flex justify-center mb-6">
            <div className="glass rounded-full p-4 pulse-glow">
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 font-display tracking-tight">
            <span className="gradient-text block mb-2">PG Admissions</span>
            <span className="text-4xl md:text-5xl text-foreground/80 font-light">2025–26</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Your Medical Future, Reimagined.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="glass-strong border-2 border-primary/20 text-primary hover:bg-primary hover:text-white glow-on-hover px-10 py-7 text-lg font-medium rounded-2xl group transition-all duration-500"
              onClick={() => scrollToSection('departments')}
            >
              <span className="flex items-center gap-2">
                Explore Programs
                <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
            <Button 
              size="lg" 
              className="glass border-2 border-primary/20 text-foreground hover:border-primary hover:text-primary px-10 py-7 text-lg font-medium rounded-2xl transition-all duration-500"
              onClick={() => scrollToSection('eligibility')}
            >
              Check Eligibility
            </Button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">160+</div>
              <div className="text-sm text-muted-foreground">PG Seats</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">25+</div>
              <div className="text-sm text-muted-foreground">Years Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">100%</div>
              <div className="text-sm text-muted-foreground">Placement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce glass rounded-full p-3">
          <ChevronDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
