import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-light/90 via-background/85 to-secondary-light/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-poppins">
            <span className="gradient-text">PG Admissions</span>
            <br />
            <span className="text-foreground">2025–26</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto font-light">
            Your Medical Career, Elevated.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant hover-lift px-8 py-6 text-lg"
              onClick={() => scrollToSection('departments')}
            >
              Explore Programs
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary bg-background/80 backdrop-blur-sm hover:bg-primary/10 px-8 py-6 text-lg"
              onClick={() => scrollToSection('eligibility')}
            >
              Check Eligibility
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};
