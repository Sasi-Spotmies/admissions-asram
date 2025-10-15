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

const DepartmentCard = ({ name, icon: Icon, seats, variant = false }: { name: string; icon: any; seats: number; variant?: boolean }) => (
  <div className="group cursor-pointer rounded-xl bg-white/80 backdrop-blur-sm border border-gray-200/80 shadow-sm hover:shadow-md transition-colors duration-200">
    <div className="relative rounded-xl">
      {/* Subtle, professional surface */}
      <div className={`relative rounded-[0.9rem] p-4 ${variant ? 'bg-white' : 'bg-white'}`}>
        {/* Compact horizontal header */}
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-base font-semibold text-gray-900 tracking-tight group-hover:text-blue-700 transition-colors">
            {name}
          </h3>
          <div className="w-9 h-9 rounded-lg bg-gray-50 border border-gray-200 text-blue-700 flex items-center justify-center">
            <Icon className="w-5 h-5" />
          </div>
        </div>
        {/* Footer tag removed */}
      </div>
    </div>
  </div>
);

export const Departments = () => {
  return (
    <section id="departments" className="py-14 relative overflow-hidden bg-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        {/* Page card wrapper */}
        <div className="mx-auto max-w-6xl rounded-3xl p-8 md:p-10 lg:p-12 shadow-lg border border-gray-200 bg-gradient-to-br from-yellow-50 via-white to-yellow-50/60">
          <div className="mb-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">Explore Our Programs</h2>
            <p className="mt-2 text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Choose from our specialized medical programs crafted to elevate your postgraduate journey.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {departments.map((dept, index) => (
              <div 
                key={dept.name}
                data-reveal-item
                className="fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <DepartmentCard {...dept} variant={index % 2 === 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
