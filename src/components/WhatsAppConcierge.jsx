// src/components/WhatsAppConcierge.jsx
import React, { useState } from 'react';
import { MessageCircle, X, Send, Sparkles, Ruler, PackageCheck, MapPin } from 'lucide-react';

// Replace with your real WhatsApp number in international format (no + or spaces)
const STUDIO_WHATSAPP_NUMBER = '2348102867322';

const QUICK_TOPICS = [
  {
    id: 'sizing',
    label: 'Kids & Family Sizing Help',
    icon: Ruler,
    message:
      'Hello Arch & Kin Lagos Studio! 👋🏽 I need help picking the right size for my family.'
  },
  {
    id: 'artisan',
    label: 'Custom Aso-Oke & Artisan Inquiry',
    icon: Sparkles,
    message:
      'Hello Arch & Kin! ✨ I would like to inquire about custom Nigerian artisanal footwear (Aso-Oke / Kene Rapu / Shekudo).'
  },
  {
    id: 'exchange',
    label: 'Order Status / 7-Day Fit Exchange',
    icon: PackageCheck,
    message:
      'Hello Arch & Kin! 📦 I would like to check on my order or request a 7-Day Family Fit Exchange. My Order ID is: AK-'
  },
  {
    id: 'studio',
    label: 'Visit Lagos Flagship Studio',
    icon: MapPin,
    message:
      'Hello Arch & Kin! 📍 I would love to book a family fitting session at your Lagos studio.'
  }
];

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [customNote, setCustomNote] = useState('');

  const openWhatsApp = (text) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${STUDIO_WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  };

  const handleCustomSubmit = (e) => {
    e.preventDefault();
    if (!customNote.trim()) return;
    openWhatsApp(`Hello Arch & Kin Lagos Studio! 👋🏽 ${customNote.trim()}`);
    setCustomNote('');
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end">
      {/* Pop-up Concierge Card */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-oat border border-espresso/15 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-pine text-oat p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-terracotta flex items-center justify-center font-serif font-bold text-sm text-white">
                  A&amp;K
                </div>
                <span className="w-2.5 h-2.5 bg-emerald-400 border-2 border-pine rounded-full absolute bottom-0 right-0" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm leading-tight">
                  Lagos Studio Concierge
                </h3>
                <p className="text-[11px] text-oat/80">
                  Typically replies in under 5 mins
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full hover:bg-oat/10 transition"
              aria-label="Close Concierge"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3">
            <div className="bg-sand p-3 rounded-2xl text-xs text-espresso/85 leading-relaxed">
              Welcome to <strong>Arch &amp; Kin</strong>! 🤎 Need help measuring your child’s feet, requesting a custom Yoruba Aso-Oke pair, or arranging same-day Lagos dispatch? Tap a topic below:
            </div>

            {/* Pre-filled Topic Buttons */}
            <div className="space-y-1.5">
              {QUICK_TOPICS.map((topic) => {
                const IconComponent = topic.icon;
                return (
                  <button
                    key={topic.id}
                    onClick={() => openWhatsApp(topic.message)}
                    className="w-full bg-sand/70 hover:bg-terracotta hover:text-white text-espresso text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold transition flex items-center justify-between group border border-espresso/10"
                  >
                    <span className="flex items-center gap-2">
                      <IconComponent className="w-3.5 h-3.5 text-terracotta group-hover:text-white transition" />
                      {topic.label}
                    </span>
                    <span className="text-[10px] opacity-60 group-hover:opacity-100">→</span>
                  </button>
                );
              })}
            </div>

            {/* Custom Message Input */}
            <form onSubmit={handleCustomSubmit} className="pt-2 border-t border-espresso/10 flex gap-1.5">
              <input
                type="text"
                placeholder="Or type a custom question..."
                value={customNote}
                onChange={(e) => setCustomNote(e.target.value)}
                className="flex-1 bg-sand border border-espresso/15 rounded-full px-3.5 py-2 text-xs focus:outline-none focus:border-terracotta"
              />
              <button
                type="submit"
                className="bg-[#25D366] hover:bg-[#1ebe57] text-white p-2 rounded-full transition shadow-sm"
                title="Send on WhatsApp"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Pill Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-pine hover:bg-espresso text-oat px-4 py-3 rounded-full shadow-xl border border-oat/20 flex items-center gap-2.5 transition transform hover:scale-105"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366]" />
        </span>
        <MessageCircle className="w-4 h-4 text-[#25D366]" />
        <span className="text-xs font-bold tracking-wide">
          {isOpen ? 'Close Chat' : 'WhatsApp Studio'}
        </span>
      </button>
    </div>
  );
}