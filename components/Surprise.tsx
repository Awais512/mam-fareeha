"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Confetti = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  color: string;
  rotation: number;
  width: number;
  height: number;
};

const COLORS = ["#d4af37", "#ffd700", "#c4b5fd", "#ede9fe", "#f5d68f", "#8b5cf6"];

function makeConfetti(count: number, baseId: number): Confetti[] {
  return Array.from({ length: count }, (_, i) => ({
    id: baseId + i,
    left: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 4,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    rotation: Math.random() * 360,
    width: 6 + Math.random() * 8,
    height: 10 + Math.random() * 10,
  }));
}

function ConfettiPiece({ c }: { c: Confetti }) {
  return (
    <span
      className="confetti-piece"
      style={{
        left: `${c.left}%`,
        backgroundColor: c.color,
        width: `${c.width}px`,
        height: `${c.height}px`,
        animationDuration: `${c.duration}s`,
        animationDelay: `${c.delay}s`,
        transform: `rotate(${c.rotation}deg)`,
        boxShadow: `0 0 6px ${c.color}`,
      }}
    />
  );
}

export default function Surprise() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  const [candlesBlown, setCandlesBlown] = useState(false);

  const handleBlow = () => {
    setCandlesBlown(true);
    setConfetti(makeConfetti(60, Date.now()));
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-mid via-bg-deep to-bg-mid" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gold/10 blur-[160px]"
        aria-hidden
      />

      {confetti.map((c) => (
        <ConfettiPiece key={c.id} c={c} />
      ))}

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <p className="font-script text-3xl sm:text-4xl text-gradient-gold">
            And finally...
          </p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream">
            Make a <span className="italic font-light text-gradient-gold">Wish</span>, Mam
          </h2>
          <p className="mt-4 font-body italic text-lg text-cream/70 max-w-2xl mx-auto">
            Close your eyes, Mam. Make a wish. And when you are ready —
            blow out the candles.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-16 relative inline-block">
            {/* Cake */}
            <div className="relative">
              {/* Cake layers */}
              <div className="relative w-64 h-44 sm:w-80 sm:h-52 mx-auto">
                {/* Top tier */}
                <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-16 sm:w-40 sm:h-20 rounded-t-full bg-gradient-to-b from-gold-soft via-gold to-gold border-2 border-gold-bright/60 shadow-[0_0_30px_rgba(212,175,55,0.4)]" />
                {/* Middle tier */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-48 h-16 sm:w-60 sm:h-20 bg-gradient-to-b from-purple-light to-purple-royal rounded-md border-2 border-purple-bright/40" />
                {/* Bottom tier */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-12 sm:w-80 sm:h-14 bg-gradient-to-b from-bg-soft to-bg-mid rounded-md border-2 border-gold/30" />
                {/* Decorative dots on top tier */}
                <div className="absolute bottom-[5.5rem] left-1/2 -translate-x-1/2 flex gap-2">
                  <span className="w-2 h-2 rounded-full bg-gold-bright" />
                  <span className="w-2 h-2 rounded-full bg-gold-bright" />
                  <span className="w-2 h-2 rounded-full bg-gold-bright" />
                </div>
                {/* "Dr" label on cake */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 font-display text-xl sm:text-2xl font-bold text-gradient-gold">
                  Dr. Fareeha
                </div>
              </div>

              {/* Candles */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-6 sm:gap-8">
                {[0, 1, 2].map((i) => (
                  <div key={i} className="relative">
                    {/* Flame */}
                    {!candlesBlown && (
                      <div
                        className="absolute -top-6 left-1/2 -translate-x-1/2 w-3 h-6 rounded-full bg-gradient-to-b from-gold-bright via-gold to-orange-500 animate-[wave_1.5s_ease-in-out_infinite]"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1.5 h-3 rounded-full bg-white/80" />
                      </div>
                    )}
                    {candlesBlown && (
                      <div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 text-2xl"
                        style={{ animation: "fadeIn 0.3s ease" }}
                      >
                        💨
                      </div>
                    )}
                    {/* Candle */}
                    <div className="w-2 h-10 bg-gradient-to-b from-gold-soft via-cream to-gold-soft rounded-sm border border-gold/50" />
                  </div>
                ))}
              </div>
            </div>

            {/* Glow under cake */}
            <div className="absolute -inset-8 bg-gold/20 blur-3xl -z-10" />
          </div>
        </Reveal>

        <Reveal delay={2}>
          <div className="mt-12">
            {!candlesBlown ? (
              <button
                onClick={handleBlow}
                className="btn-gold"
              >
                <span>Blow Out the Candles</span>
                <span className="text-lg">💨</span>
              </button>
            ) : (
              <div className="animate-[scaleIn_0.5s_ease]">
                <p className="font-script text-5xl sm:text-6xl md:text-7xl text-gradient-gold glow-gold">
                  Wish Come True
                </p>
                <p className="mt-6 font-display text-2xl sm:text-3xl text-cream">
                  May every wish your heart made today come true.
                </p>
                <p className="mt-2 font-body italic text-lg text-cream/70">
                  You deserve the world, Mam. Every star of it.
                </p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
