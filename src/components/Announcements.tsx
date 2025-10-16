import React from "react";

type Notice = { id: string; title: string; date: string; link?: string };

const notices: Notice[] = [
  { id: "n1", title: "Seat Matrix (2025–26) updated", date: "Oct 10, 2025" },
  { id: "n2", title: "Revised eligibility for NRI applicants", date: "Oct 08, 2025" },
  { id: "n3", title: "Counseling guidelines released", date: "Oct 02, 2025" },
];

export const Announcements = () => {
  return (
    <section id="announcements" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl rounded-2xl border border-gray-200 bg-white/90 backdrop-blur-md shadow-soft p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">Announcements</h3>
            <span className="text-xs text-gray-500">Latest updates</span>
          </div>
          <ul className="divide-y divide-gray-200">
            {notices.map((n) => (
              <li key={n.id} className="py-3 flex items-center justify-between">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="inline-block w-2 h-2 rounded-full bg-amber-500" />
                  <p className="text-sm text-gray-800 truncate">{n.title}</p>
                </div>
                <div className="text-xs text-gray-500 ml-4 shrink-0">{n.date}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Announcements;


