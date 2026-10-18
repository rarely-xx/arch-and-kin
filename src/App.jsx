// src/App.jsx
import React, { useState, useMemo, useEffect } from 'react';
import { Users, Globe, Sparkles, SlidersHorizontal, Plus } from 'lucide-react';
import {
  INITIAL_BRANDS,
  INITIAL_PRODUCTS,
  SHIPPING_RATES_USD,
  EXCHANGE_RATE
} from './data/catalog';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutAndLegal from './components/AboutAndLegal';
import WhatsAppConcierge from './components/WhatsAppConcierge';
import Modals from './components/Modals';

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

  const [activePage, setActivePage] = useState('shop');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFamilyMatch, setOnlyFamilyMatch] = useState(false);
  const [currency, setCurrency] = useState('NGN');
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
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
    description: '',
    careInstructions: '',
    fitMeter: 'True to Size'
  });
  const [newBrand, setNewBrand] = useState({
    name: '',
    region: 'African',
    origin: '',
    tagline: ''
  });

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
        'Crafted with heritage materials for everyday family comfort and durability.',
      careInstructions: 'Wipe clean with a damp soft cloth. Store in a dry place.',
      fitMeter: 'True to Size',
      reviews: [{ author: 'Akin O.', rating: 5, comment: 'Just added to our family collection. Excellent quality!' }]
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
      <Navbar
        activePage={activePage}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setSelectedBrand={setSelectedBrand}
        setSelectedRegion={setSelectedRegion}
        setOnlyFamilyMatch={setOnlyFamilyMatch}
        navigateToPage={navigateToPage}
        currency={currency}
        setCurrency={setCurrency}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setIsAdminOpen={setIsAdminOpen}
        setIsSizeGuideOpen={setIsSizeGuideOpen}
        setIsCartOpen={setIsCartOpen}
        totalItems={totalItems}
      />

      <AboutAndLegal
        activePage={activePage}
        navigateToPage={navigateToPage}
        setIsSizeGuideOpen={setIsSizeGuideOpen}
        setSelectedRegion={setSelectedRegion}
        setSelectedBrand={setSelectedBrand}
      />

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
                      {/* Clickable Image to Open Quick-View */}
                      <div
                        onClick={() => setQuickViewProduct(product)}
                        className="relative overflow-hidden rounded-xl mb-3 bg-oat cursor-pointer"
                      >
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
                        <div className="absolute inset-0 bg-espresso/10 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                          <span className="bg-oat text-espresso text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                            Quick View &amp; Care 🔍
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-1">
                        <p className="text-xs font-bold uppercase tracking-wider text-terracotta truncate">
                          {product.brand}
                        </p>
                        <span className="text-[11px] text-espresso/60 font-medium whitespace-nowrap">
                          {product.archSupport}
                        </span>
                      </div>

                      <h3
                        onClick={() => setQuickViewProduct(product)}
                        className="font-serif font-bold text-base mt-1 leading-snug cursor-pointer hover:text-terracotta transition"
                      >
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

      <Footer
        activePage={activePage}
        navigateToPage={navigateToPage}
        setActivePage={setActivePage}
        setSelectedRegion={setSelectedRegion}
        setSelectedBrand={setSelectedBrand}
      />

      <Modals
        quickViewProduct={quickViewProduct}
        setQuickViewProduct={setQuickViewProduct}
        handleSizeSelect={handleSizeSelect}
        selectedSizes={selectedSizes}
        addToCart={addToCart}
        isCartOpen={isCartOpen}
        setIsCartOpen={setIsCartOpen}
        cart={cart}
        updateQty={updateQty}
        hasFamilyDiscount={hasFamilyDiscount}
        subtotalUSD={subtotalUSD}
        discountUSD={discountUSD}
        finalTotalUSD={finalTotalUSD}
        shippingFeeUSD={shippingFeeUSD}
        formatPrice={formatPrice}
        isCheckoutOpen={isCheckoutOpen}
        setIsCheckoutOpen={setIsCheckoutOpen}
        shippingForm={shippingForm}
        setShippingForm={setShippingForm}
        handleProceedToPaystack={handleProceedToPaystack}
        isPaystackOpen={isPaystackOpen}
        setIsPaystackOpen={setIsPaystackOpen}
        paystackChannel={paystackChannel}
        setPaystackChannel={setPaystackChannel}
        isProcessingPayment={isProcessingPayment}
        confirmPaystackPayment={confirmPaystackPayment}
        completedOrder={completedOrder}
        setCompletedOrder={setCompletedOrder}
        isAdminOpen={isAdminOpen}
        setIsAdminOpen={setIsAdminOpen}
        adminTab={adminTab}
        setAdminTab={setAdminTab}
        newShoe={newShoe}
        setNewShoe={setNewShoe}
        handleAddProduct={handleAddProduct}
        newBrand={newBrand}
        setNewBrand={setNewBrand}
        handleAddBrand={handleAddBrand}
        brands={brands}
        resetCatalogToDefault={resetCatalogToDefault}
        isSizeGuideOpen={isSizeGuideOpen}
        setIsSizeGuideOpen={setIsSizeGuideOpen}
        footCm={footCm}
        setFootCm={setFootCm}
      />
      <WhatsAppConcierge />
    </div>
  );
}