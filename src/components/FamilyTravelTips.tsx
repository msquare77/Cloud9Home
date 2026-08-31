import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { TRAVEL_TIPS } from '../data/cruiseData';
import { TravelTip } from '../types';
import { ViewMoreToggle } from './ViewMoreToggle';

interface FamilyTravelTipsProps {
  onOpenArticle?: (tip: TravelTip) => void;
}

export const FamilyTravelTips: React.FC<FamilyTravelTipsProps> = ({ onOpenArticle }) => {
  const [showAll, setShowAll] = useState(false);
  return (
    <section id="tips-section" className="hidden py-20 sm:py-28 bg-[#F1F6FD]" aria-hidden="true">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-signature text-3xl sm:text-4xl text-[#14ABFA] select-none block mb-1">
            Insider Travel Knowledge
          </span>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] leading-tight">
            EXPERT GUIDES & STATEROOM INSIGHTS
          </h2>
          <p className="text-sm sm:text-base text-[#0E1035]/75 font-normal mt-3 leading-relaxed">
            Essential strategies from seasoned fleet advisors—from noise-insulated cabin selection to automated pre-sailing fare repricing.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {(showAll ? TRAVEL_TIPS : TRAVEL_TIPS.slice(0, 3)).map((tip) => {
            return (
              <div
                key={tip.id}
                onClick={() => onOpenArticle && onOpenArticle(tip)}
                className="site-image-card bg-white transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden cursor-pointer group"
              >
                <div>
                  {/* Clean Image Header */}
                  {tip.imageUrl && (
                    <div className="site-content-image-frame relative h-56 sm:h-64 bg-[#0E1035]">
                      <img
                        src={tip.imageUrl}
                        alt={tip.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0E1035]/80 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-[#0E1035]/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest">
                          {tip.category}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4">
                        <span className="bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1">
                          {tip.readTime}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-6 sm:p-8">
                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#0E1035] leading-snug mb-3 group-hover:text-[#14ABFA] transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#0E1035]/75 font-medium mb-6 leading-relaxed">
                      {tip.snippet}
                    </p>

                    {/* Clean Bullet Takeaways */}
                    <ul className="space-y-2 mb-6">
                      {tip.bullets.slice(0, 2).map((bullet, idx) => (
                        <li key={idx} className="text-xs text-[#0E1035]/80 font-medium flex items-start gap-2.5">
                          <span className="text-[#14ABFA] font-bold mt-0.5">•</span>
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Read Full Article Button */}
                <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                  <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#0E1035] group-hover:text-[#14ABFA] transition-colors">
                    <span>Read Full Blueprint</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <ViewMoreToggle expanded={showAll} total={TRAVEL_TIPS.length} label="Guides" onToggle={() => setShowAll(!showAll)} />
      </div>
    </section>
  );
};
