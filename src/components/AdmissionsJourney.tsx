import { CheckCircle2, FileText, UserCheck, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    icon: CheckCircle2,
    title: "Check NEET-PG Eligibility",
    description:
      "Ensure you meet the basic eligibility criteria and have a valid NEET-PG score",
  },
  {
    icon: FileText,
    title: "Participate in Counseling",
    description:
      "Register for Dr. NTRUHS counseling and submit your preferred choices",
  },
  {
    icon: UserCheck,
    title: "Document Verification",
    description:
      "Attend verification with original certificates and receive seat allotment",
  },
  {
    icon: CreditCard,
    title: "Pay Fees & Confirm",
    description:
      "Complete fee payment within the deadline to secure your admission",
  },
];

export function AdmissionsJourney() {
  const navigate = useNavigate(); // ✅ Correct hook for navigation

  return (
    <section
      id="eligibility"
      className="relative py-28 bg-gradient-to-br from-slate-50 via-sky-50 to-slate-100 overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      {/* Animated Grid Lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(59,130,246,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59,130,246,0.08) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(circle at center, white 60%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, white 60%, transparent 100%)",
          transform: "translateZ(0)",
          animation: "gridShift 20s linear infinite",
        }}
      />
    
      {/* Glowing Dots at Intersections */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(59,130,246,0.25)_1px,transparent_1px)]"
        style={{
          backgroundSize: "44px 44px",
          filter: "blur(0.5px)",
          opacity: 0.4,
          animation: "gridGlow 6s ease-in-out infinite alternate",
        }}
      />
    
      {/* Subtle Flowing Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(99,102,241,0.15), transparent 70%),
            radial-gradient(ellipse at 80% 70%, rgba(59,130,246,0.12), transparent 70%)
          `,
          mixBlendMode: "soft-light",
          animation: "flowShift 30s ease-in-out infinite alternate",
        }}
      />
    </div>
    

      {/* Bottom-to-top red background layer */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-200/40 via-red-500/10 to-transparent"
        aria-hidden
      />

      {/* Soft top vignette */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-100/40 to-transparent"
        aria-hidden
      />

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            <span className="text-slate-900 font-serif">
              Your Admissions Journey
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-sky-600/60 rounded mx-auto mb-6" />
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            A precise, professional roadmap to secure your PG seat
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                data-reveal-item
                className="relative transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                {/* Connector Line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 left-[62%] w-[82%] h-px bg-gradient-to-r from-sky-400/70 via-sky-300/30 to-transparent z-0" />
                )}

                <div className="relative z-10 rounded-2xl p-6 h-full bg-white border border-sky-200 hover:border-sky-600/40 transition-colors shadow-[0_12px_28px_-14px_rgba(37,99,235,0.35)]">
                  {/* Step Badge */}
                  <div className="absolute -top-3 -left-3 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold tracking-wide text-sky-900 bg-sky-100 border border-sky-200 shadow-sm">
                    STEP {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-lg bg-sky-50 ring-1 ring-sky-200">
                    <step.icon className="w-7 h-7 text-sky-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold mb-2 tracking-tight text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
        <button
        onClick={() => window.open("https://login.orfus.in/", "_blank")} // ✅ opens in new tab
        className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 border border-sky-600/70 shadow-[0_10px_26px_-14px_rgba(37,99,235,0.55)] transition-transform duration-300 hover:scale-105 cursor-pointer"
      >
        Take Admission Now
      </button>
      
        </div>
      </div>
    </section>
  );
}
