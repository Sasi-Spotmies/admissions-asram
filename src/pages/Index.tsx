import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Departments } from "@/components/Departments";
import { AdmissionsJourney } from "@/components/AdmissionsJourney";
import { FeeCalculator } from "@/components/FeeCalculator";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
 

const Index = () => {
  return (
    <main className="min-h-screen">
      <div><Hero /></div>
      <div><About /></div>
      <div><Departments /></div>
      <div><FeeCalculator /></div>
      <div><AdmissionsJourney /></div>
      <div><Footer /></div>
    </main>
  );
};

export default Index;
