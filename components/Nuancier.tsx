"use client";

import { useEffect, useMemo, useState } from "react";
import Reveal from "@/components/Reveal";

type Category = "bois" | "satine" | "mineral" | "lustre";

type Finish = {
  code: string;
  name: string;
  category: Category;
  color: string;
};

const categories: { id: Category | "tous"; label: string }[] = [
  { id: "tous", label: "Tous les finis" },
  { id: "bois", label: "Grains de bois" },
  { id: "satine", label: "Satinés & mats" },
  { id: "mineral", label: "Pierre & minéral" },
  { id: "lustre", label: "Lustrés" },
];

const finishes: Finish[] = [
  { code: "WMK-005", name: "Bois espresso", category: "bois", color: "#372e29" },
  { code: "WMK-006", name: "Bois sable du crépuscule", category: "bois", color: "#a18973" },
  { code: "WMK-008", name: "Bois caramel salé", category: "bois", color: "#a96e3d" },
  { code: "WMK-009", name: "Bois cœur d’amande", category: "bois", color: "#e6d8c7" },
  { code: "WMK-013", name: "Bois blond scandinave", category: "bois", color: "#d0b688" },
  { code: "WMK-019", name: "Bois orge émondé", category: "bois", color: "#d6c9b8" },
  { code: "WMK-020", name: "Bois de rose ombré", category: "bois", color: "#40291f" },
  { code: "WMK-022", name: "Bois nordique", category: "bois", color: "#d4cabb" },
  { code: "WMK-024", name: "Bois de plage", category: "bois", color: "#d5c8ba" },
  { code: "WMK-025", name: "Chêne fumé", category: "bois", color: "#826f61" },
  { code: "WMK-026", name: "Écorce de lune", category: "bois", color: "#dedcd8" },
  { code: "WMK-027", name: "Chêne sablé", category: "bois", color: "#d6bfa4" },
  { code: "WMK-041", name: "Bois blanc nuage", category: "bois", color: "#eae6df" },
  { code: "WMK-042", name: "Bois taupe", category: "bois", color: "#ad9989" },
  { code: "WMK-043", name: "Bois noir", category: "bois", color: "#2f2f2f" },
  { code: "WMK-044", name: "Bois blanc coquille d’œuf", category: "bois", color: "#f0ece4" },
  { code: "WMK-049", name: "Champagne satiné", category: "satine", color: "#be9f7a" },
  { code: "WMK-050", name: "Argent satiné", category: "satine", color: "#bbb9b6" },
  { code: "WMK-051", name: "Nova noir satiné", category: "satine", color: "#302f30" },
  { code: "WMK-052", name: "Blanc mat satiné", category: "satine", color: "#f0eeed" },
  { code: "WMK-053", name: "Noir anthracite", category: "satine", color: "#414141" },
  { code: "WMK-054", name: "Blanc crémeux", category: "satine", color: "#faf5ee" },
  { code: "WMK-055", name: "Brise minérale", category: "satine", color: "#e2ddd3" },
  { code: "WMK-085", name: "Ultra blanc mat", category: "satine", color: "#f1f1f1" },
  { code: "WMK-045-B", name: "Béton", category: "mineral", color: "#b8b7b5" },
  { code: "WMK-057", name: "Gris bruine matinale", category: "mineral", color: "#cbcbcb" },
  { code: "WMK-058", name: "Gris ardoise", category: "mineral", color: "#59595b" },
  { code: "WMK-061", name: "Marbre blanc", category: "mineral", color: "#e7e5e1" },
  { code: "WMK-065", name: "Lin", category: "mineral", color: "#d9d5d0" },
  { code: "WMK-059", name: "Vert sauge", category: "lustre", color: "#a8aa9c" },
  { code: "WMK-071", name: "Rouge lustré", category: "lustre", color: "#c53233" },
];

// Aperçu affiché sur la page d'accueil.
const previewCodes = ["WMK-027", "WMK-043", "WMK-061", "WMK-071", "WMK-053", "WMK-024"];
const preview = previewCodes
  .map((code) => finishes.find((f) => f.code === code))
  .filter((f): f is Finish => Boolean(f));

