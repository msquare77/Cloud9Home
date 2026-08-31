import React, { useState } from 'react';
import { ALL_CRUISE_LINES_DIRECTORY } from '../data/cruiseLines';

interface InstantQuoteBuilderProps {
  onOpenBookingModalWithDetails: (details: {
    destination: string;
    cruiseLine: string;
    stateroom: string;
    adults: number;
    children: number;
    estimatedTotal: number;
  }) => void;
}

interface QuoteFormState {
  name: string;
  contact: string;
  vacationType: string;
  cruiseLine: string;
  resort: string;
  tour: string;
  luxury: string;
  destination: string;
  deal: string;
  extra: string;
  travelDate: string;
  travelers: string;
  budget: string;
  notes: string;
}

const RESORTS = [
  'American Airlines Vacations',
  'Baglioni Hotels & Resorts',
  'Beaches Resorts',
  'Blue Sky Tours',
  'Breathless Resorts & Spas',
  'Club Med',
  'Delta Vacations',
  'Disney Parks & Resorts',
  'Dreams Resorts & Spas',
  'EVOKE Inspire',
  'Hard Rock Hotel & Casino',
  'Hyatt Vivid Hotels & Resorts',
  'Hyatt Ziva & Zilara',
  "Hyatt's Inclusive Collection",
  'Impression by Secrets',
  'Le Blanc Spa Resorts',
  'Moon Palace Resorts',
  'Palace Resorts',
  'Pleasant Holidays',
  'RIU Hotels & Resorts',
  'Sandals Resorts',
  'Secrets Resorts & Spas',
  'Sunscape Resorts & Spas',
  'Travel Impressions',
  'Universal Parks & Resorts Vacations',
  'Vacation Express',
  'Villas of Distinction',
  'Zoëtry Wellness & Spa Resorts'
];

const TOUR_INTERESTS = [
  'All Tours',
  'Guided Tours',
  'Custom Trips',
  'Day Tours',
  'Rail Journeys',
  'Safaris'
];

const LUXURY_INTERESTS = [
  'All Luxury Cruises',
  'River Cruise Lines',
  'Expedition Cruises',
  'World Cruises',
  'All Luxury Resorts',
  'All Luxury Villas',
  'All Rail',
  'All Safaris',
  'All Tours',
  'Guided Tours',
  'Custom Trips',
  'Day Tours'
];

const DESTINATIONS = [
  'Africa',
  'Alaska',
  'Antarctica',
  'Asia',
  'Australia & New Zealand',
  'Bermuda',
  'Caribbean',
  'Central America',
  'Dubai & India',
  'Europe',
  'Galápagos',
  'Hawaii',
  'Iceland',
  'Mediterranean',
  'Mexico',
  'South America',
  'South Pacific',
  'United Kingdom & Ireland',
  'United States'
];

const DEALS = [
  'All Cruise Deals',
  'Groups',
  'Honeymoon Cruises',
  'Holiday Cruises',
  'Weekend Cruises',
  'Balcony Cabins/Suites',
  'Family Cruises',
  'New Cruise Ships',
  'Solo Cruises',
  'All Resort Deals',
  'All Tour Deals',
  'All Military Deals'
];

const EXTRAS = [
  'Videos',
  'Brochures',
  'Destination Weddings',
  'Honeymoon Registry',
  'Shore Excursions',
  'Travel Insurance',
  'Flights & Car Rentals'
];

const initialForm: QuoteFormState = {
  name: '',
  contact: '',
  vacationType: '',
  cruiseLine: '',
  resort: '',
  tour: '',
  luxury: '',
  destination: '',
  deal: '',
  extra: '',
  travelDate: '',
  travelers: '',
  budget: '',
  notes: ''
};

const fieldClass = 'site-search-field bg-[#F1F6FD] appearance-none cursor-pointer';

