"use client";

import { useRef, type ReactNode, type PointerEvent } from "react";

type MagneticProps = {
  children: ReactNode;
  strength?: number;
  className?: string;
};

/**
 * Effet magnétique : l'élément est légèrement attiré par le curseur.
 * Actif uniquement sur les appareils avec pointeur précis (souris),
 * jamais sur écran tactile, et respecte prefers-reduced-motion.
 */
export default function Magnetic({
  children,
  strength = 0.28,
  className = "",
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);

  const canAnimate = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    const node = ref.current;
    if (!node || !canAnimate()) return;

    const rect = node.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);

    node.style.transform = `translate3d(${x * strength}px, ${
      y * strength
    }px, 0)`;
  };

  const onLeave = () => {
    const node = ref.current;
    if (!node) return;
    node.style.transform = "translate3d(0, 0, 0)";
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={`ms-magnetic ${className}`.trim()}
    >
      {children}
    </div>
  );
}
