import React, { useState } from 'react';

const CLOUD9_LOGO = new URL('../../assets/Cloud 9 Logo.png', import.meta.url).href;

interface FooterProps {
  onSelectSection: (sectionId: string) => void;
  onOpenBookingModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection, onOpenBookingModal }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 4000);
      setEmail('');
    }
  };

  return (
    <footer id="main-footer" className="w-full bg-[#0E1035] text-[#0E1035] overflow-hidden">
      {/* 1. Full-Width Continuous Dark Brand Section with Text Overlap */}
      <div className="w-full bg-[#0E1035] relative select-none overflow-hidden">
        {/* Subtle Ambient Cosmic Glow */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-[#14ABFA]/10 blur-[120px] pointer-events-none" />

        {/* Master SVG Typography Vector Banner */}
        <div className="w-full relative z-10 leading-none -mb-1">
          <svg
            viewBox="0 0 1440 380"
            className="w-full h-auto block select-none pointer-events-none"
            preserveAspectRatio="xMidYMax meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0" y="0" width="1440" height="295" fill="#0E1035" />
            <rect x="0" y="295" width="1440" height="85" fill="#FFFFFF" />

            <text
              x="50%"
              y="330"
              textAnchor="middle"
              fill="#FFFFFF"
              fontWeight="950"
              fontSize="340"
              letterSpacing="-15"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            >
              cloud9
            </text>
          </svg>
        </div>
      </div>

      {/* 2. Full-Width Clean White Lower Section */}
      <div className="w-full bg-white -mt-1 pt-10 sm:pt-14 lg:pt-16 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 xl:px-10 relative z-20">
        <div className="w-full max-w-[1640px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-start">
            
            {/* Left Narrative & VIP Travel Club Column */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div>
                <img
                  src={CLOUD9_LOGO}
                  alt="Cloud 9 Travels — Narmin and Naushad Kermally"
                  className="mb-4 h-24 w-48 object-contain object-left sm:h-28 sm:w-56"
                />
                <span className="text-[11px] font-black uppercase tracking-widest text-[#14ABFA] block mb-1">
                  Cloud 9 Travels • Dream Vacations Franchise
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1035] tracking-tight leading-tight mb-2.5">
                  Narmin & Naushad Kermally.<br />
                  Your Personal Travel Specialists.
                </h3>
                <p className="text-xs sm:text-sm text-[#0E1035]/65 font-medium leading-relaxed max-w-sm">
                  Full-service travel planning for ocean cruises, river voyages, all-inclusive luxury resorts, guided world tours, and Disney getaways. 100% complimentary service with exclusive bonus amenities.
                </p>
              </div>

              {/* VIP Travel Club Newsletter */}
              <div className="space-y-2.5 pt-2">
                <label htmlFor="journal-email" className="block text-xs sm:text-sm font-bold text-[#0E1035]">
                  Join the Cloud 9 VIP Travel Club
                </label>
                <form onSubmit={handleSubscribe} className="flex items-center max-w-sm gap-2">
                  <input
                    id="journal-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-[#EAEBED] text-[#0E1035] placeholder-[#0E1035]/45 text-xs sm:text-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#14ABFA] font-medium"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 text-xs font-black uppercase tracking-wider text-[#0E1035] hover:text-[#14ABFA] border-b-2 border-[#14ABFA] transition-colors cursor-pointer shrink-0"
                  >
                    Subscribe
                  </button>
                </form>

                {subscribed && (
                  <p className="text-xs text-[#14ABFA] font-bold pt-1">
                    ✓ Welcome to the Cloud 9 VIP Travel Club! Exclusive deals will arrive in your inbox.
                  </p>
                )}
              </div>

              {/* Contact Info Row */}
              <div className="space-y-1.5 text-xs text-[#0E1035]/80 pt-1">
                <div>
                  <a href="tel:17135607016" className="font-bold hover:text-[#14ABFA] underline">
                    Phone: (713) 560-7016
                  </a>
                </div>
                <div>
                  <a href="mailto:nkermally@dreamvacations.com" className="font-semibold hover:text-[#14ABFA] underline">
                    Email: nkermally@dreamvacations.com
                  </a>
                </div>
                <div>
                  <span>Location: Sugar Land, TX 77479</span>
                </div>
              </div>
            </div>

            {/* Right Matrix: Vacation Experiences, Destinations, Agency Pillars & Certified Seal */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 items-start">
              
              {/* Vacation Types Column */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0E1035] mb-4 tracking-tight">
                  Vacation Portfolios
                </h4>
                <ul className="space-y-2.5 text-xs text-[#0E1035]/70 font-medium">
                  <li>
                    <button onClick={() => onSelectSection('cruises-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Cruises & Ocean Voyages
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('resorts-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      All-Inclusive Resorts
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('tours-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Guided Tours & Safaris
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('luxury-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Ultra-Luxury & Yachts
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('deals-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Promotions & Deals
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('extras-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Travel Extras & Protection
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('pay-now-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer font-bold text-[#0E1035]">
                      Pay Now / Client Portal
                    </button>
                  </li>
                </ul>
              </div>

              {/* Destinations Column */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0E1035] mb-4 tracking-tight">
                  Top Destinations
                </h4>
                <ul className="space-y-2.5 text-xs text-[#0E1035]/70 font-medium">
                  <li>
                    <button onClick={() => onSelectSection('destinations-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Caribbean & Bahamas
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('destinations-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Alaska Glaciers
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('destinations-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Mediterranean & Europe
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('destinations-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Mexico & Riviera Maya
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('destinations-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      African Wildlife Safaris
                    </button>
                  </li>
                  <li>
                    <button onClick={() => onSelectSection('destinations-section')} className="hover:text-[#14ABFA] transition-colors text-left cursor-pointer">
                      Disney & Universal Parks
                    </button>
                  </li>
                </ul>
              </div>

              {/* Why Us / Guarantees Column */}
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-[#0E1035] mb-4 tracking-tight">
                  Our Guarantees
                </h4>
                <ul className="space-y-2.5 text-xs text-[#0E1035]/70 font-medium">
                  <li>
                    <span className="block text-[#0E1035] font-semibold">Price Guarantee</span>
                  </li>
                  <li>
                    <span className="block text-[#0E1035] font-semibold">Dedicated Travel Advisor</span>
                  </li>
                  <li>
                    <span className="block text-[#0E1035] font-semibold">Current Vacation Deals</span>
                  </li>
                  <li>
                    <span className="block text-[#0E1035] font-semibold">Price Drop Monitoring</span>
                  </li>
                  <li>
                    <span className="block text-[#0E1035] font-semibold">Dedicated Concierge</span>
                  </li>
                </ul>
              </div>

              {/* Dream Vacations Certified Franchise Stamp */}
              <div className="flex flex-col items-center sm:items-end justify-start">
                <div 
                  onClick={onOpenBookingModal}
                  className="bg-[#F1F6FD] p-4 text-center cursor-pointer hover:opacity-80 transition-opacity"
                  title="Dream Vacations Certified Franchise"
                >
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#0E1035] block mb-1">
                    DREAM VACATIONS
                  </span>
                  <div className="text-xs font-black text-[#14ABFA] mb-1">
                    CERTIFIED FRANCHISE
                  </div>
                  <span className="text-[8px] font-bold uppercase tracking-wider text-[#0E1035]/60 block">
                    CLOUD 9 TRAVELS, LLC
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Legal & Franchise Disclosure Line */}
          <div className="pt-12 sm:pt-16 mt-8 text-xs text-[#0E1035]/60 font-medium space-y-2">
            <p>
              © 2026 Cloud 9 Travels, LLC. Independently Owned & Operated Franchise of Dream Vacations / World Travel Holdings. Narmin & Naushad Kermally, Franchise Owners.
            </p>
            <p className="text-[11px] text-[#0E1035]/45">
              Seller of Travel Numbers CST 2006278-40 • WA 601698664 • FL ST-35829. All rates are subject to supplier availability and terms.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
