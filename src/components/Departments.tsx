import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Brain, 
  Eye, 
  Baby, 
  Bone, 
  Stethoscope,
  Syringe,
  Activity,
  Microscope,
  Pill,
  HeartPulse,
  UserRound
} from "lucide-react";

const departments = [
  { name: "General Medicine", icon: Stethoscope, seats: 12 },
  { name: "General Surgery", icon: Syringe, seats: 10 },
  { name: "Pediatrics", icon: Baby, seats: 8 },
  { name: "Obstetrics & Gynecology", icon: Heart, seats: 8 },
  { name: "Orthopedics", icon: Bone, seats: 6 },
  { name: "Ophthalmology", icon: Eye, seats: 4 },
  { name: "ENT", icon: UserRound, seats: 4 },
  { name: "Anesthesiology", icon: Activity, seats: 8 },
  { name: "Radiology", icon: Activity, seats: 6 },
  { name: "Pathology", icon: Microscope, seats: 5 },
  { name: "Psychiatry", icon: Brain, seats: 4 },
  { name: "Dermatology", icon: HeartPulse, seats: 4 },
];

export const Departments = () => {
  return (
    <section id="departments" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins gradient-text">
            Explore Departments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from 15+ specializations across Pre-Clinical, Para-Clinical, and Clinical streams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card hover:bg-gradient-to-br hover:from-primary-light/10 hover:to-secondary-light/10 border-border hover:border-primary/30 transition-all duration-300 hover-lift cursor-pointer"
            >
              <div className="p-6">
                <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <dept.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {dept.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {dept.seats} seats available
                </p>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary hover:bg-primary/10"
          >
            View Complete Seat Matrix
          </Button>
        </div>
      </div>
    </section>
  );
};
