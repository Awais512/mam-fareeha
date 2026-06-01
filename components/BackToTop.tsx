"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-soft text-ink flex items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 hover:scale-110 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}
