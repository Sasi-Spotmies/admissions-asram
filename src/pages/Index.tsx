import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Departments } from "@/components/Departments";
import { AdmissionsJourney } from "@/components/AdmissionsJourney";
import { FeeCalculator } from "@/components/FeeCalculator";
import { DocumentChecklist } from "@/components/DocumentChecklist";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Departments />
      <AdmissionsJourney />
      <FeeCalculator />
      <DocumentChecklist />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
