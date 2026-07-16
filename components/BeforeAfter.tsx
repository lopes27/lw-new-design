 "use client";

import Image from "next/image";
import { useState } from "react";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section
      id="before-after"
       className="ms-bg-cream px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Avant / Après
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
              La même cuisine. Une toute nouvelle impression.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Découvrez comment une cuisine peut être modernisée sans remplacer
              toutes les armoires ni passer par une rénovation complète.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="relative mx-auto aspect-[16/9] max-w-6xl overflow-hidden rounded-[2rem] border border-neutral-200 bg-neutral-200 shadow-2xl">
            <Image
              src="/images/after-kitchen.png"
              alt="Cuisine après le revêtement"
              fill
              sizes="(max-width: 768px) 100vw, 1200px"
              className="select-none object-cover object-center"
              priority
            />

            <div
              className="absolute inset-0"
              style={{
                clipPath: `inset(0 ${100 - position}% 0 0)`,
              }}
            >
              <Image
                src="/images/before-kitchen.png"
                alt="Cuisine avant le revêtement"
                fill
                sizes="(max-width: 768px) 100vw, 1200px"
                className="select-none object-cover object-center"
                priority
              />
            </div>

            <div className="absolute left-6 top-6 rounded-full bg-black/75 px-5 py-2 text-sm font-semibold text-white backdrop-blur">
              Avant
            </div>

            <div className="absolute right-6 top-6 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black">
              Après
            </div>

            <div
              className="pointer-events-none absolute top-0 h-full w-[2px] bg-white shadow-lg"
              style={{ left: `${position}%` }}
            />

            <div
              className="pointer-events-none absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white text-lg font-bold text-black shadow-2xl"
              style={{ left: `${position}%` }}
            >
              ↔
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={position}
              onChange={(event) => setPosition(Number(event.target.value))}
              aria-label="Comparer la cuisine avant et après"
              className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>

          <p className="mt-5 text-center text-sm text-neutral-500">
            Glissez pour comparer l’avant et l’après.
          </p>
        </div>
      </div>
    </section>
  );
}