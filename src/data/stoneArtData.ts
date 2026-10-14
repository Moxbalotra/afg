import {
  Product,
  Installation,
  Testimonial,
  StoneMaterial,
  PoojaRoomBudget,
  DreamTempleBudget,
  ProjectItem,
  VideoTestimonial,
  GoogleReview,
  ArticleGuide,
  ReelItem
} from '../types';

export const STONE_MATERIALS: StoneMaterial[] = [
  {
    id: 'makrana-white',
    name: 'Makrana Pure Royal Albeta Marble',
    origin: 'Makrana Mines, Nagaur, Rajasthan',
    colorGrade: 'Classic Pearl White with subtle silver veins',
    translucency: 'High Natural Mineral Glow',
    durability: 'Eternal (The legendary Taj Mahal stone)',
    description: 'Directly sourced from AFG Marble Mines in Makrana. Makrana contains 98% pure calcium carbonate, never absorbs oil or turmeric stains, and stays naturally cool in all seasons.',
    idealFor: 'Sacred Deity Idols, Imperial Home Temples, Sanctum Shikhara',
    textureSample: 'from-[#ffffff] via-[#f4f2ec] to-[#e4ded2]'
  },
  {
    id: 'vietnam-white',
    name: 'Vietnamese Super-White Marble',
    origin: 'Yen Bai Quarries, Vietnam',
    colorGrade: '99.4% Flawless Snow White',
    translucency: 'Extraordinary Translucency',
    durability: 'Dense Calcite Matrix',
    description: 'Milk-white purity, uniform crystalline structure, and zero black mineral impurities. Favored for modern luxury minimalist pooja rooms and backlit archways.',
    idealFor: 'Modern Floating Sanctums, Backlit Wall Panels, CNC Jali',
    textureSample: 'from-[#ffffff] via-[#f7f9fa] to-[#e8ecf0]'
  },
  {
    id: 'honey-onyx',
    name: 'Backlit Persian Honey Onyx',
    origin: 'Natural Gemstone Formations',
    colorGrade: 'Golden Amber & Honey Radiance',
    translucency: 'Illuminates with Warm LED Halo',
    durability: 'Interior Architectural Grade',
    description: 'A naturally translucent banded gemstone that casts a divine, celestial aura when illuminated behind sacred idols and intricate jaali fretwork.',
    idealFor: 'Sanctum Backdrops, Aura Halos, Illuminated Niches',
    textureSample: 'from-[#f5d77f] via-[#d49e32] to-[#8c5a12]'
  },
  {
    id: 'jaisalmer-yellow',
    name: 'Jaisalmer Golden Teak Sandstone',
    origin: 'Thar Desert Basin, Jaisalmer',
    colorGrade: 'Sunburst Honey Gold',
    translucency: 'Velvet Matte Heritage Stone',
    durability: 'All-Weather Extreme Resilience',
    description: 'The golden stone of royal Rajasthani havelis. Enables micro-chiseled floral filigree, jharokha balconies, and grand outdoor courtyard temples.',
    idealFor: 'Courtyard Temples, Tiered Fountains, Jharokha Screens',
    textureSample: 'from-[#ecd08a] via-[#cfa04a] to-[#9b6e22]'
  },
  {
    id: 'italian-statuario',
    name: 'Italian Statuario & Calacatta Marble',
    origin: 'Carrara Basin, Apuan Alps, Italy',
    colorGrade: 'Ivory White with Bold Charcoal Veins',
    translucency: 'Silky Fine Polish',
    durability: 'Interior Masterpiece Grade',
    description: 'Treasured by classical sculptors, Statuario marble brings majestic dramatic veining against an ivory white surface for contemporary luxury sanctums.',
    idealFor: 'Designer Floating Temples, Cantilevered Steps, Wall Cladding',
    textureSample: 'from-[#fcfcfc] via-[#edecec] to-[#bfbebe]'
  }
];

