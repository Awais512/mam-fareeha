"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "./Reveal";

type Time = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isBirthday: boolean;
  isPassed: boolean;
};

const EMPTY_TIME: Time = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  isBirthday: false,
  isPassed: false,
};

function getNextBirthday(): { date: Date; isBirthday: boolean; isPassed: boolean } {
  const now = new Date();
  const year = now.getFullYear();
  const thisYearBday = new Date(year, 5, 7, 0, 0, 0);
  const isBirthday =
    now.getFullYear() === thisYearBday.getFullYear() &&
    now.getMonth() === thisYearBday.getMonth() &&
    now.getDate() === thisYearBday.getDate();
  let target = thisYearBday;
  let isPassed = false;
  if (now > thisYearBday) {
    target = new Date(year + 1, 5, 7, 0, 0, 0);
    isPassed = true;
  }
  return { date: target, isBirthday, isPassed };
}

function diff(target: Date): Time {
  const now = new Date();
  let diffMs = target.getTime() - now.getTime();
  if (diffMs < 0) diffMs = 0;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diffMs / (1000 * 60)) % 60);
  const seconds = Math.floor((diffMs / 1000) % 60);
  return { days, hours, minutes, seconds, isBirthday: false, isPassed: false };
}

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

const UNITS: { key: keyof Omit<Time, "isBirthday" | "isPassed">; label: string }[] =
  [
    { key: "days", label: "Days" },
    { key: "hours", label: "Hours" },
    { key: "minutes", label: "Minutes" },
    { key: "seconds", label: "Seconds" },
  ];

function FlipDigit({ value, label }: { value: number; label: string }) {
  return (
    <div className="group relative">
      <div className="relative w-full aspect-square max-w-[160px] mx-auto">
        <div className="absolute -inset-2 bg-gradient-to-br from-gold/30 to-purple-bright/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
        <div className="relative h-full rounded-2xl glass-dark border border-gold/30 overflow-hidden flex items-center justify-center transition-transform group-hover:-translate-y-1">
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          <div className="absolute inset-x-2 top-1/2 h-px bg-gold/20" />
          <span
            key={value}
            className="digit-flip font-display font-bold text-5xl sm:text-6xl md:text-7xl text-gradient-gold tabular-nums"
          >
            {pad(value)}
          </span>
        </div>
        <span className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-gold rounded-tl-lg" />
        <span className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-gold rounded-tr-lg" />
        <span className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-gold rounded-bl-lg" />
        <span className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-gold rounded-br-lg" />
      </div>
      <p className="mt-4 font-sans-ui text-[0.7rem] sm:text-xs tracking-[0.3em] uppercase text-gold/70 text-center">
        {label}
      </p>
    </div>
  );
}

export default function Countdown() {
  const target = useMemo(() => getNextBirthday(), []);
  const [time, setTime] = useState<Time | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTime(diff(target.date));
    const interval = setInterval(() => {
      setTime(diff(target.date));
    }, 1000);
    return () => clearInterval(interval);
  }, [target.date]);

  const dateLabel = target.date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const current = time ?? EMPTY_TIME;

  return (
    <section
      id="countdown"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-mid to-bg-deep" />
      <div
        className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-purple-royal/20 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <div className="ornament mb-4">
              <span className="divider-gold" />
              <span className="font-script text-3xl sm:text-4xl text-gradient-gold">
                Save The Date
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-2">
              The <span className="italic font-light text-gradient-gold">Countdown</span> to Her Day
            </h2>
            <p className="mt-4 font-body italic text-lg sm:text-xl text-cream/70">
              {dateLabel}
            </p>
            {target.isPassed && !target.isBirthday && (
              <p className="mt-2 font-sans-ui text-xs tracking-[0.3em] uppercase text-gold/60">
                ✦ Counting down to next year&apos;s celebration ✦
              </p>
            )}
          </div>
        </Reveal>

        {target.isBirthday ? (
          <Reveal delay={2}>
            <div className="mt-16 text-center">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-purple-bright to-gold blur-3xl opacity-60" />
                <h3 className="relative font-script text-7xl sm:text-8xl md:text-9xl text-gradient-gold glow-gold">
                  Happy Birthday!
                </h3>
              </div>
              <p className="mt-6 font-display text-2xl sm:text-3xl text-cream">
                Today, the world celebrates an extraordinary soul.
              </p>
              <p className="mt-2 font-body italic text-lg text-cream/70">
                Dr. Mam Fareeha — wishing you a day as beautiful as your heart.
              </p>
            </div>
          </Reveal>
        ) : (
          <Reveal delay={2}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
              {UNITS.map((u) => (
                <FlipDigit
                  key={u.key}
                  value={time ? current[u.key] : 0}
                  label={u.label}
                />
              ))}
            </div>
          </Reveal>
        )}

        <Reveal delay={3}>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 glass-gold px-6 py-3 rounded-full">
              <span className="text-2xl">🎂</span>
              <span className="font-script text-2xl sm:text-3xl text-gradient-gold">
                7<sup className="text-base">th</sup> of June
              </span>
              <span className="text-2xl">🎓</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
