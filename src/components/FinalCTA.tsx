import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
            Your Journey <span className="gradient-text">Begins Here</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join a legacy of medical excellence.
            <br />
            Discover, Learn, Heal — at ASRAM.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-5">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-elegant px-8 py-6 text-lg group"
            >
              Enquiry Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
          </div>

          {/* Contact Cards */}
          </div>
      </div>
    </section>
  );
};
