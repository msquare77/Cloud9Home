import React, { useEffect, useState } from 'react';
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
import { ContactPage } from './components/ContactPage';
import { FamilyTravelTips } from './components/FamilyTravelTips';
import { VoyagerTestimonials } from './components/VoyagerTestimonials';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ItineraryModal } from './components/ItineraryModal';
import { ArticleReaderModal } from './components/ArticleReaderModal';
import { ExtrasSection } from './components/ExtrasSection';
import { PayNowSection } from './components/PayNowSection';
import { TravelJournalSection } from './components/TravelJournalSection';
import { TravelJournalArticlePage } from './components/TravelJournalArticlePage';
import { CRUISE_DEALS } from './data/cruiseData';
import { CruiseFilterState, CruiseDeal, TravelTip } from './types';
import { SHOW_RESORTS_TOURS_LUXURY } from './config/featureFlags';

const getPageFromLocation = (): 'home' | 'contact' | 'faq' | 'travel-journal' => {
  const path = window.location.pathname.replace(/\/$/, '');
  if (path === '/contact') return 'contact';
  if (path === '/faq') return 'faq';
  if (path === '/travel-journal' || path.startsWith('/travel-journal/')) return 'travel-journal';
  return 'home';
};

const getSlugFromLocation = (): string | null => {
  const path = window.location.pathname.replace(/\/$/, '');
  const match = path.match(/^\/travel-journal\/(.+)$/);
  return match ? decodeURIComponent(match[1]) : null;
};

export default function App() {
  const [page, setPage] = useState<'home' | 'contact' | 'faq' | 'travel-journal'>(getPageFromLocation);
  const [travelJournalSlug, setTravelJournalSlug] = useState<string | null>(getSlugFromLocation);

  useEffect(() => {
    const onPopState = () => {
      setPage(getPageFromLocation());
      setTravelJournalSlug(getSlugFromLocation());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

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

  const [selectedItineraryDeal, setSelectedItineraryDeal] = useState<CruiseDeal | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<TravelTip | null>(null);

  const handleFilterChange = (key: keyof CruiseFilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const applySubpageSelection = (sectionId: string, subpageKey?: string) => {
    if (!subpageKey) return;
    if (sectionId === 'cruises-section') setActiveCruiseSubpage(subpageKey);
    if (sectionId === 'resorts-section') setActiveResortSubpage(subpageKey);
    if (sectionId === 'tours-section') setActiveTourSubpage(subpageKey);
    if (sectionId === 'luxury-section') setActiveLuxurySubpage(subpageKey);
    if (sectionId === 'destinations-section') setActiveDestinationSubpage(subpageKey);
    if (sectionId === 'deals-section') setActiveDealSubpage(subpageKey);
  };

  const handleScrollToSection = (sectionId: string, subpageKey?: string) => {
    applySubpageSelection(sectionId, subpageKey);

    if (page !== 'home') {
      window.history.pushState({}, '', '/');
      setPage('home');
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
      return;
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigateToContact = () => {
    window.history.pushState({}, '', '/contact');
    setPage('contact');
    window.scrollTo(0, 0);
  };

  const navigateToFaq = () => {
    window.history.pushState({}, '', '/faq');
    setPage('faq');
    window.scrollTo(0, 0);
  };

  const navigateToTravelJournal = (slug?: string) => {
    const path = slug ? `/travel-journal/${slug}` : '/travel-journal';
    window.history.pushState({}, '', path);
    setPage('travel-journal');
    setTravelJournalSlug(slug || null);
    window.scrollTo(0, 0);
  };

  const handleSearchSubmit = () => {
    handleScrollToSection('cruises-section', 'all');
  };

  const handleStartQuiz = () => {
    handleScrollToSection('quiz-section');
  };

  const handleOpenBookingModal = (_dealTitle?: string) => {
    // Vacation planning consultation popup is disabled sitewide.
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
      {page === 'home' && <SplashScreen />}

      {/* 1. Header & Navigation with Dream Vacations Hierarchy */}
      <Navbar
        onSelectSection={handleScrollToSection}
        onNavigateToContact={navigateToContact}
        onNavigateToFaq={navigateToFaq}
        onNavigateToTravelJournal={navigateToTravelJournal}
      />

      <main className="flex-1">
        {page === 'contact' ? (
          <ContactPage />
        ) : page === 'faq' ? (
          <FaqSection onOpenBookingModal={() => handleOpenBookingModal()} />
        ) : page === 'travel-journal' ? (
          travelJournalSlug ? (
            <TravelJournalArticlePage
              slug={travelJournalSlug}
              onBack={() => navigateToTravelJournal()}
              onOpenArticle={(articleSlug) => navigateToTravelJournal(articleSlug)}
              onOpenBookingModal={handleOpenBookingModal}
            />
          ) : (
            <TravelJournalSection onOpenArticle={(articleSlug) => navigateToTravelJournal(articleSlug)} />
          )
        ) : (
          <>
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

        {/* 13. EXCLUSIVE PROMOTIONS & LIMITED DEALS */}
        <DealsSection
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activeDealSubpage}
          key={`deals-${activeDealSubpage}`}
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
        <VisualJourneysGallery onNavigateToSection={handleScrollToSection} />

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

        {/* 9-11. RESORTS, TOURS & LUXURY — hidden per request, not removed.
             Flip SHOW_RESORTS_TOURS_LUXURY to true to bring these back. */}
        {SHOW_RESORTS_TOURS_LUXURY && (
          <>
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
          </>
        )}

        {/* 12. TOP WORLD DESTINATIONS */}
        <DestinationsSection
          onSelectDestination={(region) => handleScrollToSection('cruises-section')}
          onOpenBookingModal={handleOpenBookingModal}
          initialSubpage={activeDestinationSubpage}
          key={`destinations-${activeDestinationSubpage}`}
        />

        {/* 12.5 TRAVEL EXTRAS: WiFi, Beverage & Excursion Add-Ons */}
        <ExtrasSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 17. Family Guides & Stateroom Insider Tips */}
        <FamilyTravelTips onOpenArticle={handleOpenArticle} />

        {/* 18. Verified Voyager Testimonials */}
        <VoyagerTestimonials />

        {/* 19. PAY NOW: Existing Booking Balance Payment */}
        <PayNowSection onOpenBookingModal={handleOpenBookingModal} />
          </>
        )}
      </main>

      {/* 22. Comprehensive Footer with Legal & Contact */}
      <Footer
        onSelectSection={handleScrollToSection}
        onNavigateToContact={navigateToContact}
        onNavigateToFaq={navigateToFaq}
        onNavigateToTravelJournal={navigateToTravelJournal}
      />

      {/* Sticky WhatsApp Contact Button */}
      <WhatsAppButton />

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
