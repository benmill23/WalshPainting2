export const site = {
  name: "Walsh Painting",
  legalName: "Walsh Painting",
  tagline: "Dedicated To The Finest Finish",
  description:
    "Professional residential and commercial painting in Nashville, TN. Interior, exterior, cabinets, and commercial — quality workmanship with honest pricing.",
  url: "https://walshpainting.com",
  ogImage: "/og-image.png",
  phone: "(615) 403-5516",
  phoneRaw: "+16154035516",
  email: "nickw4772@gmail.com",
  owner: "Nicholas Walsh",
  address: {
    city: "Nashville",
    region: "TN",
    regionFull: "Tennessee",
    country: "US",
  },
  geo: {
    latitude: 36.1627,
    longitude: -86.7816,
  },
  hours: [
    { days: ["Mo", "Tu", "We", "Th", "Fr"], opens: "08:00", closes: "18:00" },
    { days: ["Sa"], opens: "09:00", closes: "14:00" },
  ],
  social: {} as Record<string, string>,
} as const;

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  blurb: string;
  description: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "interior-painting",
    name: "Interior Painting",
    shortName: "Interior",
    blurb:
      "Walls, ceilings, trim, and doors painted with low-VOC paints and clean, careful prep.",
    description:
      "From a single accent wall to a whole-home refresh, we handle surface prep, patching, caulking, priming, and finish coats so the result looks great and lasts. We protect your floors and furniture and clean up every day.",
    bullets: [
      "Walls, ceilings, and trim",
      "Doors, windows, and built-ins",
      "Drywall patching and crack repair",
      "Premium low-VOC paints (Sherwin-Williams, Benjamin Moore)",
      "Color consultation available",
    ],
  },
  {
    slug: "exterior-painting",
    name: "Exterior Painting",
    shortName: "Exterior",
    blurb:
      "Siding, trim, soffits, decks, and fences — power washed, primed, and finished to last Tennessee weather.",
    description:
      "Nashville heat, humidity, and storms are tough on exterior paint. We pressure-wash, scrape, prime bare wood, caulk seams, and apply premium exterior coatings rated for our climate so your home looks sharp for years.",
    bullets: [
      "Siding, trim, and soffits",
      "Deck and fence staining",
      "Pressure washing and prep",
      "Wood repair and caulking",
      "Weather-resistant exterior paints",
    ],
  },
  {
    slug: "cabinet-refinishing",
    name: "Cabinet Refinishing",
    shortName: "Cabinets",
    blurb:
      "Update kitchen and bath cabinets at a fraction of the cost of replacement, with a sprayed factory-grade finish.",
    description:
      "We remove doors, label and number every piece, sand and degrease, then spray a durable enamel finish off-site or in a controlled environment. The result is a smooth, hard finish that holds up to daily use.",
    bullets: [
      "Kitchen and bathroom cabinets",
      "Doors removed, sprayed, and reinstalled",
      "Hardware swap-out available",
      "Durable enamel finish",
      "Far less disruption than replacement",
    ],
  },
  {
    slug: "commercial-painting",
    name: "Commercial Painting",
    shortName: "Commercial",
    blurb:
      "Offices, retail, restaurants, and property management work — scheduled around your hours.",
    description:
      "We work after-hours and on weekends to keep your business running. We carry the insurance, lifts, and crew size to handle larger jobs and recurring property management contracts.",
    bullets: [
      "Offices and retail spaces",
      "Restaurants and hospitality",
      "Property management contracts",
      "After-hours and weekend scheduling",
      "Licensed and fully insured",
    ],
  },
];

export type ServiceArea = {
  slug: string;
  name: string;
  blurb: string;
  neighborhoods?: string[];
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "belle-meade",
    name: "Belle Meade",
    blurb:
      "Belle Meade homes deserve the kind of careful, detailed work that holds up. We paint historic interiors and high-end exteriors with the prep and finish quality the neighborhood expects.",
    neighborhoods: ["Belle Meade Boulevard", "Iroquois", "Tyne Boulevard"],
  },
  {
    slug: "franklin",
    name: "Franklin",
    blurb:
      "From historic downtown Franklin to newer Westhaven and Cool Springs builds, we serve the full mix of Williamson County homes with interior and exterior painting.",
    neighborhoods: ["Westhaven", "Cool Springs", "Downtown Franklin", "Berry Farms"],
  },
  {
    slug: "brentwood",
    name: "Brentwood",
    blurb:
      "Brentwood's larger homes call for crews who plan the job, protect your space, and finish on schedule. That's what we do, every time.",
    neighborhoods: ["Governors Club", "Annandale", "Brentmeade", "Concord Hunt"],
  },
  {
    slug: "east-nashville",
    name: "East Nashville",
    blurb:
      "East Nashville's craftsman bungalows, new builds, and renovations all need different things from a painter. We tailor our approach to the home.",
    neighborhoods: ["Lockeland Springs", "Inglewood", "Five Points", "Cleveland Park"],
  },
  {
    slug: "antioch",
    name: "Antioch",
    blurb:
      "Honest pricing and reliable scheduling for Antioch homeowners. Interior refreshes, full exteriors, and rental property turnovers.",
    neighborhoods: ["Cane Ridge", "Lenox Village", "Hickory Hollow"],
  },
  {
    slug: "bellevue",
    name: "Bellevue",
    blurb:
      "Bellevue's tree-lined streets and mix of older and newer homes — we paint them all, inside and out, with the same level of care.",
    neighborhoods: ["Highland Ridge", "River Plantation", "Hicks Road"],
  },
  {
    slug: "bordeaux",
    name: "Bordeaux",
    blurb:
      "Quality painting for Bordeaux homeowners and rental property owners. We show up on time and finish what we start.",
    neighborhoods: ["Haynes Manor", "Trinity Hills"],
  },
];

