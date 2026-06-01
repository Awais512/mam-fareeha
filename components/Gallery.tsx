"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Item = {
  label: string;
  hint: string;
  icon: string;
  span?: string;
  gradient: string;
};

const ITEMS: Item[] = [
  {
    label: "A Radiant Portrait",
    hint: "Add a favorite photo at public/gallery/portrait.jpg",
    icon: "✿",
    span: "md:col-span-2 md:row-span-2",
    gradient: "from-purple-royal via-bg-soft to-purple-royal",
  },
  {
    label: "PhD Convocation",
    hint: "public/gallery/convocation.jpg",
    icon: "🎓",
    gradient: "from-bg-soft via-purple-royal to-bg-mid",
  },
  {
    label: "In the Lecture Hall",
    hint: "public/gallery/teaching.jpg",
    icon: "📚",
    gradient: "from-purple-bright/40 via-bg-soft to-bg-soft",
  },
  {
    label: "The Library Hours",
    hint: "public/gallery/library.jpg",
    icon: "📖",
    span: "md:row-span-2",
    gradient: "from-bg-mid via-bg-soft to-purple-royal",
  },
  {
    label: "Family & Home",
    hint: "public/gallery/family.jpg",
    icon: "🏡",
    gradient: "from-gold/20 via-bg-soft to-purple-royal",
  },
  {
    label: "On Stage",
    hint: "public/gallery/conference.jpg",
    icon: "🎤",
    gradient: "from-purple-royal via-purple-bright/30 to-bg-soft",
  },
  {
    label: "A Quiet Moment",
    hint: "public/gallery/quiet.jpg",
    icon: "☕",
    gradient: "from-bg-soft via-gold/10 to-bg-mid",
  },
  {
    label: "With Her Students",
    hint: "public/gallery/students.jpg",
    icon: "💐",
    span: "md:col-span-2",
    gradient: "from-purple-royal/60 via-bg-soft to-gold/10",
  },
  {
    label: "Awards & Honors",
    hint: "public/gallery/awards.jpg",
    icon: "🏆",
    gradient: "from-gold/20 via-purple-royal to-bg-soft",
  },
];

function GalleryItem({ item, onClick }: { item: Item; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group relative placeholder-frame aspect-square ${
        item.span ?? ""
      } hover-lift overflow-hidden text-left`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-700 group-hover:scale-110`}
      />
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-30 mix-blend-overlay">
        <svg className="w-full h-full" viewBox="0 0 200 200" preserveAspectRatio="none">
          <defs>
            <radialGradient id={`g-${item.label}`} cx="50%" cy="50%">
              <stop offset="0%" stopColor="rgba(255,215,0,0.4)" />
              <stop offset="100%" stopColor="rgba(255,215,0,0)" />
            </radialGradient>
          </defs>
          <circle cx="100" cy="100" r="80" fill={`url(#g-${item.label})`} />
        </svg>
      </div>

      {/* Icon */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-transform duration-500 group-hover:-translate-y-2">
        <span className="text-5xl sm:text-6xl text-gold/70 group-hover:text-gold transition-colors drop-shadow-[0_0_12px_rgba(212,175,55,0.5)]">
          {item.icon}
        </span>
        <span className="font-display text-lg sm:text-xl text-cream text-center px-4">
          {item.label}
        </span>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-bg-deep/95 via-bg-deep/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
        <div>
          <p className="font-sans-ui text-[0.65rem] tracking-[0.2em] uppercase text-gold/80">
            {item.hint}
          </p>
          <p className="mt-1 font-body italic text-sm text-cream/80">
            Click to view
          </p>
        </div>
      </div>

      {/* Corner accents */}
      <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors" />
      <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors" />
      <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold/40 group-hover:border-gold transition-colors" />
      <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold/40 group-hover:border-gold transition-colors" />
    </button>
  );
}

function Lightbox({
  item,
  onClose,
}: {
  item: Item | null;
  onClose: () => void;
}) {
  if (!item) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-bg-deep/95 backdrop-blur-xl animate-[fadeIn_0.3s_ease]"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-8 sm:right-8 w-12 h-12 rounded-full glass-gold text-gold hover:bg-gold/20 transition-colors flex items-center justify-center"
        onClick={onClose}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
        </svg>
      </button>
      <div
        className="relative max-w-4xl w-full aspect-square rounded-3xl overflow-hidden shimmer-border animate-[scaleIn_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <span className="text-8xl text-gold mb-6 drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]">
            {item.icon}
          </span>
          <h3 className="font-display text-3xl sm:text-5xl text-cream">
            {item.label}
          </h3>
          <p className="mt-4 font-body italic text-lg text-cream/70">
            {item.hint}
          </p>
          <p className="mt-2 font-sans-ui text-xs tracking-[0.3em] uppercase text-gold/60">
            Photo coming soon
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [open, setOpen] = useState<Item | null>(null);

  return (
    <section id="gallery" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-bg-deep" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-purple-royal/15 blur-[140px]"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16">
            <div className="ornament mb-4">
              <span className="divider-gold" />
              <span className="font-script text-3xl sm:text-4xl text-gradient-gold">
                Moments Captured
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-2">
              The <span className="italic font-light text-gradient-gold">Gallery</span>
            </h2>
            <p className="mt-4 font-body italic text-lg text-cream/70 max-w-2xl mx-auto">
              A glimpse into the life of an extraordinary woman —
              professor, scholar, mentor, and the timeline&apos;s guiding
              light.
            </p>
            <p className="mt-3 font-sans-ui text-xs tracking-[0.3em] uppercase text-gold/60">
              ✦ Placeholders shown — replace with real photos ✦
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] sm:auto-rows-[200px] gap-3 sm:gap-4">
          {ITEMS.map((item, i) => (
            <Reveal key={i} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <GalleryItem item={item} onClick={() => setOpen(item)} />
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox item={open} onClose={() => setOpen(null)} />
    </section>
  );
}
