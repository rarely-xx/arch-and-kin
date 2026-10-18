// src/data/catalog.js

export const EXCHANGE_RATE = 1600;

export const SHIPPING_RATES_USD = {
  'Lagos Island (Lekki / VI / Ikoyi)': 2,
  'Lagos Mainland (Ikeja / Surulere / Yaba)': 3,
  'Abuja / Port Harcourt / Ibadan': 5,
  'Other Nigerian States (DHL / GIGL)': 6,
  'Lekki Phase 1 Studio Pickup (Free)': 0
};

export const INITIAL_BRANDS = [
  { name: 'All', region: 'All', origin: '28 Global & African Makers', tagline: 'Every trusted heritage, African artisanal, and family comfort maker under one roof.' },
  { name: 'Kene Rapu', region: 'African', origin: 'Lagos, Nigeria • Est. 2011', tagline: 'Pioneers of bespoke Nigerian leather slippers and resort sandals handcrafted by local artisans.' },
  { name: '313eko', region: 'African', origin: 'Lagos, Nigeria • Contemporary', tagline: 'Bold, architectural Nigerian leather mules, slides, and handcrafted statement footwear.' },
  { name: 'elowise.ng', region: 'African', origin: 'Nigeria • Everyday Chic', tagline: 'Effortless, cushioned everyday slides and sandals crafted for modern Nigerian women and families.' },
  { name: 'Maliko', region: 'African', origin: 'Lagos, Nigeria • Artisanal', tagline: 'Sculptural handmade footwear celebrating West African craftsmanship, wooden heels, and supple leather.' },
  { name: 'ADJOAA', region: 'African', origin: 'Pan-African Collective', tagline: 'Curated sustainable African luxury footwear and accessories from the continent’s finest designers.' },
  { name: 'Ethnik by Tunde Owolabi', region: 'African', origin: 'Lagos, Nigeria • Est. 2015', tagline: 'Vibrant hand-woven Yoruba Aso-Oke sneakers, mules, and loafers turning cultural heritage into walkable art.' },
  { name: 'Invogue Africa', region: 'African', origin: 'Lagos, Nigeria • Contemporary', tagline: 'Versatile, comfort-first African resort and lifestyle sandals built for tropical days and family outings.' },
  { name: 'Shekudo', region: 'African', origin: 'Lagos, Nigeria • Est. 2016', tagline: 'Handcrafted Nigerian leather mules and sandals woven with local Aso-Oke textiles.' },
  { name: 'Birkenstock', region: 'Global', origin: 'Germany • Est. 1774', tagline: 'Contoured cork-latex footbeds engineered to mirror natural footprints.' },
  { name: 'New Balance', region: 'Global', origin: 'Boston, USA • Est. 1906', tagline: 'Arch-support pioneers blending orthopedic heritage with everyday family sneakers.' },
  { name: 'Clarks Originals', region: 'Global', origin: 'Somerset, UK • Est. 1825', tagline: 'Iconic moccasin construction and natural plantation crepe soles.' },
  { name: 'Blundstone', region: 'Global', origin: 'Tasmania • Est. 1870', tagline: 'Pull-on leather Chelsea boots built to endure mud, rain, and playgrounds.' },
  { name: 'Salt-Water', region: 'Global', origin: 'St. Louis, USA • Est. 1944', tagline: 'Waterproof leather sandals with rust-proof brass buckles for kids & mothers.' },
  { name: 'Veja', region: 'Global', origin: 'Paris / Brazil • Est. 2005', tagline: 'Organic cotton and wild Amazonian rubber sneakers for conscious families.' },
  { name: 'Dr. Martens', region: 'Global', origin: 'Northamptonshire, UK • Est. 1947', tagline: 'Air-cushioned bouncing soles and Goodyear-welted durability across generations.' },
  { name: 'Keen', region: 'Global', origin: 'Portland, USA • Est. 2003', tagline: 'Protective toe-bumper hybrid sandals and outdoor trail comfort for adventurous kin.' },
  { name: 'Crocs', region: 'Global', origin: 'Colorado, USA • Est. 2002', tagline: 'Iconic Croslite™ foam clogs built for effortless water-friendly family comfort.' },
  { name: 'Hoka', region: 'Global', origin: 'Annecy, France • Est. 2009', tagline: 'Maximalist marshmallow cushioning and Meta-Rocker geometry for cloud-like walks.' },
  { name: 'Teva', region: 'Global', origin: 'Grand Canyon, USA • Est. 1984', tagline: 'The original sport sandal with recycled quick-dry straps made for river and street.' },
  { name: 'Camper', region: 'Global', origin: 'Mallorca, Spain • Est. 1975', tagline: 'Playful Mediterranean family shoemaking with ergonomic soles and supple leathers.' },
  { name: 'Timberland', region: 'Global', origin: 'New Hampshire, USA • Est. 1973', tagline: 'Waterproof nubuck boots and boat shoes built for rugged generational wear.' },
  { name: 'Converse', region: 'Global', origin: 'Massachusetts, USA • Est. 1908', tagline: 'Timeless Chuck Taylor canvas silhouettes uniting parents and kids for over a century.' },
  { name: 'Vans', region: 'Global', origin: 'California, USA • Est. 1966', tagline: 'Waffle-sole slip-ons and skate classics loved from toddler steps to adulthood.' },
  { name: 'Asics', region: 'Global', origin: 'Kobe, Japan • Est. 1949', tagline: 'GEL™ technology cushioning and biomechanical stability for healthy active feet.' },
  { name: 'On Running', region: 'Global', origin: 'Zurich, Switzerland • Est. 2010', tagline: 'Swiss-engineered CloudTec® pods delivering soft landings and effortless travel days.' },
  { name: 'Ecco', region: 'Global', origin: 'Bredebro, Denmark • Est. 1963', tagline: 'Scandinavian FLUIDFORM™ anatomical comfort crafted from their own tanneries.' },
  { name: 'Bobux', region: 'Global', origin: 'Auckland, New Zealand • Est. 1991', tagline: 'Podiatrist-approved soft soles and barefoot-friendly shoes engineered for growing kids.' },
  { name: 'Native Shoes', region: 'Global', origin: 'Vancouver, Canada • Est. 2009', tagline: 'Featherlight, washable, odor-resistant EVA slip-ons that kids can put on all by themselves.' }
];

