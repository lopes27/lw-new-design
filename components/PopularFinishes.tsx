"use client";

import { useState } from "react";

type FinishItem = {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  swatch: string;
};

const finishes: FinishItem[] = [
  {
    id: "bois-naturel",
    number: "01",
    name: "Bois naturel",
    subtitle: "Chaleureux et intemporel",
    description:
      "Une finition bois chaleureuse qui apporte douceur, texture et élégance à la cuisine.",
    image: "/images/popular-finishes/bois-naturel.jpg",
    swatch:
      "linear-gradient(90deg, #8a5d3b 0%, #b47f55 22%, #7c4f32 48%, #aa744d 72%, #6f452d 100%)",
  },
  {
    id: "pierre-marbre",
    number: "02",
    name: "Pierre et marbre",
    subtitle: "Clair et raffiné",
    description:
      "Un rendu lumineux inspiré de la pierre naturelle et du marbre pour une cuisine contemporaine.",
    image: "/images/popular-finishes/pierre-marbre.jpg",
    swatch:
      "linear-gradient(135deg, #f5f2ea 0%, #ded8ce 40%, #ffffff 52%, #c9c2b7 56%, #f4f1eb 100%)",
  },
  {
    id: "noir-mat",
    number: "03",
    name: "Noir mat",
    subtitle: "Sobre et architectural",
    description:
      "Un noir profond et velouté qui donne du caractère aux armoires et aux surfaces.",
    image: "/images/popular-finishes/noir-mat.jpg",
    swatch:
      "linear-gradient(135deg, #161716 0%, #2a2b29 45%, #111211 100%)",
  },
  {
    id: "beton-clair",
    number: "04",
    name: "Béton clair",
    subtitle: "Minéral et moderne",
    description:
      "Une texture minérale subtile, idéale pour créer un espace épuré et architectural.",
    image: "/images/popular-finishes/beton-clair.jpg",
    swatch:
      "linear-gradient(135deg, #bebcb7 0%, #e3e1dc 38%, #aaa8a2 68%, #d4d2cd 100%)",
  },
  {
    id: "cachemire-greige",
    number: "05",
    name: "Cachemire et greige",
    subtitle: "Doux et lumineux",
    description:
      "Une teinte neutre et chaleureuse qui s’intègre facilement aux cuisines modernes.",
    image: "/images/popular-finishes/cachemire-greige.jpg",
    swatch:
      "linear-gradient(135deg, #c9b9a5 0%, #e0d5c7 48%, #b9a791 100%)",
  },
  {
    id: "haute-brillance",
    number: "06",
    name: "Haute brillance",
    subtitle: "Profond et sophistiqué",
    description:
      "Une surface lustrée qui reflète la lumière et crée une ambiance spectaculaire.",
    image: "/images/popular-finishes/haute-brillance.png",
    swatch:
      "linear-gradient(135deg, #202321 0%, #474b48 35%, #111311 55%, #676c68 100%)",
  },
];

function DoorSwatch({
  item,
  active,
  onClick,
}: {
  item: FinishItem;
  active: boolean;
  onClick: () => void;
}) {
  const duration = "3000ms";

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      aria-label={`Voir la finition ${item.name}`}
      className="group text-center"
    >
      <span
        className={`relative mx-auto block aspect-square w-full max-w-[150px] overflow-hidden rounded-full border transition ${
          active
            ? "scale-[1.04] border-white shadow-[0_0_0_6px_rgba(255,255,255,0.12)]"
            : "border-white/25 opacity-80 hover:scale-[1.03] hover:opacity-100"
        }`}
        style={{ perspective: "900px", transitionDuration: duration }}
      >
        <img
          src={item.image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        <span
          className="absolute inset-y-0 left-0 w-1/2 origin-left border-r border-black/35"
          style={{
            background: item.swatch,
            transitionProperty: "transform, opacity",
            transitionDuration: duration,
            transitionTimingFunction: "cubic-bezier(.2,.8,.2,1)",
            transform: active
              ? "translateX(-102%) rotateY(-45deg)"
              : "translateX(0) rotateY(0)",
          }}
        />

        <span
          className="absolute inset-y-0 right-0 w-1/2 origin-right border-l border-black/35"
          style={{
            background: item.swatch,
            transitionProperty: "transform, opacity",
            transitionDuration: duration,
            transitionTimingFunction: "cubic-bezier(.2,.8,.2,1)",
            transform: active
              ? "translateX(102%) rotateY(45deg)"
              : "translateX(0) rotateY(0)",
          }}
        />

        <span
          className="absolute left-[43%] top-1/2 z-10 h-[34%] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-sm"
          style={{
            opacity: active ? 0 : 1,
            transitionDuration: duration,
          }}
        />
        <span
          className="absolute left-[57%] top-1/2 z-10 h-[34%] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-sm"
          style={{
            opacity: active ? 0 : 1,
            transitionDuration: duration,
          }}
        />

        <span
          className={`absolute bottom-3 left-1/2 z-20 flex h-8 min-w-8 -translate-x-1/2 items-center justify-center rounded-full border px-2 text-[10px] font-semibold backdrop-blur-md ${
            active
              ? "border-white bg-white text-black"
              : "border-white/30 bg-black/35 text-white"
          }`}
        >
          {item.number}
        </span>
      </span>

      <span className="mt-4 block">
        <span
          className={`block text-sm font-medium ${
            active ? "text-white" : "text-white/65"
          }`}
        >
          {item.name}
        </span>
        <span className="mt-1 block text-xs text-white/35">
          {item.subtitle}
        </span>
      </span>
    </button>
  );
}

export default function PopularFinishes() {
  const [activeId, setActiveId] = useState(finishes[0].id);

  const active =
    finishes.find((finish) => finish.id === activeId) ?? finishes[0];

  return (
    <section
      id="popular-finishes"
      className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Sélection Maison Surface
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.04] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Explorez nos finis les plus populaires.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-600 lg:justify-self-end">
            Cliquez sur une finition : les portes s’ouvrent et révèlent une
            cuisine utilisant la couleur sélectionnée.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-950 shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
          <div className="grid lg:grid-cols-[420px_1fr]">
            <div className="order-2 border-t border-white/10 p-6 sm:p-8 lg:order-1 lg:border-r lg:border-t-0 lg:p-10">
              <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-2">
                {finishes.map((finish) => (
                  <DoorSwatch
                    key={finish.id}
                    item={finish}
                    active={finish.id === active.id}
                    onClick={() => setActiveId(finish.id)}
                  />
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative min-h-[560px] overflow-hidden sm:min-h-[680px] lg:h-full">
                <img
                  key={active.id}
                  src={active.image}
                  alt={`Cuisine avec la finition ${active.name}`}
                  className="kitchen-reveal absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5" />

                <div
                  key={`${active.id}-content`}
                 className="process-image-content absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12">
                
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/55">
                    {active.subtitle}
                  </p>

                  <h3 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl">
                    {active.name}
                  </h3>

                  <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                    {active.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-neutral-200"
                  >
                    Demander cette finition
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .kitchen-reveal {
          animation: kitchenReveal 3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .content-reveal {
          animation: contentReveal 3s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes kitchenReveal {
          from {
            opacity: 0;
            transform: scale(1.08);
            filter: blur(8px);
          }

          to {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes contentReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kitchen-reveal,
          .content-reveal {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
