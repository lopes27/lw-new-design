 import Image from "next/image";

const benefits = [
  "Sans démolition majeure",
  "Installation plus rapide",
  "Budget mieux contrôlé",
  "Finition personnalisée",
];

export default function Resurface() {
  return (
    <section className="bg-black px-6 py-24 text-white lg:px-10">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 min-h-[650px]">
          <Image
            src="/images/why-choose-detail.png"
            alt="Détail d’un resurfaçage architectural de haute qualité"
            fill
            className="object-cover"
          />
          <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/30 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] backdrop-blur-sm">
            Précision et savoir-faire
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#111111] p-8 sm:p-10 lg:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/45">
            Resurfaçage architectural
          </p>

          <h2 className="mt-5 max-w-lg text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
            Pourquoi tout remplacer quand la structure est encore bonne?
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-white/70">
            Le resurfaçage architectural transforme vos armoires et surfaces
            existantes avec des finis haut de gamme, sans les délais, les coûts
            et les contraintes d’une rénovation complète.
          </p>

          <div className="mt-8 border-t border-white/10">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="grid grid-cols-[36px_1fr] items-center gap-3 border-b border-white/10 py-4"
              >
                <span className="text-xs font-medium text-white/35">
                  0{index + 1}
                </span>
                <p className="text-sm font-medium sm:text-base">{benefit}</p>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Demander une soumission
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}