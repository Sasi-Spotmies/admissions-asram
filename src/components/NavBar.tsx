import { useEffect, useRef, useState } from "react";
import fav from "@/assets/fav.png";

export const NavBar = () => {
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollYRef = useRef<number>(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      const lastY = lastScrollYRef.current;
      if (currentY < 10) {
        setShowHeader(true);
      } else {
        setShowHeader(currentY < lastY);
      }
      lastScrollYRef.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      // If not on the home page or element not present yet, navigate via hash
      window.location.href = `/#${id}`;
      // Try again after navigation
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-gray-100 transition-transform duration-300 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img src={fav} alt="Institution logo" className="w-12 h-12 rounded-lg shadow-sm object-contain bg-white" />
          <div>
            <h2 className="text-2xl font-bold text-gray-900 tracking-tight">PG Admissions</h2>
            <p className="text-sm text-gray-500 font-medium">2025-26 Academic Year</p>
          </div>
        </div>

        <nav className="hidden lg:flex items-center gap-10">
          <button onClick={() => scrollToSection('departments')} className="text-gray-700 hover:text-blue-600 font-semibold text-base transition-all duration-300 hover:scale-105 relative group">
            Programs
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('eligibility')} className="text-gray-700 hover:text-blue-600 font-semibold text-base transition-all duration-300 hover:scale-105 relative group">
            Eligibility
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('fees')} className="text-gray-700 hover:text-blue-600 font-semibold text-base transition-all duration-300 hover:scale-105 relative group">
            Admissions
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-600 font-semibold text-base transition-all duration-300 hover:scale-105 relative group">
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
