// src/components/Navbar.jsx
import React from 'react';
import { ShoppingBag, Search, Ruler, MapPin, PlusCircle, BookOpen } from 'lucide-react';

export default function Navbar({
  activePage,
  selectedCategory,
  setSelectedCategory,
  setSelectedBrand,
  setSelectedRegion,
  setOnlyFamilyMatch,
  navigateToPage,
  currency,
  setCurrency,
  searchQuery,
  setSearchQuery,
  setIsAdminOpen,
  setIsSizeGuideOpen,
  setIsCartOpen,
  totalItems
}) {
  return (
    <>
      {/* Top Community Bar */}
      <div className="bg-pine text-oat text-xs py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="font-medium">
            ✨ <strong>Kin Bundle Perk:</strong> Mix &amp; match any 2+ pairs across Men, Women, or Kids for an automatic <strong>2% Family Discount</strong>
          </p>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline-flex items-center gap-1 text-oat/80">
              <MapPin className="w-3.5 h-3.5" /> Flagship Studio: Lagos
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
    </>
  );
}