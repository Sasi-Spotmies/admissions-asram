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

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white shadow-elegant px-8 py-6 text-lg group"
            >
              Pay Fee Now
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-primary hover:bg-primary/10 px-8 py-6 text-lg"
            >
              Download Brochure
            </Button>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Call Admissions</h3>
              <a 
                href="tel:+918332699999" 
                className="text-primary hover:underline"
              >
                +91 83326 99999
              </a>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-soft hover-lift">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Email Enquiry</h3>
              <a 
                href="mailto:admissions@asram.edu.in" 
                className="text-secondary hover:underline"
              >
                admissions@asram.edu.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
