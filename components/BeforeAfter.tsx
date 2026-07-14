 import Image from "next/image";

const benefits = [
  {
    number: "01",
    title: "Sans démolition majeure",
  },
  {
    number: "02",
    title: "Installation plus rapide",
  },
  {
    number: "03",
    title: "Budget mieux contrôlé",
  },
  {
    number: "04",
    title: "Finition personnalisée",
  },
];

export default function Resurface() {
  return (
    <section className="bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 lg:grid lg:grid-cols-[1.15fr_0.85fr]">
          {/* Imagem */}
          <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[610px]">
            <Image
              src="/images/resurfacing-detail.png"
              alt="Application professionnelle d’un revêtement architectural sur une porte d’armoire"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
              Précision et savoir-faire
            </div>
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col justify-center px-7 py-12 sm:px-10 lg:px-12 lg:py-14 xl:px-14">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Resurfaçage architectural
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-[3.35rem]">
              Pourquoi tout remplacer quand la structure est encore bonne?
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/60">
              Le resurfaçage architectural transforme vos armoires et surfaces
              existantes avec des finis haut de gamme, sans les délais, les
              coûts et les contraintes d’une rénovation complète.
            </p>

            <div className="mt-8 border-t border-white/10">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="grid grid-cols-[42px_1fr] items-center gap-3 border-b border-white/10 py-4"
                >
                  <span className="text-xs font-medium text-white/30">
                    {benefit.number}
                  </span>

                  <p className="text-sm font-medium text-white/85 sm:text-base">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Demander une soumission
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}