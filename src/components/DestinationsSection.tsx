import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ViewMoreToggle } from './ViewMoreToggle';

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
    id: 'alaska',
    name: 'Alaska',
    description: 'Glacier-carved coastlines, quiet fjords and untamed wilderness.',
    imageUrl: 'https://images.unsplash.com/photo-1461250281059-4f83443edbdc?auto=format&fit=crop&w=1400&q=86',
    accent: '#14ABFA'
  },
  {
    id: 'antarctica',
    name: 'Antarctica',
    description: 'A rare polar world of ice, wildlife and extraordinary silence.',
    imageUrl: 'https://images.unsplash.com/photo-1517783999520-f068d7431a60?auto=format&fit=crop&w=1400&q=86',
    accent: '#2FE0C0'
  },
  {
    id: 'asia',
    name: 'Asia',
    description: 'Ancient traditions, electric cities and remarkable cuisine.',
    imageUrl: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=84',
    accent: '#4136EA'
  },
  {
    id: 'australia-new-zealand',
    name: 'Australia & New Zealand',
    description: 'Reef, rainforest, dramatic peaks and spirited coastal cities.',
    imageUrl: 'https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1200&q=84',
    accent: '#2FBE7A'
  },
  {
    id: 'bermuda',
    name: 'Bermuda',
    description: 'Pink-sand shores, pastel harbors and easy island elegance.',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=84',
    accent: '#E8A73D'
  },
  {
    id: 'caribbean',
    name: 'Caribbean',
    description: 'Turquoise water, warm island rhythms and sunlit escapes.',
    imageUrl: 'https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1200&q=84',
    accent: '#14ABFA'
  },
  {
    id: 'central-america',
    name: 'Central America',
    description: 'Rainforests, volcanic horizons and vivid local culture.',
    imageUrl: 'https://images.unsplash.com/photo-1518259102261-b40117eabbc9?auto=format&fit=crop&w=1200&q=84',
    accent: '#2FBE7A'
  },
  {
    id: 'dubai-india',
    name: 'Dubai & India',
    description: 'Modern spectacle, royal heritage and centuries of artistry.',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=84',
    accent: '#E8A73D'
  },
  {
    id: 'europe',
    name: 'Europe',
    description: 'Storied capitals, celebrated food and effortless rail journeys.',
    imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1200&q=84',
    accent: '#4136EA'
  },
  {
    id: 'galapagos',
    name: 'Galápagos',
    description: 'Otherworldly islands shaped by nature and fearless wildlife.',
    imageUrl: 'https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1200&q=84',
    accent: '#2FE0C0'
  },
  {
    id: 'hawaii',
    name: 'Hawaii',
    description: 'Volcanic beauty, deep-blue Pacific water and island hospitality.',
    imageUrl: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?auto=format&fit=crop&w=1200&q=84',
    accent: '#2FBE7A'
  },
  {
    id: 'iceland',
    name: 'Iceland',
    description: 'Waterfalls, geothermal landscapes and wide-open northern skies.',
    imageUrl: 'https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=84',
    accent: '#14ABFA'
  },
  {
    id: 'mediterranean',
    name: 'Mediterranean',
    description: 'Sun-washed villages, ancient ports and long coastal lunches.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=84',
    accent: '#E8A73D'
  },
  {
    id: 'mexico',
    name: 'Mexico',
    description: 'Caribbean beaches, expressive cuisine and enduring heritage.',
    imageUrl: 'https://images.unsplash.com/photo-1512815767263-ef5a92a71bf6?auto=format&fit=crop&w=1200&q=84',
    accent: '#2FE0C0'
  },
  {
    id: 'south-america',
    name: 'South America',
    description: 'Andean peaks, bold cities and journeys rich in character.',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=1200&q=84',
    accent: '#4136EA'
  },
  {
    id: 'south-pacific',
    name: 'South Pacific',
    description: 'Remote lagoons, lush islands and beautifully unhurried days.',
    imageUrl: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=1200&q=84',
    accent: '#14ABFA'
  },
  {
    id: 'united-kingdom-ireland',
    name: 'United Kingdom & Ireland',
    description: 'Historic cities, green countryside and coastlines full of story.',
    imageUrl: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?auto=format&fit=crop&w=1200&q=84',
    accent: '#2FBE7A'
  },
  {
    id: 'united-states',
    name: 'United States',
    description: 'Iconic cities, open roads and extraordinary national landscapes.',
    imageUrl: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=84',
    accent: '#E8A73D'
  }
];

interface DestinationTileProps {
  destination: DestinationListing;
  index: number;
  featured?: boolean;
  onOpenBookingModal: (dealTitle?: string) => void;
}

const DestinationTile: React.FC<DestinationTileProps> = ({
  destination,
  index,
  featured = false,
  onOpenBookingModal
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
          onClick={() => onOpenBookingModal(`Destination Planning: ${destination.name}`)}
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
  const [showAll, setShowAll] = useState(false);
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
  const featuredDestinations = DESTINATIONS.slice(0, 3);
  const remainingDestinations = DESTINATIONS.slice(3);

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
              Explore nineteen remarkable places, from polar horizons to sunlit islands. Choose a destination and we will help shape the journey around you.
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
                  setShowAll(false);
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
                      setShowAll(false);
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
            <>
              <div className="grid gap-5 lg:h-[680px] lg:grid-cols-12 lg:grid-rows-2">
                <div className="lg:col-span-7 lg:row-span-2">
                  <DestinationTile
                    destination={featuredDestinations[0]}
                    index={0}
                    featured
                    onOpenBookingModal={onOpenBookingModal}
                  />
                </div>
                <div className="lg:col-span-5">
                  <DestinationTile
                    destination={featuredDestinations[1]}
                    index={1}
                    featured
                    onOpenBookingModal={onOpenBookingModal}
                  />
                </div>
                <div className="lg:col-span-5">
                  <DestinationTile
                    destination={featuredDestinations[2]}
                    index={2}
                    featured
                    onOpenBookingModal={onOpenBookingModal}
                  />
                </div>
              </div>

              {showAll && (
                <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {remainingDestinations.map((destination, index) => (
                    <DestinationTile
                      key={destination.id}
                      destination={destination}
                      index={index + 3}
                      onOpenBookingModal={onOpenBookingModal}
                    />
                  ))}
                </div>
              )}

              <ViewMoreToggle
                expanded={showAll}
                total={DESTINATIONS.length}
                label="Destinations"
                onToggle={() => setShowAll((expanded) => !expanded)}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};
