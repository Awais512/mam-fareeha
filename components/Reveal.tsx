"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  once?: boolean;
};

export default function Reveal({
  children,
  delay = 0,
  as: Tag = "div",
  className = "",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [once]);

  const Component = Tag as React.ElementType;
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : "";
  return (
    <Component
      ref={ref as React.RefObject<HTMLElement>}
      className={`reveal ${shown ? "in-view" : ""} ${delayClass} ${className}`}
    >
      {children}
    </Component>
  );
}
