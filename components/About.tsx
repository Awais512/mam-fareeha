import Reveal from "./Reveal";

const CREDENTIALS = [
  { icon: "🎓", label: "Doctor of Philosophy (PhD)" },
  { icon: "📚", label: "English Literature & Language" },
  { icon: "🏛️", label: "University Professor" },
  { icon: "🔥", label: "Timeline-Certified Roaster" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-bg-deep" />
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-purple-royal/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 sm:mb-20">
            <div className="ornament mb-4">
              <span className="divider-gold" />
              <span className="font-script text-3xl sm:text-4xl text-gradient-gold">
                The Woman Behind The Title
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-2">
              About <span className="italic font-light text-gradient-gold">Dr. Fareeha</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Portrait / placeholder */}
          <Reveal delay={1}>
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Outer glow */}
              <div className="absolute -inset-6 bg-gradient-to-br from-gold/30 via-purple-bright/30 to-gold/20 rounded-full blur-3xl opacity-50" />
              {/* Decorative frame */}
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] border-2 border-gold/30 spin-slow" />
                <div
                  className="absolute -inset-6 rounded-[2.5rem] border border-purple-bright/20 spin-slow"
                  style={{ animationDirection: "reverse", animationDuration: "50s" }}
                />
                {/* Portrait placeholder */}
                <div className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden shimmer-border">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-royal via-bg-soft to-purple-royal flex items-center justify-center">
                    <div className="text-center px-6">
                      <div className="relative inline-block">
                        <div className="absolute inset-0 bg-gold/30 blur-2xl rounded-full" />
                        <svg
                          className="relative w-32 h-32 text-gold/80"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                        </svg>
                      </div>
                      <p className="mt-4 font-script text-3xl text-gradient-gold">
                        Dr. Fareeha
                      </p>
                      <p className="font-sans-ui text-[0.6rem] tracking-[0.4em] uppercase text-cream/50 mt-2">
                        Portrait Placeholder
                      </p>
                      <p className="mt-3 text-xs text-cream/40 italic max-w-[200px] mx-auto">
                        Add her photo at
                        <br />
                        <code className="text-gold/60">public/portrait.jpg</code>
                      </p>
                    </div>
                  </div>
                  {/* Gold frame overlay */}
                  <div className="absolute inset-0 ring-1 ring-inset ring-gold/30 rounded-[1.75rem] pointer-events-none" />
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-6 -right-6 glass-gold rounded-2xl px-5 py-3 hover-lift">
                <p className="font-script text-2xl text-gradient-gold leading-none">
                  Est.
                </p>
                <p className="font-display text-3xl text-cream leading-none mt-1">
                  7<sup className="text-base">th</sup> June
                </p>
              </div>
            </div>
          </Reveal>

          {/* Bio */}
          <div>
            <Reveal delay={2}>
              <p className="font-body text-xl sm:text-2xl text-cream/90 leading-relaxed italic">
                There are teachers, and then there is{" "}
                <span className="text-gradient-gold font-semibold not-italic">
                  Dr. Mam Fareeha
                </span>{" "}
                — a scholar whose brilliance is matched only by the sharpness
                of her comebacks.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <p className="mt-6 font-body text-lg sm:text-xl text-cream/75 leading-relaxed">
                Holding a <em>Doctor of Philosophy in English Literature</em>,
                she is a professor by profession and a roaster by calling. In
                the lecture hall, she is precise, demanding, and fiercely
                devoted to the craft of language. On the timeline, she is
                something else entirely — the sharpest wit on the internet,
                turning typos into public service announcements and bad takes
                into literary criticism.
              </p>
            </Reveal>

            <Reveal delay={4}>
              <p className="mt-6 font-body text-lg sm:text-xl text-cream/75 leading-relaxed">
                We found her on Twitter, and she quickly became the teacher
                none of us had asked for and all of us needed. Everyone calls
                her <em>Mam</em> — not because she is strict, but because
                she has that rare, effortless authority that makes the word
                feel like exactly the right one. She teaches grammar in
                replies. She teaches poise in roasts. And she teaches
                confidence, just by being herself in public.
              </p>
            </Reveal>

            <Reveal delay={5}>
              <p className="mt-6 font-body text-lg sm:text-xl text-cream/75 leading-relaxed">
                PhD on the wall, wit in the replies, and a timeline that
                somehow feels smarter whenever she logs on. That is
                Dr. Mam Fareeha.
              </p>
            </Reveal>

            <Reveal delay={5}>
              <div className="mt-10 grid sm:grid-cols-2 gap-3">
                {CREDENTIALS.map((c, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 glass rounded-xl px-4 py-3 hover-lift"
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <span className="font-body text-base text-cream/85">
                      {c.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