export const InstantQuoteBuilder: React.FC<InstantQuoteBuilderProps> = () => {
  const [form, setForm] = useState<QuoteFormState>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof QuoteFormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const details = [
      'Hello Cloud 9 Travels! I would like a personalized vacation quote.',
      '',
      `Name: ${form.name}`,
      `Phone or email: ${form.contact}`,
      `Vacation type: ${form.vacationType || 'Open to recommendations'}`,
      `Cruise line: ${form.cruiseLine || 'Not selected'}`,
      `Resort: ${form.resort || 'Not selected'}`,
      `Tour: ${form.tour || 'Not selected'}`,
      `Luxury interest: ${form.luxury || 'Not selected'}`,
      `Destination: ${form.destination || 'Open to recommendations'}`,
      `Deal interest: ${form.deal || 'Please recommend current offers'}`,
      `Extra services: ${form.extra || 'None selected'}`,
      `Preferred travel date: ${form.travelDate || 'Flexible'}`,
      `Travelers: ${form.travelers || 'To be confirmed'}`,
      `Budget: ${form.budget || 'Would like guidance'}`,
      `Additional notes: ${form.notes || 'None'}`
    ];

    const whatsappUrl = `https://wa.me/17135607016?text=${encodeURIComponent(details.join('\n'))}`;
    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="quote-builder-section" className="bg-[#F1F6FD] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-4xl">
          <span className="font-signature block select-none text-3xl text-[#14ABFA] sm:text-4xl">
            Tell us what you have in mind
          </span>
          <h2 className="editorial-title mt-1 text-3xl leading-tight text-[#0E1035] sm:text-5xl lg:text-6xl">
            REQUEST YOUR PERSONALIZED QUOTE
          </h2>
          <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-[#0E1035]/70 sm:text-base">
            Share as much or as little as you know. Your selections will be organized into a WhatsApp message for the Cloud 9 team.
          </p>
        </div>

        <div className="mt-12 grid bg-white lg:grid-cols-[360px_minmax(0,1fr)]">
          <aside className="flex flex-col justify-between bg-[#0E1035] p-7 text-white sm:p-10">
            <div>
              <h3 className="text-3xl font-bold leading-tight text-white">Your quote request</h3>
              <p className="mt-5 text-sm font-normal leading-relaxed text-white/68">
                Choose the parts that matter to you. Leave anything blank when you would prefer a recommendation from your travel advisor.
              </p>

              <div className="mt-9 space-y-5">
                {[
                  ['01', 'Tell us your preferences'],
                  ['02', 'Send the request by WhatsApp'],
                  ['03', 'Receive a quote']
                ].map(([number, text]) => (
                  <div key={number} className="flex items-center gap-4">
                    <span className="text-xs font-semibold text-[#14ABFA]">{number}</span>
                    <span className="text-sm font-medium text-white/85">{text}</span>
                  </div>
                ))}
              </div>
            </div>

          </aside>

          <form onSubmit={handleSubmit} className="p-6 sm:p-9 lg:p-12">
            <div className="grid gap-x-5 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="quote-name" className="mb-2 block text-xs font-semibold text-[#0E1035]">Your name</label>
                <input
                  id="quote-name"
                  required
                  value={form.name}
                  onChange={(event) => updateField('name', event.target.value)}
                  placeholder="Full name"
                  className="site-search-field bg-[#F1F6FD]"
                />
              </div>
              <div>
                <label htmlFor="quote-contact" className="mb-2 block text-xs font-semibold text-[#0E1035]">Phone or email</label>
                <input
                  id="quote-contact"
                  required
                  value={form.contact}
                  onChange={(event) => updateField('contact', event.target.value)}
                  placeholder="Best way to reach you"
                  className="site-search-field bg-[#F1F6FD]"
                />
              </div>

              <div>
                <label htmlFor="quote-type" className="mb-2 block text-xs font-semibold text-[#0E1035]">Vacation type</label>
                <select id="quote-type" value={form.vacationType} onChange={(event) => updateField('vacationType', event.target.value)} className={fieldClass}>
                  <option value="">Choose a vacation type</option>
                  <option>Cruise</option>
                  <option>Resort</option>
                  <option>Tour</option>
                  <option>Luxury Vacation</option>
                  <option>Not Sure Yet</option>
                </select>
              </div>
              <div>
                <label htmlFor="quote-destination" className="mb-2 block text-xs font-semibold text-[#0E1035]">Destination</label>
                <select id="quote-destination" value={form.destination} onChange={(event) => updateField('destination', event.target.value)} className={fieldClass}>
                  <option value="">Choose a destination</option>
                  {DESTINATIONS.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="quote-cruise" className="mb-2 block text-xs font-semibold text-[#0E1035]">Cruise line</label>
                <select id="quote-cruise" value={form.cruiseLine} onChange={(event) => updateField('cruiseLine', event.target.value)} className={fieldClass}>
                  <option value="">Choose a cruise line</option>
                  {ALL_CRUISE_LINES_DIRECTORY.map((line) => <option key={line.id}>{line.name}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="quote-resort" className="mb-2 block text-xs font-semibold text-[#0E1035]">Resort</label>
                <select id="quote-resort" value={form.resort} onChange={(event) => updateField('resort', event.target.value)} className={fieldClass}>
                  <option value="">Choose a resort or vacation partner</option>
                  {RESORTS.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="quote-tour" className="mb-2 block text-xs font-semibold text-[#0E1035]">Tour</label>
                <select id="quote-tour" value={form.tour} onChange={(event) => updateField('tour', event.target.value)} className={fieldClass}>
                  <option value="">Choose a tour type</option>
                  {TOUR_INTERESTS.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="quote-luxury" className="mb-2 block text-xs font-semibold text-[#0E1035]">Luxury vacation</label>
                <select id="quote-luxury" value={form.luxury} onChange={(event) => updateField('luxury', event.target.value)} className={fieldClass}>
                  <option value="">Choose a luxury experience</option>
                  {LUXURY_INTERESTS.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="quote-deal" className="mb-2 block text-xs font-semibold text-[#0E1035]">Deal</label>
                <select id="quote-deal" value={form.deal} onChange={(event) => updateField('deal', event.target.value)} className={fieldClass}>
                  <option value="">Choose a deal type</option>
                  {DEALS.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>
              <div>
                <label htmlFor="quote-extra" className="mb-2 block text-xs font-semibold text-[#0E1035]">Extra service</label>
                <select id="quote-extra" value={form.extra} onChange={(event) => updateField('extra', event.target.value)} className={fieldClass}>
                  <option value="">Choose an optional extra</option>
                  {EXTRAS.map((item) => <option key={item}>{item}</option>)}
                </select>
              </div>

              <div>
                <label htmlFor="quote-date" className="mb-2 block text-xs font-semibold text-[#0E1035]">Preferred travel date</label>
                <input id="quote-date" type="date" value={form.travelDate} onChange={(event) => updateField('travelDate', event.target.value)} className="site-search-field bg-[#F1F6FD]" />
              </div>
              <div>
                <label htmlFor="quote-travelers" className="mb-2 block text-xs font-semibold text-[#0E1035]">Travelers</label>
                <input id="quote-travelers" value={form.travelers} onChange={(event) => updateField('travelers', event.target.value)} placeholder="Example: 2 adults, 1 child" className="site-search-field bg-[#F1F6FD]" />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="quote-budget" className="mb-2 block text-xs font-semibold text-[#0E1035]">Approximate total budget</label>
                <select id="quote-budget" value={form.budget} onChange={(event) => updateField('budget', event.target.value)} className={fieldClass}>
                  <option value="">Choose a budget range</option>
                  <option>Under $2,500</option>
                  <option>$2,500–$5,000</option>
                  <option>$5,000–$10,000</option>
                  <option>$10,000–$20,000</option>
                  <option>$20,000+</option>
                  <option>I would like guidance</option>
                </select>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="quote-notes" className="mb-2 block text-xs font-semibold text-[#0E1035]">Anything else we should know?</label>
                <textarea
                  id="quote-notes"
                  rows={4}
                  value={form.notes}
                  onChange={(event) => updateField('notes', event.target.value)}
                  placeholder="Special occasion, preferred departure city, accessibility needs, room requirements, or anything else..."
                  className="w-full resize-y bg-[#F1F6FD] px-5 py-4 text-sm text-[#0E1035] outline-none"
                />
              </div>
            </div>

            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="inner-control bg-[#14ABFA] px-7 py-4 text-xs font-bold uppercase tracking-[0.1em] text-[#0E1035] transition-colors hover:bg-[#2FE0C0] cursor-pointer"
              >
                Send Quote Request on WhatsApp
              </button>
              <p className="text-xs font-normal text-[#0E1035]/52">
                {submitted ? 'WhatsApp opened with your quote details.' : 'Your selections are not submitted until you send the WhatsApp message.'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