export const POOJA_ROOM_BUDGETS: PoojaRoomBudget[] = [
  {
    id: 'pr-small-50',
    title: 'Small Pooja Rooms upto 50 Sqft',
    sizeSqft: 'Upto 50 Sqft',
    priceTag: 'INR 12L',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Intimate prayer alcoves and apartment sanctuaries with warm backlit onyx panel, carved Makrana marble mandir, and brass bell ceiling.',
    features: ['Custom Backlit Amber Onyx', 'Makrana White Marble Mandir', 'Soft-close Storage Drawers', 'Vastu Orientation Layout']
  },
  {
    id: 'pr-medium-80',
    title: 'Medium Pooja Rooms upto 80 Sqft',
    sizeSqft: 'Upto 80 Sqft',
    priceTag: 'INR 20L',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
    description: 'Dedicated family pooja chamber featuring multi-layered scalloped marble arches, Mor-Pankh peacock inlay work, and glass partition doors.',
    features: ['Mor-Pankh Lapis Inlay Artwork', 'Carved Marble Doorway Jambs', 'Floating Marble Altar Platform', 'Integrated Chime Sound Channels']
  },
  {
    id: 'pr-large-120',
    title: 'Large Pooja Rooms Upto 120sqft',
    sizeSqft: 'Upto 120 Sqft',
    priceTag: 'INR 25.75L',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    description: 'Architectural residential sanctum with royal carved teakwood entry doors, pure Makrana floor inlay carpet, and grand 3-tier shikhara mandir.',
    features: ['Royal Brass-Studded Teakwood Gates', 'Floral Pietra Dura Floor Medallion', 'Ceiling Dome with Chandelier Ring', 'Triple Sanctum Deity Pedestals']
  },
  {
    id: 'pr-grand-150',
    title: 'Grand Pooja Rooms 150sqft',
    sizeSqft: '150+ Sqft',
    priceTag: 'INR 35L',
    image: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=800&q=80',
    description: 'Palatial villa and haveli sanctuary room chiseled from monolithic Makrana blocks with 24K pure gold leaf gilding and museum-grade lighting.',
    features: ['24-Karat Gold Leaf Detailing', 'Full-Height Hand-Pierced Jali Walls', 'Private Havan Kund Smoke Channel', 'Surgical On-site Shilpkar Assembly']
  }
];

export const DREAM_TEMPLE_BUDGETS: DreamTempleBudget[] = [
  {
    id: 'dt-3ft',
    title: '3ft Wide Temples',
    width: '3.0 ft (W) × 5.5 ft (H)',
    startingPrice: 'Starting at INR 4.75L',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    description: 'Sculpted Tree of Life (Kalpavriksha) back panel in gold foil, elephant pillar bases, and dual pull-out prasad chowki.'
  },
  {
    id: 'dt-4ft',
    title: '4ft Wide Temples',
    width: '4.0 ft (W) × 6.8 ft (H)',
    startingPrice: 'Starting at INR 5.95L',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80',
    description: 'Sacred Om & Sunburst floral jaali lattice screen, scalloped Rajasthani jharokha arch, and illuminated kalash finial.'
  },
  {
    id: 'dt-5ft',
    title: '5ft Wide Temples',
    width: '5.0 ft (W) × 7.5 ft (H)',
    startingPrice: 'Starting at INR 6.95L',
    image: 'https://images.unsplash.com/photo-1567591974584-f1832dfcad32?auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant Mor-Pankh peacock feather inlay backdrop with warm backlighting, stepped sanctum pedestals, and carved side pillars.'
  },
  {
    id: 'dt-6ft',
    title: '6ft Wide & Beyond Temples',
    width: '6.0 ft to 12.0 ft (W)',
    startingPrice: 'Starting at INR 8.95L',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=800&q=80',
    description: 'Grand imperial double-pillar temple estate with triple Shikhara spires, 4 soft-close carved marble drawers, and brass bells.'
  }
];

