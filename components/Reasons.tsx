"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Reason = {
  title: string;
  detail: string;
  icon: string;
};

const REASONS: Reason[] = [
  {
    icon: "🔥",
    title: "The roasts are surgical",
    detail:
      "She does not insult. She educates. One reply and suddenly you understand the difference between a sentence and a thought.",
  },
  {
    icon: "📚",
    title: "She teaches English without trying",
    detail:
      "You will open her replies to correct your grammar and close them having learned something about literature, logic, and dignity.",
  },
  {
    icon: "💅",
    title: "The composure, always",
    detail:
      "She roasts with the same calm as a professor marking a paper. No caps lock, no exclamation marks, just quiet devastation.",
  },
  {
    icon: "✍️",
    title: "Her vocabulary",
    detail:
      "Every reply is a vocabulary lesson. She uses words the rest of us have to look up, and somehow still keeps it accessible.",
  },
  {
    icon: "🎓",
    title: "The PhD hits different in a reply",
    detail:
      "When a doctorate takes you to a timeline to correct your comma usage at 2am, that is dedication to the craft.",
  },
  {
    icon: "🦉",
    title: "Wisdom without lecturing",
    detail:
      "She drops life advice in between roasts and you do not even realise you have been educated until five minutes later.",
  },
  {
    icon: "💬",
    title: "Her quote tweets are art",
    detail:
      "A whole essay in three lines. Sometimes less. Sometimes just a period. The period is the funniest part.",
  },
  {
    icon: "🪶",
    title: "The way she writes",
    detail:
      "Even the smallest reply has rhythm, voice, and intent. A reminder that English, in her hands, is still alive.",
  },
  {
    icon: "✨",
    title: "She made the timeline smarter",
    detail:
      "Ask anyone in her replies. They came in for drama, and left knowing the difference between its and it is.",
  },
];

export default function Reasons() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-bg-deep" />
      <div
        className="absolute -top-32 left-1/3 w-96 h-96 rounded-full bg-gold/10 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute -bottom-32 right-1/3 w-96 h-96 rounded-full bg-purple-royal/20 blur-[140px]"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="ornament mb-4">
              <span className="divider-gold" />
              <span className="font-script text-3xl sm:text-4xl text-gradient-gold">
                Things That Make Mam, Mam
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-2">
              Why The <span className="italic font-light text-gradient-gold">Timeline</span> Shows Up
            </h2>
            <p className="mt-4 font-body italic text-lg text-cream/70 max-w-2xl mx-auto">
              A few of the countless things that turned a PhD holder into a
              timeline legend.
            </p>
            <p className="mt-3 font-sans-ui text-xs tracking-[0.3em] uppercase text-gold/60">
              ✦ Tap each card — if you can handle it ✦
            </p>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r, i) => {
            const isFlipped = flipped.has(i);
            return (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <button
                  onClick={() => toggle(i)}
                  className="group block w-full text-left h-full"
                  aria-label={isFlipped ? "Hide reason" : "Reveal reason"}
                >
                  <div
                    className={`relative h-full rounded-2xl p-[1px] transition-all duration-500 ${
                      isFlipped
                        ? "bg-gradient-to-br from-gold to-gold-soft shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                        : "bg-gradient-to-br from-gold/30 to-purple-bright/30"
                    }`}
                  >
                    <div className="relative h-full glass-dark rounded-2xl p-7 hover-lift overflow-hidden">
                      {!isFlipped ? (
                        <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
                          <span className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                            {r.icon}
                          </span>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-gradient-gold text-center">
                            {r.title}
                          </h3>
                          <p className="mt-3 font-sans-ui text-[0.65rem] tracking-[0.3em] uppercase text-gold/50 group-hover:text-gold transition-colors">
                            Tap to read
                          </p>
                        </div>
                      ) : (
                        <div className="animate-[fadeUp_0.5s_ease]">
                          <span className="text-3xl">{r.icon}</span>
                          <h3 className="mt-3 font-display text-xl sm:text-2xl font-bold text-cream">
                            {r.title}
                          </h3>
                          <p className="mt-4 font-body text-lg text-cream/80 leading-relaxed italic">
                            &ldquo;{r.detail}&rdquo;
                          </p>
                          <p className="mt-4 font-sans-ui text-[0.65rem] tracking-[0.3em] uppercase text-gold/60">
                            Tap to close
                          </p>
                        </div>
                      )}
                      <span className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 border-gold/30" />
                      <span className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 border-gold/30" />
                      <span className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 border-gold/30" />
                      <span className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 border-gold/30" />
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
