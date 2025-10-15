import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type RevealOptions = {
  y?: number;
  duration?: number;
  stagger?: number;
  childSelector?: string; // e.g., "[data-reveal-item]"
};

export function useScrollReveal(selector: string = ".reveal", options?: RevealOptions) {
  useEffect(() => {
    const sectionNodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (sectionNodes.length === 0) return;

    const ctx = gsap.context(() => {
      sectionNodes.forEach((sectionEl) => {
        // Only animate inner elements, each with its own trigger so it reveals when it is viewed
        const children: HTMLElement[] = options?.childSelector
          ? Array.from(sectionEl.querySelectorAll<HTMLElement>(options.childSelector))
          : (Array.from(sectionEl.children) as unknown as HTMLElement[]);

        children.forEach((childEl) => {
          gsap.set(childEl, { opacity: 0, y: options?.y ?? 24 });
          gsap.to(childEl, {
            opacity: 1,
            y: 0,
            ease: "power2.out",
            duration: options?.duration ?? 0.6,
            scrollTrigger: {
              trigger: childEl,
              start: "top 85%",
              toggleActions: "play none none none",
              once: true,
            },
          });
        });
      });
    });

    return () => ctx.revert();
  }, [selector, options?.y, options?.duration, options?.stagger, options?.childSelector]);
}


