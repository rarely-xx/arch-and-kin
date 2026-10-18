// src/components/AboutAndLegal.jsx
import React from 'react';
import { ArrowRight, Users, Ruler, Sparkles, Award, FileText, Scale } from 'lucide-react';

export default function AboutAndLegal({
  activePage,
  navigateToPage,
  setIsSizeGuideOpen,
  setSelectedRegion,
  setSelectedBrand
}) {
  if (activePage === 'about') {
    return (
      <main className="flex-1">
        {/* 1. About Hero */}
        <section className="bg-sand border-b border-espresso/10 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-flex items-center gap-1.5 bg-terracotta/15 text-terracotta text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
              Our Story • 2026 Est. in Lagos
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
                We built Arch &amp; Kin in Lagos to bring those worlds together:
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
                Our interactive Kids Foot Finder and 7-day fit exchange guarantee take the guesswork out of buying for growing feet.
              </p>
            </div>
            <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
              <Sparkles className="w-6 h-6 text-terracotta mb-3" />
              <h3 className="font-serif font-bold text-lg mb-2">2% Family Bundle Perk</h3>
              <p className="text-xs text-espresso/75 leading-relaxed">
                Mix and match any 2 or more pairs across Men, Women, and Kids for an automatic 2% Kin Bundle discount in your bag.
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
    );
  }

  if (activePage === 'privacy') {
    return (
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-espresso/10">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-pine/15 text-pine text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
              <FileText className="w-3.5 h-3.5" /> NDPA 2023 &amp; Global Privacy Standard
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold">Privacy Policy</h1>
            <p className="text-xs text-espresso/60 mt-2">
              Last Updated: October 2026 • Arch &amp; Kin Footwear Co. (Lagos)
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
    );
  }

  if (activePage === 'terms') {
    return (
      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 border-b border-espresso/10">
          <div>
            <span className="inline-flex items-center gap-1.5 bg-terracotta/15 text-terracotta text-xs font-bold uppercase tracking-widest px-3.5 py-1 rounded-full mb-3">
              <Scale className="w-3.5 h-3.5" /> Customer Care &amp; Retail Terms
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold">Terms of Service</h1>
            <p className="text-xs text-espresso/60 mt-2">
              Effective: October 2026 • Arch &amp; Kin Footwear Co. (Lagos)
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
              2. 7-Day Family Fit Exchange Guarantee
            </h2>
            <p>
              We know children’s feet grow quickly and arch support must feel right. We offer a <strong>Free 7-Day Fit Exchange</strong> from the date of delivery or studio pickup, subject to these conditions:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-xs sm:text-sm">
              <li>Footwear must be unworn outdoors, with clean soles (please test fit indoors on a rug or carpet) and original brand boxes intact.</li>
              <li>Exchanges can be completed in person at our Lagos studio or via courier dispatch.</li>
            </ul>
          </div>

          <div className="bg-sand/60 p-6 rounded-2xl border border-espresso/10">
            <h2 className="font-serif text-xl font-bold text-espresso mb-2">
              3. 2% "Kin Family Bundle" Discount Terms
            </h2>
            <p>
              Orders containing <strong>2 or more pairs</strong> across any combination of Men’s, Women’s, or Kids’ footwear automatically receive a <strong>2% Kin Bundle Discount</strong> at checkout. Size exchanges on bundle items retain the full 10% discount. If part of a bundle is returned for a refund, reducing the order to a single kept pair, the remaining pair reverts to its standard single-pair price.
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
    );
  }

  return null;
}