/** Luminance relative → texte lisible sur la couleur révélée. */
function isLight(hex: string) {
  const c = hex.replace("#", "");
  const r = parseInt(c.slice(0, 2), 16);
  const g = parseInt(c.slice(2, 4), 16);
  const b = parseInt(c.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
}

function SwatchCard({
  finish,
  index,
  animate,
}: {
  finish: Finish;
  index: number;
  animate: boolean;
}) {
  // Ouverture pilotée par l'état : survol (souris) OU appui (tactile).
  // On ne dépend pas de :hover en CSS, ce qui garantit l'animation.
  const [open, setOpen] = useState(false);
  const light = isLight(finish.color);
  const label = categories.find((c) => c.id === finish.category)?.label;

  return (
    <article
      className={`swatch group ${animate ? "swatch-card" : ""}`}
      style={
        animate ? { animationDelay: `${Math.min(index * 40, 620)}ms` } : undefined
      }
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        aria-pressed={open}
        aria-label={`${finish.name} — ${finish.code}. Ouvrir pour voir la teinte.`}
        className={`swatch-stage relative block aspect-[3/4] w-full overflow-hidden rounded-[1.25rem] border border-black/10 shadow-[0_16px_36px_-20px_rgba(20,18,14,0.4)] ${
          open ? "is-open" : ""
        }`}
      >
        {/* Fond révélé : couleur pleine + code de référence */}
        <span
          aria-hidden="true"
          className="absolute inset-0"
          style={{ backgroundColor: finish.color }}
        />
        <span
          className={`swatch-reveal absolute inset-0 flex flex-col items-center justify-center gap-1 text-center ${
            light ? "text-neutral-900" : "text-white"
          }`}
        >
          <span className="text-[11px] font-semibold uppercase tracking-[0.22em] opacity-70">
            Réf.
          </span>
          <span className="text-lg font-semibold tracking-[0.04em] sm:text-xl">
            {finish.code}
          </span>
          <span
            className={`mt-1 rounded-full px-3 py-1 text-[10px] font-medium ${
              light ? "bg-black/10" : "bg-white/15"
            }`}
          >
            {finish.color.toUpperCase()}
          </span>
        </span>

        {/* Deux battants : moitiés gauche/droite de la photo qui s'ouvrent */}
        <span
          aria-hidden="true"
          className="swatch-leaf swatch-leaf-left"
          style={{
            backgroundImage: `url(/finishes/${finish.code}.webp)`,
            backgroundSize: "200% 100%",
            backgroundPosition: "left center",
          }}
        />
        <span
          aria-hidden="true"
          className="swatch-leaf swatch-leaf-right"
          style={{
            backgroundImage: `url(/finishes/${finish.code}.webp)`,
            backgroundSize: "200% 100%",
            backgroundPosition: "right center",
          }}
        />

        <span className="swatch-code absolute left-3 top-3 z-10 rounded-full bg-white/80 px-3 py-1.5 text-[10px] font-semibold tracking-[0.08em] text-neutral-900 ring-1 ring-black/10 backdrop-blur-md">
          {finish.code}
        </span>
      </button>

      <p className="mt-3.5 text-sm font-medium text-neutral-900">{finish.name}</p>
      <p className="mt-0.5 text-xs text-neutral-500">{label}</p>
    </article>
  );
}

export default function Nuancier() {
  const [open, setOpen] = useState(false);
  const [filter, setFilter] = useState<Category | "tous">("tous");

  const visible = useMemo(
    () =>
      filter === "tous"
        ? finishes
        : finishes.filter((finish) => finish.category === filter),
    [filter]
  );

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <section id="nuancier" className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Nuancier complet
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-medium leading-[1.04] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
                {finishes.length} finis, un seul geste.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-neutral-600 lg:justify-self-end">
              Bois, satinés, pierre, lustrés — survolez une porte pour l’ouvrir
              et révéler la teinte avec son code de référence. Notez celui qui
              vous plaît pour votre demande de soumission.
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-6">
            {preview.map((finish, index) => (
              <SwatchCard
                key={finish.code}
                finish={finish}
                index={index}
                animate={false}
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-10 flex flex-col items-start gap-5 rounded-[1.5rem] border border-black/10 bg-white/65 px-6 py-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-neutral-600">
              Voici un aperçu. Le nuancier complet compte {finishes.length} finis,
              filtrables par ambiance.
            </p>

            <button
              type="button"
              onClick={() => {
                setFilter("tous");
                setOpen(true);
              }}
              className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
            >
              Voir tout le nuancier
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </Reveal>
      </div>

      {/* ---- Modal plein écran : catalogue complet ---- */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Nuancier complet"
          className="nuancier-overlay fixed inset-0 z-[80] flex flex-col bg-[#141210]/55 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="nuancier-panel mx-auto flex h-full w-full max-w-[1500px] flex-col overflow-hidden bg-[#f6f4f0] shadow-2xl sm:my-6 sm:h-[calc(100%-3rem)] sm:rounded-[2rem]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 border-b border-black/10 bg-[#f6f4f0]/95 px-5 py-4 backdrop-blur-md sm:px-8 sm:py-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
                    Nuancier complet
                  </p>
                  <h3 className="mt-1 text-xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-2xl">
                    {finishes.length} finis
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le nuancier"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15 text-neutral-800 transition hover:bg-neutral-950 hover:text-white"
                >
                  <span aria-hidden="true" className="text-xl leading-none">
                    ✕
                  </span>
                </button>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2 sm:gap-2.5">
                {categories.map((category) => {
                  const selected = filter === category.id;
                  const count =
                    category.id === "tous"
                      ? finishes.length
                      : finishes.filter((f) => f.category === category.id).length;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setFilter(category.id)}
                      aria-pressed={selected}
                      className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:text-sm ${
                        selected
                          ? "border-neutral-950 bg-neutral-950 text-white"
                          : "border-black/15 bg-white/60 text-neutral-700 hover:border-neutral-950 hover:text-neutral-950"
                      }`}
                    >
                      {category.label}
                      <span
                        className={`flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-semibold ${
                          selected
                            ? "bg-white/15 text-white"
                            : "bg-black/[0.06] text-neutral-500"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <p className="mt-3 text-xs text-neutral-500">
                Survolez ou touchez une porte pour révéler la teinte et son code.
              </p>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              <div
                key={filter}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5"
              >
                {visible.map((finish, index) => (
                  <SwatchCard
                    key={finish.code}
                    finish={finish}
                    index={index}
                    animate
                  />
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-4 rounded-[1.25rem] border border-black/10 bg-white/70 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="max-w-2xl text-sm leading-6 text-neutral-600">
                  Les teintes affichées sont représentatives. Demandez un
                  échantillon réel pour valider votre choix.
                </p>

                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
                >
                  Choisir mon fini
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
