// src/components/Modals.jsx
import React, { useState } from 'react';
import {
  X,
  Plus,
  Minus,
  ArrowRight,
  Lock,
  CreditCard,
  Building2,
  Smartphone,
  CheckCircle2,
  Printer,
  RotateCcw,
  Sparkles,
  Star,
  ShieldCheck,
  Heart
} from 'lucide-react';
import { SHIPPING_RATES_USD } from '../data/catalog';

export default function Modals({
  quickViewProduct,
  setQuickViewProduct,
  handleSizeSelect,
  selectedSizes,
  addToCart,
  formatPrice,
  isCartOpen,
  setIsCartOpen,
  cart,
  updateQty,
  hasFamilyDiscount,
  subtotalUSD,
  discountUSD,
  finalTotalUSD,
  shippingFeeUSD,
  isCheckoutOpen,
  setIsCheckoutOpen,
  shippingForm,
  setShippingForm,
  handleProceedToPaystack,
  isPaystackOpen,
  setIsPaystackOpen,
  paystackChannel,
  setPaystackChannel,
  isProcessingPayment,
  confirmPaystackPayment,
  completedOrder,
  setCompletedOrder,
  isAdminOpen,
  setIsAdminOpen,
  adminTab,
  setAdminTab,
  newShoe,
  setNewShoe,
  handleAddProduct,
  newBrand,
  setNewBrand,
  handleAddBrand,
  brands,
  resetCatalogToDefault,
  isSizeGuideOpen,
  setIsSizeGuideOpen,
  footCm,
  setFootCm
}) {
  const [activeTab, setActiveTab] = useState('details'); // 'details' | 'care' | 'reviews'

  return (
    <>
      {/* 0. Product Quick-View & Review Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-espresso/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-oat max-w-2xl w-full rounded-3xl p-6 sm:p-8 border border-espresso/15 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-espresso/10">
              <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
                {quickViewProduct.brand} • {quickViewProduct.category}
              </span>
              <button
                onClick={() => setQuickViewProduct(null)}
                className="p-1.5 rounded-full hover:bg-sand transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 my-6">
              <div className="bg-sand rounded-2xl overflow-hidden relative">
                <img
                  src={quickViewProduct.img}
                  alt={quickViewProduct.name}
                  className="w-full h-72 object-cover"
                />
                <span className="absolute top-3 left-3 bg-espresso/85 text-oat text-xs font-bold px-3 py-1 rounded-full">
                  {quickViewProduct.badge}
                </span>
              </div>

              <div className="flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="font-serif text-2xl font-bold leading-tight">
                    {quickViewProduct.name}
                  </h2>
                  <p className="text-lg font-bold text-terracotta mt-1">
                    {formatPrice(quickViewProduct.priceUSD)}
                  </p>
                  <p className="text-xs text-espresso/75 mt-2 leading-relaxed">
                    {quickViewProduct.description}
                  </p>

                  {/* Fit Meter Badge */}
                  <div className="mt-4 bg-sand/80 p-3 rounded-xl border border-espresso/10">
                    <p className="text-[11px] font-bold text-espresso/60 uppercase">Fit &amp; Sizing Meter</p>
                    <p className="text-xs font-semibold text-pine mt-0.5">
                      ⚖️ {quickViewProduct.fitMeter || 'True to Size'} ({quickViewProduct.width || 'Standard Fit'})
                    </p>
                  </div>
                </div>

                {/* Size Selector */}
                <div>
                  <p className="text-xs font-bold text-espresso/70 mb-1.5">Select Size:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {quickViewProduct.sizes.map((size) => {
                      const currentSize = selectedSizes[quickViewProduct.id] || quickViewProduct.sizes[0];
                      return (
                        <button
                          key={size}
                          onClick={() => handleSizeSelect(quickViewProduct.id, size)}
                          className={`text-xs px-3 py-1.5 rounded-lg font-semibold transition border ${
                            currentSize === size
                              ? 'bg-espresso text-oat border-espresso'
                              : 'bg-sand text-espresso/80 border-espresso/15 hover:border-espresso'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <button
                  onClick={() => {
                    addToCart(quickViewProduct);
                    setQuickViewProduct(null);
                  }}
                  className="w-full bg-terracotta hover:bg-espresso text-white py-3 rounded-full font-semibold text-sm transition shadow-sm"
                >
                  Add to Family Bag
                </button>
              </div>
            </div>

            {/* Tabbed Footer: Care Instructions vs Community Reviews */}
            <div className="border-t border-espresso/10 pt-4">
              <div className="flex gap-2 bg-sand p-1 rounded-full mb-4">
                <button
                  onClick={() => setActiveTab('details')}
                  className={`flex-1 py-2 rounded-full text-xs font-bold transition ${
                    activeTab === 'details' ? 'bg-espresso text-oat' : 'text-espresso/70'
                  }`}
                >
                  Arch Support &amp; Specs
                </button>
                <button
                  onClick={() => setActiveTab('care')}
                  className={`flex-1 py-2 rounded-full text-xs font-bold transition ${
                    activeTab === 'care' ? 'bg-espresso text-oat' : 'text-espresso/70'
                  }`}
                >
                  Care &amp; Cleaning Guide
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`flex-1 py-2 rounded-full text-xs font-bold transition ${
                    activeTab === 'reviews' ? 'bg-espresso text-oat' : 'text-espresso/70'
                  }`}
                >
                  Family Reviews ({quickViewProduct.reviews?.length || 1})
                </button>
              </div>

              <div className="bg-sand/60 p-4 rounded-2xl text-xs text-espresso/80 min-h-[90px]">
                {activeTab === 'details' && (
                  <div className="space-y-1.5">
                    <p><strong>Arch Support:</strong> {quickViewProduct.archSupport}</p>
                    <p><strong>Width Profile:</strong> {quickViewProduct.width}</p>
                    <p><strong>Family Matching:</strong> {quickViewProduct.familyMatch ? 'Available in adult and kids sizing' : 'Adult collection'}</p>
                  </div>
                )}
                {activeTab === 'care' && (
                  <p className="leading-relaxed">
                    🧽 <strong>Cleaning Instructions:</strong> {quickViewProduct.careInstructions || 'Wipe clean with a damp cloth. Store in a cool, dry place away from direct sunlight.'}
                  </p>
                )}
                {activeTab === 'reviews' && (
                  <div className="space-y-2">
                    {quickViewProduct.reviews && quickViewProduct.reviews.length > 0 ? (
                      quickViewProduct.reviews.map((rev, idx) => (
                        <div key={idx} className="border-b border-espresso/10 pb-2 last:border-0">
                          <div className="flex items-center gap-1 text-amber-600 mb-0.5">
                            {[...Array(rev.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                            <span className="font-bold text-espresso ml-1">{rev.author}</span>
                          </div>
                          <p className="text-espresso/80">"{rev.comment}"</p>
                        </div>
                      ))
                    ) : (
                      <p>No reviews yet for this style. Be the first family to review!</p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

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
    </>
  );
}