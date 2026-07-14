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
    <section className="bg-neutral-950 px-4 py-20 text-white sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 lg:grid lg:min-h-[720px] lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[480px] overflow-hidden lg:min-h-full">
            <Image
              src="/images/resurfacing-detail.png"
              alt="Application professionnelle d’un revêtement architectural sur une porte d’armoire"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/15" />

            <div className="absolute bottom-6 left-6 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/80 backdrop-blur-md">
              Précision et savoir-faire
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center px-7 py-14 sm:px-10 lg:px-14 lg:py-20 xl:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Resurfaçage architectural
            </p>

            <h2 className="mt-7 max-w-xl text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl xl:text-6xl">
              Pourquoi tout remplacer quand la structure est encore bonne?
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/60 lg:text-lg">
              Le resurfaçage architectural transforme vos armoires et surfaces
              existantes avec des finis haut de gamme, sans les délais, les
              coûts et les contraintes d’une rénovation complète.
            </p>

            <div className="mt-10 border-t border-white/10">
              {benefits.map((benefit) => (
                <div
                  key={benefit.number}
                  className="grid grid-cols-[48px_1fr] items-center gap-4 border-b border-white/10 py-5"
                >
                  <span className="text-xs font-medium text-white/30">
                    {benefit.number}
                  </span>

                  <p className="text-base font-medium text-white/85">
                    {benefit.title}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-semibold text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
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