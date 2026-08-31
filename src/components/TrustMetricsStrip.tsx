import React from 'react';

export const TrustMetricsStrip: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Core Trust Counters with Clean Typography */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 xl:gap-18">
          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E1035] tracking-tight">
              Full-Service
            </div>
            <p className="text-xs font-bold text-[#0E1035]/70 uppercase tracking-widest mt-2">
              Dedicated Travel Advisor
            </p>
            <span className="text-xs font-bold text-[#14ABFA] mt-1">
              Personalized Vacation Planning
            </span>
          </div>

          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E1035] tracking-tight">
              4 Ways
            </div>
            <p className="text-xs font-bold text-[#0E1035]/70 uppercase tracking-widest mt-2">
              To Explore Vacations
            </p>
            <span className="text-xs font-bold text-[#14ABFA] mt-1">
              Cruises • Resorts • Tours • Luxury
            </span>
          </div>

          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E1035] tracking-tight">
              Sugar Land
            </div>
            <p className="text-xs font-bold text-[#0E1035]/70 uppercase tracking-widest mt-2">
              Local Texas Agency
            </p>
            <span className="text-xs font-bold text-[#14ABFA] mt-1">
              Serving Vacation Travelers
            </span>
          </div>

          <div className="flex flex-col">
            <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0E1035] tracking-tight">
              (713) 560-7016
            </div>
            <p className="text-xs font-bold text-[#0E1035]/70 uppercase tracking-widest mt-2">
              Ready to Book or Need Help?
            </p>
            <span className="text-xs font-bold text-[#14ABFA] mt-1">
              Cloud 9 Travels, LLC
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
