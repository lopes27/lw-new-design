import Image from "next/image";

const benefits = [
  "Sans démolition majeure",
  "Installation plus rapide",
  "Budget mieux contrôlé",
  "Finition personnalisée",
];

export default function Resurface() {
  return (
    <section className="bg-neutral-950 px-4 pb-20 pt-28 text-white sm:px-6 lg:px-10 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-10 grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
            Resurfaçage architectural
          </p>

          <h2 className="max-w-4xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Le savoir-faire derrière chaque transformation.
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
          {/* Imagem editorial */}
          <div className="relative min-h-[680px] lg:min-h-[780px]">
            <Image
              src="/images/resurfacing-detail.png"
              alt="Application professionnelle d’un revêtement architectural sur une porte d’armoire"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-black/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

            <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-md sm:left-8 sm:top-8">
              Précision et savoir-faire
            </div>
          </div>

          {/* Card flutuante */}
          <div className="relative -mt-24 px-4 pb-4 sm:px-8 sm:pb-8 lg:absolute lg:bottom-10 lg:right-10 lg:mt-0 lg:w-[470px] lg:p-0">
            <div className="rounded-[1.75rem] bg-white p-7 text-neutral-950 shadow-2xl sm:p-9 lg:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
                Une seconde vie
              </p>

              <h3 className="mt-5 text-3xl font-medium leading-[1.06] tracking-[-0.045em] sm:text-4xl">
                Pourquoi tout remplacer quand la structure est encore bonne?
              </h3>

              <p className="mt-5 leading-7 text-neutral-600">
                Le resurfaçage architectural transforme vos armoires et
                surfaces existantes avec des finis haut de gamme, sans les
                délais, les coûts et les contraintes d’une rénovation complète.
              </p>

              <div className="mt-7 border-t border-neutral-200">
                {benefits.map((benefit, index) => (
                  <div
                    key={benefit}
                    className="grid grid-cols-[36px_1fr] items-center gap-3 border-b border-neutral-200 py-4"
                  >
                    <span className="text-xs font-medium text-neutral-400">
                      0{index + 1}
                    </span>

                    <p className="text-sm font-medium sm:text-base">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Demander une soumission
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-2 text-xs uppercase tracking-[0.18em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>Finitions architecturales haut de gamme</p>
          <p>Montréal · Laval · Rive-Nord · Rive-Sud</p>
        </div>
      </div>
    </section>
  );
}