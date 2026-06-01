export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-12"
    >
      <div className="absolute inset-0 bg-aurora opacity-90" />
      <div className="absolute inset-0 bg-radial-glow" />

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-gold/10 spin-slow"
        aria-hidden
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-purple-bright/10 spin-slow"
        style={{ animationDirection: "reverse", animationDuration: "60s" }}
        aria-hidden
      />

      <div
        className="absolute top-[18%] left-[10%] text-gold/40 text-5xl float"
        aria-hidden
        style={{ animationDelay: "0s" }}
      >
        ❀
      </div>
      <div
        className="absolute top-[28%] right-[12%] text-purple-light/30 text-6xl float-slow"
        aria-hidden
        style={{ animationDelay: "1s" }}
      >
        ✦
      </div>
      <div
        className="absolute bottom-[20%] left-[15%] text-gold/30 text-4xl float"
        aria-hidden
        style={{ animationDelay: "2s" }}
      >
        ✿
      </div>
      <div
        className="absolute bottom-[25%] right-[8%] text-purple-light/40 text-5xl float-slow"
        aria-hidden
        style={{ animationDelay: "1.5s" }}
      >
        ❋
      </div>
      <div
        className="absolute top-[40%] right-[25%] text-gold/30 text-3xl twinkle"
        aria-hidden
      >
        ✧
      </div>
      <div
        className="absolute top-[55%] left-[8%] text-purple-light/30 text-3xl twinkle"
        aria-hidden
        style={{ animationDelay: "1s" }}
      >
        ✺
      </div>

      <svg
        className="absolute top-20 right-6 w-32 h-32 opacity-20 text-gold hidden md:block float-slow"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden
      >
        <path d="M85 15 C 70 25, 50 45, 30 75 L 25 80 L 30 70 C 50 45, 75 25, 85 15 Z M 28 75 L 18 90 L 22 82 Z" />
      </svg>

      <svg
        className="absolute bottom-12 left-6 w-28 h-28 opacity-20 text-purple-light hidden md:block float"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden
      >
        <path d="M10 20 L 50 25 L 50 85 L 10 80 Z" />
        <path d="M50 25 L 90 20 L 90 80 L 50 85" />
        <path d="M10 20 L 50 15 L 90 20" />
        <path d="M50 15 L 50 85" strokeDasharray="2 3" />
        <path d="M20 35 L 40 38 M 20 45 L 40 48 M 20 55 L 40 58" />
        <path d="M60 38 L 80 35 M 60 48 L 80 45 M 60 58 L 80 55" />
      </svg>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="hero-fade-up">
          <div className="ornament mb-6">
            <span className="divider-gold" />
            <span className="font-script text-3xl sm:text-4xl text-gradient-gold">
              A Tribute To The Legend
            </span>
            <span className="divider-gold" />
          </div>
        </div>

        <h1 className="font-display font-black tracking-tight leading-[0.95]">
          <span className="hero-fade-up block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-cream">
            Dr. <span className="italic font-light">Mam</span>
          </span>
          <span
            className="hero-fade-up-delay block mt-2 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] text-gradient-gold glow-gold"
          >
            Fareeha
          </span>
        </h1>

        <div className="hero-fade-up-delay-2 mt-8 sm:mt-10">
          <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-5">
            <span className="glass-gold px-4 py-2 rounded-full font-sans-ui text-xs sm:text-sm tracking-[0.3em] uppercase text-gold">
              PhD
            </span>
            <span className="text-gold/40 text-xl">◆</span>
            <span className="font-body italic text-xl sm:text-2xl md:text-3xl text-cream/90">
              English Literature Professor
            </span>
            <span className="text-gold/40 text-xl">◆</span>
            <span className="glass-gold px-4 py-2 rounded-full font-sans-ui text-xs sm:text-sm tracking-[0.3em] uppercase text-gold">
              Certified Roaster
            </span>
          </div>
        </div>

        <p className="hero-fade-up-delay-3 mt-10 sm:mt-12 max-w-2xl mx-auto font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-cream/80 italic">
          &ldquo;Some teachers teach from a classroom. Dr. Mam Fareeha teaches
          from a timeline — and roasts you into a better version of
          yourself.&rdquo;
        </p>
        <p className="hero-fade-up-delay-3 mt-3 font-sans-ui text-xs tracking-[0.3em] uppercase text-gold/70">
          — A grateful student from the timeline
        </p>

        <div className="hero-fade-up-delay-3 mt-12 flex flex-wrap items-center justify-center gap-4">
          <a href="#countdown" className="btn-gold">
            <span>Countdown to Her Day</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" />
            </svg>
          </a>
          <a href="#letter" className="btn-outline-gold">
            Read My Letter
          </a>
        </div>

        <div className="hero-fade-up-delay-3 mt-16 flex flex-col items-center gap-2">
          <span className="font-sans-ui text-[0.65rem] tracking-[0.4em] uppercase text-gold/50">
            Happy 7<sup className="text-[0.5rem]">th</sup> June, Mam
          </span>
          <div className="w-[2px] h-12 bg-gradient-to-b from-gold to-transparent bounce-soft" />
        </div>
      </div>
    </section>
  );
}
