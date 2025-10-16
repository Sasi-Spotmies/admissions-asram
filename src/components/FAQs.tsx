import React, { useMemo } from "react";

type QA = { q: string; a: string };

const faqs: QA[] = [
  { q: "What are the eligibility requirements?", a: "Applicants must hold an MBBS degree with internship completion and valid registration per NMC norms. Specific program prerequisites may apply." },
  { q: "How is the fee refund handled?", a: "Refunds follow the institutional policy and regulatory guidelines. Timelines vary by stage of withdrawal." },
  { q: "Are scholarships available?", a: "Limited merit and need-based assistance is available. Refer to Scholarships section for criteria and deadlines." },
  { q: "Is hostel accommodation mandatory?", a: "Hostel is optional and allocated subject to availability. See Hostel table for annual charges." },
];

export const FAQs = () => {
  const jsonLd = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  }), []);

  return (
    <section id="faqs" className="py-12 bg-gray-100 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-sky-200/40 via-sky-100/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-8 font-exo2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-700 text-xs font-semibold border border-indigo-200/50 mb-3 shadow-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
              </svg>
              FAQs
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight mb-2">Frequently Asked Questions</h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto font-normal">Find answers to common questions about admissions and requirements</p>
          </div>
          
          <div className="space-y-3">
            {faqs.map((f, index) => (
              <div key={f.q} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-100 to-blue-100 rounded-xl blur opacity-10 group-hover:opacity-20 transition duration-300 -z-10"></div>
                <details className="relative z-10 rounded-xl border border-gray-200/60 bg-white/90 backdrop-blur-lg shadow-md hover:shadow-lg transition-all duration-300 group-open:shadow-lg font-exo2">
                  <summary className="cursor-pointer list-none p-4 flex items-start justify-between gap-4 hover:bg-gray-50/50 rounded-xl transition-colors duration-200">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </div>
                      <span className="text-base md:text-lg font-medium text-gray-900 leading-relaxed">{f.q}</span>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 group-open:rotate-45 transition-transform duration-200">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </div>
                  </summary>
                  <div className="px-4 pb-4 pt-1">
                    <div className="ml-9">
                      <div className="text-sm md:text-base text-gray-700 leading-relaxed bg-amber-50 rounded-lg p-3 border border-amber-100 font-normal">
                        {f.a}
                      </div>
                    </div>
                  </div>
                </details>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100/80 border border-gray-200/50">
              <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-600">Still have questions? Contact our admissions team</span>
            </div>
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </section>
  );
};

export default FAQs;


