import React, { useState } from 'react';
import { CruiseFilterState } from '../types';
import { SHOW_RESORTS_TOURS_LUXURY } from '../config/featureFlags';

const EXPLORER_BACKGROUND = new URL('../../assets/magnific/vacation-explorer.png', import.meta.url).href;
const RESORT_IMAGES = [
  new URL('../../assets/magnific/resort-1.jpg', import.meta.url).href,
  new URL('../../assets/magnific/resort-2.jpg', import.meta.url).href,
  new URL('../../assets/magnific/resort-3.jpg', import.meta.url).href,
];
const TOUR_IMAGES = [
  new URL('../../assets/magnific/tour-1.jpg', import.meta.url).href,
  new URL('../../assets/magnific/tour-2.jpg', import.meta.url).href,
  new URL('../../assets/magnific/tour-3.jpg', import.meta.url).href,
];
const LUXURY_IMAGES = [
  new URL('../../assets/magnific/luxury-1.jpg', import.meta.url).href,
  new URL('../../assets/magnific/luxury-2.jpg', import.meta.url).href,
  new URL('../../assets/magnific/luxury-3.jpg', import.meta.url).href,
];

interface VacationExplorerSectionProps {
  filters: CruiseFilterState;
  onFilterChange: (key: keyof CruiseFilterState, value: string) => void;
  onSearchSubmit: () => void;
  onOpenBookingModal: (context?: string) => void;
  onNavigateToSection: (sectionId: string, subpageKey?: string) => void;
}

type Tab = 'cruises' | 'resorts' | 'tours' | 'luxury';
type FilterPanel = 'date' | 'port' | 'length' | 'line' | 'ship' | null;
type DateMode = 'range' | 'month';

const US_PORTS = [
  'AK - Seward', 'AK - Whittier/Anchorage', 'AL - Mobile', 'CA - LA/Long Beach',
  'CA - LA/San Pedro', 'CA - San Diego', 'CA - San Francisco', 'FL - Ft. Lauderdale',
  'FL - Jacksonville', 'FL - Miami', 'FL - Port Canaveral', 'FL - Tampa',
  'HI - Honolulu/Oahu', 'LA - New Orleans', 'MA - Boston', 'MD - Baltimore',
  'NY - Bayonne/New Jersey', 'NY - Brooklyn', 'NY - New York', 'PA - Philadelphia',
  'Puerto Rico', 'TX - Galveston', 'VA - Norfolk', 'WA - Seattle',
];

const INTERNATIONAL_PORTS = [
  'Argentina', 'Australia', 'Barbados', 'Canada', 'Chile', 'Dominican Republic',
  'England', 'France', 'Germany', 'Greece', 'Iceland', 'Italy', 'Japan', 'Mexico',
  'Netherlands', 'New Zealand', 'Portugal', 'Singapore', 'South Africa', 'Spain',
];

const CRUISE_LINES = [
  'Carnival Cruise Line', 'Celebrity Cruises', 'MSC Cruises', 'Norwegian Cruise Line',
  'Royal Caribbean', 'Virgin Voyages', 'Any Cruise Line', 'AmaWaterways',
  'American Cruise Lines', 'Avalon Waterways', 'Azamara', 'Cunard', 'Disney Cruise Line',
  'Holland America Line', 'HX', 'Oceania Cruises', 'Paul Gauguin Cruises',
  'Ponant Explorations', 'Princess Cruises', 'Regent Seven Seas Cruises',
  'Seabourn Cruise Line', 'Silversea Cruises', 'Viking Cruises',
];

const CRUISE_SHIPS = [
  'Any Cruise Ship', 'Icon of the Seas', 'Utopia of the Seas', 'Celebrity Edge',
  'Celebrity Reflection', 'Disney Wish', 'Norwegian Aqua', 'Scarlet Lady',
  'Carnival Celebration', 'MSC Seaside', 'Princess Sun', 'AmaMagna',
];

const formatDate = (value: string) => {
  if (!value) return '';
  const [year, month, day] = value.split('-').map(Number);
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(new Date(year, month - 1, day));
};

const TILE_GRADIENTS = {
  resort: 'bg-[linear-gradient(180deg,rgba(47,224,192,0)_4%,rgba(47,224,192,0.12)_36%,rgba(8,137,116,0.96)_70%,rgba(8,137,116,1)_100%)]',
  tour: 'bg-[linear-gradient(180deg,rgba(20,171,250,0)_4%,rgba(20,171,250,0.12)_36%,rgba(7,116,179,0.97)_70%,rgba(7,116,179,1)_100%)]',
  luxury: 'bg-[linear-gradient(180deg,rgba(232,167,61,0)_4%,rgba(232,167,61,0.12)_36%,rgba(168,105,17,0.97)_70%,rgba(168,105,17,1)_100%)]',
};

