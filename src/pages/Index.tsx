import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Departments } from "@/components/Departments";
import { AdmissionsJourney } from "@/components/AdmissionsJourney";
import { FeeCalculator } from "@/components/FeeCalculator";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { KeyDates } from "@/components/KeyDates";
import { Announcements } from "@/components/Announcements";
import { FAQs } from "@/components/FAQs";
import { Downloads } from "@/components/Downloads";
import { SupportStrip } from "@/components/SupportStrip";
 

const Index = () => {
  return (
    <main className="min-h-screen">
      <div><Hero /></div>
      <div><About /></div>
      <div><Departments /></div>
      <div><FeeCalculator /></div>
      <div><AdmissionsJourney /></div>
      <div><KeyDates /></div>
      <div><FAQs /></div>
      <div><Footer /></div>
    </main>
  );
};

export default Index;
