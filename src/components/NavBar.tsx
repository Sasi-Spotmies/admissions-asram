import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import fav from "@/assets/fav.png";

export const NavBar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollYRef = useRef<number>(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY || 0;
      const lastY = lastScrollYRef.current;
      setIsScrolled(currentY > 0);
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

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
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
    <header
    className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4 transition-transform duration-300 ${isScrolled ? 'bg-black/55 backdrop-blur-md border-b border-white/10' : 'bg-transparent'} ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
  >
        <div className="w-full max-w-7xl mx-auto">
        <div className="w-full flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <img src={fav} alt="Institution logo" className="w-10 h-10 md:w-12 md:h-12 rounded-lg shadow-sm object-contain" />
            <div>
              <h2 className={`text-xl md:text-2xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]`}>PG Admissions</h2>
              <p className={`hidden md:block text-xs font-medium text-white/90 drop-shadow-[0_1px_2px_rgba(0,0,0,0.75)]`}>2025–26 Academic Year</p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-1 md:gap-2">
            <button onClick={() => scrollToSection('departments')} className={`text-white/90 hover:text-white font-semibold text-sm md:text-base transition-all duration-200 relative group rounded-lg px-3 py-2 hover:bg-white/10` }>
              Programs
              <span className={`pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-200 group-hover:w-8 bg-white/90`}></span>
            </button>
            <button onClick={() => scrollToSection('eligibility')} className={`text-white/90 hover:text-white font-semibold text-sm md:text-base transition-all duration-200 relative group rounded-lg px-3 py-2 hover:bg-white/10`}>
              Eligibility
              <span className={`pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-200 group-hover:w-8 bg-white/90`}></span>
            </button>
            <button onClick={() => scrollToSection('fees')} className={`text-white/90 hover:text-white font-semibold text-sm md:text-base transition-all duration-200 relative group rounded-lg px-3 py-2 hover:bg-white/10`}>
              Admissions
              <span className={`pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-200 group-hover:w-8 bg-white/90`}></span>
            </button>
            <button onClick={() => scrollToSection('contact')} className={`text-white/90 hover:text-white font-semibold text-sm md:text-base transition-all duration-200 relative group rounded-lg px-3 py-2 hover:bg-white/10`}>
              Contact
              <span className={`pointer-events-none absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 transition-all duration-200 group-hover:w-8 bg-white/90`}></span>
            </button>
            <button onClick={() => scrollToSection('fees')} className={`ml-2 inline-flex items-center rounded-xl font-semibold px-4 py-2 bg-gradient-to-r from-white/10 to-white/5 text-white shadow-glow hover:shadow-lg ring-1 ring-white/30 hover:ring-white/60 transition-all duration-200 hover:scale-[1.02]` }>
              Apply Now
            </button>
          </nav>

          <button aria-label="Open menu" onClick={() => setMobileOpen((v) => !v)} className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 transition-colors`}>
            <span className={`block w-5 h-0.5 rounded-sm bg-white`} />
            <span className={`block w-5 h-0.5 rounded-sm mt-1.5 bg-white`} />
            <span className={`block w-5 h-0.5 rounded-sm mt-1.5 bg-white`} />
          </button>
        </div>

        {mobileOpen && (
          <div className={`lg:hidden mt-3 pt-3 -mx-4 md:-mx-8 px-4 md:px-8 pb-3 border-t border-white/20 bg-white/10 backdrop-blur-md`}>
            <div className="flex flex-col gap-2">
              <button onClick={() => { setMobileOpen(false); scrollToSection('departments'); }} className={`text-white/90 hover:text-white text-base font-semibold py-2 text-left rounded-md hover:bg-white/10`}>Programs</button>
              <button onClick={() => { setMobileOpen(false); scrollToSection('eligibility'); }} className={`text-white/90 hover:text-white text-base font-semibold py-2 text-left rounded-md hover:bg-white/10`}>Eligibility</button>
              <button onClick={() => { setMobileOpen(false); scrollToSection('fees'); }} className={`text-white/90 hover:text-white text-base font-semibold py-2 text-left rounded-md hover:bg-white/10`}>Admissions</button>
              <button onClick={() => { setMobileOpen(false); scrollToSection('contact'); }} className={`text-white/90 hover:text-white text-base font-semibold py-2 text-left rounded-md hover:bg-white/10`}>Contact</button>
              <button onClick={() => { setMobileOpen(false); scrollToSection('fees'); }} className={`mt-1 inline-flex items-center justify-center rounded-lg font-semibold px-4 py-2 bg-gradient-to-r from-blue-600  to-blue-600 text-white shadow-md hover:shadow-lg ring-2 ring-white/40 hover:ring-white/60 transition-all duration-200`}>Apply Now</button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavBar;
