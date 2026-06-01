"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <section id="letter" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-mid to-bg-deep" />
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[140px]"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-royal/20 blur-[140px]"
        aria-hidden
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-12">
            <div className="ornament mb-4">
              <span className="divider-gold" />
              <span className="font-script text-3xl sm:text-4xl text-gradient-gold">
                A Note From The Timeline
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-2">
              A <span className="italic font-light text-gradient-gold">Letter</span> For You, Mam
            </h2>
            <p className="mt-4 font-body italic text-lg text-cream/70">
              Words I have carried since the first time you corrected my grammar in public.
            </p>
          </div>
        </Reveal>

        {!opened ? (
          <Reveal delay={1}>
            <div className="flex flex-col items-center">
              <button
                onClick={() => setOpened(true)}
                className="group relative w-full max-w-md mx-auto"
                aria-label="Open the letter"
              >
                <div className="absolute -inset-6 bg-gradient-to-br from-gold/30 to-purple-bright/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity" />
                <div className="relative aspect-[1.5/1] rounded-2xl glass-gold border-2 border-gold/40 overflow-hidden transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02]">
                  <div
                    className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-bg-soft to-bg-mid"
                    style={{
                      clipPath: "polygon(0 0, 50% 70%, 100% 0)",
                    }}
                  />
                  <div className="absolute top-[42%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gold-bright via-gold to-gold-soft flex items-center justify-center shadow-[0_0_40px_rgba(212,175,55,0.6)] group-hover:scale-110 transition-transform">
                      <span className="absolute inset-1 rounded-full border-2 border-ink/30" />
                      <span className="font-display font-bold text-ink text-2xl">
                        F
                      </span>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 text-center">
                    <p className="font-script text-3xl text-gradient-gold">
                      To: Mam, with respect
                    </p>
                    <p className="mt-1 font-sans-ui text-[0.65rem] tracking-[0.3em] uppercase text-gold/60">
                      Tap to open
                    </p>
                  </div>
                  <span className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold/60" />
                  <span className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold/60" />
                  <span className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold/60" />
                  <span className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold/60" />
                </div>
                <p className="mt-6 text-center font-sans-ui text-xs tracking-[0.3em] uppercase text-gold/60 bounce-soft">
                  ✦ Open My Letter ✦
                </p>
              </button>
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-purple-bright/20 rounded-3xl blur-3xl" />
              <article
                className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden animate-[scaleIn_0.8s_cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  background:
                    "linear-gradient(180deg, #fff8e7 0%, #fdf6e3 50%, #f5e6c8 100%)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(180,140,80,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(180,140,80,0.15) 0%, transparent 50%)",
                  }}
                />

                <div className="relative p-8 sm:p-12 md:p-16 text-ink">
                  <div className="flex items-center justify-center gap-3 text-gold mb-8">
                    <span className="h-px w-12 bg-gold/40" />
                    <span className="text-2xl">❀</span>
                    <span className="h-px w-12 bg-gold/40" />
                  </div>

                  <p className="font-script text-3xl sm:text-4xl text-purple-royal mb-2">
                    Dear Mam,
                  </p>
                  <p className="font-sans-ui text-[0.7rem] tracking-[0.3em] uppercase text-ink/50 mb-10">
                    From a stranger who became a regular on your timeline
                  </p>

                  <div
                    className="space-y-6 font-body text-lg sm:text-xl leading-relaxed text-ink/90"
                    style={{ fontFamily: "var(--font-cormorant), Georgia, serif" }}
                  >
                    <p className="first-letter:font-display first-letter:text-6xl first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] first-letter:text-purple-royal">
                      I never had you as a professor, but I have learned
                      more from your tweets than from most lectures I sat
                      through. You taught me that a semicolon is not a
                      fashion accessory. That &ldquo;your&rdquo; and
                      &ldquo;you&apos;re&rdquo; are not the same word. That
                      the best reply is often just a period — placed with
                      terrifying precision.
                    </p>

                    <p>
                      We have never met. We have never spoken. And yet,
                      somehow, you are one of the most influential teachers
                      in my life. Every time I open Twitter, I read a little
                      more carefully, type a little more deliberately, and
                      pause before sending a reply. That is your doing.
                    </p>

                    <p>
                      The timeline is full of voices, Mam. Loud ones, clever
                      ones, angry ones, and bored ones. And then there is
                      yours — calm, precise, devastating, and always, always
                      better dressed in language than the rest of us. You
                      make English feel less like a subject and more like a
                      superpower.
                    </p>

                    <p className="font-script text-2xl sm:text-3xl text-purple-royal italic text-center my-8">
                      &ldquo;You made the internet a smarter place — one
                      period at a time.&rdquo;
                    </p>

                    <p>
                      I know you are going to read this and find at least
                      three things wrong with my sentences. I know there is
                      a comma out of place, a phrase that could be tighter,
                      a word I have used too casually. And honestly, Mam? I
                      am counting on it. Because getting it right matters to
                      me now in a way it never did before you.
                    </p>

                    <p>
                      So on your birthday, I did not get you flowers. I did
                      not get you a gift card. I built you a whole website
                      instead — purple and gold, with animations I definitely
                      over-engineered, and a letter I have re-written
                      approximately eleven times because I knew you would
                      judge every comma.
                    </p>

                    <p className="font-script text-3xl sm:text-4xl text-gradient-gold text-center my-10">
                      Happy Birthday, Mam.
                    </p>

                    <p>
                      May this year bring you the kind of joy you have
                      quietly given to every stranger on the timeline. May
                      your roasts stay sharp, your grammar stay immaculate,
                      and your tweets keep landing like little literary
                      grenades.
                    </p>

                    <p>
                      The timeline is better with you on it. We all are.
                    </p>
                  </div>

                  <div className="mt-12 pt-8 border-t border-ink/15 text-right">
                    <p className="font-script text-4xl sm:text-5xl text-purple-royal">
                      With respect,
                    </p>
                    <p className="mt-2 font-display italic text-xl text-ink/70">
                      — a regular on your timeline
                    </p>
                    <p className="mt-4 font-sans-ui text-[0.7rem] tracking-[0.3em] uppercase text-gold">
                      7<sup className="text-[0.5rem]">th</sup> June
                    </p>
                  </div>

                  <div className="flex items-center justify-center gap-3 text-gold mt-12">
                    <span className="h-px w-12 bg-gold/40" />
                    <span className="text-2xl">✦</span>
                    <span className="h-px w-12 bg-gold/40" />
                  </div>
                </div>
              </article>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
