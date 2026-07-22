"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent as ReactTouchEvent,
} from "react";

const AUTOPLAY_MS = 6500;

const steps = [
  {
    number: "01",
    title: "Évaluation",
    short: "Photos et dimensions",
    description:
      "Envoyez-nous quelques photos de votre cuisine. Nous analysons l’espace, les surfaces et les dimensions pour préparer une première évaluation gratuite.",
    image: "/images/process/process-evaluation.png",
  },
  {
    number: "02",
    title: "Sélection",
    short: "Couleurs et textures",
    description:
      "Choisissez parmi nos finis bois, mats, minéraux et unis afin de trouver la combinaison qui correspond à votre espace.",
    image: "/images/process/process-selection.png",
  },
  {
    number: "03",
    title: "Installation",
    short: "Pose professionnelle",
    description:
      "Notre équipe prépare les surfaces et applique le revêtement avec précision pour un résultat propre, durable et haut de gamme.",
    image: "/images/process/process-installation.png",
  },
];

export default function Process() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const active = steps[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? 1 : -1);
      setActiveIndex(index);
    },
    [activeIndex]
  );

  const step = useCallback((delta: number) => {
    setDirection(delta);
    setActiveIndex((i) => (i + delta + steps.length) % steps.length);
  }, []);

  // Balayage tactile : sur mobile, on change d'étape en glissant sur l'image.
  const touchX = useRef(0);
  const touchY = useRef(0);

  const onTouchStart = (event: ReactTouchEvent<HTMLDivElement>) => {
    touchX.current = event.touches[0].clientX;
    touchY.current = event.touches[0].clientY;
    setPaused(true);
  };

  const onTouchEnd = (event: ReactTouchEvent<HTMLDivElement>) => {
    const dx = event.changedTouches[0].clientX - touchX.current;
    const dy = event.changedTouches[0].clientY - touchY.current;
    setPaused(false);

    // On ignore les gestes verticaux : c'est un défilement de page.
    if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy)) return;
    step(dx < 0 ? 1 : -1);
  };

  // Révèle la section au scroll
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Défilement automatique
  useEffect(() => {
    if (paused || !visible) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const timer = window.setTimeout(() => {
      setDirection(1);
      setActiveIndex((i) => (i + 1) % steps.length);
    }, AUTOPLAY_MS);

    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, visible]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className={`process-section overflow-hidden px-4 py-20 sm:px-6 lg:px-10 lg:py-28 ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="reveal reveal-1 text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Comment ça fonctionne
            </p>

            <h2 className="reveal reveal-2 mt-5 max-w-3xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Trois étapes. Une transformation complète.
            </h2>
          </div>

          <p className="reveal reveal-3 max-w-xl text-base leading-7 text-neutral-600 lg:justify-self-end">
            Découvrez chaque étape de notre processus, de la première photo à
            l’installation finale.
          </p>
        </div>

        <div
          className="mt-12 grid gap-6 lg:grid-cols-[360px_1fr]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          {/* Mobile : onglets compacts, juste au-dessus de l'image */}
          <div className="lg:hidden">
            <div className="grid grid-cols-3 gap-2 rounded-[1.25rem] bg-neutral-950 p-2">
              {steps.map((item, index) => {
                const selected = index === activeIndex;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-pressed={selected}
                    className={`relative overflow-hidden rounded-[0.9rem] px-2 py-3 text-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      selected
                        ? "bg-white text-neutral-950"
                        : "bg-white/[0.05] text-white/70"
                    }`}
                  >
                    <span className="block text-[10px] font-semibold tracking-[0.14em]">
                      {item.number}
                    </span>
                    <span className="mt-0.5 block text-[13px] font-medium leading-tight">
                      {item.title}
                    </span>

                    {selected && (
                      <span
                        key={`tab-${activeIndex}-${paused}`}
                        className={`process-progress absolute inset-x-0 bottom-0 h-[3px] origin-left bg-neutral-950/70 ${
                          paused ? "is-paused" : ""
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="reveal reveal-4 hidden rounded-[2rem] bg-neutral-950 p-4 lg:block">
            <div className="grid gap-3">
              {steps.map((step, index) => {
                const selected = index === activeIndex;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-pressed={selected}
                    className={`group relative flex items-center gap-4 overflow-hidden rounded-[1.35rem] border px-5 py-5 text-left transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      selected
                        ? "border-white/30 bg-white text-neutral-950 shadow-[0_18px_40px_-20px_rgba(255,255,255,0.45)]"
                        : "border-white/10 bg-white/[0.03] text-white hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.07]"
                    }`}
                  >
                    <span
                      className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition-all duration-500 ${
                        selected
                          ? "scale-105 border-black/15 bg-black/5 text-black"
                          : "border-white/15 bg-white/[0.04] text-white"
                      }`}
                    >
                      {step.number}
                    </span>

                    <span>
                      <span className="block text-lg font-medium">
                        {step.title}
                      </span>
                      <span
                        className={`mt-1 block text-sm transition-colors duration-500 ${
                          selected ? "text-black/55" : "text-white/45"
                        }`}
                      >
                        {step.short}
                      </span>
                    </span>

                    <span
                      className={`ml-auto transition-transform duration-500 ${
                        selected ? "rotate-45" : "group-hover:translate-x-1"
                      }`}
                    >
                      ↗
                    </span>

                    {/* barre de progression de l’autoplay */}
                    {selected && (
                      <span
                        key={`${step.number}-${activeIndex}-${paused}`}
                        className={`process-progress absolute inset-x-0 bottom-0 h-[3px] origin-left bg-neutral-950/70 ${
                          paused ? "is-paused" : ""
                        }`}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            <a
              href="#contact"
              className="group mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
            >
              Commencer mon projet
              <span
                aria-hidden="true"
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              >
                ↗
              </span>
            </a>
          </div>

          <div
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            className="process-stage reveal reveal-5 relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-black/10 bg-neutral-950 sm:aspect-[16/11] lg:aspect-auto lg:min-h-[620px]"
          >
            {/* toutes les images restent montées : fondu enchaîné sans rechargement */}
            {steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={step.number}
                  aria-hidden={!isActive}
                  className={`process-layer absolute inset-0 ${
                    isActive ? "is-active" : ""
                  }`}
                  style={{ ["--dir" as string]: direction }}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="process-image object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/10 to-black/10" />
                </div>
              );
            })}

            <div className="process-orb process-orb-one" />
            <div className="process-orb process-orb-two" />
            <div className="process-sheen" key={`sheen-${activeIndex}`} />

            <div className="absolute inset-x-0 bottom-0 z-20 p-5 text-white sm:p-10 lg:p-12">
              <div key={active.number} className="process-copy">
                <p className="copy-line copy-1 text-[10px] font-semibold uppercase tracking-[0.28em] !text-white/55 sm:text-xs">
                  {active.short}
                </p>

                <h3 className="copy-line copy-2 mt-2.5 text-3xl font-medium tracking-[-0.05em] !text-white sm:mt-4 sm:text-5xl lg:text-6xl">
                  {active.title}
                </h3>

                <p className="copy-line copy-3 mt-3 max-w-2xl text-sm leading-6 !text-white/72 sm:mt-5 sm:text-base sm:leading-7">
                  {active.description}
                </p>
              </div>

              <div className="mt-5 flex items-center gap-3 sm:mt-8">
                {steps.map((item, index) => (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Afficher l’étape ${item.number}`}
                    className={`h-1.5 overflow-hidden rounded-full transition-all duration-700 ${
                      index === activeIndex
                        ? "w-16 bg-white/25"
                        : "w-7 bg-white/25 hover:bg-white/45"
                    }`}
                  >
                    {index === activeIndex && (
                      <span
                        key={`dot-${activeIndex}-${paused}`}
                        className={`process-progress block h-full w-full origin-left bg-white ${
                          paused ? "is-paused" : ""
                        }`}
                      />
                    )}
                  </button>
                ))}

                <span className="ml-auto text-[10px] font-medium text-white/45 lg:hidden">
                  Glissez ←→
                </span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="mt-4 inline-flex w-full items-center justify-center gap-3 rounded-full bg-neutral-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-neutral-800 lg:hidden"
        >
          Commencer mon projet
          <span aria-hidden="true">↗</span>
        </a>

        <div className="reveal reveal-6 mt-6 rounded-[1.5rem] border border-black/10 bg-white/60 px-6 py-5 text-sm leading-6 text-neutral-600 backdrop-blur-sm">
          Quelques photos suffisent pour commencer votre évaluation gratuite.
        </div>
      </div>

      <style jsx>{`
        /* ---------- révélation au scroll ---------- */
        .reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .process-section.is-visible .reveal {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-1 {
          transition-delay: 60ms;
        }
        .reveal-2 {
          transition-delay: 140ms;
        }
        .reveal-3 {
          transition-delay: 220ms;
        }
        .reveal-4 {
          transition-delay: 300ms;
        }
        .reveal-5 {
          transition-delay: 380ms;
        }
        .reveal-6 {
          transition-delay: 460ms;
        }

        /* ---------- scène ---------- */
        .process-stage {
          perspective: 1600px;
        }

        .process-layer {
          opacity: 0;
          visibility: hidden;
          transform: scale(1.06) translateX(calc(var(--dir, 1) * 40px));
          transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 1200ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0s linear 900ms;
          will-change: opacity, transform;
        }

        .process-layer.is-active {
          opacity: 1;
          visibility: visible;
          transform: scale(1) translateX(0);
          transition: opacity 900ms cubic-bezier(0.22, 1, 0.36, 1),
            transform 1200ms cubic-bezier(0.22, 1, 0.36, 1),
            visibility 0s linear 0s;
        }

        .process-layer.is-active :global(.process-image) {
          animation: imageDrift 12s ease-in-out infinite alternate;
          transform-origin: center;
        }

        /* reflet qui balaie l’image à chaque changement */
        .process-sheen {
          position: absolute;
          inset: 0;
          z-index: 10;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 35%,
            rgba(255, 255, 255, 0.12) 50%,
            transparent 65%
          );
          transform: translateX(-100%);
          animation: sheen 1100ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        /* ---------- texte ---------- */
        .process-copy .copy-line {
          opacity: 0;
          animation: copyIn 800ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .copy-1 {
          animation-delay: 120ms;
        }
        .copy-2 {
          animation-delay: 220ms;
        }
        .copy-3 {
          animation-delay: 340ms;
        }

        /* ---------- barre d’autoplay ---------- */
        .process-progress {
          animation: progress ${AUTOPLAY_MS}ms linear forwards;
        }

        .process-progress.is-paused {
          animation-play-state: paused;
        }

        /* ---------- orbes ---------- */
        .process-orb {
          position: absolute;
          z-index: 10;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.08);
          animation: orbFloat 6s ease-in-out infinite;
        }

        .process-orb-one {
          top: 12%;
          right: 10%;
          width: 110px;
          height: 110px;
        }

        .process-orb-two {
          top: 34%;
          right: 28%;
          width: 54px;
          height: 54px;
          animation-delay: -2s;
        }

        @keyframes copyIn {
          from {
            opacity: 0;
            transform: translateY(22px);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes sheen {
          to {
            transform: translateX(100%);
          }
        }

        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        @keyframes imageDrift {
          from {
            transform: scale(1.02) translate3d(0, 0, 0);
          }
          to {
            transform: scale(1.1) translate3d(-1.6%, -1.4%, 0);
          }
        }

        @keyframes orbFloat {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-18px) rotate(8deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .reveal {
            opacity: 1;
            transform: none;
            transition: none;
          }

          .process-layer,
          .process-layer.is-active {
            transform: none;
            transition: opacity 200ms linear;
          }

          .process-layer.is-active :global(.process-image),
          .process-orb,
          .process-sheen,
          .process-copy .copy-line,
          .process-progress {
            animation: none;
          }

          .process-copy .copy-line {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
