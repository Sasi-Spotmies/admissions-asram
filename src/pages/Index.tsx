import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Departments } from "@/components/Departments";
import { AdmissionsJourney } from "@/components/AdmissionsJourney";
import { FeeCalculator } from "@/components/FeeCalculator";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal(".reveal", { childSelector: "[data-reveal-item]", stagger: 0.1 });
  return (
    <main className="min-h-screen">
      <div className="reveal"><Hero /></div>
      <div className="reveal"><About /></div>
      <div className="reveal"><Departments /></div>
      <div className="reveal"><FeeCalculator /></div>
      <div className="reveal"><AdmissionsJourney /></div>
      <div className="reveal"><Footer /></div>
    </main>
  );
};

export default Index;
