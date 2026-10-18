import React, { useState, useMemo, useEffect } from 'react';
import {
  ShoppingBag,
  Search,
  Sparkles,
  X,
  Ruler,
  Users,
  SlidersHorizontal,
  Plus,
  Minus,
  MapPin,
  PlusCircle,
  RotateCcw,
  ShieldCheck,
  HeartHandshake,
  Globe,
  BookOpen,
  ArrowRight,
  Award,
  CheckCircle2,
  CreditCard,
  Printer,
  Lock,
  Building2,
  Smartphone,
  FileText,
  Scale
} from 'lucide-react';

// ==========================================
// 1. FULL 28-BRAND ROSTER (NIGERIAN & GLOBAL)
// ==========================================
const INITIAL_BRANDS = [
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

// ==========================================
// 2. PRODUCT CATALOG
// ==========================================
const INITIAL_PRODUCTS = [
  { id: 101, name: 'Oluwa Classic Leather Crossover Slipper', brand: 'Kene Rapu', category: 'Men', priceUSD: 75, familyMatch: true, archSupport: 'Padded Leather Footbed', width: 'Standard Fit', badge: 'Lagos Icon', sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], img: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?auto=format&fit=crop&w=700&q=80', description: 'Handcrafted in Lagos using locally sourced Nigerian leather with breathable crossover straps.' },
  { id: 102, name: 'Eko Braided Square-Toe Slide', brand: '313eko', category: 'Women', priceUSD: 85, familyMatch: false, archSupport: 'Cushioned Heel Pad', width: 'Standard Fit', badge: 'Artisanal Lagos', sizes: ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=700&q=80', description: 'Intricately hand-braided leather upper set on a contemporary square-toe sole made in Lagos.' },
  { id: 103, name: 'Zobo Soft-Strap Everyday Mule', brand: 'elowise.ng', category: 'Women', priceUSD: 55, familyMatch: false, archSupport: 'Pillow Memory Foam', width: 'Standard & Wide', badge: 'Everyday Comfort', sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', description: 'Plush tubular straps and cloud-like insole padding built for all-day errands and brunch.' },
  { id: 104, name: 'Ikoyi Sculpted Wood & Leather Sandal', brand: 'Maliko', category: 'Women', priceUSD: 150, familyMatch: false, archSupport: 'Contoured Wood Arch', width: 'Standard Fit', badge: 'Hand-Carved', sizes: ['EU 37', 'EU 38', 'EU 39', 'EU 40'], img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=700&q=80', description: 'Artisanal vegetable-tanned leather paired with a hand-carved ergonomic wooden base.' },
  { id: 105, name: 'Accra-Lagos Heritage Woven Loafer', brand: 'ADJOAA', category: 'Men', priceUSD: 140, familyMatch: true, archSupport: 'Leather Arch Insole', width: 'Standard Fit', badge: 'Pan-African', sizes: ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80', description: 'Sustainably crafted slip-on loafer celebrating West African basket-weave leatherwork.' },
  { id: 106, name: 'Aso-Oke Heritage Low-Top Sneaker', brand: 'Ethnik by Tunde Owolabi', category: 'Men', priceUSD: 135, familyMatch: true, archSupport: 'Cushioned Cup Sole', width: 'Standard Fit', badge: 'Yoruba Hand-Loomed', sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80', description: 'Authentic hand-woven Yoruba Aso-Oke fabric upper bonded to a durable everyday sneaker sole.' },
  { id: 107, name: 'Aso-Oke Mini-Me Kid Slip-On', brand: 'Ethnik by Tunde Owolabi', category: 'Kids', priceUSD: 65, familyMatch: true, archSupport: 'Flexible Rubber Sole', width: 'Easy Slip-On', badge: 'Cultural Kin', sizes: ['Kids EU 26', 'Kids EU 28', 'Kids EU 30', 'Kids EU 32'], img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=700&q=80', description: 'Vibrant hand-woven Aso-Oke slip-on so little ones can match parents at family celebrations.' },
  { id: 108, name: 'Savannah Two-Tone Resort Sandal', brand: 'Invogue Africa', category: 'Women', priceUSD: 70, familyMatch: true, archSupport: 'Molded Comfort Base', width: 'Adjustable Buckle', badge: 'Resort Ready', sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=700&q=80', description: 'Tropical-ready leather sandals designed for warm weather walks and coastal family getaways.' },
  { id: 13, name: 'Asoke Woven Leather Slide', brand: 'Shekudo', category: 'Women', priceUSD: 145, familyMatch: false, archSupport: 'Padded Leather Insole', width: 'Standard Fit', badge: 'Made in Lagos', sizes: ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=700&q=80', description: 'Hand-loomed Nigerian Aso-Oke upper paired with locally sourced leather soles crafted in Lagos.' },
  { id: 1, name: 'Boston Soft Footbed Suede', brand: 'Birkenstock', category: 'Women', priceUSD: 165, familyMatch: true, archSupport: 'High Arch', width: 'Regular & Narrow', badge: 'Bestseller', sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=700&q=80', description: 'Anatomically shaped cork-latex footbed with an extra foam layer for all-day cushioning.' },
  { id: 2, name: '574 Core Heritage Sneaker', brand: 'New Balance', category: 'Men', priceUSD: 95, familyMatch: true, archSupport: 'Cushioned Neutral', width: 'Standard & Wide', badge: 'Family Classic', sizes: ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46'], img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=700&q=80', description: 'ENCAP midsole cushioning combines lightweight foam with a durable polyurethane rim.' },
  { id: 6, name: '574 Hook & Loop Playground', brand: 'New Balance', category: 'Kids', priceUSD: 60, familyMatch: true, archSupport: 'Growing Foot Support', width: 'Standard & Wide', badge: 'Easy Strap', sizes: ['Kids EU 25', 'Kids EU 27', 'Kids EU 29', 'Kids EU 31', 'Kids EU 33'], img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=700&q=80', description: 'Kid-friendly velcro closure paired with durable suede and mesh for nonstop playground days.' },
  { id: 3, name: 'Wallabee Maple Suede', brand: 'Clarks Originals', category: 'Men', priceUSD: 160, familyMatch: false, archSupport: 'Natural Crepe', width: 'Standard Fit', badge: 'Heritage Icon', sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], img: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=80', description: 'Clean moccasin silhouette crafted with buttery Steads suede and natural pebble crepe soles.' },
  { id: 4, name: 'Original Waterproof Sandal', brand: 'Salt-Water', category: 'Kids', priceUSD: 50, familyMatch: true, archSupport: 'Flexible Flat', width: 'Adjustable Strap', badge: 'Machine Washable', sizes: ['Kids EU 24', 'Kids EU 26', 'Kids EU 28', 'Kids EU 30', 'Kids EU 32'], img: 'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=700&q=80', description: '100% waterproof urethane-coated leather that molds to the foot after wearing in water.' },
  { id: 5, name: 'Classic #585 Rustic Brown', brand: 'Blundstone', category: 'Women', priceUSD: 215, familyMatch: true, archSupport: 'SPS Max Comfort', width: 'Roomy Toe Box', badge: 'Weatherproof', sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=80', description: 'Leather-lined Chelsea boot with XRD® Technology in the heel for supreme shock absorption.' },
  { id: 7, name: 'Campo Chromefree Leather', brand: 'Veja', category: 'Women', priceUSD: 175, familyMatch: true, archSupport: 'Bio-EVA Cushion', width: 'Standard Fit', badge: 'Sustainable', sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'], img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80', description: 'Soft bovine leather tanned without chrome or heavy metals, set on an Amazonian rubber sole.' },
  { id: 9, name: '1461 Smooth Leather Oxford', brand: 'Dr. Martens', category: 'Men', priceUSD: 140, familyMatch: true, archSupport: 'AirWair Cushion', width: 'Generous Fit', badge: 'Built for Life', sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], img: 'https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=80', description: '3-eye shoe crafted on the iconic grooved air-cushioned sole with signature yellow welt stitching.' },
  { id: 11, name: 'Newport H2 Adventure Sandal', brand: 'Keen', category: 'Men', priceUSD: 130, familyMatch: true, archSupport: 'Metatomical Footbed', width: 'Wide Toe Box', badge: 'Trail & Water', sizes: ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46'], img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', description: 'Washable polyester webbing with razor-siped outsoles and signature bumper toe protection.' },
  { id: 201, name: 'Classic All-Family Clog', brand: 'Crocs', category: 'Kids', priceUSD: 45, familyMatch: true, archSupport: 'Iconic Croslite™', width: 'Roomy Fit', badge: 'Water Friendly', sizes: ['Kids EU 24', 'Kids EU 26', 'Kids EU 28', 'Kids EU 30', 'Kids EU 32'], img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80', description: 'Lightweight, floatable, easy-to-clean EVA foam clogs with pivoting heel straps for active kids.' },
  { id: 202, name: 'Clifton 9 Everyday Cushion', brand: 'Hoka', category: 'Women', priceUSD: 145, familyMatch: true, archSupport: 'Plush Meta-Rocker', width: 'Regular & Wide', badge: 'Podiatrist Pick', sizes: ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80', description: 'Ultralight compression-molded EVA foam midsole delivering cloud-like shock absorption all day.' },
  { id: 203, name: 'Hurricane XLT2 River Sandal', brand: 'Teva', category: 'Men', priceUSD: 75, familyMatch: true, archSupport: 'EVA Foam Midsole', width: '3-Point Velcro', badge: 'Recycled Webbing', sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], img: 'https://images.unsplash.com/photo-1621996659490-3275b4d0d951?auto=format&fit=crop&w=700&q=80', description: 'Quick-drying straps made from recycled plastic with rugged Durabrasion Rubber™ traction.' },
  { id: 204, name: 'Peu Cami Ergonomic Leather', brand: 'Camper', category: 'Women', priceUSD: 165, familyMatch: true, archSupport: '360° Stitched Footbed', width: 'Natural Foot Shape', badge: 'Barefoot Feel', sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80', description: 'Spanish leather casual shoe shaped to follow the natural curve of the foot with elastic laces.' },
  { id: 205, name: 'Premium 6-Inch Waterproof Boot', brand: 'Timberland', category: 'Men', priceUSD: 198, familyMatch: true, archSupport: 'Anti-Fatigue Footbed', width: 'Standard & Wide', badge: 'Heritage Icon', sizes: ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46'], img: 'https://images.unsplash.com/photo-1520639888713-7851133b1ed0?auto=format&fit=crop&w=700&q=80', description: 'Seam-sealed waterproof nubuck leather with removable anti-fatigue cones for all-day standing.' },
  { id: 206, name: 'Chuck 70 Vintage Canvas High', brand: 'Converse', category: 'Women', priceUSD: 90, familyMatch: true, archSupport: 'OrthoLite® Cushioning', width: 'Standard Fit', badge: 'Family Staple', sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=700&q=80', description: 'Upgraded heavyweight canvas with winged tongue stitching and OrthoLite insole comfort.' },
  { id: 207, name: 'Classic Slip-On Checkerboard', brand: 'Vans', category: 'Kids', priceUSD: 45, familyMatch: true, archSupport: 'Padded Collar', width: 'Easy Slip-On', badge: 'No Laces Needed', sizes: ['Kids EU 25', 'Kids EU 27', 'Kids EU 29', 'Kids EU 31', 'Kids EU 33'], img: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=700&q=80', description: 'Elastic side accents and signature rubber waffle outsoles for effortless school mornings.' },
  { id: 208, name: 'GEL-Kayano 30 Stability Walker', brand: 'Asics', category: 'Men', priceUSD: 160, familyMatch: false, archSupport: '4D Guidance Arch', width: 'Standard & Extra Wide', badge: 'Maximum Stability', sizes: ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45', 'EU 46'], img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=700&q=80', description: 'PureGEL™ technology and adaptive arch stability engineered for long walks and overpronation.' },
  { id: 209, name: 'Cloud 5 Speed-Lace Travel Shoe', brand: 'On Running', category: 'Women', priceUSD: 140, familyMatch: false, archSupport: 'CloudTec® Zero-Gravity', width: 'Standard Fit', badge: 'Slip-On Speed Lace', sizes: ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'], img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80', description: 'Swiss-engineered CloudTec® sole with bungee speed-lacing so you never have to tie your shoes.' },
  { id: 210, name: 'Soft 7 Danish Leather Sneaker', brand: 'Ecco', category: 'Men', priceUSD: 160, familyMatch: false, archSupport: 'FLUIDFORM™ Anatomical', width: 'Roomy Inlay Sole', badge: 'Full-Grain Leather', sizes: ['EU 40', 'EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'], img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80', description: 'Buttery full-grain leather sneaker with a dimpled anatomical footbed that molds to your stride.' },
  { id: 211, name: 'Grass Court Waterproof Kid Trainer', brand: 'Bobux', category: 'Kids', priceUSD: 72, familyMatch: false, archSupport: 'Podiatrist Approved', width: 'Double Velcro Strap', badge: 'Healthy Foot Development', sizes: ['Kids EU 22', 'Kids EU 24', 'Kids EU 26', 'Kids EU 28', 'Kids EU 30'], img: 'https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=700&q=80', description: 'Designed in New Zealand specifically for developing feet with coated water-repellent leather.' },
  { id: 212, name: 'Jefferson Sugarlite™ Perforated Slip-On', brand: 'Native Shoes', category: 'Kids', priceUSD: 50, familyMatch: true, archSupport: 'Shock-Absorbing EVA', width: 'Featherlight Fit', badge: 'Hose-Off Washable', sizes: ['Kids EU 23', 'Kids EU 25', 'Kids EU 27', 'Kids EU 29', 'Kids EU 31'], img: 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&w=700&q=80', description: 'Odor-resistant, perforated bio-based EVA sneaker that kids can wear in puddles and wash in seconds.' }
];

const SHIPPING_RATES_USD = {
  'Lagos Island (Lekki / VI / Ikoyi)': 2,
  'Lagos Mainland (Ikeja / Surulere / Yaba)': 3,
  'Abuja / Port Harcourt / Ibadan': 5,
  'Other Nigerian States (DHL / GIGL)': 6,
  'Lekki Phase 1 Studio Pickup (Free)': 0
};

export default function App() {
  const [brands, setBrands] = useState(() => {
    const saved = localStorage.getItem('arch_kin_brands_v2');
    return saved ? JSON.parse(saved) : INITIAL_BRANDS;
  });

  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('arch_kin_products_v2');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  useEffect(() => {
    localStorage.setItem('arch_kin_brands_v2', JSON.stringify(brands));
  }, [brands]);

  useEffect(() => {
    localStorage.setItem('arch_kin_products_v2', JSON.stringify(products));
  }, [products]);

  // Page Navigation State: 'shop' | 'about' | 'privacy' | 'terms'
  const [activePage, setActivePage] = useState('shop');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFamilyMatch, setOnlyFamilyMatch] = useState(false);
  const [currency, setCurrency] = useState('NGN');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [footCm, setFootCm] = useState(18);

  // Checkout, Paystack & Receipt States
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isPaystackOpen, setIsPaystackOpen] = useState(false);
  const [paystackChannel, setPaystackChannel] = useState('card');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [completedOrder, setCompletedOrder] = useState(null);

  const [shippingForm, setShippingForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: 'Lagos Island (Lekki / VI / Ikoyi)',
    paymentMethod: 'Paystack (Card, Bank Transfer, USSD)'
  });

  // Admin Studio Modal State
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [adminTab, setAdminTab] = useState('product');
  const [newShoe, setNewShoe] = useState({
    name: '',
    brand: 'Kene Rapu',
    category: 'Women',
    priceUSD: 85,
    archSupport: 'Cushioned Arch',
    width: 'Standard Fit',
    badge: 'New Arrival',
    familyMatch: true,
    img: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=700&q=80',
    description: ''
  });
  const [newBrand, setNewBrand] = useState({
    name: '',
    region: 'African',
    origin: '',
    tagline: ''
  });

  const EXCHANGE_RATE = 1600;

  const formatPrice = (usd) => {
    if (currency === 'USD') return `$${Number(usd).toLocaleString()}`;
    return `₦${(Number(usd) * EXCHANGE_RATE).toLocaleString()}`;
  };

  const activeBrandObj = brands.find((b) => b.name === selectedBrand) || brands[0];

  const visibleBrands = useMemo(() => {
    return brands.filter(
      (b) => b.name === 'All' || selectedRegion === 'All' || b.region === selectedRegion
    );
  }, [brands, selectedRegion]);

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const brandObj = brands.find((b) => b.name === p.brand);
      const matchRegion =
        selectedRegion === 'All' || (brandObj && brandObj.region === selectedRegion);
      const matchCat = selectedCategory === 'All' || p.category === selectedCategory;
      const matchBrand = selectedBrand === 'All' || p.brand === selectedBrand;
      const matchKin = !onlyFamilyMatch || p.familyMatch;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.archSupport.toLowerCase().includes(searchQuery.toLowerCase());
      return matchRegion && matchCat && matchBrand && matchKin && matchSearch;
    });
  }, [products, brands, selectedRegion, selectedCategory, selectedBrand, onlyFamilyMatch, searchQuery]);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const addToCart = (product) => {
    const chosenSize = selectedSizes[product.id] || product.sizes[0];
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.size === chosenSize
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].qty += 1;
        return updated;
      }
      return [...prev, { ...product, size: chosenSize, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQty = (index, delta) => {
    setCart((prev) =>
      prev
        .map((item, idx) => (idx === index ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotalUSD = cart.reduce((sum, item) => sum + item.priceUSD * item.qty, 0);
  const hasFamilyDiscount = totalItems >= 2;
  const discountUSD = hasFamilyDiscount ? Math.round(subtotalUSD * 0.1) : 0;
  const shippingFeeUSD = SHIPPING_RATES_USD[shippingForm.city] ?? 2;
  const finalTotalUSD = subtotalUSD - discountUSD + shippingFeeUSD;

  const handleProceedToPaystack = (e) => {
    e.preventDefault();
    setIsCheckoutOpen(false);
    setIsPaystackOpen(true);
  };

  const confirmPaystackPayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      const orderNumber = `AK-${Math.floor(100000 + Math.random() * 900000)}`;
      const paystackRef = `PSK_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;

      const newOrder = {
        orderNumber,
        paystackRef,
        paymentChannel: paystackChannel.toUpperCase(),
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        items: [...cart],
        subtotalUSD,
        discountUSD,
        shippingFeeUSD,
        finalTotalUSD,
        shipping: { ...shippingForm }
      };

      setIsProcessingPayment(false);
      setIsPaystackOpen(false);
      setCompletedOrder(newOrder);
      setCart([]);
    }, 900);
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newShoe.name.trim()) return;
    const defaultSizes =
      newShoe.category === 'Kids'
        ? ['Kids EU 26', 'Kids EU 28', 'Kids EU 30', 'Kids EU 32']
        : newShoe.category === 'Women'
        ? ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41']
        : ['EU 41', 'EU 42', 'EU 43', 'EU 44', 'EU 45'];

    const createdProduct = {
      ...newShoe,
      id: Date.now(),
      priceUSD: Number(newShoe.priceUSD) || 100,
      sizes: defaultSizes,
      description:
        newShoe.description.trim() ||
        'Crafted with heritage materials for everyday family comfort and durability.'
    };

    setProducts((prev) => [createdProduct, ...prev]);
    setSelectedBrand('All');
    setSelectedCategory('All');
    setActivePage('shop');
    setIsAdminOpen(false);
    setNewShoe({ ...newShoe, name: '', description: '' });
  };

  const handleAddBrand = (e) => {
    e.preventDefault();
    if (!newBrand.name.trim()) return;
    const exists = brands.some(
      (b) => b.name.toLowerCase() === newBrand.name.trim().toLowerCase()
    );
    if (!exists) {
      const createdBrand = {
        name: newBrand.name.trim(),
        region: newBrand.region || 'African',
        origin: newBrand.origin.trim() || 'Heritage Maker',
        tagline:
          newBrand.tagline.trim() ||
          'Timeless craftsmanship added to the Arch & Kin family roster.'
      };
      setBrands((prev) => [...prev, createdBrand]);
      setNewShoe((prev) => ({ ...prev, brand: createdBrand.name }));
    }
    setNewBrand({ name: '', region: 'African', origin: '', tagline: '' });
    setAdminTab('product');
  };

  const resetCatalogToDefault = () => {
    localStorage.removeItem('arch_kin_brands_v2');
    localStorage.removeItem('arch_kin_products_v2');
    setBrands(INITIAL_BRANDS);
    setProducts(INITIAL_PRODUCTS);
    setIsAdminOpen(false);
  };

  const navigateToPage = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-oat text-espresso flex flex-col">
      {/* Top Community Bar */}
      <div className="bg-pine text-oat text-xs py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="font-medium">
            ✨ <strong>Kin Bundle Perk:</strong> Mix &amp; match any 2+ pairs across Men, Women, or Kids for an automatic <strong>10% Family Discount</strong>
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1 text-oat/80">
              <MapPin className="w-3.5 h-3.5" /> Flagship Studio: Lekki Phase 1, Lagos
            </span>
            <button
              onClick={() => setCurrency(currency === 'NGN' ? 'USD' : 'NGN')}
              className="bg-oat/15 hover:bg-oat/25 px-2.5 py-0.5 rounded-full font-semibold transition"
            >
              Currency: {currency === 'NGN' ? '₦ NGN' : '$ USD'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-30 bg-oat/95 backdrop-blur border-b border-espresso/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8">
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedBrand('All');
                setSelectedRegion('All');
                setOnlyFamilyMatch(false);
                navigateToPage('shop');
              }}
              className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-left"
            >
              Arch <span className="text-terracotta">&amp;</span> Kin
            </button>

            <nav className="hidden lg:flex items-center gap-1.5">
              {['All', 'Women', 'Men', 'Kids'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    navigateToPage('shop');
                  }}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                    activePage === 'shop' && selectedCategory === cat
                      ? 'bg-espresso text-oat'
                      : 'hover:bg-sand text-espresso/80'
                  }`}
                >
                  {cat === 'All' ? 'Shop All' : cat}
                </button>
              ))}

              <button
                onClick={() => navigateToPage('about')}
                className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1.5 transition ${
                  activePage === 'about'
                    ? 'bg-terracotta text-white shadow-sm'
                    : 'hover:bg-sand text-espresso/80'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>Our Story</span>
              </button>
            </nav>
          </div>

          <div className="flex items-center gap-2.5">
            {activePage === 'shop' && (
              <div className="relative hidden md:block">
                <Search className="w-4 h-4 text-espresso/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Kene Rapu, Hoka, Kids..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-sand border border-espresso/15 rounded-full pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-terracotta w-44 lg:w-60"
                />
              </div>
            )}

            <button
              onClick={() => setIsAdminOpen(true)}
              className="bg-pine text-oat hover:bg-espresso px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition"
            >
              <PlusCircle className="w-4 h-4" />
              <span className="hidden sm:inline">+ Add Shoe / Brand</span>
            </button>

            <button
              onClick={() => setIsSizeGuideOpen(true)}
              className="bg-sand hover:bg-espresso/10 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold flex items-center gap-1.5 transition"
            >
              <Ruler className="w-4 h-4 text-terracotta" />
              <span className="hidden xl:inline">Size Finder</span>
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-terracotta text-white hover:bg-espresso px-4 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 transition shadow-sm"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Bag</span>
              <span className="bg-oat text-espresso text-xs font-bold px-2 py-0.5 rounded-full">
                {totalItems}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav Switcher */}
        <div className="flex lg:hidden items-center gap-2 px-4 pb-3 overflow-x-auto">
          {['All', 'Women', 'Men', 'Kids'].map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                navigateToPage('shop');
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                activePage === 'shop' && selectedCategory === cat
                  ? 'bg-espresso text-oat'
                  : 'bg-sand text-espresso'
              }`}
            >
              {cat === 'All' ? 'Shop All' : cat}
            </button>
          ))}
          <button
            onClick={() => navigateToPage('about')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap flex items-center gap-1 ${
              activePage === 'about'
                ? 'bg-terracotta text-white'
                : 'bg-sand text-espresso'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Our Story
          </button>
        </div>
      </header>

      {/* =========================================================
          PAGE ROUTER: SHOP | OUR STORY | PRIVACY POLICY | TERMS
      ========================================================= */}
      {activePage === 'about' && (
        <main className="flex-1">
          {/* 1. About Hero */}
          <section className="bg-sand border-b border-espresso/10 py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <span className="inline-flex items-center gap-1.5 bg-terracotta/15 text-terracotta text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                Our Story • Est. in Lagos
              </span>
              <h1 className="font-serif text-4xl sm:text-6xl font-bold leading-tight mb-6">
                Grounded in Comfort. Built for Kin.
              </h1>
              <p className="text-espresso/80 text-lg sm:text-xl leading-relaxed mb-8">
                Where West African artisanal craftsmanship meets the world’s most trusted heritage footwear—curated under one warm roof for men, women, and growing feet.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => navigateToPage('shop')}
                  className="bg-terracotta hover:bg-espresso text-white px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 transition"
                >
                  <span>Explore All 28 Brands</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="bg-oat border border-espresso/20 hover:border-terracotta px-7 py-3.5 rounded-full font-semibold text-sm transition"
                >
                  Try the Kids Foot Finder
                </button>
              </div>
            </div>
          </section>

          {/* 2. Editorial Story Section */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-snug">
                The shoes by your front door tell the story of your household.
              </h2>
              <p className="text-espresso/80 leading-relaxed">
                There are the tiny, scuff-proof sandals from a toddler’s first day at the park; the hand-woven Aso-Oke mules worn to a Sunday family gathering; the supportive sneakers that carry you through long airport layovers; and the timeless cork footbeds that only get better after years of molding to your stride.
              </p>
              <p className="text-espresso/80 leading-relaxed">
                For too long, shopping for the whole family meant compromising—visiting one store for kids’ school and play shoes, waiting weeks to ship global orthopedic classics, and searching separately for authentic Nigerian leatherwork.
              </p>
              <div className="bg-sand p-6 rounded-2xl border border-espresso/10 space-y-3">
                <p className="font-serif font-bold text-lg text-espresso">
                  We built Arch &amp; Kin in Lekki, Lagos to bring those worlds together:
                </p>
                <p className="text-sm text-espresso/80">
                  <strong className="text-terracotta">• ARCH</strong> stands for anatomical support, enduring materials, and footwear engineered to care for your body from the ground up.
                </p>
                <p className="text-sm text-espresso/80">
                  <strong className="text-pine">• KIN</strong> stands for family, community, and the shared journeys that connect generations.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=700&q=80"
                  alt="Nigerian Leather Craft"
                  className="w-full h-64 object-cover rounded-3xl shadow-sm"
                />
                <div className="bg-pine text-oat p-5 rounded-3xl">
                  <p className="font-serif text-2xl font-bold">8 African Artisans</p>
                  <p className="text-xs text-oat/80 mt-1">
                    Handcrafted in Lagos &amp; across West Africa using local leather and Aso-Oke.
                  </p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-terracotta text-white p-5 rounded-3xl">
                  <p className="font-serif text-2xl font-bold">20 Global Icons</p>
                  <p className="text-xs text-white/90 mt-1">
                    Centuries of orthopedic cork, air-cushioned soles, and podiatrist-approved kids’ shoes.
                  </p>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=700&q=80"
                  alt="Kids & Family Footwear"
                  className="w-full h-64 object-cover rounded-3xl shadow-sm"
                />
              </div>
            </div>
          </section>

          {/* 3. Two Worlds of Craft */}
          <section className="bg-sand/60 border-y border-espresso/10 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="font-serif text-3xl font-bold mb-3">
                  Two Worlds of Craft, One Shared Standard
                </h2>
                <p className="text-sm text-espresso/75">
                  Every maker on our shelves is handpicked for longevity, anatomical comfort, and heritage story.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-oat p-8 rounded-3xl border border-espresso/10 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-terracotta/15 text-terracotta text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                      🇳🇬 Homegrown Nigerian &amp; African Artisans
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-3">
                      Celebrating West African Shoemaking
                    </h3>
                    <p className="text-sm text-espresso/80 leading-relaxed mb-6">
                      From <strong>Kene Rapu’s</strong> pioneering Lagos leather slippers and <strong>Ethnik by Tunde Owolabi’s</strong> hand-loomed Yoruba Aso-Oke sneakers to the sculptural artistry of <strong>Shekudo</strong>, <strong>Maliko</strong>, <strong>313eko</strong>, <strong>elowise.ng</strong>, <strong>Invogue Africa</strong>, and <strong>ADJOAA</strong>—these pieces celebrate our culture with every step.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRegion('African');
                      setSelectedBrand('All');
                      navigateToPage('shop');
                    }}
                    className="w-full bg-espresso hover:bg-terracotta text-oat py-3 rounded-full text-xs font-semibold transition"
                  >
                    Shop Nigerian &amp; African Makers (8 Brands) →
                  </button>
                </div>

                <div className="bg-oat p-8 rounded-3xl border border-espresso/10 flex flex-col justify-between">
                  <div>
                    <span className="inline-block bg-pine/15 text-pine text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
                      🌍 Global Heritage &amp; Comfort Icons
                    </span>
                    <h3 className="font-serif text-2xl font-bold mb-3">
                      Trusted Across Generations
                    </h3>
                    <p className="text-sm text-espresso/80 leading-relaxed mb-6">
                      Whether you need the contoured cork beds of <strong>Birkenstock</strong>, the cloud-like stability of <strong>Hoka</strong>, <strong>Asics</strong>, and <strong>On Running</strong>, the generational durability of <strong>Clarks Originals</strong>, <strong>Dr. Martens</strong>, <strong>Timberland</strong>, and <strong>Blundstone</strong>, or podiatrist-approved kids’ favorites like <strong>Bobux</strong>, <strong>Salt-Water</strong>, <strong>Native Shoes</strong>, and <strong>Crocs</strong>.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRegion('Global');
                      setSelectedBrand('All');
                      navigateToPage('shop');
                    }}
                    className="w-full bg-pine hover:bg-espresso text-oat py-3 rounded-full text-xs font-semibold transition"
                  >
                    Shop Global Comfort Icons (20 Brands) →
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Four Family Pillars */}
          <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="font-serif text-3xl font-bold text-center mb-10">
              Why Families Walk With Us
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
                <Users className="w-6 h-6 text-terracotta mb-3" />
                <h3 className="font-serif font-bold text-lg mb-2">Match the Kin</h3>
                <p className="text-xs text-espresso/75 leading-relaxed">
                  From New Balance 574s and Veja sneakers to Ethnik Aso-Oke slip-ons, we curate styles in both adult and children’s sizing.
                </p>
              </div>
              <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
                <Ruler className="w-6 h-6 text-pine mb-3" />
                <h3 className="font-serif font-bold text-lg mb-2">Stress-Free Kids Sizing</h3>
                <p className="text-xs text-espresso/75 leading-relaxed">
                  Our interactive Kids Foot Finder and 30-day fit exchange guarantee take the guesswork out of buying for growing feet.
                </p>
              </div>
              <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
                <Sparkles className="w-6 h-6 text-terracotta mb-3" />
                <h3 className="font-serif font-bold text-lg mb-2">10% Family Bundle Perk</h3>
                <p className="text-xs text-espresso/75 leading-relaxed">
                  Mix and match any 2 or more pairs across Men, Women, and Kids for an automatic 10% Kin Bundle discount in your bag.
                </p>
              </div>
              <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
                <Award className="w-6 h-6 text-pine mb-3" />
                <h3 className="font-serif font-bold text-lg mb-2">100% Verified Authentic</h3>
                <p className="text-xs text-espresso/75 leading-relaxed">
                  Every international brand is sourced through authorized distributors, and every African pair comes directly from our partner studios.
                </p>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* =========================================================
          CLICKABLE PRIVACY POLICY PAGE
      ========================================================= */}
      {activePage === 'privacy' && (
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-espresso/10">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-pine/15 text-pine text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                <FileText className="w-3.5 h-3.5" /> NDPA 2023 &amp; Global Privacy Standard
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold">Privacy Policy</h1>
              <p className="text-xs text-espresso/60 mt-2">
                Last Updated: October 2026 • Arch &amp; Kin Footwear Co. (Lekki Phase 1, Lagos)
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigateToPage('terms')}
                className="bg-sand hover:bg-espresso/10 text-espresso px-4 py-2.5 rounded-full text-xs font-semibold transition"
              >
                View Terms of Service →
              </button>
              <button
                onClick={() => navigateToPage('shop')}
                className="bg-terracotta text-white px-4 py-2.5 rounded-full text-xs font-semibold transition"
              >
                Back to Shop
              </button>
            </div>
          </div>

          <div className="py-8 space-y-6 text-sm leading-relaxed text-espresso/85">
            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                1. Information We Collect From Your Household
              </h2>
              <p>
                When you shop with <strong>Arch &amp; Kin</strong> or visit our Lekki fitting studio, we collect only the information needed to outfit your family comfortably and deliver your order:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
                <li><strong>Order &amp; Delivery Details:</strong> Your name, street address (Lagos, nationwide, or international), email address, and WhatsApp/mobile number for dispatch riders.</li>
                <li><strong>Family Fit &amp; Kids’ Sizing Data:</strong> Optional foot measurements (in centimeters) entered into our Kids Foot Finder tool so we can recommend accurate EU/UK/US sizes.</li>
                <li><strong>Device &amp; Browser Preferences:</strong> Local storage preferences such as your chosen currency (<code>₦ NGN</code> or <code>$ USD</code>) and shopping bag items.</li>
              </ul>
            </div>

            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                2. Paystack Payment Security (Zero Card Storage)
              </h2>
              <p>
                All online payments—whether via Nigerian Debit Cards, Instant Bank Transfer, or USSD—are processed directly through <strong>Paystack</strong>, a PCI-DSS Level 1 certified payment processor. <strong>Arch &amp; Kin never sees, processes, or stores your credit/debit card numbers, CVV codes, or banking PINs</strong> on our servers.
              </p>
            </div>

            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                3. How We Share Data with Delivery Partners
              </h2>
              <p>
                We never sell or rent your family’s personal data to third-party advertisers. Your delivery address and phone number are shared strictly with our trusted logistics partners (our in-house Lekki/VI dispatch riders, GIG Logistics, or DHL) solely to deliver your footwear and provide real-time tracking updates.
              </p>
            </div>

            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                4. "The Kin Circle" Community Communications
              </h2>
              <p>
                If you subscribe to <em>The Kin Circle</em> newsletter, we will send occasional updates on new Lagos artisan collaborations (such as Kene Rapu or Ethnik Aso-Oke drops), back-to-school kids’ restocks, and seasonal family bundle offers. You can unsubscribe with one click at any time.
              </p>
            </div>

            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                5. Your Rights Under the Nigeria Data Protection Act (NDPA)
              </h2>
              <p>
                In compliance with the Nigeria Data Protection Act (NDPA) and international privacy regulations, you have the right to request access to, correction of, or permanent deletion of your personal records. Reach our Data &amp; Family Care team anytime at <strong>care@archandkin.com</strong> or visit our studio at Admiralty Way, Lekki Phase 1, Lagos.
              </p>
            </div>
          </div>
        </main>
      )}

      {/* =========================================================
          CLICKABLE TERMS OF SERVICE PAGE
      ========================================================= */}
      {activePage === 'terms' && (
        <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-espresso/10">
            <div>
              <span className="inline-flex items-center gap-1.5 bg-terracotta/15 text-terracotta text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
                <Scale className="w-3.5 h-3.5" /> Customer Care &amp; Retail Terms
              </span>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold">Terms of Service</h1>
              <p className="text-xs text-espresso/60 mt-2">
                Effective: October 2026 • Arch &amp; Kin Footwear Co. (Lekki Phase 1, Lagos)
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => navigateToPage('privacy')}
                className="bg-sand hover:bg-espresso/10 text-espresso px-4 py-2.5 rounded-full text-xs font-semibold transition"
              >
                ← View Privacy Policy
              </button>
              <button
                onClick={() => navigateToPage('shop')}
                className="bg-terracotta text-white px-4 py-2.5 rounded-full text-xs font-semibold transition"
              >
                Back to Shop
              </button>
            </div>
          </div>

          <div className="py-8 space-y-6 text-sm leading-relaxed text-espresso/85">
            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                1. 100% Authenticity &amp; Handcrafted Artisanal Variations
              </h2>
              <p>
                Every global brand carried by <strong>Arch &amp; Kin</strong> (including Birkenstock, New Balance, Hoka, Clarks Originals, Dr. Martens, and Bobux) is sourced directly from authorized distributors and guaranteed 100% authentic.
              </p>
              <p className="mt-2">
                Our Nigerian and African heritage footwear (including <strong>Kene Rapu, 313eko, Shekudo, Ethnik by Tunde Owolabi, Maliko, Invogue Africa, ADJOAA, and elowise.ng</strong>) is handcrafted by local artisans. Subtle variations in hand-loomed Yoruba Aso-Oke weave, natural leather grain, or hand-carved wood bases are authentic hallmarks of artisanal shoemaking and are not considered manufacturing defects.
              </p>
            </div>

            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                2. 30-Day Family Fit Exchange Guarantee
              </h2>
              <p>
                We know children’s feet grow quickly and arch support must feel right. We offer a <strong>Free 30-Day Fit Exchange</strong> from the date of delivery or studio pickup, subject to these conditions:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
                <li>Footwear must be unworn outdoors, with clean soles (please test fit indoors on a rug or carpet) and original brand boxes intact.</li>
                <li>Exchanges can be completed in person at our Lekki Phase 1 studio or via courier dispatch.</li>
              </ul>
            </div>

            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                3. 10% "Kin Family Bundle" Discount Terms
              </h2>
              <p>
                Orders containing <strong>2 or more pairs</strong> across any combination of Men’s, Women’s, or Kids’ footwear automatically receive a <strong>10% Kin Bundle Discount</strong> at checkout. Size exchanges on bundle items retain the full 10% discount. If part of a bundle is returned for a refund, reducing the order to a single kept pair, the remaining pair reverts to its standard single-pair price.
              </p>
            </div>

            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                4. Dual Currency Pricing (₦ NGN &amp; $ USD) &amp; Paystack Checkout
              </h2>
              <p>
                For your convenience, prices on Arch &amp; Kin can be viewed in Nigerian Naira (<code>₦ NGN</code>) or US Dollars (<code>$ USD</code>). Once you initiate checkout via Paystack, your total order amount and delivery fee are locked in and documented on your official Arch &amp; Kin receipt.
              </p>
            </div>

            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <h2 className="font-serif text-xl font-bold text-espresso mb-2">
                5. Dispatch &amp; Delivery Timelines
              </h2>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li><strong>Lagos Island (Lekki, VI, Ikoyi):</strong> Same-day or next-day dispatch (24–48 hours).</li>
                <li><strong>Lagos Mainland (Ikeja, Surulere, Yaba):</strong> 24–48 hours.</li>
                <li><strong>Abuja, Port Harcourt &amp; Nationwide:</strong> 3–5 business days via DHL or GIG Logistics.</li>
                <li><strong>Lekki Studio Pickup:</strong> Ready for collection within 3 hours of Paystack confirmation.</li>
              </ul>
            </div>
          </div>
        </main>
      )}

      {/* =========================================================
          MAIN SHOP CATALOG PAGE
      ========================================================= */}
      {activePage === 'shop' && (
        <>
          {/* Shop Hero Banner */}
          <section className="bg-sand border-b border-espresso/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-1.5 bg-terracotta/15 text-terracotta text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
                  <Users className="w-3.5 h-3.5" /> {brands.length - 1} Nigerian, African &amp; Global Makers
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl font-bold leading-tight mb-4">
                  Where African heritage meets global family comfort.
                </h1>
                <p className="text-espresso/80 text-base sm:text-lg mb-6 max-w-2xl leading-relaxed">
                  From Lagos artisans like <strong>Kene Rapu</strong>, <strong>313eko</strong>, and <strong>Ethnik</strong> to global icons like <strong>Birkenstock</strong>, <strong>Hoka</strong>, <strong>New Balance</strong>, and <strong>Bobux</strong>. Built for men, women, and growing kids.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => {
                      setSelectedRegion(selectedRegion === 'African' ? 'All' : 'African');
                      setSelectedBrand('All');
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-5 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition border ${
                      selectedRegion === 'African'
                        ? 'bg-terracotta text-white border-terracotta'
                        : 'bg-oat text-espresso border-espresso/20 hover:border-terracotta'
                    }`}
                  >
                    <Globe className="w-4 h-4" />
                    {selectedRegion === 'African' ? 'Showing Nigerian & African Makers' : 'Explore Nigerian & African Makers'}
                  </button>
                  <button
                    onClick={() => {
                      setOnlyFamilyMatch(!onlyFamilyMatch);
                      document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-5 py-3 rounded-full font-semibold text-sm flex items-center gap-2 transition border ${
                      onlyFamilyMatch
                        ? 'bg-pine text-oat border-pine'
                        : 'bg-oat text-espresso border-espresso/20 hover:border-terracotta'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-terracotta" />
                    {onlyFamilyMatch ? 'Showing "Match the Kin" Only' : 'Shop "Match the Kin" Family Styles'}
                  </button>
                </div>
              </div>

              {/* Brand Spotlight Card */}
              <div className="lg:col-span-5 bg-oat p-6 rounded-3xl border border-espresso/10 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-terracotta mb-1">
                  {activeBrandObj.origin}
                </p>
                <h2 className="font-serif text-2xl font-bold mb-2">
                  {activeBrandObj.name === 'All' ? 'The Arch & Kin Roster' : activeBrandObj.name}
                </h2>
                <p className="text-sm text-espresso/80 mb-4 leading-relaxed">
                  {activeBrandObj.tagline}
                </p>
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-espresso/10 text-center">
                  <div className="bg-sand/70 p-2.5 rounded-xl">
                    <p className="font-serif font-bold text-lg text-terracotta">8</p>
                    <p className="text-[11px] text-espresso/70">African Makers</p>
                  </div>
                  <div className="bg-sand/70 p-2.5 rounded-xl">
                    <p className="font-serif font-bold text-lg text-pine">20</p>
                    <p className="text-[11px] text-espresso/70">Global Icons</p>
                  </div>
                  <div className="bg-sand/70 p-2.5 rounded-xl">
                    <p className="font-serif font-bold text-lg text-espresso">10% Off</p>
                    <p className="text-[11px] text-espresso/70">2+ Family Pairs</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Catalog Section */}
          <main id="catalog-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
            <div className="mb-6 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-espresso/60 flex items-center gap-1.5 mr-2">
                    <SlidersHorizontal className="w-3.5 h-3.5" /> Brand Origin:
                  </span>
                  {[
                    { id: 'All', label: 'All 28 Brands' },
                    { id: 'African', label: '🇳🇬 Nigerian & African Artisans (8)' },
                    { id: 'Global', label: '🌍 Global Heritage & Comfort (20)' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setSelectedRegion(tab.id);
                        setSelectedBrand('All');
                      }}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition ${
                        selectedRegion === tab.id
                          ? 'bg-pine text-oat'
                          : 'bg-sand text-espresso/80 hover:bg-espresso/10'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {(selectedBrand !== 'All' ||
                  selectedCategory !== 'All' ||
                  selectedRegion !== 'All' ||
                  onlyFamilyMatch ||
                  searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedBrand('All');
                      setSelectedCategory('All');
                      setSelectedRegion('All');
                      setOnlyFamilyMatch(false);
                      setSearchQuery('');
                    }}
                    className="text-xs font-semibold text-terracotta hover:underline"
                  >
                    Reset All Filters
                  </button>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-2 bg-sand/50 p-3.5 rounded-2xl border border-espresso/10">
                {visibleBrands.map((b) => (
                  <button
                    key={b.name}
                    onClick={() => setSelectedBrand(b.name)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition border ${
                      selectedBrand === b.name
                        ? 'bg-terracotta text-white border-terracotta shadow-sm'
                        : 'bg-oat text-espresso border-espresso/10 hover:border-terracotta'
                    }`}
                  >
                    {b.name === 'All' ? 'All Makers' : b.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 mb-6 text-sm text-espresso/70">
              <p>
                Showing <strong>{filteredProducts.length}</strong> of {products.length} styles
                {selectedBrand !== 'All' && (
                  <span>
                    {' '}
                    from <strong className="text-terracotta">{selectedBrand}</strong>
                  </span>
                )}
              </p>
              <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold">
                <input
                  type="checkbox"
                  checked={onlyFamilyMatch}
                  onChange={() => setOnlyFamilyMatch(!onlyFamilyMatch)}
                  className="accent-terracotta rounded"
                />
                Only show "Match the Kin" (Adult + Kids family sizing)
              </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => {
                const currentSize = selectedSizes[product.id] || product.sizes[0];
                return (
                  <div
                    key={product.id}
                    className="bg-sand/60 rounded-2xl p-4 border border-espresso/10 flex flex-col justify-between hover:shadow-md transition group"
                  >
                    <div>
                      <div className="relative overflow-hidden rounded-xl mb-3 bg-oat">
                        <img
                          src={product.img}
                          alt={product.name}
                          className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                        />
                        <span className="absolute top-2.5 left-2.5 bg-oat/95 backdrop-blur text-espresso text-[11px] font-bold px-2.5 py-1 rounded-full">
                          {product.category}
                        </span>
                        {product.familyMatch && (
                          <span className="absolute top-2.5 right-2.5 bg-pine text-oat text-[10px] font-semibold px-2.5 py-1 rounded-full">
                            👨‍👩‍👧 Match the Kin
                          </span>
                        )}
                        <span className="absolute bottom-2.5 left-2.5 bg-espresso/85 text-oat text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                          {product.badge}
                        </span>
                      </div>

                      <div className="flex items-center justify-between gap-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-terracotta truncate">
                          {product.brand}
                        </p>
                        <span className="text-[11px] text-espresso/60 font-medium whitespace-nowrap">
                          {product.archSupport}
                        </span>
                      </div>

                      <h3 className="font-serif font-bold text-base mt-1 leading-snug">
                        {product.name}
                      </h3>
                      <p className="text-xs text-espresso/70 mt-1 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="mt-3">
                        <p className="text-[11px] font-semibold text-espresso/60 mb-1.5">
                          Select Size:
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {product.sizes.map((size) => (
                            <button
                              key={size}
                              onClick={() => handleSizeSelect(product.id, size)}
                              className={`text-[11px] px-2 py-1 rounded-md font-semibold transition border ${
                                currentSize === size
                                  ? 'bg-espresso text-oat border-espresso'
                                  : 'bg-oat text-espresso/80 border-espresso/15 hover:border-espresso'
                              }`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 pt-3 border-t border-espresso/10">
                      <div>
                        <span className="font-bold text-base">{formatPrice(product.priceUSD)}</span>
                        <p className="text-[10px] text-espresso/60">{product.width}</p>
                      </div>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-terracotta hover:bg-espresso text-white text-xs font-semibold px-4 py-2.5 rounded-full transition flex items-center gap-1.5"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </main>
        </>
      )}

      {/* ==========================================
          FULL 5-COLUMN HERITAGE FOOTER SECTION
      ========================================== */}
      <footer className="bg-sand border-t border-espresso/10 mt-16 text-espresso">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-espresso/10">
            {/* Column 1 & 2: Brand Intro & Guarantees */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="font-serif text-3xl font-bold tracking-tight">
                Arch <span className="text-terracotta">&amp;</span> Kin
              </h2>
              <p className="text-sm text-espresso/80 leading-relaxed max-w-sm">
                A warm, community-driven lifestyle footwear destination celebrating Nigerian &amp; African artisans alongside global heritage comfort brands for men, women, and kids.
              </p>
              <button
                onClick={() => navigateToPage('about')}
                className="text-xs font-bold text-terracotta hover:underline flex items-center gap-1"
              >
                Read Our Full Story &amp; Mission →
              </button>
              <div className="flex items-center gap-2 text-xs font-semibold pt-1 text-pine">
                <ShieldCheck className="w-4 h-4" /> 100% Authentic &amp; Artisan Verified
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-terracotta">
                <HeartHandshake className="w-4 h-4" /> Free 30-Day Family Fit Exchanges
              </div>
            </div>

            {/* Column 3: Nigerian & African Roster */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-espresso/60 mb-4">
                Nigerian &amp; African Roster
              </h3>
              <ul className="space-y-2 text-sm font-medium">
                {[
                  'Kene Rapu',
                  '313eko',
                  'elowise.ng',
                  'Maliko',
                  'ADJOAA',
                  'Ethnik by Tunde Owolabi',
                  'Invogue Africa',
                  'Shekudo'
                ].map((b) => (
                  <li key={b}>
                    <button
                      onClick={() => {
                        setActivePage('shop');
                        setSelectedRegion('All');
                        setSelectedBrand(b);
                        window.scrollTo({ top: 450, behavior: 'smooth' });
                      }}
                      className="hover:text-terracotta transition text-left"
                    >
                      {b}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Global Comfort & Kids */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-espresso/60 mb-4">
                Global Comfort &amp; Kids
              </h3>
              <ul className="space-y-2 text-sm font-medium">
                {[
                  'Birkenstock',
                  'New Balance',
                  'Hoka',
                  'Crocs',
                  'Clarks Originals',
                  'Timberland',
                  'Bobux',
                  'Native Shoes'
                ].map((b) => (
                  <li key={b}>
                    <button
                      onClick={() => {
                        setActivePage('shop');
                        setSelectedRegion('All');
                        setSelectedBrand(b);
                        window.scrollTo({ top: 450, behavior: 'smooth' });
                      }}
                      className="hover:text-terracotta transition text-left"
                    >
                      {b}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 5: Community Newsletter */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-espresso/60 mb-4">
                Join the Kin Circle
              </h3>
              <p className="text-xs text-espresso/70 mb-3 leading-relaxed">
                Get early access to Lagos artisan collaborations, back-to-school kids sizing, and family bundle perks.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Welcome to the Arch & Kin family circle!');
                }}
                className="space-y-2"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full bg-oat border border-espresso/15 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-terracotta"
                />
                <button
                  type="submit"
                  className="w-full bg-espresso text-oat hover:bg-terracotta py-2.5 rounded-xl text-xs font-semibold transition"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Copyright & Clickable Legal Links Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-espresso/60 gap-4">
            <p>© 2026 Arch &amp; Kin Footwear Co. All rights reserved. • Secured by Paystack</p>
            <div className="flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-terracotta" /> Lekki Phase 1, Lagos, Nigeria
              </span>
              <button
                onClick={() => navigateToPage('about')}
                className={`hover:text-terracotta hover:underline transition ${
                  activePage === 'about' ? 'font-bold text-terracotta underline' : ''
                }`}
              >
                About Us
              </button>
              <button
                onClick={() => navigateToPage('privacy')}
                className={`hover:text-terracotta hover:underline transition ${
                  activePage === 'privacy' ? 'font-bold text-terracotta underline' : ''
                }`}
              >
                Privacy Policy
              </button>
              <button
                onClick={() => navigateToPage('terms')}
                className={`hover:text-terracotta hover:underline transition ${
                  activePage === 'terms' ? 'font-bold text-terracotta underline' : ''
                }`}
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= MODALS ================= */}

      {/* 1. Slide-Over Shopping Bag */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-espresso/40 backdrop-blur-sm z-50 flex justify-end">
          <div className="bg-oat w-full max-w-md h-full p-6 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
                <div>
                  <h2 className="font-serif text-xl font-bold">Your Family Bag</h2>
                  <p className="text-xs text-espresso/60">
                    {hasFamilyDiscount
                      ? '🎉 10% Kin Bundle Discount Unlocked!'
                      : 'Add 2+ pairs to unlock 10% off your family order'}
                  </p>
                </div>
                <button onClick={() => setIsCartOpen(false)} className="p-1.5 rounded-full hover:bg-sand">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-3 overflow-y-auto max-h-[55vh]">
                {cart.length === 0 ? (
                  <p className="text-sm text-espresso/60 py-8 text-center">Your family bag is currently empty.</p>
                ) : (
                  cart.map((item, idx) => (
                    <div key={`${item.id}-${item.size}`} className="flex items-center justify-between bg-sand p-3 rounded-2xl gap-3">
                      <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                      <div className="flex-1">
                        <p className="text-[11px] font-bold text-terracotta uppercase">{item.brand} • {item.size}</p>
                        <p className="text-sm font-semibold leading-tight">{item.name}</p>
                        <p className="text-xs font-bold mt-1">{formatPrice(item.priceUSD * item.qty)}</p>
                      </div>
                      <div className="flex items-center gap-1.5 bg-oat px-2 py-1 rounded-full border border-espresso/10">
                        <button onClick={() => updateQty(idx, -1)} className="p-0.5"><Minus className="w-3.5 h-3.5" /></button>
                        <span className="text-xs font-bold px-1">{item.qty}</span>
                        <button onClick={() => updateQty(idx, 1)} className="p-0.5"><Plus className="w-3.5 h-3.5" /></button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="border-t border-espresso/10 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-espresso/70">Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotalUSD)}</span>
                </div>
                {hasFamilyDiscount && (
                  <div className="flex justify-between text-sm text-pine font-semibold">
                    <span>Kin Family Bundle (10% Off)</span>
                    <span>-{formatPrice(discountUSD)}</span>
                  </div>
                )}
                <div className="flex justify-between text-lg font-bold pt-2 border-t border-espresso/10">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotalUSD - discountUSD)}</span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full bg-terracotta hover:bg-espresso text-white py-3.5 rounded-full font-semibold transition mt-2 flex items-center justify-center gap-2"
                >
                  <span>Proceed to Delivery &amp; Paystack</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* 2. Delivery Details Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 bg-espresso/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-oat max-w-lg w-full rounded-3xl p-6 border border-espresso/15 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
              <div>
                <h2 className="font-serif text-xl font-bold">Delivery &amp; Shipping Details</h2>
                <p className="text-xs text-espresso/60">Step 1 of 2 • Lagos &amp; Nationwide Dispatch</p>
              </div>
              <button onClick={() => setIsCheckoutOpen(false)} className="p-1.5 rounded-full hover:bg-sand">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleProceedToPaystack} className="py-4 space-y-3.5 text-sm">
              <div>
                <label className="block text-xs font-bold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tunde & Adesua Olatunji"
                  value={shippingForm.fullName}
                  onChange={(e) => setShippingForm({ ...shippingForm, fullName: e.target.value })}
                  className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2.5"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Email (for Paystack Receipt) *</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={shippingForm.email}
                    onChange={(e) => setShippingForm({ ...shippingForm, email: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3 py-2.5"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="0803 000 0000"
                    value={shippingForm.phone}
                    onChange={(e) => setShippingForm({ ...shippingForm, phone: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3 py-2.5"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Street Address *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 14 Admiralty Way, Lekki Phase 1"
                  value={shippingForm.address}
                  onChange={(e) => setShippingForm({ ...shippingForm, address: e.target.value })}
                  className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2.5"
                />
              </div>

              <div>
                <label className="block text-xs font-bold mb-1">Delivery Zone &amp; Shipping Rate</label>
                <select
                  value={shippingForm.city}
                  onChange={(e) => setShippingForm({ ...shippingForm, city: e.target.value })}
                  className="w-full bg-sand border border-espresso/15 rounded-xl px-3 py-2.5 text-xs font-semibold"
                >
                  {Object.entries(SHIPPING_RATES_USD).map(([zone, rateUSD]) => (
                    <option key={zone} value={zone}>
                      {zone} — {rateUSD === 0 ? 'FREE' : formatPrice(rateUSD)}
                    </option>
                  ))}
                </select>
              </div>

              <div className="bg-sand p-4 rounded-2xl space-y-1.5 mt-4">
                <div className="flex justify-between text-xs">
                  <span className="text-espresso/70">Items Subtotal:</span>
                  <span className="font-semibold">{formatPrice(subtotalUSD)}</span>
                </div>
                {hasFamilyDiscount && (
                  <div className="flex justify-between text-xs text-pine font-semibold">
                    <span>Kin Family Bundle (10% Off):</span>
                    <span>-{formatPrice(discountUSD)}</span>
                  </div>
                )}
                <div className="flex justify-between text-xs">
                  <span className="text-espresso/70">Delivery Fee ({shippingForm.city.split('(')[0]}):</span>
                  <span className="font-semibold">{shippingFeeUSD === 0 ? 'FREE' : formatPrice(shippingFeeUSD)}</span>
                </div>
                <div className="flex justify-between text-base font-bold pt-2 border-t border-espresso/10">
                  <span>Total to Pay:</span>
                  <span className="text-terracotta">{formatPrice(finalTotalUSD)}</span>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#09A5DB] hover:bg-[#078ab8] text-white py-3.5 rounded-full font-bold transition mt-3 flex items-center justify-center gap-2 shadow-md"
              >
                <Lock className="w-4 h-4" />
                <span>Pay {formatPrice(finalTotalUSD)} with Paystack</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* 3. Interactive Paystack Payment Gateway Popup */}
      {isPaystackOpen && (
        <div className="fixed inset-0 bg-espresso/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white text-espresso max-w-md w-full rounded-3xl overflow-hidden shadow-2xl border border-espresso/10">
            <div className="bg-[#011B33] text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#09A5DB] flex items-center justify-center font-bold text-sm">
                  P
                </div>
                <div>
                  <p className="text-xs font-bold tracking-wide uppercase text-[#09A5DB]">Paystack Checkout</p>
                  <p className="text-xs text-white/80">{shippingForm.email}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-[11px] text-white/60">Pay Arch &amp; Kin</p>
                <p className="font-bold text-base text-[#09A5DB]">{formatPrice(finalTotalUSD)}</p>
              </div>
            </div>

            <div className="grid grid-cols-3 border-b border-gray-200 bg-gray-50 text-xs font-bold">
              <button
                type="button"
                onClick={() => setPaystackChannel('card')}
                className={`py-3 flex items-center justify-center gap-1.5 border-b-2 transition ${
                  paystackChannel === 'card'
                    ? 'border-[#09A5DB] text-[#011B33] bg-white'
                    : 'border-transparent text-gray-500'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5" /> Card
              </button>
              <button
                type="button"
                onClick={() => setPaystackChannel('transfer')}
                className={`py-3 flex items-center justify-center gap-1.5 border-b-2 transition ${
                  paystackChannel === 'transfer'
                    ? 'border-[#09A5DB] text-[#011B33] bg-white'
                    : 'border-transparent text-gray-500'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" /> Transfer
              </button>
              <button
                type="button"
                onClick={() => setPaystackChannel('ussd')}
                className={`py-3 flex items-center justify-center gap-1.5 border-b-2 transition ${
                  paystackChannel === 'ussd'
                    ? 'border-[#09A5DB] text-[#011B33] bg-white'
                    : 'border-transparent text-gray-500'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" /> USSD
              </button>
            </div>

            <div className="p-6 space-y-4 text-sm">
              {paystackChannel === 'card' && (
                <div className="space-y-3">
                  <p className="text-xs text-gray-500 font-medium">Enter your Nigerian or International card details</p>
                  <div>
                    <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1">Card Number</label>
                    <input
                      type="text"
                      defaultValue="5399 •••• •••• 8421"
                      className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1">Valid Thru</label>
                      <input
                        type="text"
                        defaultValue="09/28"
                        className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-mono"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase text-gray-500 mb-1">CVV</label>
                      <input
                        type="password"
                        defaultValue="482"
                        className="w-full border border-gray-300 rounded-xl px-3.5 py-2.5 text-sm font-mono"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paystackChannel === 'transfer' && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-center space-y-2">
                  <p className="text-xs text-gray-500">Transfer exact amount to this dedicated Paystack-Titan account:</p>
                  <p className="font-bold text-lg text-[#011B33] tracking-wider">9840291842</p>
                  <p className="text-xs font-bold text-[#09A5DB]">Paystack-Titan Bank • Arch &amp; Kin</p>
                  <p className="text-[11px] text-gray-400">Account expires in 29:45 minutes</p>
                </div>
              )}

              {paystackChannel === 'ussd' && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-200 text-center space-y-2">
                  <p className="text-xs text-gray-500">Dial the GTBank or Zenith USSD code below on your phone:</p>
                  <p className="font-bold text-lg text-[#011B33] tracking-wider">*737*000*9482#</p>
                  <p className="text-xs text-gray-500">Then click the green button below once completed.</p>
                </div>
              )}

              <button
                type="button"
                disabled={isProcessingPayment}
                onClick={confirmPaystackPayment}
                className="w-full bg-[#3BB75E] hover:bg-[#2f9c4e] text-white py-3.5 rounded-xl font-bold text-sm transition shadow-md"
              >
                {isProcessingPayment
                  ? 'Verifying Payment with Paystack...'
                  : paystackChannel === 'card'
                  ? `Pay ${formatPrice(finalTotalUSD)}`
                  : `I have sent ${formatPrice(finalTotalUSD)}`}
              </button>

              <div className="flex items-center justify-between pt-2 text-[11px] text-gray-400">
                <span className="flex items-center gap-1">
                  <Lock className="w-3 h-3" /> Secured by <strong>Paystack</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setIsPaystackOpen(false)}
                  className="text-red-500 hover:underline font-semibold"
                >
                  Cancel Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Order Confirmation Receipt Modal */}
      {completedOrder && (
        <div className="fixed inset-0 bg-espresso/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-oat max-w-lg w-full rounded-3xl p-6 border border-espresso/15 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="text-center pb-4 border-b border-espresso/10">
              <CheckCircle2 className="w-12 h-12 text-pine mx-auto mb-2" />
              <span className="inline-block bg-pine/15 text-pine text-[11px] font-bold px-3 py-0.5 rounded-full mb-1">
                PAYSTACK VERIFIED • {completedOrder.paystackRef}
              </span>
              <h2 className="font-serif text-2xl font-bold">Arch &amp; Kin Official Receipt</h2>
              <p className="text-xs text-espresso/60">Thank you for walking with our family!</p>
            </div>

            <div className="py-4 space-y-4 text-sm">
              <div className="flex justify-between bg-sand p-3.5 rounded-2xl text-xs">
                <div>
                  <p className="text-espresso/60">Order Number</p>
                  <p className="font-bold text-sm text-terracotta">{completedOrder.orderNumber}</p>
                </div>
                <div className="text-right">
                  <p className="text-espresso/60">Date &amp; Time</p>
                  <p className="font-bold">{completedOrder.date}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-espresso/60 uppercase mb-1">Deliver To:</p>
                <div className="bg-sand p-3 rounded-xl text-xs space-y-1">
                  <p className="font-bold">{completedOrder.shipping.fullName}</p>
                  <p>{completedOrder.shipping.address} • {completedOrder.shipping.city}</p>
                  <p className="text-espresso/70">{completedOrder.shipping.phone} • {completedOrder.shipping.email}</p>
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-espresso/60 uppercase mb-2">Purchased Footwear:</p>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {completedOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center bg-sand/60 p-2.5 rounded-xl text-xs">
                      <div>
                        <p className="font-bold">{item.name}</p>
                        <p className="text-[11px] text-terracotta">{item.brand} • {item.size} (x{item.qty})</p>
                      </div>
                      <span className="font-bold">{formatPrice(item.priceUSD * item.qty)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-sand p-3.5 rounded-2xl space-y-1.5 text-xs">
                <div className="flex justify-between">
                  <span className="text-espresso/70">Payment Channel:</span>
                  <span className="font-semibold">Paystack ({completedOrder.paymentChannel})</span>
                </div>
                {completedOrder.discountUSD > 0 && (
                  <div className="flex justify-between text-pine font-semibold">
                    <span>10% Family Bundle Savings:</span>
                    <span>-{formatPrice(completedOrder.discountUSD)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-espresso/70">Delivery Fee:</span>
                  <span className="font-semibold">
                    {completedOrder.shippingFeeUSD === 0 ? 'FREE' : formatPrice(completedOrder.shippingFeeUSD)}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-bold pt-1.5 border-t border-espresso/10">
                  <span>Total Paid:</span>
                  <span className="text-terracotta">{formatPrice(completedOrder.finalTotalUSD)}</span>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => window.print()}
                  className="flex-1 bg-sand hover:bg-espresso/10 text-espresso py-3 rounded-full font-semibold text-xs flex items-center justify-center gap-1.5 transition"
                >
                  <Printer className="w-4 h-4" /> Print / Save PDF
                </button>
                <button
                  onClick={() => setCompletedOrder(null)}
                  className="flex-1 bg-espresso text-oat hover:bg-terracotta py-3 rounded-full font-semibold text-xs transition"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Full 2-Tab Admin Catalog Studio Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 bg-espresso/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-oat max-w-lg w-full rounded-3xl p-6 border border-espresso/15 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
              <div>
                <h2 className="font-serif text-xl font-bold">Arch &amp; Kin Catalog Studio</h2>
                <p className="text-xs text-espresso/60">Add new shoes or brands directly to your storefront</p>
              </div>
              <button onClick={() => setIsAdminOpen(false)} className="p-1.5 rounded-full hover:bg-sand">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2 my-4 bg-sand p-1 rounded-full">
              <button
                onClick={() => setAdminTab('product')}
                className={`py-2 rounded-full text-xs font-bold transition ${
                  adminTab === 'product' ? 'bg-espresso text-oat' : 'text-espresso/70'
                }`}
              >
                1. Add a New Shoe
              </button>
              <button
                onClick={() => setAdminTab('brand')}
                className={`py-2 rounded-full text-xs font-bold transition ${
                  adminTab === 'brand' ? 'bg-espresso text-oat' : 'text-espresso/70'
                }`}
              >
                2. Add a New Brand
              </button>
            </div>

            {adminTab === 'product' ? (
              <form onSubmit={handleAddProduct} className="space-y-3 text-sm">
                <div>
                  <label className="block text-xs font-bold mb-1">Shoe Model Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kene Rapu Resort Slide"
                    value={newShoe.name}
                    onChange={(e) => setNewShoe({ ...newShoe, name: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">Brand</label>
                    <select
                      value={newShoe.brand}
                      onChange={(e) => setNewShoe({ ...newShoe, brand: e.target.value })}
                      className="w-full bg-sand border border-espresso/15 rounded-xl px-3 py-2"
                    >
                      {brands
                        .filter((b) => b.name !== 'All')
                        .map((b) => (
                          <option key={b.name} value={b.name}>
                            {b.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Family Category</label>
                    <select
                      value={newShoe.category}
                      onChange={(e) => setNewShoe({ ...newShoe, category: e.target.value })}
                      className="w-full bg-sand border border-espresso/15 rounded-xl px-3 py-2"
                    >
                      <option value="Women">Women</option>
                      <option value="Men">Men</option>
                      <option value="Kids">Kids</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold mb-1">Price (in USD $)</label>
                    <input
                      type="number"
                      required
                      value={newShoe.priceUSD}
                      onChange={(e) => setNewShoe({ ...newShoe, priceUSD: e.target.value })}
                      className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1">Arch Support Type</label>
                    <input
                      type="text"
                      value={newShoe.archSupport}
                      onChange={(e) => setNewShoe({ ...newShoe, archSupport: e.target.value })}
                      className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Image URL (or `/photo.jpg` from public folder)</label>
                  <input
                    type="text"
                    value={newShoe.img}
                    onChange={(e) => setNewShoe({ ...newShoe, img: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Short Description</label>
                  <textarea
                    rows="2"
                    value={newShoe.description}
                    onChange={(e) => setNewShoe({ ...newShoe, description: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2"
                  />
                </div>
                <label className="flex items-center gap-2 text-xs font-semibold pt-1">
                  <input
                    type="checkbox"
                    checked={newShoe.familyMatch}
                    onChange={(e) => setNewShoe({ ...newShoe, familyMatch: e.target.checked })}
                    className="accent-terracotta"
                  />
                  Include "👨‍👩‍👧 Match the Kin" Family Sizing Badge
                </label>
                <button
                  type="submit"
                  className="w-full bg-terracotta hover:bg-espresso text-white py-3 rounded-full font-semibold transition mt-2"
                >
                  Publish Shoe to Storefront
                </button>
              </form>
            ) : (
              <form onSubmit={handleAddBrand} className="space-y-3 text-sm">
                <div>
                  <label className="block text-xs font-bold mb-1">New Brand Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Allbirds, Clarks Kids"
                    value={newBrand.name}
                    onChange={(e) => setNewBrand({ ...newBrand, name: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Brand Region</label>
                  <select
                    value={newBrand.region}
                    onChange={(e) => setNewBrand({ ...newBrand, region: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3 py-2"
                  >
                    <option value="African">Nigerian &amp; African Artisan</option>
                    <option value="Global">Global Heritage &amp; Comfort</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Origin &amp; Year Founded</label>
                  <input
                    type="text"
                    placeholder="e.g. Lagos, Nigeria • Est. 2018"
                    value={newBrand.origin}
                    onChange={(e) => setNewBrand({ ...newBrand, origin: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Brand Story / Tagline</label>
                  <textarea
                    rows="2"
                    value={newBrand.tagline}
                    onChange={(e) => setNewBrand({ ...newBrand, tagline: e.target.value })}
                    className="w-full bg-sand border border-espresso/15 rounded-xl px-3.5 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-pine hover:bg-espresso text-oat py-3 rounded-full font-semibold transition"
                >
                  Add Brand to Roster
                </button>
              </form>
            )}

            <div className="mt-5 pt-3 border-t border-espresso/10 flex justify-between items-center text-xs text-espresso/60">
              <span>Saved automatically in your browser</span>
              <button
                type="button"
                onClick={resetCatalogToDefault}
                className="flex items-center gap-1 text-terracotta hover:underline font-semibold"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset to Default 28 Brands
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Size Finder Modal */}
      {isSizeGuideOpen && (
        <div className="fixed inset-0 bg-espresso/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-oat max-w-lg w-full rounded-3xl p-6 border border-espresso/15 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
              <h2 className="font-serif text-xl font-bold">Kids &amp; Family Size Finder</h2>
              <button onClick={() => setIsSizeGuideOpen(false)} className="p-1 rounded-full hover:bg-sand"><X className="w-5 h-5" /></button>
            </div>
            <div className="py-5 space-y-4">
              <p className="text-sm text-espresso/80">
                Place your child’s heel against a wall on a piece of paper, mark the longest toe, and slide the ruler below:
              </p>
              <div className="bg-sand p-4 rounded-2xl">
                <div className="flex justify-between text-sm font-bold mb-2">
                  <span>Foot Length: {footCm} cm</span>
                  <span className="text-terracotta">Recommended: EU {Math.round((footCm + 1.5) * 1.5)}</span>
                </div>
                <input
                  type="range"
                  min="13"
                  max="27"
                  step="0.5"
                  value={footCm}
                  onChange={(e) => setFootCm(parseFloat(e.target.value))}
                  className="w-full accent-terracotta"
                />
              </div>
            </div>
            <button onClick={() => setIsSizeGuideOpen(false)} className="w-full bg-espresso text-oat py-3 rounded-full text-sm font-semibold">
              Done &amp; Return to Shop
            </button>
          </div>
        </div>
      )}
    </div>
  );
}