export const PROJECTS_SHOWCASE: ProjectItem[] = [
  {
    id: 'proj-goyal',
    title: 'Mr. Goyal x A.F.G Marble and Arts',
    clientCollaborator: 'Mr. Goyal Residence, Ghaziabad',
    category: 'residential',
    location: 'Ghaziabad, NCR',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80',
    details: 'Makrana pure white marble pooja room with sacred Mor-Pankh inlay backdrop and warm halo illumination.'
  },
  {
    id: 'proj-gangwal',
    title: 'Mr. Gangwal x A.F.G Marble and Arts India',
    clientCollaborator: 'Gangwal Villa, Jaipur',
    category: 'residential',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    details: 'Contemporary architectural mandir with floating marble chowki, scalloped jali canopy, and brass bell acoustical array.'
  },
  {
    id: 'proj-palak',
    title: 'Miss Palak x A.F.G Marble and Arts',
    clientCollaborator: 'Palak Estate, Ahmedabad',
    category: 'residential',
    location: 'Ahmedabad, Gujarat',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=900&q=80',
    details: 'Grand traditional Radha Krishna sanctum framed by 24K gold foil carved archways and floral pillars.'
  },
  {
    id: 'proj-communal-jain',
    title: 'Shri Parshvanath Shikharji Trust',
    clientCollaborator: 'Communal Temple Trust',
    category: 'communal',
    location: 'Kishangarh, Rajasthan',
    image: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=900&q=80',
    details: 'Monumental 24ft high Makrana marble Shikhara mandir with 108 hand-chiseled Tirthankara relief pillars.'
  },
  {
    id: 'proj-dubai-emirates',
    title: 'Emirates Hills Villa Royal Sanctum',
    clientCollaborator: 'Private NRI Client, Dubai',
    category: 'international',
    location: 'Emirates Hills, Dubai (UAE)',
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=900&q=80',
    details: 'Vietnamese white marble and backlit honey onyx sanctuary shipped via international crate and assembled on-site.'
  },
  {
    id: 'proj-california',
    title: 'Silicon Valley Hillside Pooja Room',
    clientCollaborator: 'Khosla Residence, San Jose',
    category: 'international',
    location: 'California, USA',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80',
    details: '8ft custom white marble mandir tailored for a modern Californian home, complete with Vastu orientation.'
  }
];

export const VIDEO_TESTIMONIALS: VideoTestimonial[] = [
  {
    id: 'vt-1',
    clientName: 'Vimal Jain Ji',
    city: 'Ahmedabad',
    highlightText: 'We Always Dreamed of a Beautiful Temple, and AFG Made It Possible',
    videoDuration: '2:45',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vt-2',
    clientName: 'Divya Jain Ji',
    city: 'Lucknow',
    highlightText: 'I Really Loved AFG\'s Work, They Truly Matched My Faith and Vision',
    videoDuration: '3:10',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vt-3',
    clientName: 'Abhishek Ji',
    city: 'Ghaziabad',
    highlightText: 'The Craftsmanship That Won Our Customer\'s Heart ❤️',
    videoDuration: '1:50',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'vt-4',
    clientName: 'Aman Goyal Ji',
    city: 'Ghaziabad',
    highlightText: 'Loved the Design & Hospitality at the Rajasthan Experience Center',
    videoDuration: '2:15',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80'
  }
];

export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 'gr-1',
    name: 'Aman Goyal',
    rating: 5,
    timeAgo: '6 months ago',
    review: 'The ultimate store for Mandirs. The team explained every marble cut and Vastu direction so well. Must visit their atelier!',
    initial: 'A'
  },
  {
    id: 'gr-2',
    name: 'Vinay Bansall',
    rating: 5,
    timeAgo: '18 days ago',
    review: 'Very good collection, excellent behavior of the sculptors. Thanks for explaining the difference between Makrana and synthetic stone.',
    initial: 'V'
  },
  {
    id: 'gr-3',
    name: 'Naresh Kumar Sharma',
    rating: 5,
    timeAgo: '1 month ago',
    review: 'Woow this is a very great place! Not just a store, this is a palace for devotional craftsmanship and serene temples.',
    initial: 'N'
  },
  {
    id: 'gr-4',
    name: 'Ayush Gupta',
    rating: 5,
    timeAgo: '1 month ago',
    review: 'Exceptional and excellent service. Humble and elegant team guided by the best master artisans. The temple arrived without a scratch.',
    initial: 'A'
  },
  {
    id: 'gr-5',
    name: 'Raghunath Agarwal',
    rating: 5,
    timeAgo: '1 month ago',
    review: 'At the AFG experience center, the team gave us an extraordinary tour. The finishing of pure Makrana stone is unmatched anywhere.',
    initial: 'R'
  },
  {
    id: 'gr-6',
    name: 'Sanjay Chaudhary',
    rating: 5,
    timeAgo: '2 months ago',
    review: 'The design, carving, and finishing of the temples in the gallery are extremely royal and spiritual. Truly 100% recommended.',
    initial: 'S'
  },
  {
    id: 'gr-7',
    name: 'Rashi Narela',
    rating: 5,
    timeAgo: '3 months ago',
    review: 'Such a beautiful store... luxury vibes and so positive energy! Thank you so much for creating our dream home mandir.',
    initial: 'R'
  },
  {
    id: 'gr-8',
    name: 'Rahul Singh',
    rating: 5,
    timeAgo: '3 months ago',
    review: 'Very good place for temple shopping. Staff behavior is very respectful, transparent pricing, and timely delivery.',
    initial: 'R'
  }
];

