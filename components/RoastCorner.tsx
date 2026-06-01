"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Roast = {
  target: string;
  setup: string;
  comeback: string;
  tag: string;
};

const ROASTS: Roast[] = [
  {
    target: "The Grammar Criminal",
    setup: "Someone: \"Your the best, Mam 🥺\"",
    comeback: "\"You're* — I am flattered by the sentiment. Less so by the apostrophe.\"",
    tag: "Grammar 101",
  },
  {
    target: "The Bad Tweet-er",
    setup: "Someone posts a take so bad the timeline collectively blinks.",
    comeback: "\"I have read dissertations with fewer red flags than this tweet. And one of them failed.\"",
    tag: "Read the Room",
  },
  {
    target: "The Quote-Tweet Disaster",
    setup: "Someone quote-tweets her to argue.",
    comeback: "\"Thank you for the engagement. I will be using your reply as a teaching example. Anonymously. Mostly.\"",
    tag: "Ice Cold",
  },
  {
    target: "The Caps-Lock Crusader",
    setup: "Someone typing in ALL CAPS, demanding she respond.",
    comeback: "\"Calm down. Caps lock is not a personality. I am not ignoring you — I am just prioritising my peace.\"",
    tag: "Stay Calm",
  },
  {
    target: "The Self-Proclaimed Poet",
    setup: "Someone sends her amateur poetry asking for feedback.",
    comeback: "\"This is not poetry. This is a cry for help formatted into stanzas. Please drink some water and call someone.\"",
    tag: "Honest Feedback",
  },
  {
    target: "The Reply Guy",
    setup: "Someone mansplains her own field to her in her mentions.",
    comeback: "\"Sir, this is a PhD's mentions. Kindly log out and touch grass. Preferably grass that teaches you something.\"",
    tag: "Know Your Place",
  },
];

function RoastCard({ roast, index }: { roast: Roast; index: number }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <Reveal delay={((index % 3) + 1) as 1 | 2 | 3}>
      <div className="group relative h-full">
        <div className="absolute -inset-0.5 bg-gradient-to-br from-gold/20 to-purple-bright/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
        <div className="relative h-full glass rounded-2xl p-6 sm:p-7 border border-gold/15 hover-lift">
          <div className="flex items-start justify-between gap-3 mb-4">
            <span className="text-3xl">🔥</span>
            <span className="font-sans-ui text-[0.6rem] tracking-[0.25em] uppercase text-gold/60 px-2 py-1 rounded-full border border-gold/20">
              {roast.tag}
            </span>
          </div>
          <p className="font-sans-ui text-[0.7rem] tracking-[0.2em] uppercase text-cream/50 mb-1">
            Target:
          </p>
          <h3 className="font-display text-xl font-bold text-cream mb-4">
            {roast.target}
          </h3>
          <div className="rounded-xl bg-bg-deep/50 border border-gold/10 p-4 mb-4">
            <p className="font-sans-ui text-[0.6rem] tracking-[0.2em] uppercase text-gold/60 mb-1">
              Setup
            </p>
            <p className="font-body text-base text-cream/75 italic">
              {roast.setup}
            </p>
          </div>
          {!revealed ? (
            <button
              onClick={() => setRevealed(true)}
              className="w-full py-3 rounded-xl glass-gold font-sans-ui text-[0.7rem] tracking-[0.25em] uppercase text-gold hover:bg-gold/15 transition-colors"
            >
              ✦ Deliver The Roast ✦
            </button>
          ) : (
            <div className="rounded-xl bg-gradient-to-br from-purple-royal/40 to-bg-soft border border-gold/30 p-4 animate-[scaleIn_0.3s_ease]">
              <p className="font-sans-ui text-[0.6rem] tracking-[0.2em] uppercase text-gold mb-2">
                Mam:
              </p>
              <p className="font-body text-lg text-cream leading-relaxed">
                {roast.comeback}
              </p>
            </div>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function RoastCorner() {
  return (
    <section
      id="roasts"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-mid to-bg-deep" />
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 left-0 w-96 h-96 rounded-full bg-purple-royal/20 blur-[140px]"
        aria-hidden
      />

      {/* Fire emojis decoration */}
      <div
        className="absolute top-[10%] left-[8%] text-3xl opacity-30 float"
        aria-hidden
      >
        🔥
      </div>
      <div
        className="absolute top-[20%] right-[12%] text-2xl opacity-30 float-slow"
        aria-hidden
        style={{ animationDelay: "1s" }}
      >
        🔥
      </div>
      <div
        className="absolute bottom-[15%] left-[15%] text-2xl opacity-30 float"
        aria-hidden
        style={{ animationDelay: "0.5s" }}
      >
        🔥
      </div>
      <div
        className="absolute bottom-[20%] right-[10%] text-3xl opacity-30 float-slow"
        aria-hidden
        style={{ animationDelay: "1.5s" }}
      >
        🔥
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="ornament mb-4">
              <span className="divider-gold" />
              <span className="font-script text-3xl sm:text-4xl text-gradient-gold">
                The Hall Of Fame
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-2">
              The <span className="italic font-light text-gradient-gold">Roast</span> Corner
            </h2>
            <p className="mt-4 font-body italic text-lg text-cream/70 max-w-2xl mx-auto">
              Where we celebrate Mam&apos;s other PhD — the one in devastating
              one-liners. Tap to deliver each roast. (Names redacted to
              protect the guilty.)
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROASTS.map((roast, i) => (
            <RoastCard key={i} roast={roast} index={i} />
          ))}
        </div>

        <Reveal>
          <p className="mt-12 text-center font-body italic text-cream/60 text-base sm:text-lg">
            Disclaimer: any resemblance to actual timeline roasts is, of
            course, completely intentional. ✨
          </p>
        </Reveal>
      </div>
    </section>
  );
}
