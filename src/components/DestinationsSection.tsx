import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, Play, ChevronLeft, ChevronRight } from 'lucide-react';

const SPLASH_OCEAN = new URL('../../assets/splash/splash-ocean.webp', import.meta.url).href;

const AFRICA_GALLERY_01 = new URL('../../assets/africa-gallery/01-camel-ride-beach.jpeg', import.meta.url).href;
const AFRICA_GALLERY_02 = new URL('../../assets/africa-gallery/02-elephant-grass-field.jpeg', import.meta.url).href;
const AFRICA_GALLERY_03 = new URL('../../assets/africa-gallery/03-elephant-in-bush.jpeg', import.meta.url).href;
const AFRICA_GALLERY_04 = new URL('../../assets/africa-gallery/04-safari-jeep-group.jpeg', import.meta.url).href;
const AFRICA_GALLERY_05 = new URL('../../assets/africa-gallery/05-bush-breakfast.jpeg', import.meta.url).href;
const AFRICA_GALLERY_06 = new URL('../../assets/africa-gallery/06-hot-air-balloon-group.jpeg', import.meta.url).href;
const AFRICA_GALLERY_07 = new URL('../../assets/africa-gallery/07-balloon-landing-portrait.jpeg', import.meta.url).href;
const AFRICA_GALLERY_08 = new URL('../../assets/africa-gallery/08-karibu-sign-group.jpeg', import.meta.url).href;
const AFRICA_GALLERY_09 = new URL('../../assets/africa-gallery/09-welcome-to-nairobi.jpeg', import.meta.url).href;
const AFRICA_GALLERY_10 = new URL('../../assets/africa-gallery/10-jeep-hood-sunset-couple.jpg', import.meta.url).href;
const AFRICA_GALLERY_11 = new URL('../../assets/africa-gallery/11-maasai-village-group.jpeg', import.meta.url).href;
const AFRICA_GALLERY_12 = new URL('../../assets/africa-gallery/12-night-elephant-waterhole.jpeg', import.meta.url).href;

