import React from "react";

export const SupportStrip = () => {
  return (
    <section id="support" className="py-12 bg-gray-100 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
            <div className="relative rounded-3xl border border-gray-200/50 bg-white/90 backdrop-blur-lg shadow-xl p-8 md:p-10">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-1">Need Help?</h4>
                      <p className="text-gray-600">Our admissions team is here to assist you</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Available Mon–Sat, 9:00 AM – 5:00 PM IST</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a 
                    href="tel:+911234567890" 
                    className="group/btn inline-flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 group-hover/btn:bg-green-200 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <span>+91 12345 67890</span>
                  </a>
                  
                  <a 
                    href="mailto:admissions@example.edu" 
                    className="group/btn inline-flex items-center gap-3 rounded-xl border border-gray-200/60 bg-white px-6 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm hover:shadow-md"
                  >
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 group-hover/btn:bg-blue-200 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <span>admissions@example.edu</span>
                  </a>
                  
                  <a 
                    href="#contact" 
                    className="group/btn inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-3 text-sm font-semibold hover:from-gray-800 hover:to-gray-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover/btn:bg-white/30 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <span>Ask a Question</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportStrip;