const Tile: React.FC<{ image: string; label: string; tone: keyof typeof TILE_GRADIENTS; onClick: () => void }> = ({ image, label, tone, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="outer-surface relative h-48 sm:h-56 overflow-hidden bg-[#0E1035] group cursor-pointer text-left shadow-[0_5px_16px_rgba(14,16,53,0.10)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_8px_22px_rgba(14,16,53,0.15)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#14ABFA]/45"
  >
    <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover object-top opacity-95 transition-transform duration-700 ease-out group-hover:scale-110" />
    <div className={`absolute inset-0 ${TILE_GRADIENTS[tone]} transition-opacity duration-500 group-hover:opacity-90`} />
    <div className="absolute -top-20 -right-16 h-40 w-40 bg-white/25 blur-3xl transition-transform duration-700 group-hover:-translate-x-8 group-hover:translate-y-8" />
    <span className="absolute inset-x-5 bottom-5 block text-left text-base sm:text-lg font-black uppercase tracking-[0.09em] leading-tight text-white [text-shadow:0_3px_16px_rgba(14,16,53,0.75)] transition-transform duration-500 group-hover:-translate-y-1">{label}</span>
  </button>
);

export const VacationExplorerSection: React.FC<VacationExplorerSectionProps> = ({
  filters,
  onFilterChange,
  onSearchSubmit,
  onNavigateToSection,
}) => {
  const [activeTab, setActiveTab] = useState<Tab>('cruises');
  const [openFilter, setOpenFilter] = useState<FilterPanel>(null);
  const [destination, setDestination] = useState('');
  const [selected, setSelected] = useState({ date: '', port: '', length: '', line: '', ship: '' });
  const [dateMode, setDateMode] = useState<DateMode>('range');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [departureMonth, setDepartureMonth] = useState('');
  const [dateError, setDateError] = useState('');

  const choose = (key: Exclude<FilterPanel, null>, value: string) => {
    setSelected(current => ({ ...current, [key]: value }));
    if (key === 'port') onFilterChange('departurePort', value === 'Any Port' ? 'all' : value);
    if (key === 'length') onFilterChange('duration', value === 'Any Cruise Length' ? 'all' : value);
    if (key === 'line') onFilterChange('cruiseLine', value === 'Any Cruise Line' ? 'all' : value);
    setOpenFilter(null);
  };

  const applyDepartureDate = () => {
    setDateError('');

    if (dateMode === 'month') {
      if (!departureMonth) {
        setDateError('Choose a departure month.');
        return;
      }
      const [year, month] = departureMonth.split('-').map(Number);
      const label = new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric' }).format(new Date(year, month - 1, 1));
      setSelected(current => ({ ...current, date: label }));
      onFilterChange('month', departureMonth);
      setOpenFilter(null);
      return;
    }

    if (!startDate || !endDate) {
      setDateError('Choose both a start date and an end date.');
      return;
    }
    if (endDate < startDate) {
      setDateError('Your end date must be after your start date.');
      return;
    }

    setSelected(current => ({ ...current, date: `${formatDate(startDate)} – ${formatDate(endDate)}` }));
    onFilterChange('month', `${startDate}|${endDate}`);
    setOpenFilter(null);
  };

  const submitCruiseSearch = () => {
    onFilterChange('destination', destination.trim() || 'all');
    onSearchSubmit();
  };

  const filterLabel = (key: Exclude<FilterPanel, null>, fallback: string) => selected[key] || fallback;

  return (
    <section id="quiz-section" className="relative min-h-[520px] sm:min-h-[600px] flex items-center overflow-hidden">
      <img src={EXPLORER_BACKGROUND} alt="Caribbean beach and turquoise ocean" className="absolute inset-0 w-full h-full object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0E1035]/20 via-transparent to-[#14ABFA]/10" />

      <div className="w-full max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
        <div className="relative overflow-hidden p-6 sm:p-9 lg:p-11 min-h-[360px] bg-white/35 backdrop-blur-2xl backdrop-saturate-150 [background:linear-gradient(135deg,rgba(255,255,255,0.72)_0%,rgba(241,246,253,0.38)_46%,rgba(20,171,250,0.18)_76%,rgba(47,224,192,0.14)_100%)] shadow-[0_28px_90px_rgba(14,16,53,0.25),inset_0_1px_28px_rgba(255,255,255,0.5)]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0E1035] tracking-tight mb-7">Explore All Vacation Experiences</h2>

          <div className="flex flex-wrap items-center gap-2 sm:gap-5 mb-7 text-xs font-black text-[#0E1035]">
            {(['cruises', 'resorts', 'tours', 'luxury'] as Tab[])
              .filter((tab) => tab === 'cruises' || SHOW_RESORTS_TOURS_LUXURY)
              .map(tab => (
              <button key={tab} type="button" onClick={() => { setActiveTab(tab); setOpenFilter(null); }} className={`px-4 py-2.5 capitalize cursor-pointer transition-colors ${activeTab === tab ? 'bg-white text-[#0E1035] shadow-[0_2px_7px_rgba(14,16,53,0.09)]' : 'text-[#0E1035]/70 hover:text-[#14ABFA]'}`}>{tab}</button>
            ))}
          </div>

          {activeTab === 'cruises' && (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3 sm:gap-5 mb-5">
                <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Search cruise destinations" className="site-search-field" />
                <button type="button" onClick={submitCruiseSearch} className="rounded-full bg-[#14ABFA] hover:bg-[#0E1035] hover:text-white text-[#0E1035] min-w-40 px-8 py-4 text-xs font-black uppercase tracking-wider shadow-[0_3px_10px_rgba(14,16,53,0.10)] cursor-pointer transition-colors">View Cruises</button>
              </div>

              <div className="flex flex-wrap gap-2.5 sm:gap-3 mb-6">
                {([
                  ['date', 'Departure Date'], ['port', 'Departure Port'], ['length', 'Cruise Length'], ['line', 'Cruise Line'], ['ship', 'Cruise Ship'],
                ] as [Exclude<FilterPanel, null>, string][]).map(([key, label]) => (
                  <button key={key} type="button" onClick={() => setOpenFilter(openFilter === key ? null : key)} className={`px-4 py-2 text-[11px] sm:text-xs font-semibold shadow-[0_2px_7px_rgba(14,16,53,0.09)] cursor-pointer transition-colors ${openFilter === key ? 'bg-[#0E1035] text-white' : 'bg-white text-[#0E1035]'}`}>{filterLabel(key, label)}</button>
                ))}
              </div>

              {openFilter && (
                <div className="bg-white shadow-2xl p-5 sm:p-7 mb-6 max-h-72 overflow-y-auto">
                  {openFilter === 'date' && (
                    <div>
                      <h3 className="font-extrabold text-[#0E1035] mb-4">Departure date</h3>
                      <div className="flex gap-2 mb-5" role="tablist" aria-label="Departure date selection mode">
                        <button type="button" onClick={() => { setDateMode('range'); setDateError(''); }} className={`px-5 py-2.5 text-xs font-black cursor-pointer ${dateMode === 'range' ? 'bg-[#0E1035] text-white' : 'bg-[#F1F6FD] text-[#0E1035]'}`}>Date Range</button>
                        <button type="button" onClick={() => { setDateMode('month'); setDateError(''); }} className={`px-5 py-2.5 text-xs font-black cursor-pointer ${dateMode === 'month' ? 'bg-[#0E1035] text-white' : 'bg-[#F1F6FD] text-[#0E1035]'}`}>Month</button>
                      </div>

                      {dateMode === 'range' ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                          <label className="text-xs font-bold text-[#0E1035]">
                            Start date
                            <input type="date" value={startDate} min={new Date().toISOString().slice(0, 10)} onChange={event => { setStartDate(event.target.value); setDateError(''); }} className="mt-2 block w-full bg-[#F1F6FD] px-4 py-3.5 text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]" />
                          </label>
                          <label className="text-xs font-bold text-[#0E1035]">
                            End date
                            <input type="date" value={endDate} min={startDate || new Date().toISOString().slice(0, 10)} onChange={event => { setEndDate(event.target.value); setDateError(''); }} className="mt-2 block w-full bg-[#F1F6FD] px-4 py-3.5 text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]" />
                          </label>
                        </div>
                      ) : (
                        <label className="block max-w-sm text-xs font-bold text-[#0E1035]">
                          Departure month
                          <input type="month" value={departureMonth} min={new Date().toISOString().slice(0, 7)} onChange={event => { setDepartureMonth(event.target.value); setDateError(''); }} className="mt-2 block w-full bg-[#F1F6FD] px-4 py-3.5 text-sm font-medium text-[#0E1035] focus:outline-none focus:ring-2 focus:ring-[#14ABFA]" />
                        </label>
                      )}

                      {dateError && <p className="mt-3 text-xs font-bold text-red-600" role="alert">{dateError}</p>}
                      <div className="flex justify-end mt-5">
                        <button type="button" onClick={applyDepartureDate} className="bg-[#14ABFA] text-[#0E1035] px-7 py-3 text-xs font-black uppercase tracking-wider cursor-pointer hover:bg-[#0E1035] hover:text-white transition-colors">Done</button>
                      </div>
                    </div>
                  )}
                  {openFilter === 'length' && (
                    <div><h3 className="font-extrabold text-[#0E1035] mb-4">Cruise length</h3>{['Any Cruise Length','1 to 2 Nights','3 to 5 Nights','6 to 8 Nights','9 to 11 Nights','12+ Nights'].map(x => <button key={x} onClick={() => choose('length', x)} className="block w-full text-left px-4 py-3 text-sm font-medium hover:bg-[#F1F6FD] cursor-pointer">{x}</button>)}</div>
                  )}
                  {openFilter === 'line' && (
                    <div><h3 className="font-extrabold text-[#0E1035] mb-4">Cruise line</h3><div className="grid grid-cols-1 sm:grid-cols-2">{CRUISE_LINES.map(x => <button key={x} onClick={() => choose('line', x)} className={`text-left px-4 py-3 text-sm font-medium hover:bg-[#F1F6FD] cursor-pointer ${selected.line === x ? 'bg-[#0E1035] text-white hover:bg-[#0E1035]' : ''}`}>{x}</button>)}</div></div>
                  )}
                  {openFilter === 'port' && (
                    <div><h3 className="font-extrabold text-[#0E1035] mb-4">Departure port</h3><button onClick={() => choose('port', 'Any Port')} className="w-full text-left bg-[#0E1035] text-white px-4 py-3 text-sm mb-2 cursor-pointer">Any Port</button><div className="grid grid-cols-1 sm:grid-cols-2 gap-5"><div><strong className="block bg-[#14ABFA]/10 p-3">US Domestic Ports</strong>{US_PORTS.map(x => <button key={x} onClick={() => choose('port', x)} className="block w-full text-left p-3 text-sm hover:bg-[#F1F6FD] cursor-pointer">{x}</button>)}</div><div><strong className="block bg-[#14ABFA]/10 p-3">International Ports</strong>{INTERNATIONAL_PORTS.map(x => <button key={x} onClick={() => choose('port', x)} className="block w-full text-left p-3 text-sm hover:bg-[#F1F6FD] cursor-pointer">{x}</button>)}</div></div></div>
                  )}
                  {openFilter === 'ship' && (
                    <div><h3 className="font-extrabold text-[#0E1035] mb-4">Cruise ship</h3><div className="grid grid-cols-1 sm:grid-cols-2">{CRUISE_SHIPS.map(x => <button key={x} onClick={() => choose('ship', x)} className="text-left px-4 py-3 text-sm font-medium hover:bg-[#F1F6FD] cursor-pointer">{x}</button>)}</div></div>
                  )}
                </div>
              )}
              <p className="text-xs font-semibold text-[#0E1035]/70">{filters.destination !== 'all' || selected.date || selected.port || selected.length || selected.line || selected.ship ? 'Your filters are ready — select View Cruises to see matching vacations.' : 'Discover cruises'}</p>
            </div>
          )}

          {activeTab === 'resorts' && <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><Tile tone="resort" label="Mexico" image={RESORT_IMAGES[0]} onClick={() => onNavigateToSection('resorts-section', 'mexico')} /><Tile tone="resort" label="Caribbean" image={RESORT_IMAGES[1]} onClick={() => onNavigateToSection('resorts-section', 'caribbean')} /><Tile tone="resort" label="Search Resorts" image={RESORT_IMAGES[2]} onClick={() => onNavigateToSection('resorts-section', 'all')} /></div>}
          {activeTab === 'tours' && <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><Tile tone="tour" label="Custom Trips" image={TOUR_IMAGES[0]} onClick={() => onNavigateToSection('tours-section', 'custom')} /><Tile tone="tour" label="Guided Tours" image={TOUR_IMAGES[1]} onClick={() => onNavigateToSection('tours-section', 'guided')} /><Tile tone="tour" label="Tour Deals" image={TOUR_IMAGES[2]} onClick={() => onNavigateToSection('tours-section', 'all')} /></div>}
          {activeTab === 'luxury' && <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><Tile tone="luxury" label="Explore All Luxury Vacations" image={LUXURY_IMAGES[0]} onClick={() => onNavigateToSection('luxury-section', 'all')} /><Tile tone="luxury" label="Luxury Cruises" image={LUXURY_IMAGES[1]} onClick={() => onNavigateToSection('luxury-section', 'luxury_ocean')} /><Tile tone="luxury" label="Luxury Resorts" image={LUXURY_IMAGES[2]} onClick={() => onNavigateToSection('luxury-section', 'luxury_villas')} /></div>}
        </div>
      </div>
    </section>
  );
};