export const ARTICLE_GUIDES: ArticleGuide[] = [
  {
    id: 'art-1',
    title: 'Krishna mandir design in white marble can carry peacock and color',
    category: 'Design Guide',
    readTime: '4 min read',
    snippet: 'Discover how traditional Mor-Pankh lapis lazuli inlays and subtle gold leafing accentuate Krishna vigraha sanctity without cluttering minimalism.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'art-2',
    title: 'Indian pooja room design can lean traditional or carved to modern',
    category: 'Architectural Vastu',
    readTime: '6 min read',
    snippet: 'Bridging ancient Shilpa Shastra geometry with contemporary penthouse layouts: floating marble platforms and ambient backlighting explained.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'art-3',
    title: 'Simple marble mandir design built for daily prayer & rituals',
    category: 'Home Aesthetics',
    readTime: '3 min read',
    snippet: 'Ergonomic pull-out prasad chowkis, incense ventilation, pure brass bells, and easy-clean Makrana water polish for daily pooja convenience.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80'
  }
];

export const REELS_FEED: ReelItem[] = [
  {
    id: 'reel-1',
    title: '3D CAD Blueprint to Real Marble Sanctum',
    location: 'Makrana · Jaipur Atelier',
    views: '1.4M views',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'reel-2',
    title: 'POV: You finally found a dream temple for your villa',
    location: 'Client Home · Mumbai',
    views: '980K views',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'reel-3',
    title: 'White-Glove Delivery & Blessing Ceremony',
    location: 'Kishangarh · Jaipur',
    views: '2.1M views',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=500&q=80'
  },
  {
    id: 'reel-4',
    title: 'Our Master Shilpkars on-site Mandir Installation',
    location: 'International Export · USA',
    views: '840K views',
    image: 'https://images.unsplash.com/photo-1567591974584-f1832dfcad32?auto=format&fit=crop&w=500&q=80'
  }
];

export const CLIENT_LOGOS = [
  { name: 'ENAM Financial', code: 'ENAM' },
  { name: 'Flame University', code: 'FLAME' },
  { name: 'The Power of Steel', code: 'STEEL' },
  { name: 'Daswani Foundation', code: 'DASWANI' },
  { name: 'S. Poddar & Co. CA', code: 'PODDAR' },
  { name: 'The Body Shop', code: 'BODY SHOP' },
  { name: 'Mehta Transport', code: 'MEHTA' },
  { name: 'Mangalayatan University', code: 'MANGALAYATAN' }
];

export const PRESS_LOGOS = [
  'Elle Decor',
  'GoodHomes India',
  'The Times of India',
  'Outlook',
  'Business Standard',
  'The Architect\'s Diary',
  'Trend Magazine'
];