export function getServiceAreaSlugs() {
  return serviceAreas.map((a) => ({ slug: a.slug }));
}

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type GalleryCategory =
  | "living"
  | "kitchen"
  | "bedroom"
  | "bathroom"
  | "office"
  | "cabinets"
  | "detail"
  | "exterior";

export type GalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  serviceSlugs: string[]; // which /services pages this fits
  featured?: boolean;
  orientation: "landscape" | "portrait";
};

const PHOTO_BASE = "/walsh-painting-photos";

export const galleryPhotos: GalleryPhoto[] = [
  {
    src: `${PHOTO_BASE}/living-room-chandelier-windows.jpg`,
    alt: "Open-concept downtown Nashville loft living room painted in soft white with a chandelier and large windows by Walsh Painting",
    caption: "Living room — soft white walls and warm wood",
    category: "living",
    serviceSlugs: ["interior-painting"],
    featured: true,
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/living-room-brick-three-windows.jpg`,
    alt: "Loft living room with painted accent walls and exposed brick by Nashville painters Walsh Painting",
    caption: "Living room — clean white trim against original brick",
    category: "living",
    serviceSlugs: ["interior-painting"],
    featured: true,
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/living-room-brick-wall-01.jpg`,
    alt: "Modern loft living room with crisp painted walls and exposed brick accent, Nashville",
    caption: "Living room — bright finish against the brick",
    category: "living",
    serviceSlugs: ["interior-painting"],
    featured: true,
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/living-room-brick-wide-01.jpg`,
    alt: "Wide-angle loft living room and kitchen painted by Walsh Painting in Nashville",
    caption: "Open living and kitchen — full interior repaint",
    category: "living",
    serviceSlugs: ["interior-painting"],
    featured: true,
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/living-room-kitchen-open-concept.jpg`,
    alt: "Open-concept living and kitchen with fresh interior paint in a Nashville loft",
    caption: "Open-concept living and kitchen",
    category: "living",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/living-room-curved-wall.jpg`,
    alt: "Loft living room with a curved white painted wall, exposed brick, and modern light fixtures",
    caption: "Curved white wall meets original brick",
    category: "living",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/kitchen-maple-cabinets-01.jpg`,
    alt: "Nashville loft kitchen with maple cabinets, stainless appliances, and a painted dark accent wall",
    caption: "Kitchen — accent wall and crisp ceilings",
    category: "kitchen",
    serviceSlugs: ["interior-painting", "cabinet-refinishing"],
    featured: true,
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/kitchen-maple-cabinets-02.jpg`,
    alt: "Galley-style kitchen with maple cabinets and clean painted walls in a Nashville loft",
    caption: "Galley kitchen with painted ceilings and trim",
    category: "kitchen",
    serviceSlugs: ["interior-painting", "cabinet-refinishing"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/home-office-brick-wall.jpg`,
    alt: "Home office area with exposed brick wall and freshly painted trim, Nashville loft",
    caption: "Home office — brick + white trim",
    category: "office",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/home-office-desk-detail.jpg`,
    alt: "Desk against exposed brick wall in a Nashville loft painted by Walsh Painting",
    caption: "Office nook detail",
    category: "office",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/home-office-brick-doorway.jpg`,
    alt: "Home office with brick wall and painted doorway transition, Nashville loft",
    caption: "Office and hallway transition",
    category: "office",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/bedroom-modern-staged.jpg`,
    alt: "Modern bedroom with painted white walls and ceiling, gray headboard, Nashville",
    caption: "Bedroom — crisp white walls and ceiling",
    category: "bedroom",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/bedroom-headboard-centered.jpg`,
    alt: "Bedroom headboard centered between sconces with newly painted walls",
    caption: "Bedroom — centered headboard wall",
    category: "bedroom",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/bedroom-minimal-corner.jpg`,
    alt: "Minimal bedroom corner painted by Walsh Painting in downtown Nashville",
    caption: "Bedroom corner — minimal finish",
    category: "bedroom",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/bedroom-sconce-headboard-detail.jpg`,
    alt: "Bedroom detail with sconce, side table, and freshly painted walls",
    caption: "Bedroom sconce detail",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/bedroom-pillow-sconce-detail.jpg`,
    alt: "Bedside detail with sconces and pillows against painted walls",
    caption: "Bedside detail",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/bathroom-vanity-light-wood.jpg`,
    alt: "Bathroom with light wood vanity and freshly painted walls in a Nashville loft",
    caption: "Bathroom — light wood vanity and clean walls",
    category: "bathroom",
    serviceSlugs: ["interior-painting", "cabinet-refinishing"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/bathroom-full-shower-vanity.jpg`,
    alt: "Bathroom with painted walls, shower tile, and wood vanity by Walsh Painting Nashville",
    caption: "Bathroom — full view",
    category: "bathroom",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/bathroom-storage-cabinet-maple.jpg`,
    alt: "Maple bathroom storage cabinet with newly painted surrounding walls",
    caption: "Bathroom cabinet detail",
    category: "cabinets",
    serviceSlugs: ["cabinet-refinishing", "interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/bathroom-shower-tile-clean.jpg`,
    alt: "Clean white-tiled shower with newly painted bathroom ceiling and walls",
    caption: "Shower tile and painted ceiling",
    category: "bathroom",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/loft-hallway-to-kitchen.jpg`,
    alt: "Loft hallway looking toward kitchen with painted white walls and ceilings, Nashville",
    caption: "Hallway looking toward the kitchen",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/loft-entryway-doors.jpg`,
    alt: "Loft entryway with painted doors and trim, Nashville",
    caption: "Entryway and painted doors",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/entryway-console-table-mirror.jpg`,
    alt: "Entryway console table and round mirror against newly painted walls",
    caption: "Entryway detail",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/curved-hallway-brick-view.jpg`,
    alt: "Curved painted hallway with view into a brick-walled living room",
    caption: "Hallway opening to living room",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/seating-nook-white.jpg`,
    alt: "Small seating nook with two chairs and freshly painted white walls",
    caption: "Seating nook — clean white finish",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "landscape",
  },
  {
    src: `${PHOTO_BASE}/closet-to-bedroom-view.jpg`,
    alt: "View from a closet into a bedroom with newly painted walls and ceiling",
    caption: "Closet looking into bedroom",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/walk-in-closet-empty.jpg`,
    alt: "Empty walk-in closet with freshly painted white walls and ceiling",
    caption: "Walk-in closet — fresh paint",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/laundry-closet-stacked-unit.jpg`,
    alt: "Laundry closet with stacked washer-dryer and painted walls",
    caption: "Laundry closet",
    category: "detail",
    serviceSlugs: ["interior-painting"],
    orientation: "portrait",
  },
  {
    src: `${PHOTO_BASE}/downtown-nashville-street.jpg`,
    alt: "Downtown Nashville street near the project site served by Walsh Painting",
    caption: "Downtown Nashville",
    category: "exterior",
    serviceSlugs: [],
    orientation: "landscape",
  },
];

export const featuredPhotos = galleryPhotos.filter((p) => p.featured);

export function photosForService(serviceSlug: string, limit?: number) {
  const matches = galleryPhotos.filter((p) => p.serviceSlugs.includes(serviceSlug));
  return typeof limit === "number" ? matches.slice(0, limit) : matches;
}

export type Faq = { q: string; a: string };

export const generalFaqs: Faq[] = [
  {
    q: "Do you offer free estimates?",
    a: "Yes. We come out, walk through the project with you, and follow up with a clear, itemized quote — no obligation.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. Walsh Painting carries general liability insurance and workers' comp. We can send proof of insurance to property managers or HOAs on request.",
  },
  {
    q: "What paint brands do you use?",
    a: "We default to Sherwin-Williams and Benjamin Moore. We're happy to spec a specific line based on the surface, the finish, and the budget.",
  },
  {
    q: "How long does a typical project take?",
    a: "An interior repaint of an average-sized room is usually one to two days. Whole-home interiors run three to seven days; full exteriors are typically three to ten days depending on size and prep needed.",
  },
  {
    q: "Do you offer a workmanship warranty?",
    a: "Yes. If anything fails outside of normal wear, give us a call and we'll come back out.",
  },
];

export const serviceFaqs: Record<string, Faq[]> = {
  "interior-painting": [
    {
      q: "Do I need to move my furniture?",
      a: "No — we move it for you, cover it, or both. We bring drop cloths, plastic, and painter's tape and we treat your space like our own.",
    },
    {
      q: "How long should I wait before putting things back?",
      a: "Most modern interior paints are dry to the touch in an hour and ready for light use the same day. We recommend 24 hours before hanging anything heavy on freshly painted walls.",
    },
    {
      q: "Can you help with color selection?",
      a: "Yes. We're happy to drop off color samples, paint test swatches on the wall, and walk through pros and cons with you before you commit.",
    },
    {
      q: "Do you patch holes and small drywall damage?",
      a: "Yes. Patching nail holes, anchor holes, and minor cracks is included. Larger drywall repair is quoted as part of the project.",
    },
  ],
  "exterior-painting": [
    {
      q: "What's the best time of year for exterior painting in Nashville?",
      a: "Late spring through early fall is ideal — we need dry weather and overnight temps above 50°F for proper cure. We watch the forecast closely and reschedule rain days at no charge.",
    },
    {
      q: "Do you power wash before painting?",
      a: "Always. Power washing removes dirt, mildew, and chalking paint so the new coat actually bonds. It's not an upsell — it's standard prep.",
    },
    {
      q: "How long does exterior paint last in Nashville?",
      a: "A quality exterior repaint with proper prep typically holds up 7–10 years on siding, sometimes longer. South-facing surfaces and trim usually need attention sooner than the rest of the house.",
    },
    {
      q: "Do you repair wood rot and damaged siding?",
      a: "Minor wood repair, caulking, and putty work is included in our exterior bid. Significant rot or siding replacement is quoted separately or referred to a trusted carpenter.",
    },
  ],
  "cabinet-refinishing": [
    {
      q: "How long does a kitchen cabinet refinish take?",
      a: "Most kitchens are 5–10 working days from start to finish, with doors typically sprayed offsite for a smoother result.",
    },
    {
      q: "Is cabinet refinishing really cheaper than replacement?",
      a: "Usually 30–50% of the cost of new cabinetry — sometimes less. If your boxes are in good shape, refinishing gets you a brand-new look for a fraction of the price.",
    },
    {
      q: "Can I use my kitchen during the project?",
      a: "Mostly, yes. We pull doors and drawer fronts to spray offsite, so your cabinet boxes stay in place and usable. Counters and appliances are masked during the box-painting day.",
    },
    {
      q: "What kind of finish do you use on cabinets?",
      a: "We spray a hard, water-based enamel that levels smooth and stands up to daily kitchen use. It's far more durable than brush-applied wall paint.",
    },
  ],
  "commercial-painting": [
    {
      q: "Can you work after hours so we don't close?",
      a: "Yes. Evenings, weekends, and overnights are common for retail and restaurants. We schedule around your operations.",
    },
    {
      q: "Do you carry the insurance we need?",
      a: "Yes — general liability and workers' comp. We can list your property as an additional insured for the duration of the project on request.",
    },
    {
      q: "Do you work with property managers on recurring contracts?",
      a: "Yes. We work with several property managers in the Nashville area on common-area repaints, turnover work, and ongoing maintenance.",
    },
    {
      q: "Can you handle larger buildings or higher ceilings?",
      a: "Yes. We carry lifts and tall ladders and have crews sized for multi-story interiors and exteriors.",
    },
  ],
};

export const cityFaqs: Record<string, Faq[]> = {
  "belle-meade": [
    {
      q: "Do you work on historic Belle Meade homes?",
      a: "Yes. Older homes need careful prep — we hand-sand, prime bare wood, and use the right primer for previously oil-painted trim to avoid bonding issues with modern paints.",
    },
    {
      q: "Can you match existing colors and finishes?",
      a: "Yes. We bring a sample to the store for an exact match, including specialty trim colors and ceiling whites that aren't pure white.",
    },
  ],
  franklin: [
    {
      q: "Do you serve Westhaven, Cool Springs, and downtown Franklin?",
      a: "Yes. We paint throughout Williamson County including historic downtown homes, new construction in Westhaven, and Cool Springs offices and retail spaces.",
    },
    {
      q: "Do you work with HOAs on exterior color approvals?",
      a: "Yes. We've worked with several Franklin-area HOAs on submitting color schemes for approval before the work begins.",
    },
  ],
  brentwood: [
    {
      q: "Can you handle larger Brentwood homes with high ceilings?",
      a: "Yes. We carry lifts, scaffolding, and enough crew to handle two- and three-story foyers and great rooms without dragging the timeline out.",
    },
  ],
  "east-nashville": [
    {
      q: "Do you paint older East Nashville bungalows?",
      a: "Yes. Many East Nashville homes have lead-era trim — we follow EPA RRP-compliant prep practices on pre-1978 homes.",
    },
  ],
  antioch: [],
  bellevue: [],
  bordeaux: [],
};
