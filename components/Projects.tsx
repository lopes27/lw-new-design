 import Image from "next/image";

const projects = [
  {
    number: "01",
    title: "Cuisine contemporaine",
    category: "Revêtement d’armoires",
    location: "Laval, Québec",
    description:
      "Une cuisine résidentielle transformée avec une finition cachemire ultra-mate, douce et intemporelle.",
    image: "/images/projects/project-contemporary-kitchen.png",
    className: "lg:col-span-12 lg:min-h-[700px]",
  },
  {
    number: "02",
    title: "Fini bois naturel",
    category: "Détail architectural",
    location: "Montréal, Québec",
    description:
      "Un fini bois chaleureux mettant en valeur la précision des détails et la qualité de l’installation.",
    image: "/images/projects/project-natural-wood.png",
    className: "lg:col-span-5 lg:min-h-[560px]",
  },
  {
    number: "03",
    title: "Espace commercial",
    category: "Resurfaçage commercial",
    location: "Rive-Nord, Québec",
    description:
      "Une surface commerciale modernisée avec des matériaux durables et une finition professionnelle.",
    image: "/images/projects/project-commercial-space.png",
    className: "lg:col-span-7 lg:min-h-[560px]",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="overflow-hidden bg-neutral-950 px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Projets sélectionnés
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
              Des transformations résidentielles et commerciales réalisées avec
              précision, soin et attention aux détails.
            </p>
          </div>

          <h2 className="max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
            Une transformation se juge dans les détails.
          </h2>
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-12">
          {projects.map((project) => (
            <article
              key={project.number}
              className={`group relative min-h-[500px] overflow-hidden rounded-[2rem] border border-white/10 bg-neutral-900 ${project.className}`}
            >
              <Image
                src={project.image}
                alt={`${project.title}, projet Maison Surface`}
                fill
                sizes={
                  project.number === "01"
                    ? "100vw"
                    : "(max-width: 1024px) 100vw, 58vw"
                }
                className="object-cover transition duration-1000 ease-out group-hover:scale-[1.035]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/15 to-black/5" />

              <div className="absolute left-6 top-6 flex items-center gap-3 sm:left-8 sm:top-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/20 text-xs font-medium text-white backdrop-blur-md">
                  {project.number}
                </span>

                <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white/75 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                  {project.location}
                </p>

                <h3 className="mt-4 max-w-3xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-5 max-w-xl leading-7 text-white/65">
                  {project.description}
                </p>

                <div className="mt-7 flex items-center justify-between border-t border-white/20 pt-6">
                  <span className="text-sm font-medium text-white/70">
                    Voir le projet
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black"
                  >
                    ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-7 text-white/40">
            Chaque projet est adapté à l’espace existant, au style recherché et
            aux besoins du client.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-neutral-200"
          >
            Discuter de votre projet
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}