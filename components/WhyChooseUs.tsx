 import Image from "next/image";

const advantages = [
  {
    number: "01",
    title: "Précision dans chaque détail",
    description:
      "Des bordures nettes, des surfaces uniformes et une installation réalisée avec soin.",
  },
  {
    number: "02",
    title: "Finitions haut de gamme",
    description:
      "Une sélection de textures et de couleurs conçue pour créer un résultat élégant et durable.",
  },
  {
    number: "03",
    title: "Transformation plus simple",
    description:
      "Modernisez vos surfaces existantes sans les contraintes d’une rénovation complète.",
  },
  {
    number: "04",
    title: "Service local et personnalisé",
    description:
      "Un accompagnement adapté à votre espace, à votre style et aux besoins de votre projet.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f3f1ed] px-4 py-24 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid overflow-hidden rounded-[2rem] border border-neutral-300 bg-white lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] overflow-hidden lg:min-h-[760px]">
            <Image
              src="/images/why-choose-detail.png"
              alt="Détail précis d’une finition architecturale Maison Surface"
              fill
              sizes="(max-width: 1024px) 100vw, 53vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/5" />

            <div className="absolute bottom-6 left-6 rounded-full border border-white/25 bg-black/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md sm:bottom-8 sm:left-8">
              Qualité et précision
            </div>
          </div>

          <div className="flex flex-col justify-center px-7 py-14 sm:px-10 lg:px-14 lg:py-20 xl:px-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Pourquoi Maison Surface
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Le détail fait toute la différence.
            </h2>

            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-600 lg:text-lg">
              Nous transformons cuisines, armoires et surfaces avec une approche
              précise, propre et personnalisée. Chaque projet est conçu pour
              offrir un résultat élégant sans les contraintes d’une rénovation
              complète.
            </p>

            <div className="mt-9 border-t border-neutral-200">
              {advantages.map((advantage) => (
                <article
                  key={advantage.number}
                  className="grid grid-cols-[44px_1fr] gap-4 border-b border-neutral-200 py-5"
                >
                  <span className="pt-1 text-xs font-medium text-neutral-400">
                    {advantage.number}
                  </span>

                  <div>
                    <h3 className="font-medium text-neutral-950">
                      {advantage.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-neutral-500">
                      {advantage.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Demander une soumission
                <span aria-hidden="true">↗</span>
              </a>

              <p className="text-xs uppercase leading-6 tracking-[0.16em] text-neutral-400">
                Montréal · Laval
                <br />
                Rive-Nord · Rive-Sud
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}