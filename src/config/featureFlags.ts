// Site-wide feature flags. Kept in their own file, deliberately with zero
// imports, so nothing that reads a flag can end up in a circular import
// with something that also gets imported by App.tsx.

// Resorts, Tours & Luxury sections/nav items. Set to false to hide them
// everywhere at once (sections, top nav, footer, explorer tabs).
export const SHOW_RESORTS_TOURS_LUXURY = true;
