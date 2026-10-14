export interface Product {
  id: string;
  name: string;
  category: 'temples' | 'idols' | 'fountains' | 'jali' | 'inlay';
  categoryLabel: string;
  material: string;
  quarryOrigin: string;
  dimensions: string;
  weightApprox: string;
  artisanHours: number;
  vastuCompliant: boolean;
  description: string;
  features: string[];
  image: string;
  fallbackGradient: string;
  priceGuidance: string;
  inStockStatus: 'Custom Made to Order' | 'Available for Inspection' | 'In Atelier';
  highlights: string[];
}

export interface ConfiguratorState {
  material: string;
  style: string;
  dimensions: string;
  deity: string;
  lighting: string;
  carvingDepth: string;
  hasDrawers: boolean;
  hasJaliDoors: boolean;
  hasBacklitOnyx: boolean;
  hasBrassBells: boolean;
}

export interface PoojaRoomBudget {
  id: string;
  title: string;
  sizeSqft: string;
  priceTag: string;
  image: string;
  description: string;
  features: string[];
}

export interface DreamTempleBudget {
  id: string;
  title: string;
  startingPrice: string;
  image: string;
  description: string;
  width: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientCollaborator: string;
  category: 'communal' | 'residential' | 'international';
  location: string;
  image: string;
  details: string;
}

export interface VideoTestimonial {
  id: string;
  clientName: string;
  city: string;
  highlightText: string;
  videoDuration: string;
  image: string;
}

export interface GoogleReview {
  id: string;
  name: string;
  rating: number;
  timeAgo: string;
  review: string;
  initial: string;
}

export interface ArticleGuide {
  id: string;
  title: string;
  category: string;
  readTime: string;
  snippet: string;
  image: string;
}

export interface ReelItem {
  id: string;
  title: string;
  location: string;
  views: string;
  image: string;
}

export interface Installation {
  id: string;
  title: string;
  location: string;
  country: string;
  year: string;
  material: string;
  dimensions: string;
  story: string;
  image: string;
  architect: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  residence: string;
  projectType: string;
  quote: string;
  installedYear: string;
}

export interface StoneMaterial {
  id: string;
  name: string;
  origin: string;
  colorGrade: string;
  translucency: string;
  durability: string;
  description: string;
  idealFor: string;
  textureSample: string;
}
