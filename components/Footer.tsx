import Reveal from "./Reveal";

export default function Footer() {
  return (
    <footer className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-mid to-bg-deep" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/10 blur-[100px]"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Reveal>
          <div className="ornament mb-6">
            <span className="divider-gold" />
            <span className="text-gold text-3xl">❀</span>
            <span className="divider-gold" />
          </div>
        </Reveal>

        <Reveal delay={1}>
          <p className="font-script text-5xl sm:text-6xl md:text-7xl text-gradient-gold glow-gold leading-none">
            Happy Birthday, Mam
          </p>
        </Reveal>

        <Reveal delay={2}>
          <p className="mt-8 font-display text-2xl sm:text-3xl text-cream italic font-light">
            From a regular on your timeline.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <p className="mt-6 max-w-2xl mx-auto font-body text-lg sm:text-xl text-cream/80 italic leading-relaxed">
            This small corner of the internet is yours, Mam. Built with
            too many late nights, an over-engineered amount of CSS, and a
            genuine amount of respect. It is not much — but it is, in
            every way that matters, entirely <em>for you</em>.
          </p>
        </Reveal>

        <Reveal delay={4}>
          <div className="mt-12 inline-flex flex-col items-center gap-2">
            <p className="font-sans-ui text-[0.7rem] tracking-[0.3em] uppercase text-gold/60">
              ✦ Today, the 7<sup className="text-[0.5rem]">th</sup> of June, belongs to ✦
            </p>
            <p className="font-display text-2xl sm:text-3xl font-bold text-cream">
              Dr. Mam Fareeha
            </p>
            <p className="font-script text-3xl text-gradient-gold mt-2">
              The timeline&apos;s sharpest wit.
            </p>
          </div>
        </Reveal>

        <Reveal delay={5}>
          <div className="mt-16 pt-8 border-t border-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-sans-ui text-xs tracking-[0.3em] uppercase text-cream/50">
              © {new Date().getFullYear()} For Mam, with respect
            </p>
            <p className="font-script text-2xl text-gradient-gold">
              A grateful lurker
            </p>
            <p className="font-sans-ui text-xs tracking-[0.3em] uppercase text-cream/50">
              PhD · Professor · Legend
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
