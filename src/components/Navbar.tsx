import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const CLOUD9_LOGO = new URL('../../assets/Cloud 9 Logo.png', import.meta.url).href;
const DREAM_VACATIONS_LOGO = new URL('../../assets/dream-vacations-logo-color.svg', import.meta.url).href;

interface NavbarProps {
  onSelectSection: (sectionId: string, subpageKey?: string) => void;
  onNavigateToContact: () => void;
}

interface NavSubpage {
  label: string;
  key: string;
  group?: string;
}

interface NavMenuItem {
  id: string;
  label: string;
  sectionId: string;
  subpages: NavSubpage[];
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectSection, onNavigateToContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedGroup, setMobileExpandedGroup] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const handleNavClick = (sectionId: string, subpageKey?: string) => {
    onSelectSection(sectionId, subpageKey);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const navMenuItems: NavMenuItem[] = [
    {
      id: 'cruises',
      label: 'Cruises',
      sectionId: 'cruises-section',
      subpages: [
        { label: 'All Cruise Lines', key: 'all', group: 'Cruises' },
        { label: 'Luxury Cruises', key: 'luxury', group: 'Cruises' },
        { label: 'River Cruises', key: 'river', group: 'Cruises' },
        { label: 'Expedition Cruises', key: 'expedition', group: 'Cruises' },
        { label: 'Contemporary Cruises', key: 'contemporary', group: 'Cruises' },
        { label: 'Group Cruises', key: 'group', group: 'Cruises' },
        { label: 'World Cruises', key: 'world', group: 'Cruises' },
        { label: 'Cruising Tips', key: 'cruising_tips', group: 'Get Ready' },
        { label: 'Cruise FAQs', key: 'cruise_faqs', group: 'Get Ready' },
        { label: 'Before You Go', key: 'before_you_go', group: 'Get Ready' },
        { label: 'Return & Earn', key: 'return_earn', group: 'Already Booked' },
        { label: 'Travel Insurance', key: 'travel_insurance', group: 'Already Booked' },
        { label: 'Shore Excursions', key: 'shore_excursions', group: 'Already Booked' }
      ]
    },
    {
      id: 'resorts',
      label: 'Resorts',
      sectionId: 'resorts-section',
      subpages: [
        { label: 'Search Resorts', key: 'search-resorts', group: 'Search Resorts' },
        { label: 'All Resorts', key: 'featured-all', group: 'Featured Resorts' },
        { label: 'All Inclusive — Adults Only', key: 'featured-adults', group: 'Featured Resorts' },
        { label: 'All Inclusive — Family Friendly', key: 'featured-family', group: 'Featured Resorts' },
        { label: 'Luxury Resorts', key: 'featured-luxury', group: 'Featured Resorts' },
        { label: 'Caribbean', key: 'dest-caribbean', group: 'Resort Destinations' },
        { label: 'Hawaii', key: 'dest-hawaii', group: 'Resort Destinations' },
        { label: 'Mexico', key: 'dest-mexico', group: 'Resort Destinations' },
        { label: 'Disney Parks and Resorts', key: 'theme-disney', group: 'Theme Parks & Attractions' },
        { label: 'Universal Studios Parks and Resorts', key: 'theme-universal', group: 'Theme Parks & Attractions' }
      ]
    },
    {
      id: 'tours',
      label: 'Tours',
      sectionId: 'tours-section',
      subpages: [
        { label: 'All Tours', key: 'all', group: 'Tours' },
        { label: 'Guided Tours', key: 'guided', group: 'Tours' },
        { label: 'Custom Trips', key: 'custom', group: 'Tours' },
        { label: 'Day Tours', key: 'day', group: 'Tours' },
        { label: 'All Rail', key: 'rail', group: 'Rail' },
        { label: 'All Safaris', key: 'safari', group: 'Safaris' }
      ]
    },
    {
      id: 'luxury',
      label: 'Luxury',
      sectionId: 'luxury-section',
      subpages: [
        { label: 'All Luxury Cruises', key: 'all-luxury-cruises', group: 'Cruises' },
        { label: 'River Cruise Lines', key: 'river-cruise-lines', group: 'Cruises' },
        { label: 'Expedition Cruises', key: 'expedition-cruises', group: 'Cruises' },
        { label: 'World Cruises', key: 'world-cruises', group: 'Cruises' },
        { label: 'All Luxury Resorts', key: 'all-luxury-resorts', group: 'Resorts & Villas' },
        { label: 'All Luxury Villas', key: 'all-luxury-villas', group: 'Resorts & Villas' },
        { label: 'All Rail', key: 'all-rail', group: 'Rail & Safaris' },
        { label: 'All Safaris', key: 'all-safaris', group: 'Rail & Safaris' },
        { label: 'All Tours', key: 'all-tours', group: 'Tours' },
        { label: 'Guided Tours', key: 'guided-tours', group: 'Tours' },
        { label: 'Custom Trips', key: 'custom-trips', group: 'Tours' },
        { label: 'Day Tours', key: 'day-tours', group: 'Tours' }
      ]
    },
    {
      id: 'destinations',
      label: 'Destinations',
      sectionId: 'destinations-section',
      subpages: [
        { label: 'All Destinations', key: 'all' },
        { label: 'Africa', key: 'africa' },
        { label: 'Alaska', key: 'alaska' },
        { label: 'Antarctica', key: 'antarctica' },
        { label: 'Asia', key: 'asia' },
        { label: 'Australia & New Zealand', key: 'australia-new-zealand' },
        { label: 'Bermuda', key: 'bermuda' },
        { label: 'Caribbean', key: 'caribbean' },
        { label: 'Central America', key: 'central-america' },
        { label: 'Dubai & India', key: 'dubai-india' },
        { label: 'Europe', key: 'europe' },
        { label: 'Galápagos', key: 'galapagos' },
        { label: 'Hawaii', key: 'hawaii' },
        { label: 'Iceland', key: 'iceland' },
        { label: 'Mediterranean', key: 'mediterranean' },
        { label: 'Mexico', key: 'mexico' },
        { label: 'South America', key: 'south-america' },
        { label: 'South Pacific', key: 'south-pacific' },
        { label: 'United Kingdom & Ireland', key: 'united-kingdom-ireland' },
        { label: 'United States', key: 'united-states' }
      ]
    },
    {
      id: 'deals',
      label: 'Deals',
      sectionId: 'deals-section',
      subpages: [
        { label: 'All Cruise Deals', key: 'all-cruise-deals', group: 'Cruise Deals' },
        { label: 'Groups', key: 'groups', group: 'Cruise Deals' },
        { label: 'Honeymoon Cruises', key: 'honeymoon-cruises', group: 'Cruise Deals' },
        { label: 'Holiday Cruises', key: 'holiday-cruises', group: 'Cruise Deals' },
        { label: 'Weekend Cruises', key: 'weekend-cruises', group: 'Cruise Deals' },
        { label: 'Balcony Cabins/Suites', key: 'balcony-cabins-suites', group: 'Cruise Deals' },
        { label: 'Family Cruises', key: 'family-cruises', group: 'Cruise Deals' },
        { label: 'New Cruise Ships', key: 'new-cruise-ships', group: 'Cruise Deals' },
        { label: 'Solo Cruises', key: 'solo-cruises', group: 'Cruise Deals' },
        { label: 'All Resort Deals', key: 'all-resort-deals', group: 'Resort Deals' },
        { label: 'All Tour Deals', key: 'all-tour-deals', group: 'Tour Deals' },
        { label: 'All Military Deals', key: 'all-military-deals', group: 'Military Deals' }
      ]
    },
    {
      id: 'extras',
      label: 'Extras',
      sectionId: 'extras-section',
      subpages: [
        { label: 'Videos', key: 'videos' },
        { label: 'Brochures', key: 'brochures' },
        { label: 'Destination Weddings', key: 'destination-weddings', group: 'Romance Travel' },
        { label: 'Honeymoon Registry', key: 'honeymoon-registry', group: 'Romance Travel' },
        { label: 'Shore Excursions', key: 'shore-excursions', group: 'Vacation Extras' },
        { label: 'Travel Insurance', key: 'travel-insurance', group: 'Vacation Extras' },
        { label: 'Flights & Car Rentals', key: 'flights-car-rentals', group: 'Vacation Extras' }
      ]
    }
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Main Editorial Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' 
          : 'bg-[#F1F6FD]/95 backdrop-blur-sm py-3.5'
      }`}>
        <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between">
          
          {/* Editorial Brand Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => handleNavClick('hero-section')}
              className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
            >
              <img
                src={CLOUD9_LOGO}
                alt="Cloud 9 Travels — Naushad and Narmin Kermally"
                className="w-28 sm:w-36 h-20 object-contain shrink-0"
              />
            </button>
            <div className="hidden sm:block w-px h-9 bg-[#0E1035]/15 shrink-0" aria-hidden="true" />
            <img
              src={DREAM_VACATIONS_LOGO}
              alt="Dream Vacations — Start Here"
              className="hidden sm:block w-24 md:w-28 h-auto object-contain shrink-0"
            />
          </div>

          {/* Desktop Navigation Links with Dream Vacations Hierarchy */}
          <div className="hidden xl:flex items-center gap-5 2xl:gap-7 text-xs font-semibold uppercase tracking-normal text-[#0E1035]">
            {navMenuItems.map((item) => {
              const isOpen = activeDropdown === item.id;
              return (
                <div
                  key={item.id}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button 
                    onClick={() => handleNavClick(item.sectionId)} 
                    className={`hover:text-[#14ABFA] transition-colors py-2 flex items-center gap-1 focus:outline-none cursor-pointer border-b-2 border-transparent hover:border-[#14ABFA] ${
                      isOpen ? 'text-[#14ABFA] border-[#14ABFA]' : ''
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#14ABFA]' : 'text-[#0E1035]/40'}`} />
                  </button>

                  {/* Dropdown Menu Subpages */}
                  {isOpen && (
                    <div 
                      className={`absolute top-full left-0 ${item.id === 'cruises' || item.id === 'resorts' || item.id === 'destinations' || item.id === 'deals' ? 'w-72 max-h-[75vh] overflow-y-auto' : 'w-64'} bg-white shadow-2xl py-2 z-50 animate-in fade-in slide-in-from-top-1 duration-200 border-t-2 border-[#14ABFA]`}
                    >
                      <div className="px-3.5 py-1.5 border-b border-[#0E1035]/10 mb-1">
                        <span className="text-[10px] font-semibold uppercase tracking-widest text-[#0E1035]">
                          {item.id === 'destinations' ? 'Explore Destinations' : `${item.label} Categories`}
                        </span>
                      </div>
                      {item.subpages.map((sub, index) => (
                        <React.Fragment key={sub.key}>
                          {sub.group && (index === 0 || item.subpages[index - 1].group !== sub.group) && (
                            <div className="px-3.5 pt-3 pb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#14ABFA]">
                              {sub.group}
                            </div>
                          )}
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleNavClick(item.sectionId, sub.key);
                            }}
                            className="w-full text-left px-3.5 py-2 text-xs font-semibold text-[#0E1035] hover:bg-[#F1F6FD] hover:text-[#14ABFA] transition-colors flex items-center justify-between group/sub"
                          >
                            <span className="normal-case font-normal">{sub.label}</span>
                          </button>
                        </React.Fragment>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

          </div>

          {/* Call to Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onNavigateToContact}
              className="text-[#0E1035] px-3.5 py-2 text-xs font-black hover:text-[#14ABFA] transition-colors uppercase tracking-normal cursor-pointer focus:outline-none border-b-2 border-transparent hover:border-[#14ABFA]"
            >
              <span>Contact Us</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#0E1035] hover:bg-[#0E1035]/5 focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Accordion Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl border-t border-[#0E1035]/10 max-h-[85vh] overflow-y-auto">
            <div className="space-y-1">
              {navMenuItems.map((item) => {
                const isExpanded = mobileExpandedGroup === item.id;
                return (
                  <div key={item.id} className="border-b border-[#0E1035]/10 pb-1">
                    <div className="flex items-center justify-between">
                      <button 
                        onClick={() => handleNavClick(item.sectionId)} 
                        className="py-2 text-left font-black text-xs uppercase tracking-wider text-[#0E1035]"
                      >
                        <span>{item.label}</span>
                      </button>
                      <button
                        onClick={() => setMobileExpandedGroup(isExpanded ? null : item.id)}
                        className="p-2 text-[#0E1035]"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-[#14ABFA]' : ''}`} />
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.subpages.map((sub, index) => (
                          <React.Fragment key={sub.key}>
                            {sub.group && (index === 0 || item.subpages[index - 1].group !== sub.group) && (
                              <div className="pt-2 pb-1 text-[9px] font-semibold uppercase tracking-[0.16em] text-[#14ABFA]">
                                {sub.group}
                              </div>
                            )}
                            <button
                              onClick={() => handleNavClick(item.sectionId, sub.key)}
                              className="block w-full text-left py-1.5 text-xs font-semibold text-[#0E1035]/80 hover:text-[#14ABFA]"
                            >
                              {sub.label}
                            </button>
                          </React.Fragment>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#0E1035]/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigateToContact();
                }}
                className="w-full py-3 text-center font-bold text-xs uppercase tracking-normal text-[#0E1035] border-b-2 border-[#14ABFA] transition-colors"
              >
                Contact Us
              </button>
              <a
                href="tel:17135607016"
                className="w-full py-2.5 text-center text-xs font-bold uppercase tracking-normal text-[#0E1035] block"
              >
                Call (713) 560-7016
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
