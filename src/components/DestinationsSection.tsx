import React, { useEffect, useMemo, useRef, useState } from 'react';
import { X, Play } from 'lucide-react';

const SPLASH_OCEAN = new URL('../../assets/splash/splash-ocean.webp', import.meta.url).href;

interface DestinationsSectionProps {
  onSelectDestination: (destinationRegion: string) => void;
  onOpenBookingModal: (dealTitle?: string) => void;
  initialSubpage?: string;
}

interface DestinationListing {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  imagePosition?: string;
  accent: string;
}

export const DESTINATIONS: DestinationListing[] = [
  {
    id: 'africa',
    name: 'Africa',
    description: 'Wildlife, living cultures and landscapes that feel larger than life.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1600&q=86',
    accent: '#E8A73D'
  },
  {
    id: 'caribbean',
    name: 'Caribbean',
    description: 'Turquoise water, warm island rhythms and sunlit escapes.',
    imageUrl: 'https://images.unsplash.com/photo-1590523278191-995cbcda646b?auto=format&fit=crop&w=1600&q=86',
    accent: '#14ABFA'
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
  const searchRef = useRef<HTMLDivElement>(null);

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
                    onOpenVideo={setVideoDestination}
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
                onOpenVideo={setVideoDestination}
              />
              <DestinationTile
                destination={DESTINATIONS[1]}
                index={1}
                featured
                onOpenBookingModal={onOpenBookingModal}
                onOpenVideo={setVideoDestination}
              />
            </div>
          )}
        </div>
      </div>

      {videoDestination && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4"
          onClick={() => setVideoDestination(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden bg-[#0E1035] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              onClick={() => setVideoDestination(null)}
              className="absolute top-4 right-4 z-10 p-2.5 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-5 h-5" />
            </button>

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
          </div>
        </div>
      )}
    </section>
  );
};
