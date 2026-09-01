import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { SplashScreen } from './components/SplashScreen';
import { HeroSection } from './components/HeroSection';
import { VacationExplorerSection } from './components/VacationExplorerSection';
import { CruisesSection } from './components/CruisesSection';
import { VisualJourneysGallery } from './components/VisualJourneysGallery';
import { SocialCommunityHub } from './components/SocialCommunityHub';
import { CompetitiveMatrix } from './components/CompetitiveMatrix';
import { PerksCalculator } from './components/PerksCalculator';
import { ResortsSection } from './components/ResortsSection';
import { ToursSection } from './components/ToursSection';
import { LuxurySection } from './components/LuxurySection';
import { DestinationsSection } from './components/DestinationsSection';
import { DealsSection } from './components/DealsSection';
import { InstantQuoteBuilder } from './components/InstantQuoteBuilder';
import { ExtrasSection } from './components/ExtrasSection';
import { GalleryShowcase } from './components/GalleryShowcase';
import { FamilyTravelTips } from './components/FamilyTravelTips';
import { VoyagerTestimonials } from './components/VoyagerTestimonials';
import { FaqSection } from './components/FaqSection';
import { ConversionCtaBanner } from './components/ConversionCtaBanner';
import { PayNowSection } from './components/PayNowSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BookingModal } from './components/BookingModal';
import { ItineraryModal } from './components/ItineraryModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { CRUISE_DEALS } from './data/cruiseData';
import { CruiseFilterState, CruiseDeal, TravelTip } from './types';

