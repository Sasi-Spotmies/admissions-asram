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
  HeartPulse,
  UserRound,
  ArrowRight
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

const DepartmentCard = ({ name, icon: Icon, seats }: { name: string; icon: any; seats: number }) => (
  <div className="glass-card magnetic-hover group cursor-pointer">
    <div className="relative">
      {/* Icon Container */}
      <div className="glass rounded-xl p-4 inline-block mb-6 group-hover:scale-110 transition-transform duration-500">
        <Icon className="w-10 h-10 text-primary" />
      </div>
      
      {/* Content */}
      <h3 className="text-2xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
        {name}
      </h3>
      <p className="text-muted-foreground mb-6 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary pulse-glow"></span>
        {seats} Seats Available
      </p>
      
      {/* Learn More Link */}
      <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-sm">Learn More</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  </div>
);

export const Departments = () => {
  return (
    <section id="departments" className="py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(200 95% 65%) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 fade-in-up">
          <div className="inline-block glass rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium text-primary">Specializations</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-display">
            Explore Our <span className="gradient-text">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of specialized medical programs, 
            each meticulously designed to shape leaders in healthcare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {departments.map((dept, index) => (
            <div 
              key={dept.name} 
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <DepartmentCard {...dept} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="glass-strong border-2 border-primary/20 text-primary hover:bg-primary hover:text-white glow-on-hover px-10 py-7 text-lg font-medium rounded-2xl transition-all duration-500"
          >
            View Complete Seat Matrix
          </Button>
        </div>
      </div>
    </section>
  );
};
