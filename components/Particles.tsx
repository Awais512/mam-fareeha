type Particle = {
  id: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  symbol: string;
  hue: string;
};

const SYMBOLS = ["✦", "✧", "⋆", "❋", "✿", "❀", "✾", "✺"];
const COLORS = ["#d4af37", "#ffd700", "#c4b5fd", "#ede9fe", "#f5d68f"];

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function makeParticles(count: number): Particle[] {
  const rand = seededRandom(count * 7919 + 13);
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: rand() * 100,
    size: 8 + rand() * 18,
    delay: rand() * 20,
    duration: 18 + rand() * 22,
    drift: -40 + rand() * 80,
    symbol: SYMBOLS[Math.floor(rand() * SYMBOLS.length)],
    hue: COLORS[Math.floor(rand() * COLORS.length)],
  }));
}

export default function Particles({ count = 30 }: { count?: number }) {
  const particles = makeParticles(count);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0"
          style={{
            left: `${p.left}%`,
            color: p.hue,
            fontSize: `${p.size}px`,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
            ["--drift" as string]: `${p.drift}px`,
            textShadow: `0 0 10px ${p.hue}`,
            opacity: 0.7,
          } as React.CSSProperties}
        >
          {p.symbol}
        </span>
      ))}
    </div>
  );
}
