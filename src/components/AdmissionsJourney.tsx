import { CheckCircle2, FileText, UserCheck, CreditCard } from "lucide-react";

const steps = [
  {
    icon: CheckCircle2,
    title: "Check NEET-PG Eligibility",
    description: "Ensure you meet the basic eligibility criteria and have a valid NEET-PG score",
  },
  {
    icon: FileText,
    title: "Participate in Counseling",
    description: "Register for Dr. NTRUHS counseling and submit your preferred choices",
  },
  {
    icon: UserCheck,
    title: "Document Verification",
    description: "Attend verification with original certificates and receive seat allotment",
  },
  {
    icon: CreditCard,
    title: "Pay Fees & Confirm",
    description: "Complete fee payment within the deadline to secure your admission",
  },
];

export const AdmissionsJourney = () => {
  return (
    <section id="eligibility" className="py-24 bg-gradient-to-br from-secondary-light/20 to-primary-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-poppins">
            Your Admissions Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simplified roadmap to your medical future
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative"
                style={{
                  animation: `fade-in 0.6s ease-out ${index * 150}ms both`,
                }}
              >
                {/* Connector Line (hidden on mobile, shown on larger screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-secondary z-0">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary animate-pulse" />
                  </div>
                )}

                <div className="relative z-10 bg-card rounded-2xl p-6 shadow-soft hover-lift h-full">
                  {/* Step Number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shadow-lg">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
