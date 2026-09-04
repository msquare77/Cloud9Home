import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SHOW_RESORTS_TOURS_LUXURY } from '../config/featureFlags';

const CLOUD9_LOGO = new URL('../../assets/Cloud 9 Logo.png', import.meta.url).href;
const DREAM_VACATIONS_LOGO = new URL('../../assets/dream-vacations-logo-color.svg', import.meta.url).href;

interface FooterProps {
  onSelectSection: (sectionId: string) => void;
  onNavigateToContact: () => void;
  onNavigateToFaq: () => void;
  onNavigateToTravelJournal: () => void;
}

const FOOTER_NAV_LINKS = [
  { label: 'Cruises', sectionId: 'cruises-section', hidden: false },
  { label: 'Resorts', sectionId: 'resorts-section', hidden: !SHOW_RESORTS_TOURS_LUXURY },
  { label: 'Tours', sectionId: 'tours-section', hidden: !SHOW_RESORTS_TOURS_LUXURY },
  { label: 'Luxury', sectionId: 'luxury-section', hidden: !SHOW_RESORTS_TOURS_LUXURY },
  { label: 'Destinations', sectionId: 'destinations-section', hidden: false },
  { label: 'Deals', sectionId: 'deals-section', hidden: false },
  { label: 'Extras', sectionId: 'extras-section', hidden: false },
  { label: 'Pay Now', sectionId: 'pay-now-section', hidden: false }
];

export const Footer: React.FC<FooterProps> = ({ onSelectSection, onNavigateToContact, onNavigateToFaq, onNavigateToTravelJournal }) => {
  return (
    <footer id="main-footer" className="w-full bg-[#0E1035] text-[#0E1035] overflow-hidden">
      <div className="w-full bg-white px-4 sm:px-6 lg:px-8 xl:px-10 py-12 sm:py-16">
        <div className="w-full max-w-[1640px] mx-auto">

          {/* Top row: brand lockup + main navigation */}
          <div className="flex flex-col gap-8 pb-10 border-b border-[#0E1035]/10 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={CLOUD9_LOGO}
                alt="Cloud 9 Travels — Narmin and Naushad Kermally"
                className="h-20 sm:h-28 w-auto object-contain shrink-0"
              />
              <div className="w-px h-16 bg-[#0E1035]/15 shrink-0" aria-hidden="true" />
              <img
                src={DREAM_VACATIONS_LOGO}
                alt="Dream Vacations — Start Here"
                className="h-12 sm:h-14 w-auto object-contain shrink-0"
              />
            </div>

            <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-7 gap-y-3">
              {FOOTER_NAV_LINKS.filter((link) => !link.hidden).map((link) => (
                <button
                  key={link.sectionId}
                  onClick={() => onSelectSection(link.sectionId)}
                  className="text-sm font-bold uppercase tracking-wide text-[#0E1035] hover:text-[#14ABFA] transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={onNavigateToFaq}
                className="text-sm font-bold uppercase tracking-wide text-[#0E1035] hover:text-[#14ABFA] transition-colors cursor-pointer"
              >
                FAQs
              </button>
              <button
                onClick={onNavigateToTravelJournal}
                className="text-sm font-bold uppercase tracking-wide text-[#0E1035] hover:text-[#14ABFA] transition-colors cursor-pointer"
              >
                Travel Journal
              </button>
              <button
                onClick={onNavigateToContact}
                className="text-sm font-bold uppercase tracking-wide text-white bg-[#0E1035] hover:bg-[#14ABFA] hover:text-[#0E1035] transition-colors cursor-pointer px-5 py-2.5"
              >
                Contact Us
              </button>
            </nav>
          </div>

          {/* Middle: headline + readable contact details */}
          <div className="flex flex-col gap-8 py-10 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-[11px] font-black uppercase tracking-widest text-[#14ABFA] block mb-1">
                Cloud 9 Travels • Dream Vacations Franchise
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1035] tracking-tight leading-tight">
                Narmin & Naushad Kermally.<br />
                Your Personal Travel Specialists.
              </h3>
            </div>

            <div className="flex flex-col gap-4">
              <a href="tel:17135607016" className="flex items-center gap-3 text-base sm:text-lg font-bold text-[#0E1035] hover:text-[#14ABFA] transition-colors">
                <Phone className="w-5 h-5 text-[#14ABFA] shrink-0" />
                (713) 560-7016
              </a>
              <a href="mailto:nkermally@dreamvacations.com" className="flex items-center gap-3 text-base sm:text-lg font-bold text-[#0E1035] hover:text-[#14ABFA] transition-colors">
                <Mail className="w-5 h-5 text-[#14ABFA] shrink-0" />
                nkermally@dreamvacations.com
              </a>
              <span className="flex items-center gap-3 text-base sm:text-lg font-bold text-[#0E1035]">
                <MapPin className="w-5 h-5 text-[#14ABFA] shrink-0" />
                Sugar Land, TX 77479
              </span>
            </div>
          </div>

          {/* Bottom Legal & Franchise Disclosure Line */}
          <div className="pt-8 border-t border-[#0E1035]/10 text-xs text-[#0E1035]/60 font-medium space-y-2">
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
