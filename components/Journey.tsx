import Reveal from "./Reveal";

type Milestone = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
};

const MILESTONES: Milestone[] = [
  {
    year: "The Beginning",
    title: "A Love for Words",
    subtitle: "Where it all started",
    description:
      "A young Fareeha first fell in love with the magic of the English language — with poetry, prose, and the quiet power of a well-placed word.",
    icon: "✦",
  },
  {
    year: "The Scholar",
    title: "Mastering the Craft",
    subtitle: "Postgraduate studies",
    description:
      "She pursued her higher studies with rare devotion, earning distinction after distinction and laying the academic foundation for what was to come.",
    icon: "❀",
  },
  {
    year: "Dr. Fareeha",
    title: "A Doctorate Earned",
    subtitle: "PhD in English Literature",
    description:
      "Years of research, sleepless nights, and unwavering focus culminated in a PhD — a permanent testament to her intellect, perseverance, and her ability to wield a semicolon like a sword.",
    icon: "🎓",
  },
  {
    year: "The Professor",
    title: "Stepping Into The Lecture Hall",
    subtitle: "University faculty",
    description:
      "She joined the university as a lecturer, where she became known not just for her brilliance, but for the way she could silence a noisy classroom with a single raised eyebrow.",
    icon: "🏛️",
  },
  {
    year: "The Timeline",
    title: "Logging On",
    subtitle: "Twitter enters the chat",
    description:
      "She joined Twitter — and the timeline has never recovered. Suddenly, the same Mam who taught university students was teaching the entire internet, one ruthless reply at a time.",
    icon: "🐦",
  },
  {
    year: "Mam",
    title: "Becoming The Internet's Favourite",
    subtitle: "A title well-earned",
    description:
      "Today, \"Mam\" is a name everyone recognises. Not just her students. Not just her colleagues. Everyone on the timeline. A title she earned not by asking for it, but by being too iconic to call anything else.",
    icon: "✿",
  },
  {
    year: "Today & Always",
    title: "The Legend Herself",
    subtitle: "7th June — Her Day",
    description:
      "Today, the timeline celebrates its sharpest, wittiest, most well-read member. PhD on the wall, wit in the replies, and a fan club she never asked for. That is Dr. Mam Fareeha.",
    icon: "🎂",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-bg-deep via-bg-mid to-bg-deep" />
      <div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-purple-royal/20 blur-[120px]"
        aria-hidden
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center mb-16 sm:mb-24">
            <div className="ornament mb-4">
              <span className="divider-gold" />
              <span className="font-script text-3xl sm:text-4xl text-gradient-gold">
                Her Journey
              </span>
              <span className="divider-gold" />
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-cream mt-2">
              A Life of <span className="italic font-light text-gradient-gold">Grace & Purpose</span>
            </h2>
            <p className="mt-4 font-body italic text-lg sm:text-xl text-cream/70 max-w-2xl mx-auto">
              The chapters of an extraordinary life — written in dedication,
              wit, and brilliance.
            </p>
          </div>
        </Reveal>

        <div className="relative">
          <div className="timeline-line hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <Reveal key={i} delay={1}>
                  <div
                    className={`relative md:grid md:grid-cols-2 md:gap-12 items-center`}
                  >
                    {/* Dot for desktop */}
                    <div
                      className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-soft items-center justify-center text-ink text-xl shadow-[0_0_30px_rgba(212,175,55,0.5)] z-10"
                      aria-hidden
                    >
                      {m.icon}
                    </div>

                    {/* Mobile dot */}
                    <div
                      className="md:hidden absolute left-6 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold-soft flex items-center justify-center text-ink shadow-[0_0_20px_rgba(212,175,55,0.4)] z-10"
                      aria-hidden
                    >
                      <span className="text-base">{m.icon}</span>
                    </div>

                    {/* Card */}
                    <div
                      className={`pl-16 md:pl-0 ${
                        isLeft ? "md:pr-12 md:text-right" : "md:col-start-2 md:pl-12"
                      }`}
                    >
                      <div
                        className={`shimmer-border p-6 sm:p-8 hover-lift ${
                          isLeft ? "md:text-right" : ""
                        }`}
                      >
                        <p className="font-script text-3xl sm:text-4xl text-gradient-gold">
                          {m.year}
                        </p>
                        <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-cream">
                          {m.title}
                        </h3>
                        <p className="mt-1 font-sans-ui text-xs tracking-[0.3em] uppercase text-gold/70">
                          {m.subtitle}
                        </p>
                        <p className="mt-4 font-body text-lg text-cream/80 leading-relaxed">
                          {m.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
