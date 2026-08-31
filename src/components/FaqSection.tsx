import React, { useState } from 'react';
import { FAQS } from '../data/cruiseData';

interface FaqSectionProps {
  onOpenBookingModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBookingModal }) => {
  const [openId, setOpenId] = useState<string>('faq-pricing-1');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'pricing', label: 'Pricing & Value' },
    { id: 'booking', label: 'Booking & Documents' },
    { id: 'family', label: 'Families & Staterooms' },
    { id: 'perks', label: 'Perks & Support' }
  ];

  const filteredFaqs = FAQS.filter(faq => {
    if (selectedCategory !== 'all' && faq.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? '' : id);
  };

  return (
    <section id="faq-section" className="py-20 sm:py-28 bg-[#F1F6FD]">
      <div className="w-full max-w-[1640px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="font-signature text-3xl sm:text-4xl text-[#14ABFA] select-none block mb-1">
            Common Inquiries
          </span>
          <h2 className="editorial-title text-3xl sm:text-5xl lg:text-6xl text-[#0E1035] leading-tight">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-sm sm:text-base text-[#0E1035]/75 font-normal mt-3 leading-relaxed">
            Straight answers about planning with your Dream Vacations advisor, cruise pricing, travel documents, staterooms, family travel, and onboard perks.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="space-y-4 mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questions (e.g. price guarantee, passports, cabins, onboard credit)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="site-search-field site-search-field--light"
            />
          </div>

          <div className="site-text-tab-row flex items-center overflow-x-auto pt-2 pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`site-text-tab ${selectedCategory === cat.id ? 'is-active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white overflow-hidden transition-all duration-200 shadow-xs"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                >
                  <span className="font-extrabold text-sm sm:text-base text-[#0E1035]">
                    {faq.question}
                  </span>
                  <span className="text-[#0E1035] font-bold text-lg shrink-0 select-none">
                    {isOpen ? '—' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-[#0E1035]/80 font-medium leading-relaxed border-t border-[#0E1035]/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Support CTA */}
        <div className="mt-12 p-8 bg-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <h4 className="font-extrabold text-[#0E1035] text-base mb-1">
              Still have a question?
            </h4>
            <p className="text-xs text-[#0E1035]/70">
              Your Dream Vacations Travel Advisor can help you understand the details of your specific cruise, resort, tour, or vacation.
            </p>
          </div>
          <button
            onClick={onOpenBookingModal}
            className="py-2.5 text-[#0E1035] hover:text-[#14ABFA] font-black text-xs uppercase tracking-wider transition-colors shrink-0 cursor-pointer border-b-2 border-[#14ABFA]"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
  );
};
