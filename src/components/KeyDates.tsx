import React from "react";

type DateItem = { label: string; date: string; note?: string };

const keyDates: DateItem[] = [
  { label: "Applications Open", date: "Nov 01, 2025", note: "9:00 AM IST" },
  { label: "Applications Close", date: "Dec 15, 2025", note: "11:59 PM IST" },
  { label: "Merit List Release", date: "Dec 28, 2025" },
  { label: "Counseling Round 1", date: "Jan 05–09, 2026" },
  { label: "Fee Payment Window", date: "Jan 10–15, 2026" },
  { label: "Orientation", date: "Apr 01, 2026" },
];

export const KeyDates = () => {
  return (
    <section id="key-dates" className="py-12 bg-gray-100 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200/40 via-sky-100/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-5xl rounded-2xl p-6 md:p-8 border border-gray-200/50 bg-white/90 backdrop-blur-lg shadow-lg">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-sky-50 text-blue-700 text-xs font-semibold border border-blue-200/50 mb-3 shadow-sm">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Key Dates
            </div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-gray-900 tracking-tight mb-2">Important Deadlines</h2>
            <p className="text-base text-gray-600 max-w-xl mx-auto">Plan ahead with all critical milestones for the admissions process</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {keyDates.map((d, index) => (
              <div key={d.label} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-300 to-indigo-400 rounded-xl blur opacity-15 group-hover:opacity-25 transition duration-300"></div>
                <div className="relative rounded-xl border border-gray-200/60 bg-gradient-to-br from-white via-cream-50/80 to-sky-50/30 p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>
                    <div className="text-xs font-semibold text-blue-700 tracking-wider uppercase">{d.label}</div>
                  </div>
                  <div className="text-lg font-bold text-gray-900 mb-1">{d.date}</div>
                  {d.note && (
                    <div className="text-xs text-gray-600 bg-amber-50/50 rounded-md px-2 py-1 border border-amber-200/50">
                      {d.note}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100/80 border border-gray-200/50">
              <svg className="w-3 h-3 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              <span className="text-xs text-gray-600">All dates are tentative and subject to regulatory notifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyDates;


