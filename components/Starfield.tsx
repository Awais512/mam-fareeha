type Star = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
};

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function makeStars(count: number): Star[] {
  const rand = seededRandom(count * 6151 + 7);
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    top: rand() * 100,
    left: rand() * 100,
    size: 1 + rand() * 2.5,
    delay: rand() * 5,
  }));
}

export default function Starfield({ count = 80 }: { count?: number }) {
  const stars = makeStars(count);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
    >
      {stars.map((s) => (
        <span
          key={s.id}
          className="absolute rounded-full bg-white twinkle"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            animationDelay: `${s.delay}s`,
            boxShadow: "0 0 4px rgba(255,255,255,0.6)",
          }}
        />
      ))}
    </div>
  );
}
