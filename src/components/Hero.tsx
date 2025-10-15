 
import { useEffect, useRef, useState } from "react";
import heroBg from "../assets/l2.jpg";

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

 

  return (
    <div className="min-h-screen bg-transparent pt-10 relative overflow-hidden">
      {/* Background Image (behind content, above container background) */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Medical campus background" className="w-full h-full object-cover opacity-100 filter grayscale" />
      </div>
      {/* Dark overlay to improve text contrast */}
      {/* Bottom to Middle Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" style={{ height: '100%' }}></div>
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

        {/* Right-side vertical labels (hidden on small screens) */}
        <div className="hidden md:flex flex-row gap-3 absolute right-10 bottom-1/4 z-30 origin-right rotate-90">
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-black/10 text-white backdrop-blur border border-white/20 shadow-sm">Excellence</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-black/40 text-white backdrop-blur border border-white/20 shadow-sm">Innovation</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-white/10 text-white backdrop-blur border border-white/20 shadow-sm">Careers</span>
        </div>

        {/* Bottom-anchored professional title */}
        <div className={`pointer-events-none absolute bottom-[-60px] left-0 right-0 z-30 w-full px-6  text-center transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
          <h1 className="text-[42px] title-text md:text-[90px] lg:text-[118px] font-extralight leading-tight tracking-tight font-display text-transparent bg-clip-text bg-gradient-to-r from-black via-gray-300 to-gray-950/10 select-none">
            PG Admissions
          </h1>
        </div>


    </section>
    </div>
  );
};