export const PRODUCTS: Product[] = [
  {
    id: 'mandir-vietnam-imperial',
    name: 'Swarna Viman Imperial Makrana Mandir',
    category: 'temples',
    categoryLabel: 'Luxury Marble Temple',
    material: 'Pure Makrana Albeta & Vietnamese Super-White Marble',
    quarryOrigin: 'AFG Marble Mines, Makrana, Rajasthan',
    dimensions: '8.5 ft (H) × 6.0 ft (W) × 3.0 ft (D)',
    weightApprox: '1,450 kg (Precision Crating)',
    artisanHours: 720,
    vastuCompliant: true,
    description: 'Monumental architectural home temple sculpted from monolithic blocks of pristine Makrana white marble. Features triple-tier Shikhara, hand-chiseled Kalash, backlit Honey Onyx aura, and pure brass temple bells.',
    features: [
      'Monolithic sculpted Makrana marble pillars with elephant bases',
      'Flawless backlit Persian honey onyx panel with dimmable warmth',
      'Dual soft-close marble drawers with solid brass knobs',
      'Pull-out Bhog tray (Prasad chowki) with lotus relief',
      'Hand-carved ceiling dome with tuned brass ghanti bell'
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-amber-950/40 via-stone-900 to-stone-950',
    priceGuidance: 'Custom Bespoke / Inquire for Specifications',
    inStockStatus: 'Custom Made to Order',
    highlights: ['Vastu Compliant', 'Backlit Onyx', 'Worldwide White-Glove Setup']
  },
  {
    id: 'mandir-modern-floating',
    name: 'Ananta Contemporary Floating Pooja Sanctuary',
    category: 'temples',
    categoryLabel: 'Modern Pooja Room',
    material: 'Makrana Pure White Marble & Calacatta Inlay',
    quarryOrigin: 'Makrana Mines & Carrara',
    dimensions: '7.0 ft (H) × 5.0 ft (W) × 2.2 ft (D)',
    weightApprox: '820 kg',
    artisanHours: 480,
    vastuCompliant: true,
    description: 'Designed for luxury penthouses and contemporary villas, marrying ancient Vastu proportions with sleek architectural minimalism and floating steps.',
    features: [
      'Cantilevered floating sanctum platform with warm under-glow',
      'Geometric Mor-Pankh carved marble screen',
      'Concealed acoustic wiring for sacred Vedic chants',
      'Seamless water-polished surfaces with zero chemical coating',
      'Tempered safety glass enclosure option'
    ],
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-stone-900 via-neutral-900 to-stone-950',
    priceGuidance: 'Custom Architectural Sizing',
    inStockStatus: 'Custom Made to Order',
    highlights: ['Minimalist Modern', 'Floating Platform', 'Smart Acoustic Ready']
  },
  {
    id: 'idol-radha-krishna',
    name: 'Bespoke Radha Krishna Yugal Murti Masterpiece',
    category: 'idols',
    categoryLabel: 'Sacred Deity Idol',
    material: 'A-Grade Flawless Makrana Albeta White Marble',
    quarryOrigin: 'AFG Marble Mines, Makrana, Rajasthan',
    dimensions: '3.5 ft (H) × 2.2 ft (W) × 1.2 ft (D)',
    weightApprox: '280 kg',
    artisanHours: 640,
    vastuCompliant: true,
    description: 'Hand-sculpted by national master craftsmen using single-block Makrana marble. Serene lifelike expressions embodying divine love, adorned with genuine 24-karat gold leaf.',
    features: [
      'Sculpted from a single certified fracture-free Makrana block',
      'Genuine 24-Karat gold leaf foil accents on crown and robes',
      'Realistic divine facial contours following Shilpa Shastra',
      'Natural gemstone eyes and organic mineral pigments',
      'Consecration (Prana Pratishtha) friendly surface preparation'
    ],
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-amber-900/30 via-stone-900 to-black',
    priceGuidance: 'Bespoke Commission / Available in 2ft to 6ft',
    inStockStatus: 'Available for Inspection',
    highlights: ['Single Stone Block', '24K Gold Leaf Details', 'Shilpa Shastra Proportions']
  },
  {
    id: 'idol-lord-ganesha',
    name: 'Siddhi Vinayak Blessings Monolithic Ganesha',
    category: 'idols',
    categoryLabel: 'Sacred Deity Idol',
    material: 'Monolithic Makrana Pure White Marble',
    quarryOrigin: 'Makrana Mines, Rajasthan',
    dimensions: '2.5 ft (H) × 2.0 ft (W) × 1.5 ft (D)',
    weightApprox: '190 kg',
    artisanHours: 380,
    vastuCompliant: true,
    description: 'A deeply serene depiction of Lord Ganesha in meditative Lalitasana posture. Auspicious trunk orientation, modak in hand, and flawless silken natural polish.',
    features: [
      'Single solid stone carving without joints or synthetic fillers',
      'Intricate mukut (crown) relief carving with sacred Om insignia',
      'Pure silken hand-rubbed natural marble polish',
      'Mooshak (mouse) carrier carved into pedestal base'
    ],
    image: 'https://images.unsplash.com/photo-1567591974584-f1832dfcad32?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-yellow-950/30 via-stone-900 to-black',
    priceGuidance: 'Crafted in 1.5ft to 5ft sizes',
    inStockStatus: 'In Atelier',
    highlights: ['Auspicious Entrance Murti', 'Monolithic Carving', 'Hand-Polished']
  },
  {
    id: 'fountain-lotus-tier',
    name: 'The Royal Kamal Rajhans 3-Tier Marble Fountain',
    category: 'fountains',
    categoryLabel: 'Architectural Water Sculpture',
    material: 'Makrana White Marble & Jodhpur Sandstone',
    quarryOrigin: 'Makrana & Jodhpur, Rajasthan',
    dimensions: '7.5 ft (Total Height) × 8.0 ft (Base Pool Diameter)',
    weightApprox: '2,200 kg',
    artisanHours: 850,
    vastuCompliant: true,
    description: 'Palace courtyard fountain inspired by royal Rajasthan havelis. Three scalloped lotus basins with lion head water spouts releasing soothing water cascades.',
    features: [
      'Self-contained modular water circulation plumbing',
      'Sculpted lion head spouts with calibrated gentle water flow',
      'Octagonal base pool wall with traditional Jali relief',
      'Frost and weather-proof marble compound sealant'
    ],
    image: 'https://images.unsplash.com/photo-1584824486509-112e4181ff6b?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-cyan-950/30 via-stone-900 to-black',
    priceGuidance: 'Custom Villa & Courtyard Engineering',
    inStockStatus: 'Custom Made to Order',
    highlights: ['3-Tier Lotus Basins', 'Acoustic Water Cascade', 'Outdoor Weather-Treated']
  },
  {
    id: 'jali-jaipur-jharokha',
    name: 'Heritage Hawa Jali Wall Screen & Carved Jharokha',
    category: 'jali',
    categoryLabel: 'Hand-Pierced Stone Screen',
    material: 'Makrana Marble & Jaisalmer Sandstone',
    quarryOrigin: 'Makrana & Jaisalmer',
    dimensions: '6.0 ft (H) × 4.0 ft (W) × 0.8 ft (Depth of Arch)',
    weightApprox: '410 kg',
    artisanHours: 520,
    vastuCompliant: true,
    description: 'Classical Rajasthani architectural marvel with geometric and floral latticework hand-pierced through solid stone slabs, casting sublime shadow play.',
    features: [
      '100% hand-pierced through-cut stonework by master artisans',
      'Traditional Mughal and Rajput floral lattice interlock patterns',
      'Reinforced stone structural anchors for wall-mount or freestanding use'
    ],
    image: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-amber-950/40 via-stone-900 to-black',
    priceGuidance: 'Priced per square foot / Custom Patterns',
    inStockStatus: 'Custom Made to Order',
    highlights: ['Hand-Pierced Lattice', 'Mesmerizing Shadow Play', 'Architectural Partition']
  },
  {
    id: 'inlay-pietra-dura-table',
    name: 'Mayur Ratna Pietra Dura Marble Inlay Console',
    category: 'inlay',
    categoryLabel: 'Pietra Dura Inlay Art',
    material: 'Makrana Marble inlaid with Lapis Lazuli, Malachite & Jasper',
    quarryOrigin: 'Makrana & Global Gem Mines',
    dimensions: '4.5 ft (Length) × 1.8 ft (Depth) × 2.6 ft (Height)',
    weightApprox: '185 kg',
    artisanHours: 420,
    vastuCompliant: false,
    description: 'Royal Parchin Kari inlay with over 2,400 individual hand-cut semi-precious stones embedded flush into pristine Makrana white marble.',
    features: [
      'Over 2,400 individual hand-cut semi-precious stone inlays',
      'Silky smooth diamond-polished surface with zero visible seams',
      'Fluted hand-carved solid marble pedestal legs'
    ],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    fallbackGradient: 'from-emerald-950/30 via-stone-900 to-black',
    priceGuidance: 'Limited Atelier Edition',
    inStockStatus: 'Available for Inspection',
    highlights: ['Semi-Precious Gem Inlay', 'Lapis Lazuli & Malachite', 'Mirror-Polish Finish']
  }
];

export const INSTALLATIONS: Installation[] = [
  {
    id: 'inst-beverly-hills',
    title: 'The Bel-Air Hillside Sanctum',
    location: 'Beverly Hills, California',
    country: 'United States',
    year: '2024',
    material: 'Makrana Pure White & Backlit Persian Onyx',
    dimensions: '9.2 ft Height · 7.5 ft Width',
    story: 'Commissioned for a 14,000 sq ft contemporary architectural estate. Engineered in modular interlocking stone sections in Makrana & Jaipur, air-crated and assembled on-site in 4 days.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80',
    architect: 'Kaufman & Partners Architecture, Los Angeles'
  },
  {
    id: 'inst-dubai-emirates',
    title: 'Emirates Hills Royal Villa Pooja Room',
    location: 'Emirates Hills, Dubai',
    country: 'United Arab Emirates',
    year: '2023',
    material: 'Makrana Pure White & Italian Statuario',
    dimensions: '11.0 ft Height · 8.0 ft Width',
    story: 'A palatial ceiling-high prayer chamber featuring full-height laser-carved Jali panels that diffuse morning sunlight, centered around a 4-foot Radha Krishna consecration in pure Makrana marble with 24K gold foil.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    architect: 'Al-Mansoor Luxury Interiors, Dubai'
  },
  {
    id: 'inst-london-hampstead',
    title: 'Hampstead Heritage Residence Mandir',
    location: 'Hampstead Heath, London',
    country: 'United Kingdom',
    year: '2024',
    material: 'Makrana Pure White & Solid Brass Inlay',
    dimensions: '7.8 ft Height · 5.5 ft Width',
    story: 'Harmoniously integrated into a classic Victorian residence, blending Rajasthani hand-carved jharokha arches with minimalist English interior joinery and climate-controlled under-stone heating.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
    architect: 'St. James Atelier, London'
  },
  {
    id: 'inst-mumbai-malabar',
    title: 'Malabar Hill Sea-Facing Sanctum',
    location: 'Malabar Hill, Mumbai',
    country: 'India',
    year: '2025',
    material: 'Makrana Albeta Heritage Marble',
    dimensions: '8.0 ft Height · 6.0 ft Width',
    story: 'Overlooking the Arabian Sea, this monolithic sanctum features water-resistant natural stone sealants to resist coastal humidity, complete with concealed copper vents for sacred havan ceremonies.',
    image: 'https://images.unsplash.com/photo-1590725140246-20acdee442be?auto=format&fit=crop&w=1000&q=80',
    architect: 'Talati & Partners, Mumbai'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Sunil & Anita Khosla',
    residence: 'Villa in Silicon Valley, California',
    projectType: 'Makrana White Marble Mandir (8ft)',
    quote: 'A.F.G Marble and Arts made the impossible happen. From the 3D CAD renders sent from Rajasthan to the flawless white-glove installation in our California home, every single carved petal and brass bell was executed with transcendent devotion.',
    installedYear: 'Installed Oct 2024'
  },
  {
    id: 'test-2',
    clientName: 'Dr. Vikramaditya Singhania',
    residence: 'Penthouse, Altamount Road, Mumbai',
    projectType: 'Monolithic Radha Krishna Idols & Backlit Onyx Sanctuary',
    quote: 'The serenity of the deity faces cannot be described in words. Our family searched across India for true hereditary Shilpkars who understand sacred Shilpa Shastra. AFG Marble and Arts are living legends.',
    installedYear: 'Installed June 2024'
  },
  {
    id: 'test-3',
    clientName: 'Rajesh & Meera Patel',
    residence: 'Royal Residence, Toronto, Canada',
    projectType: 'Bespoke Contemporary Floating Mandir',
    quote: 'Even after transit through freezing ocean containers, every piece arrived in surgical timber crating without a hairline scratch. The sheer weight and cold purity of the Makrana marble fills our home with peace.',
    installedYear: 'Installed January 2025'
  }
];

export const ARTISAN_STEPS = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Share Space & Faith',
    description: 'Share your space, your faith, and your architectural vision with our temple design experts in Makrana and Jaipur.',
    iconName: 'Compass'
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Bespoke 3D CAD Blueprint',
    description: 'Receive a bespoke 3D visual and Vastu-compliant architectural elevation rendered to millimeter accuracy.',
    iconName: 'Layers'
  },
  {
    step: '03',
    title: 'Handcraft',
    subtitle: 'Chiseled in Natural Marble',
    description: 'Master 4th-generation Shilpkars carve your temple from certified fracture-free natural Makrana marble blocks.',
    iconName: 'Hammer'
  },
  {
    step: '04',
    title: 'Assemble',
    subtitle: 'Fitted in Atelier',
    description: 'Every pillar, arch, drawer, and dome is pre-assembled, aligned, and polished to a mirror finish in our atelier.',
    iconName: 'CheckCircle'
  },
  {
    step: '05',
    title: 'Install & Bless',
    subtitle: 'Ready for First Prayer',
    description: 'We deliver in shockproof marine crates and install directly at your home worldwide — ready for its first prayer.',
    iconName: 'Sparkles'
  }
];
