"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "countdown", label: "Countdown" },
  { id: "about", label: "About" },
  { id: "roasts", label: "Roasts" },
  { id: "journey", label: "Journey" },
  { id: "gallery", label: "Gallery" },
  { id: "letter", label: "Letter" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.4, rootMargin: "-30% 0px -30% 0px" },
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-full px-4 sm:px-6 py-2.5 transition-all duration-500 ${
            scrolled
              ? "glass-dark shadow-2xl shadow-purple-900/20"
              : "bg-transparent"
          }`}
        >
          <a
            href="#home"
            className="flex items-center gap-2 group"
            aria-label="Home"
          >
            <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full bg-gradient-to-br from-gold-soft to-gold border border-gold">
              <span className="font-display font-bold text-ink text-sm">Dr</span>
              <span className="absolute inset-0 rounded-full ring-1 ring-gold/40 group-hover:ring-2 transition-all" />
            </span>
            <span className="hidden sm:block font-script text-2xl text-gradient-gold">
              Fareeha
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`relative px-4 py-2 font-sans-ui text-xs uppercase tracking-[0.2em] transition-colors ${
                    active === l.id
                      ? "text-gold"
                      : "text-cream/70 hover:text-gold-soft"
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <span className="absolute left-1/2 -translate-x-1/2 bottom-0.5 w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_8px_var(--gold)]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#letter"
              className="hidden md:inline-flex btn-gold !py-2 !px-5 !text-[0.7rem]"
            >
              Read My Letter
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="lg:hidden w-10 h-10 inline-flex items-center justify-center rounded-full glass"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span
                  className={`h-[2px] bg-gold rounded-full transition-all ${
                    open ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`h-[2px] bg-gold rounded-full transition-all ${
                    open ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`h-[2px] bg-gold rounded-full transition-all ${
                    open ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-3 glass-dark rounded-2xl p-4 animate-[fadeIn_0.3s_ease]">
            <ul className="flex flex-col gap-1">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl font-sans-ui text-sm uppercase tracking-[0.2em] transition-colors ${
                      active === l.id
                        ? "text-gold bg-white/5"
                        : "text-cream/70 hover:text-gold-soft hover:bg-white/5"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
