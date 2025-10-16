import React from "react";

type Doc = { name: string; href: string; note?: string };

const docs: Doc[] = [
  { name: "Prospectus (PDF)", href: "/docs/prospectus.pdf" },
  { name: "Fee Handbook (PDF)", href: "/docs/fee-handbook.pdf" },
  { name: "Undertaking Format", href: "/docs/undertaking.pdf" },
  { name: "Medical Fitness Certificate", href: "/docs/medical-fitness.pdf" },
];

export const Downloads = () => {
  return (
    <section id="downloads" className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-soft p-6">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Downloads</h3>
          <ul className="grid md:grid-cols-2 gap-3">
            {docs.map((d) => (
              <li key={d.name}>
                <a className="flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 transition-colors px-4 py-3" href={d.href} target="_blank" rel="noreferrer">
                  <span className="text-sm font-semibold text-gray-800">{d.name}</span>
                  <span className="text-xs text-gray-500">PDF</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Downloads;


