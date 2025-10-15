import { Button } from "@/components/ui/button";
import { Sparkles, Zap, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import fav from "../assets/fav.png";

export const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  // header visibility now handled by NavBar at app level

  useEffect(() => {
    setIsLoaded(true);
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
    <div className="min-h-screen bg-gradient-to-br pt-10 from-gray-100 via-white to-white relative overflow-hidden">
      {/* Bottom to Middle Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-200/60 via-blue-100/70 to-transparent pointer-events-none" style={{ height: '50%' }}></div>
      {/* Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Orbs */}
        <div 
          className="absolute   w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-100/30 to-indigo-100/30 blur-3xl"
          style={{
            top: '8%',
            left: '8%',
            transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px)`,
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <div 
          className="absolute w-[350px] h-[350px] rounded-full bg-gradient-to-r from-slate-100/25 to-gray-100/25 blur-3xl"
          style={{
            bottom: '15%',
            right: '15%',
            transform: `translate(${-mousePosition.x * 0.12}px, ${-mousePosition.y * 0.12}px)`,
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <div 
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-blue-50/40 to-indigo-50/40 blur-3xl"
          style={{
            top: '45%',
            right: '30%',
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px)`,
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
        <div 
          className="absolute w-[250px] h-[250px] rounded-full bg-gradient-to-r from-gray-100/20 to-slate-100/20 blur-3xl"
          style={{
            top: '25%',
            left: '60%',
            transform: `translate(${mousePosition.x * 0.06}px, ${mousePosition.y * 0.06}px)`,
            transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />
      </div>

      {/* Header moved to global NavBar */}

      {/* Main Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-[calc(100vh-120px)] flex items-center justify-center px-4 pt-28"
      >

        {/* Main Content */}
        <div className="relative z-10 container mx-auto text-center max-w-7xl px-6">
          {/* Eyebrow Badge */}
          <div className={`inline-flex items-center gap-3 px-5 py-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
              <Zap className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-800 tracking-wide uppercase">Postgraduate Admissions</span>
            <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
              <Sparkles className="w-3 h-3 text-white" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block text-gray-900 leading-[1.0] tracking-tight font-serif">
              PG Admissions
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl text-gray-600 font-light mt-4 tracking-wide">
              2025–26
            </span>
          </h1>

          {/* Subtle Divider */}
          <div className={`w-24 h-0.5 bg-blue-600/40 rounded mx-auto mb-10 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-50'}`}></div>
          
          {/* Subtitle */}
          <p className={`text-xl md:text-2xl text-gray-600 mb-14 max-w-3xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transform your medical career with our world-class postgraduate programs. 
            <span className="text-blue-600 font-semibold"> Excellence</span>, 
            <span className="text-gray-800 font-semibold"> Innovation</span>, and 
            <span className="text-gray-900 font-semibold"> Success</span> await you.
          </p>
          
          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-5 justify-center items-center mb-14 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-5 text-base font-semibold rounded-lg shadow-sm hover:shadow-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2 hover:-translate-y-0.5"
              onClick={() => scrollToSection('departments')}
            >
              <span className="flex items-center gap-2">
                Explore Programs
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-700 px-8 py-5 text-base font-semibold rounded-lg bg-white/95 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/60 focus-visible:ring-offset-2"
              onClick={() => scrollToSection('eligibility')}
            >
              Check Eligibility
            </Button>
          </div>

          {/* Stats Grid removed as requested */}
      </div>

    </section>
    </div>
  );
};