export default function App() {
  const [filters, setFilters] = useState<CruiseFilterState>({
    destination: 'all',
    cruiseLine: 'all',
    departurePort: 'all',
    month: 'all',
    duration: 'all',
    travelerType: 'all',
  });

  // Active subpage states for each major section
  const [activeCruiseSubpage, setActiveCruiseSubpage] = useState<string>('all');
  const [activeResortSubpage, setActiveResortSubpage] = useState<string>('all');
  const [activeTourSubpage, setActiveTourSubpage] = useState<string>('all');
  const [activeLuxurySubpage, setActiveLuxurySubpage] = useState<string>('all');
  const [activeDestinationSubpage, setActiveDestinationSubpage] = useState<string>('all');
  const [activeDealSubpage, setActiveDealSubpage] = useState<string>('all');
  const [activeExtraSubpage, setActiveExtraSubpage] = useState<string>('all');
  const [activePaySubpage, setActivePaySubpage] = useState<string>('payment');

  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedDealTitle, setSelectedDealTitle] = useState<string | undefined>(undefined);
  const [quoteDetails, setQuoteDetails] = useState<any>(undefined);

  const [selectedItineraryDeal, setSelectedItineraryDeal] = useState<CruiseDeal | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<TravelTip | null>(null);

  const handleFilterChange = (key: keyof CruiseFilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleScrollToSection = (sectionId: string, subpageKey?: string) => {
    if (subpageKey) {
      if (sectionId === 'cruises-section') setActiveCruiseSubpage(subpageKey);
      if (sectionId === 'resorts-section') setActiveResortSubpage(subpageKey);
      if (sectionId === 'tours-section') setActiveTourSubpage(subpageKey);
      if (sectionId === 'luxury-section') setActiveLuxurySubpage(subpageKey);
      if (sectionId === 'destinations-section') setActiveDestinationSubpage(subpageKey);
      if (sectionId === 'deals-section') setActiveDealSubpage(subpageKey);
      if (sectionId === 'extras-section') setActiveExtraSubpage(subpageKey);
      if (sectionId === 'pay-now-section') setActivePaySubpage(subpageKey);
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchSubmit = () => {
    handleScrollToSection('cruises-section', 'all');
  };

  const handleStartQuiz = () => {
    handleScrollToSection('quiz-section');
  };

  const handleOpenBookingModal = (dealTitle?: string) => {
    setSelectedDealTitle(dealTitle);
    setQuoteDetails(undefined);
    setBookingModalOpen(true);
  };

  const handleOpenBookingModalWithDetails = (details: any) => {
    setSelectedDealTitle(`Custom Stateroom Quote: ${details.cruiseLine} - ${details.stateroom}`);
    setQuoteDetails(details);
    setBookingModalOpen(true);
  };

  const handleOpenItineraryModal = (deal: CruiseDeal) => {
    setSelectedItineraryDeal(deal);
  };

  const handleCloseItineraryModal = () => {
    setSelectedItineraryDeal(null);
  };

  const handleOpenArticle = (tip: TravelTip) => {
    setSelectedArticle(tip);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="min-h-screen bg-[#F1F6FD] text-[#0E1035] flex flex-col selection:bg-[#14ABFA]/20 selection:text-[#0E1035]">
      {/* 0. Cloud Portal Splash Screen */}
      <SplashScreen />

      {/* 1. Header & Navigation with Dream Vacations Hierarchy */}
      <Navbar
        onOpenBookingModal={handleOpenBookingModal}
        onSelectSection={handleScrollToSection}
      />

      <main className="flex-1">
        {/* 1. Hero Section with Live Search Engine & Concierge Spotlight */}
        <HeroSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearchSubmit={handleSearchSubmit}
          onOpenBookingModal={handleOpenBookingModal}
          onStartQuiz={handleStartQuiz}
          onNavigateToMatch={handleScrollToSection}
          dealCount={CRUISE_DEALS.length}
        />

        {/* 3. FIND YOUR PERFECT SHIP & VIBE (Interactive First-Timer Questionnaire) */}
        <VacationExplorerSection
          filters={filters}
          onFilterChange={handleFilterChange}
          onSearchSubmit={handleSearchSubmit}
          onOpenBookingModal={handleOpenBookingModal}
          onNavigateToSection={handleScrollToSection}
        />

        {/* 3.5. VISUAL JOURNEYS GALLERY */}
        <VisualJourneysGallery />

        {/* 4. CRUISES AND EXPEDITIONS */}
        <CruisesSection
          deals={CRUISE_DEALS}
          onOpenBookingModal={handleOpenBookingModal}
          onOpenItineraryModal={handleOpenItineraryModal}
          initialSubpage={activeCruiseSubpage}
          key={`cruises-${activeCruiseSubpage}`}
        />

        {/* 6. FOLLOW THE JOURNEY: @CLOUD9CRUISES */}
        <SocialCommunityHub />

        {/* 7. Competitive Value Matrix: Us vs Direct Booking */}
        <CompetitiveMatrix onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 8. Free Perks & Amenity Value Calculator */}
        <PerksCalculator onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 9. ALL-INCLUSIVE RESORTS & GETAWAYS */}
        <ResortsSection
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activeResortSubpage}
          key={`resorts-${activeResortSubpage}`}
        />

        {/* 10. GUIDED WORLD TOURS & SAFARIS */}
        <ToursSection
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activeTourSubpage}
          key={`tours-${activeTourSubpage}`}
        />

        {/* 11. ULTRA-LUXURY VACATIONS & YACHT CHARTERS */}
        <LuxurySection
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activeLuxurySubpage}
          key={`luxury-${activeLuxurySubpage}`}
        />

        {/* 12. TOP WORLD DESTINATIONS */}
        <DestinationsSection
          onSelectDestination={(region) => handleScrollToSection('cruises-section')}
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activeDestinationSubpage}
          key={`destinations-${activeDestinationSubpage}`}
        />

        {/* 13. EXCLUSIVE PROMOTIONS & LIMITED DEALS */}
        <DealsSection
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activeDealSubpage}
          key={`deals-${activeDealSubpage}`}
        />

        {/* 14. Instant Stateroom Quote & Fare Estimator */}
        <InstantQuoteBuilder onOpenBookingModalWithDetails={handleOpenBookingModalWithDetails} />

        {/* 15. TRAVEL EXTRAS & CONCIERGE SERVICES */}
        <ExtrasSection
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activeExtraSubpage}
          key={`extras-${activeExtraSubpage}`}
        />

        {/* 16. High-Resolution Ship & Port Gallery */}
        <GalleryShowcase />

        {/* 17. Family Guides & Stateroom Insider Tips */}
        <FamilyTravelTips onOpenArticle={handleOpenArticle} />

        {/* 18. Verified Voyager Testimonials */}
        <VoyagerTestimonials />

        {/* 19. Frequently Asked Questions Accordion */}
        <FaqSection onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 20. PAY NOW & CLIENT PORTAL */}
        <PayNowSection
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activePaySubpage}
          key={`pay-${activePaySubpage}`}
        />

        {/* 21. Bespoke Voyage CTA & Newsletter */}
        <ConversionCtaBanner onOpenBookingModal={() => handleOpenBookingModal()} />
      </main>

      {/* 22. Comprehensive Footer with Legal & Contact */}
      <Footer
        onSelectSection={handleScrollToSection}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Sticky WhatsApp Contact Button */}
      <WhatsAppButton />

      {/* Interactive Booking / Free Quote Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialDealTitle={selectedDealTitle}
        initialQuoteDetails={quoteDetails}
      />

      {/* Interactive Itinerary & Port Timeline Modal */}
      <ItineraryModal
        deal={selectedItineraryDeal}
        onClose={handleCloseItineraryModal}
        onBookThisDeal={(dealTitle) => handleOpenBookingModal(dealTitle)}
      />

      {/* Full Editorial Article Reader Modal */}
      <ArticleReaderModal
        article={selectedArticle}
        onClose={handleCloseArticle}
        onOpenBookingModal={(ctx) => handleOpenBookingModal(ctx)}
      />
    </div>
  );
}