export const INITIAL_PRODUCTS = [
  {
    id: 101,
    name: 'Oluwa Classic Leather Crossover Slipper',
    brand: 'Kene Rapu',
    category: 'Men',
    priceUSD: 75,
    familyMatch: true,
    archSupport: 'Padded Leather Footbed',
    width: 'Standard Fit',
    badge: 'Lagos Icon',
    sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
    img: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?auto=format&fit=crop&w=700&q=80',
    description: 'Handcrafted in Lagos using locally sourced Nigerian leather with breathable crossover straps.',
    careInstructions: 'Wipe clean with a damp soft cloth. Condition leather quarterly with natural balm to maintain suppleness in tropical humidity.',
    fitMeter: 'True to Size',
    reviews: [
      { author: 'Emeka O.', rating: 5, comment: 'Extremely comfortable for weekend outings in Victoria Island. Exceptional Lagos craftsmanship!' },
      { author: 'Chidi K.', rating: 5, comment: 'Sturdy leather that gets softer the more you wear it.' }
    ]
  },
  {
    id: 106,
    name: 'Aso-Oke Heritage Low-Top Sneaker',
    brand: 'Ethnik by Tunde Owolabi',
    category: 'Men',
    priceUSD: 135,
    familyMatch: true,
    archSupport: 'Cushioned Cup Sole',
    width: 'Standard Fit',
    badge: 'Yoruba Hand-Loomed',
    sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'],
    img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80',
    description: 'Authentic hand-woven Yoruba Aso-Oke fabric upper bonded to a durable everyday sneaker sole.',
    careInstructions: 'Spot clean Aso-Oke fabric gently using mild soap and a soft-bristled brush. Do not soak in water or machine wash.',
    fitMeter: 'True to Size',
    reviews: [
      { author: 'Folake B.', rating: 5, comment: 'The Aso-Oke weave is vibrant and gets compliments everywhere I walk in Ikoyi!' }
    ]
  },
  {
    id: 1,
    name: 'Boston Soft Footbed Suede',
    brand: 'Birkenstock',
    category: 'Women',
    priceUSD: 165,
    familyMatch: true,
    archSupport: 'High Arch',
    width: 'Regular & Narrow',
    badge: 'Bestseller',
    sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'],
    img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=700&q=80',
    description: 'Anatomically shaped cork-latex footbed with an extra foam layer for all-day cushioning.',
    careInstructions: 'Use a suede brush to remove dry dirt. Protect with a suede water-repellent spray before wearing.',
    fitMeter: 'Runs Slightly Wide',
    reviews: [
      { author: 'Amina S.', rating: 5, comment: 'Absolute heaven for standing all day in the clinic. Worth every penny.' }
    ]
  },
  {
    id: 2,
    name: '574 Core Heritage Sneaker',
    brand: 'New Balance',
    category: 'Men',
    priceUSD: 95,
    familyMatch: true,
    archSupport: 'Cushioned Neutral',
    width: 'Standard & Wide',
    badge: 'Family Classic',
    sizes: ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46'],
    img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80',
    description: 'ENCAP midsole cushioning combines lightweight foam with a durable polyurethane rim.',
    careInstructions: 'Clean with a soft brush and mild detergent. Air dry away from direct sunlight.',
    fitMeter: 'True to Size',
    reviews: [
      { author: 'Tunde A.', rating: 5, comment: 'Got matching pairs for myself and my 7-year-old. Ultimate weekend shoe!' }
    ]
  },
  {
    id: 201,
    name: 'Classic All-Family Clog',
    brand: 'Crocs',
    category: 'Kids',
    priceUSD: 45,
    familyMatch: true,
    archSupport: 'Iconic Croslite™',
    width: 'Roomy Fit',
    badge: 'Water Friendly',
    sizes: ['Kids EU 24', 'Kids EU 26', 'Kids EU 28', 'Kids EU 30', 'Kids EU 32'],
    img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80',
    description: 'Lightweight, floatable, easy-to-clean EVA foam clogs with pivoting heel straps for active kids.',
    careInstructions: 'Wash with soap and cold water. Do not expose to high heat or direct sunlight to prevent shrinkage.',
    fitMeter: 'Roomy Fit',
    reviews: [
      { author: 'Ngozi M.', rating: 5, comment: 'Indestructible for playground days in Lekki!' }
    ]
  }
];