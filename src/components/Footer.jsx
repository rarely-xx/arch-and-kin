// src/components/Footer.jsx
import React from 'react';
import { ShieldCheck, HeartHandshake, MapPin } from 'lucide-react';

export default function Footer({
  activePage,
  navigateToPage,
  setActivePage,
  setSelectedRegion,
  setSelectedBrand
}) {
  return (
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
              <HeartHandshake className="w-4 h-4" /> Free 7-Day Family Fit Exchanges
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
              <MapPin className="w-3.5 h-3.5 text-terracotta" />Lagos, Nigeria
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
  );
}