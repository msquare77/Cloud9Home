import React, { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ALL_CRUISE_LINES } from '../data/allCruiseLinesData';
import { CRUISE_LINE_IMAGES, CruiseDirectoryFilter, cruiseLineMatchesFilter, resolveCruiseLineImage } from './AllCruiseLinesDirectory';
import { RESORT_GROUPS } from './ResortsSection';
import { PARTNERS_BY_SUBCATEGORY, SUBCATEGORY_LABELS, TOUR_CATEGORIES, TOUR_IMAGES } from './ToursSection';
import { LUXURY_GROUPS } from './LuxurySection';
import { DESTINATIONS } from './DestinationsSection';
import { ViewMoreToggle } from './ViewMoreToggle';

type PortfolioCategory = 'cruises' | 'resorts' | 'tours' | 'luxury' | 'destinations';
type PrimaryCategory = 'all' | PortfolioCategory;

interface GalleryItem {
  id: string;
  title: string;
  category: PortfolioCategory;
  subcategory: string;
  subcategoryLabel: string;
  imageUrl: string;
  caption: string;
  meta: string;
  accent: string;
  imageClassName?: string;
}

interface GallerySubcategory {
  id: string;
  label: string;
}

const PRIMARY_CATEGORIES: { id: PrimaryCategory; label: string }[] = [
  { id: 'all', label: 'All Portfolios' },
  { id: 'cruises', label: 'Cruises' },
  { id: 'resorts', label: 'Resorts' },
  { id: 'tours', label: 'Tours' },
  { id: 'luxury', label: 'Luxury' },
  { id: 'destinations', label: 'Destinations' },
];

const CRUISE_SUBCATEGORIES: GallerySubcategory[] = [
  { id: 'all', label: 'All Cruise Lines' },
  { id: 'luxury', label: 'Luxury Cruises' },
  { id: 'river', label: 'River Cruises' },
  { id: 'expedition', label: 'Expedition Cruises' },
  { id: 'contemporary', label: 'Contemporary Cruises' },
  { id: 'group', label: 'Group Cruises' },
  { id: 'world', label: 'World Cruises' },
];

const RESORT_SUBCATEGORIES: GallerySubcategory[] = RESORT_GROUPS.map(group => ({
  id: group.id,
  label: group.label,
}));

const TOUR_SUBCATEGORIES: GallerySubcategory[] = TOUR_CATEGORIES.flatMap(category => category.subcategories);

const LUXURY_SUBCATEGORIES: GallerySubcategory[] = LUXURY_GROUPS.map(group => ({
  id: group.id,
  label: group.label,
}));

const SUBCATEGORIES: Record<PortfolioCategory, GallerySubcategory[]> = {
  cruises: CRUISE_SUBCATEGORIES,
  resorts: RESORT_SUBCATEGORIES,
  tours: TOUR_SUBCATEGORIES,
  luxury: LUXURY_SUBCATEGORIES,
  destinations: [],
};

const DEFAULT_SUBCATEGORY: Record<PortfolioCategory, string> = {
  cruises: 'all',
  resorts: RESORT_SUBCATEGORIES[0]?.id || 'featured',
  tours: TOUR_SUBCATEGORIES[0]?.id || 'all',
  luxury: LUXURY_SUBCATEGORIES[0]?.id || 'cruises',
  destinations: 'all',
};

const categoryAccent: Record<PortfolioCategory, string> = {
  cruises: '#14ABFA',
  resorts: '#2FE0C0',
  tours: '#E8A73D',
  luxury: '#4136EA',
  destinations: '#2FBE7A',
};

const cruiseItemsFor = (subcategory: string): GalleryItem[] => {
  const subcategoryLabel = CRUISE_SUBCATEGORIES.find(item => item.id === subcategory)?.label || 'All Cruise Lines';

  return ALL_CRUISE_LINES
    .filter(line => cruiseLineMatchesFilter(line, subcategory as CruiseDirectoryFilter))
    .map(line => ({
      id: `gallery-cruise-${line.id}`,
      title: line.name,
      category: 'cruises' as const,
      subcategory,
      subcategoryLabel,
      imageUrl: resolveCruiseLineImage(
        CRUISE_LINE_IMAGES[line.name] || '/assets/Cruises/optimized/royal-caribbean.webp',
      ),
      caption: line.tagline,
      meta: `${line.categoryLabel} · ${line.fleetCount} ${line.fleetCount === 1 ? 'ship' : 'ships'} in fleet`,
      accent: categoryAccent.cruises,
      imageClassName: line.name === 'Ponant Cruises' ? 'scale-[2.75] object-[center_48%]' : undefined,
    }));
};

const resortItemsFor = (subcategory: string): GalleryItem[] => {
  const group = RESORT_GROUPS.find(item => item.id === subcategory) || RESORT_GROUPS[0];
  return group.stories.map(story => ({
    id: `gallery-resort-${story.id}`,
    title: story.title,
    category: 'resorts' as const,
    subcategory: group.id,
    subcategoryLabel: group.label,
    imageUrl: story.image,
    caption: story.description,
    meta: group.label,
    accent: group.background,
  }));
};