const CARIBBEAN_GALLERY_01 = new URL('../../assets/caribbean-gallery/01-sunset-couple-deck.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_02 = new URL('../../assets/caribbean-gallery/02-maho-beach-plane.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_03 = new URL('../../assets/caribbean-gallery/03-sailboat-couple.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_04 = new URL('../../assets/caribbean-gallery/04-outdoor-dining-toast.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_05 = new URL('../../assets/caribbean-gallery/05-beach-group-five.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_06 = new URL('../../assets/caribbean-gallery/06-grand-turk-boat-couple.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_07 = new URL('../../assets/caribbean-gallery/07-beach-couple-selfie.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_08 = new URL('../../assets/caribbean-gallery/08-cruise-ship-dock-couple.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_09 = new URL('../../assets/caribbean-gallery/09-cruise-deck-couple.jpg', import.meta.url).href;
const CARIBBEAN_GALLERY_10 = new URL('../../assets/caribbean-gallery/10-marina-couple.jpg', import.meta.url).href;

interface DestinationsSectionProps {
  onSelectDestination: (destinationRegion: string) => void;
  onOpenBookingModal: (dealTitle?: string) => void;
  initialSubpage?: string;
}

interface GalleryImage {
  src: string;
  alt: string;
}

interface DestinationListing {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
  accent: string;
  gallery?: GalleryImage[];
}

export const DESTINATIONS: DestinationListing[] = [
  {
    id: 'africa',
    name: 'Africa',
    description: 'Wildlife, living cultures and landscapes that feel larger than life.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=86',
    accent: '#E8A73D',
    gallery: [
      { src: AFRICA_GALLERY_01, alt: 'Travelers riding a camel along the beach' },
      { src: AFRICA_GALLERY_02, alt: 'Elephant walking through tall savanna grass' },
      { src: AFRICA_GALLERY_03, alt: 'Elephant among trees and brush' },
      { src: AFRICA_GALLERY_04, alt: 'Group photo inside a safari vehicle' },
      { src: AFRICA_GALLERY_05, alt: 'Breakfast tables set up out on the savanna' },
      { src: AFRICA_GALLERY_06, alt: 'Group photo inside a hot air balloon basket' },
      { src: AFRICA_GALLERY_07, alt: 'Three travelers posing in front of a hot air balloon' },
      { src: AFRICA_GALLERY_08, alt: 'Travelers at the Kilbaf Dinner & Cocktails Karibu sign' },
      { src: AFRICA_GALLERY_09, alt: 'Travelers under the Welcome to Nairobi sign' },
      { src: AFRICA_GALLERY_10, alt: 'Couple sitting on a safari vehicle hood at sunset' },
      { src: AFRICA_GALLERY_11, alt: 'Group photo with Maasai villagers' },
      { src: AFRICA_GALLERY_12, alt: 'Elephant with tusks illuminated at night by a watering hole' }
    ]
  },
  {
    id: 'caribbean',
    name: 'Caribbean',
    description: 'Turquoise water, warm island rhythms and sunlit escapes.',
    imageUrl: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=1600&q=86',
    accent: '#14ABFA',
    gallery: [
      { src: CARIBBEAN_GALLERY_01, alt: 'Couple watching the sunset from a ship deck' },
      { src: CARIBBEAN_GALLERY_02, alt: 'Group photo at Maho Beach with a plane landing overhead' },
      { src: CARIBBEAN_GALLERY_03, alt: 'Couple relaxing on the bow of a sailboat' },
      { src: CARIBBEAN_GALLERY_04, alt: 'Couple toasting with wine at an outdoor table' },
      { src: CARIBBEAN_GALLERY_05, alt: 'Group of five on a white sand beach with turquoise water' },
      { src: CARIBBEAN_GALLERY_06, alt: 'Couple sitting on a boat in Grand Turk, Turks and Caicos Islands' },
      { src: CARIBBEAN_GALLERY_07, alt: 'Couple taking a selfie on a white sand beach' },
      { src: CARIBBEAN_GALLERY_08, alt: 'Couple posing dockside in front of a cruise ship' },
      { src: CARIBBEAN_GALLERY_09, alt: 'Couple on a cruise ship deck at sea' },
      { src: CARIBBEAN_GALLERY_10, alt: 'Couple posing at a marina full of sailboats' }
    ]
  }
];

interface DestinationTileProps {
  destination: DestinationListing;
  index: number;
  featured?: boolean;
  onOpenBookingModal: (dealTitle?: string) => void;
  onOpenVideo: (destination: DestinationListing) => void;
}

const DestinationTile: React.FC<DestinationTileProps> = ({
  destination,
  index,
  featured = false,
  onOpenVideo
}) => (
  <article
    className={`group relative h-full overflow-hidden rounded-[18px] bg-[#0E1035] ${
      featured ? 'min-h-[330px] lg:min-h-0' : 'aspect-[4/5] min-h-[330px]'
    }`}
  >
    <img
      src={destination.imageUrl}
      alt={destination.name}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
      style={{ objectPosition: destination.imagePosition || 'center' }}
      loading="lazy"
      referrerPolicy="no-referrer"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0E1035]/95 via-[#0E1035]/20 to-[#0E1035]/5" />
    <div
      className="absolute inset-0 opacity-30 mix-blend-color transition-opacity duration-500 group-hover:opacity-45"
      style={{ background: `linear-gradient(150deg, transparent 35%, ${destination.accent})` }}
    />

    <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-7">
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        <h3 className={`${featured ? 'text-3xl sm:text-4xl' : 'text-2xl'} font-bold leading-tight text-white`}>
          {destination.name}
        </h3>
        <p className={`mt-2 max-w-xl font-normal leading-relaxed text-white/80 ${featured ? 'text-sm sm:text-base' : 'text-sm'}`}>
          {destination.description}
        </p>
        <button
          type="button"
          onClick={() => onOpenVideo(destination)}
          className="card-action-link card-action-link--dark mt-4 cursor-pointer"
        >
          Explore {destination.name}
        </button>
      </div>
    </div>
  </article>
);

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  onOpenBookingModal,
  initialSubpage = 'all'
}) => {
  const initialDestination = DESTINATIONS.find((destination) => destination.id === initialSubpage);
  const [searchTerm, setSearchTerm] = useState(initialDestination?.name || '');
  const [searchOpen, setSearchOpen] = useState(false);
  const [videoDestination, setVideoDestination] = useState<DestinationListing | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const searchRef = useRef<HTMLDivElement>(null);

  const openDestinationPreview = (destination: DestinationListing) => {
    setVideoDestination(destination);
    setGalleryIndex(0);
  };

  const closeDestinationPreview = () => {
    setVideoDestination(null);
  };

  const showPrevImage = () => {
    if (!videoDestination?.gallery) return;
    setGalleryIndex((current) => (current - 1 + videoDestination.gallery!.length) % videoDestination.gallery!.length);
  };

  const showNextImage = () => {
    if (!videoDestination?.gallery) return;
    setGalleryIndex((current) => (current + 1) % videoDestination.gallery!.length);
  };

  useEffect(() => {
    if (!videoDestination?.gallery) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') showPrevImage();
      if (event.key === 'ArrowRight') showNextImage();
      if (event.key === 'Escape') closeDestinationPreview();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoDestination]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const matchingDestinations = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLocaleLowerCase();
    if (!normalizedSearch) return DESTINATIONS;
    return DESTINATIONS.filter((destination) =>
      destination.name.toLocaleLowerCase().includes(normalizedSearch)
    );
  }, [searchTerm]);

  const isSearching = searchTerm.trim().length > 0;

  return (
    <section id="destinations-section" className="bg-[#F1F6FD] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-[1640px] px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-4xl">
          <div className="max-w-4xl">
            <span className="font-signature select-none text-3xl text-[#14ABFA] sm:text-4xl">
              Your world, beautifully connected
            </span>
            <h2 className="editorial-title mt-1 text-3xl leading-tight text-[#0E1035] sm:text-5xl lg:text-6xl">
              DESTINATIONS WORTH THE JOURNEY
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-normal leading-relaxed text-[#0E1035]/70 sm:text-base">
              Two spotlight destinations to start your next journey. Choose one and we will help shape the trip around you.
            </p>
          </div>

          <div ref={searchRef} className="hidden">
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                  setSearchOpen(true);
                }}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search all destinations"
                aria-label="Search all destinations"
                aria-expanded={searchOpen}
                className="site-search-field site-search-field--light"
              />
              <button
                type="button"
                onClick={() => setSearchOpen((open) => !open)}
                aria-label={searchOpen ? 'Close destination list' : 'Open destination list'}
                className="absolute inset-y-0 right-0 flex w-14 items-center justify-center cursor-pointer"
              >
                <span className={`site-search-caret ${searchOpen ? 'is-open' : ''}`} aria-hidden="true">⌄</span>
              </button>
            </div>

            {searchOpen && (
              <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] max-h-80 overflow-y-auto bg-white py-2 shadow-lg">
                {matchingDestinations.length > 0 ? matchingDestinations.map((destination) => (
                  <button
                    key={destination.id}
                    type="button"
                    onClick={() => {
                      setSearchTerm(destination.name);
                      setSearchOpen(false);
                    }}
                    className="block w-full px-5 py-3 text-left text-sm font-medium text-[#0E1035] transition-colors hover:bg-[#F1F6FD] hover:text-[#14ABFA] cursor-pointer"
                  >
                    {destination.name}
                  </button>
                )) : (
                  <p className="px-5 py-4 text-sm text-[#0E1035]/55">No destinations match your search.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="mt-12">
          {isSearching ? (
            matchingDestinations.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {matchingDestinations.map((destination) => (
                  <DestinationTile
                    key={destination.id}
                    destination={destination}
                    index={DESTINATIONS.indexOf(destination)}
                    onOpenBookingModal={onOpenBookingModal}
                    onOpenVideo={openDestinationPreview}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white px-6 py-14 text-center">
                <p className="text-base font-semibold text-[#0E1035]">No destination found.</p>
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="card-action-link mx-auto mt-3 cursor-pointer"
                >
                  View all destinations
                </button>
              </div>
            )
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:h-[560px]">
              <DestinationTile
                destination={DESTINATIONS[0]}
                index={0}
                featured
                onOpenBookingModal={onOpenBookingModal}
                onOpenVideo={openDestinationPreview}
              />
              <DestinationTile
                destination={DESTINATIONS[1]}
                index={1}
                featured
                onOpenBookingModal={onOpenBookingModal}
                onOpenVideo={openDestinationPreview}
              />
            </div>
          )}
        </div>
      </div>

      {videoDestination && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          onClick={closeDestinationPreview}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden bg-[#0E1035] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={closeDestinationPreview}
              className="absolute top-4 right-4 z-20 p-2.5 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>

            {videoDestination.gallery && videoDestination.gallery.length > 0 ? (
              <div className="relative aspect-video w-full bg-black">
                <img
                  src={videoDestination.gallery[galleryIndex].src}
                  alt={videoDestination.gallery[galleryIndex].alt}
                  className="absolute inset-0 h-full w-full object-contain"
                />

                {videoDestination.gallery.length > 1 && (
                  <>
                    <button
                      onClick={showPrevImage}
                      className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    <button
                      onClick={showNextImage}
                      className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors cursor-pointer backdrop-blur-sm"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>

                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-3 py-1 bg-black/50 text-white text-xs font-semibold rounded-full">
                      {galleryIndex + 1} / {videoDestination.gallery.length}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="relative aspect-video w-full">
                <img
                  src={SPLASH_OCEAN}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#0E1035]/55" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white bg-white/15 text-white shadow-lg backdrop-blur-sm">
                    <Play className="h-6 w-6 translate-x-0.5" fill="currentColor" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                      {videoDestination.name} Video
                    </h3>
                    <p className="mt-1 text-sm text-white/70">
                      Coming soon — a first look at your {videoDestination.name} journey.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
