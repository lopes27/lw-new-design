 const projectSizes = [
  {
    number: "01",
    title: "Petite cuisine",
    description:
      "Une transformation ciblée pour les cuisines compactes et les espaces fonctionnels.",
    details: "Armoires, portes et panneaux",
    price: "1 500 $",
    image: "/images/services/service-kitchen.jpeg",
  },
  {
    number: "02",
    title: "Cuisine moyenne",
    description:
      "Une mise à jour complète pour moderniser l’espace sans remplacer toute la cuisine.",
    details: "Armoires, îlot et surfaces",
    price: "2 000 $",
    image: "/images/projects/project-contemporary-kitchen.png",
  },
  {
    number: "03",
    title: "Grande cuisine",
    description:
      "Une transformation personnalisée pour les cuisines plus vastes et les projets détaillés.",
    details: "Projet complet sur mesure",
    price: "2 500 $",
    image: "/images/hero-kitchen-luxury.png",
  },
];

export default function ProjectSizes() {
  return (
    <section
      id="project-sizes"
      className="px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Votre projet
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
              Une solution adaptée à la taille de votre cuisine.
            </h2>
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-600 lg:justify-self-end">
            Chaque projet est évalué selon les dimensions, le nombre de portes,
            les surfaces à couvrir et la finition sélectionnée.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] bg-neutral-950 lg:grid-cols-3">
          {projectSizes.map((project) => (
            <article
              key={project.number}
              className="group relative min-h-[590px] overflow-hidden border-white/10 lg:border-r lg:last:border-r-0"
            >
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-[1.06]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 transition duration-500 group-hover:via-black/35" />

              <div className="absolute inset-0 flex flex-col justify-between p-7 text-white sm:p-9">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-xs backdrop-blur-md">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-white/20 bg-black/30 px-4 py-2 text-xs text-white/80 backdrop-blur-md">
                    Évaluation gratuite
                  </span>
                </div>

                <div className="translate-y-3 transition duration-500 group-hover:translate-y-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] !text-white/55">
                    {project.details}
                  </p>

                  <h3 className="mt-4 text-3xl font-medium tracking-[-0.04em] !text-white sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-sm leading-7 !text-white/70">
                    {project.description}
                  </p>

                  <div className="mt-7 inline-flex flex-col rounded-[1.25rem] border border-white/20 bg-black/35 px-5 py-4 backdrop-blur-md">
                    <span className="text-xs uppercase tracking-[0.22em] !text-white/55">
                      Prix approximatif
                    </span>

                    <span className="mt-2 text-3xl font-semibold tracking-[-0.04em] !text-white">
                      À partir de {project.price}
                    </span>
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-6">
                    <a
                      href="#contact"
                      className="text-sm font-semibold text-white"
                    >
                      Demander une soumission
                    </a>

                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-5 rounded-[1.5rem] border border-black/10 bg-white/65 px-6 py-6 backdrop-blur-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="font-medium text-neutral-950">
              Obtenez une estimation plus précise gratuitement.
            </p>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-neutral-600">
              Envoyez-nous quelques photos de votre cuisine. Le prix final peut
              varier selon le nombre de portes, les dimensions, la préparation
              requise et le fini sélectionné.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Évaluer mon projet
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}