const tourItemsFor = (subcategory: string): GalleryItem[] => {
  const partners = PARTNERS_BY_SUBCATEGORY[subcategory as keyof typeof PARTNERS_BY_SUBCATEGORY]
    || PARTNERS_BY_SUBCATEGORY.all;
  const subcategoryLabel = SUBCATEGORY_LABELS[subcategory as keyof typeof SUBCATEGORY_LABELS] || 'All Tours';

  return partners.map((partner, index) => ({
    id: `gallery-tour-${subcategory}-${partner.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
    title: partner,
    category: 'tours' as const,
    subcategory,
    subcategoryLabel,
    imageUrl: TOUR_IMAGES[index % TOUR_IMAGES.length],
    caption: `Explore ${subcategoryLabel.toLowerCase()} available through ${partner}.`,
    meta: `${subcategoryLabel} · Dream Vacations partner`,
    accent: categoryAccent.tours,
  }));
};

const luxuryItemsFor = (subcategory: string): GalleryItem[] => {
  const group = LUXURY_GROUPS.find(item => item.id === subcategory) || LUXURY_GROUPS[0];
  return group.stories.map(story => ({
    id: `gallery-luxury-${story.id}`,
    title: story.title,
    category: 'luxury' as const,
    subcategory: group.id,
    subcategoryLabel: group.label,
    imageUrl: story.image,
    caption: story.description,
    meta: group.label,
    accent: group.background,
  }));
};

const destinationItems = (): GalleryItem[] => DESTINATIONS.map(destination => ({
  id: `gallery-destination-${destination.id}`,
  title: destination.name,
  category: 'destinations' as const,
  subcategory: 'all',
  subcategoryLabel: 'Destinations',
  imageUrl: destination.imageUrl,
  caption: destination.description,
  meta: 'Destination inspiration',
  accent: destination.accent,
}));

const itemsForCategory = (category: PortfolioCategory, subcategory: string): GalleryItem[] => {
  if (category === 'cruises') return cruiseItemsFor(subcategory);
  if (category === 'resorts') return resortItemsFor(subcategory);
  if (category === 'tours') return tourItemsFor(subcategory);
  if (category === 'luxury') return luxuryItemsFor(subcategory);
  return destinationItems();
};

const overviewItems = (): GalleryItem[] => [
  cruiseItemsFor('all')[0],
  resortItemsFor(DEFAULT_SUBCATEGORY.resorts)[0],
  tourItemsFor(DEFAULT_SUBCATEGORY.tours)[0],
  luxuryItemsFor(DEFAULT_SUBCATEGORY.luxury)[0],
  destinationItems()[0],
].filter((item): item is GalleryItem => Boolean(item));

export const GalleryShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PrimaryCategory>('all');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const galleryItems = useMemo(() => {
    if (selectedCategory === 'all') return overviewItems();
    return itemsForCategory(selectedCategory, selectedSubcategory);
  }, [selectedCategory, selectedSubcategory]);

  const visibleItems = showAll ? galleryItems : galleryItems.slice(0, 3);
  const currentItem = activeItemIndex === null ? null : galleryItems[activeItemIndex];

  const selectCategory = (category: PrimaryCategory) => {
    setSelectedCategory(category);
    setSelectedSubcategory(category === 'all' ? 'all' : DEFAULT_SUBCATEGORY[category]);
    setShowAll(false);
    setActiveItemIndex(null);
  };

  const selectSubcategory = (subcategory: string) => {
    setSelectedSubcategory(subcategory);
    setShowAll(false);
    setActiveItemIndex(null);
  };

  const moveLightbox = (direction: -1 | 1) => {
    setActiveItemIndex(current => {
      if (current === null || galleryItems.length === 0) return current;
      return (current + direction + galleryItems.length) % galleryItems.length;
    });
  };

  useEffect(() => {
    if (activeItemIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveItemIndex(null);
      if (event.key === 'ArrowLeft') moveLightbox(-1);
      if (event.key === 'ArrowRight') moveLightbox(1);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeItemIndex, galleryItems.length]);

  return (
    <section id="gallery-section" className="bg-[#FBFDFF] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <header className="mb-8 max-w-4xl sm:mb-10">
          <span className="font-signature mb-1 block select-none text-3xl text-[#14ABFA] sm:text-4xl">
            See Before You Go
          </span>
          <h2 className="editorial-title text-3xl leading-tight text-[#0E1035] sm:text-5xl lg:text-6xl">
            VACATION VISUAL LIBRARY
          </h2>
        </header>

        <div
          className="site-text-tab-row flex items-center overflow-x-auto pb-2 scrollbar-none"
          role="tablist"
          aria-label="Vacation image libraries"
        >
          {PRIMARY_CATEGORIES.map(category => (
            <button
              key={category.id}
              type="button"
              role="tab"
              aria-selected={selectedCategory === category.id}
              onClick={() => selectCategory(category.id)}
              className={`site-text-tab site-text-tab--primary ${selectedCategory === category.id ? 'is-active' : ''}`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {selectedCategory !== 'all' && SUBCATEGORIES[selectedCategory].length > 0 && (
          <div
            className="site-text-tab-row site-text-tab-row--secondary mt-3 flex items-center overflow-x-auto pb-2 scrollbar-none"
            role="tablist"
            aria-label={`${selectedCategory} image categories`}
          >
            {SUBCATEGORIES[selectedCategory].map(subcategory => (
              <button
                key={subcategory.id}
                type="button"
                role="tab"
                aria-selected={selectedSubcategory === subcategory.id}
                onClick={() => selectSubcategory(subcategory.id)}
                className={`site-text-tab ${selectedSubcategory === subcategory.id ? 'is-active' : ''}`}
              >
                {subcategory.label}
              </button>
            ))}
          </div>
        )}

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
          {visibleItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveItemIndex(index)}
              className="group min-w-0 text-left focus:outline-none"
              aria-label={`View ${item.title} image`}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-[#E7EEF8]">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out ${
                    item.imageClassName || 'group-hover:scale-[1.04]'
                  }`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E1035]/72 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-65" />
                <span className="absolute bottom-5 left-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/85">
                  {item.subcategoryLabel}
                </span>
              </div>

              <h3 className="mt-4 text-xl font-bold leading-tight text-[#0E1035] transition-colors group-hover:text-[#14ABFA] sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-1.5 text-sm font-normal text-[#0E1035]/60">{item.meta}</p>
            </button>
          ))}
        </div>

        {galleryItems.length === 0 && (
          <div className="mt-10 bg-[#F1F6FD] px-6 py-14 text-center">
            <p className="text-base font-semibold text-[#0E1035]">Images for this collection are being prepared.</p>
          </div>
        )}

        <ViewMoreToggle
          expanded={showAll}
          total={galleryItems.length}
          label="Images"
          onToggle={() => setShowAll(expanded => !expanded)}
        />

        {currentItem && activeItemIndex !== null && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0E1035]/82 p-3 backdrop-blur-xl sm:p-6"
            onMouseDown={() => setActiveItemIndex(null)}
            role="presentation"
          >
            <article
              className="relative grid max-h-[92vh] w-full max-w-[1380px] overflow-y-auto bg-[#F1F6FD] shadow-[0_28px_90px_rgba(4,7,30,0.34)] lg:grid-cols-[minmax(0,1.55fr)_minmax(330px,.65fr)] lg:overflow-hidden"
              onMouseDown={event => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="gallery-lightbox-title"
            >
              <div className="relative flex min-h-[48vh] items-center justify-center overflow-hidden bg-[#0E1035] p-3 sm:min-h-[62vh] sm:p-5 lg:h-[84vh]">
                <img
                  src={currentItem.imageUrl}
                  alt={currentItem.title}
                  className="site-content-image h-full max-h-[78vh] w-full object-contain"
                  referrerPolicy="no-referrer"
                />

                {galleryItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() => moveLightbox(-1)}
                      className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0E1035] transition-colors hover:bg-[#14ABFA]"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveLightbox(1)}
                      className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#0E1035] transition-colors hover:bg-[#14ABFA]"
                      aria-label="Next image"
                    >
                      <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
                    </button>
                  </>
                )}
              </div>

              <div className="flex min-h-[360px] flex-col p-7 sm:p-10 lg:h-[84vh] lg:p-11">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="font-signature block text-3xl text-[#14ABFA]">Visual Library</span>
                    <p
                      className="mt-5 text-xs font-semibold uppercase tracking-[0.18em]"
                      style={{ color: currentItem.accent }}
                    >
                      {PRIMARY_CATEGORIES.find(category => category.id === currentItem.category)?.label} · {currentItem.subcategoryLabel}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveItemIndex(null)}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#0E1035] transition-colors hover:bg-[#14ABFA]"
                    aria-label="Close image viewer"
                  >
                    <X className="h-5 w-5" strokeWidth={1.8} />
                  </button>
                </div>

                <div className="my-auto py-10">
                  <h3 id="gallery-lightbox-title" className="text-3xl font-bold leading-tight text-[#0E1035] sm:text-4xl">
                    {currentItem.title}
                  </h3>
                  <p className="mt-5 text-sm font-normal leading-7 text-[#0E1035]/70 sm:text-base">
                    {currentItem.caption}
                  </p>
                  <p className="mt-6 text-sm font-semibold leading-6 text-[#0E1035]">{currentItem.meta}</p>
                </div>

                <div className="flex items-center justify-between gap-5">
                  <span className="text-xs font-medium uppercase tracking-[0.14em] text-[#0E1035]/48">
                    {String(activeItemIndex + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
                  </span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => moveLightbox(-1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0E1035] transition-colors hover:bg-[#14ABFA]"
                      aria-label="Previous gallery item"
                    >
                      <ChevronLeft className="h-5 w-5" strokeWidth={1.8} />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveLightbox(1)}
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0E1035] text-white transition-colors hover:bg-[#14ABFA] hover:text-[#0E1035]"
                      aria-label="Next gallery item"
                    >
                      <ChevronRight className="h-5 w-5" strokeWidth={1.8} />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}
      </div>
    </section>
  );
};
