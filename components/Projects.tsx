const projects = [
  {
    number: "01",
    title: "Cuisine contemporaine",
    category: "Revêtement d’armoires",
    description:
      "Une transformation moderne avec des finis neutres, une apparence plus lumineuse et un résultat haut de gamme.",
  },
  {
    number: "02",
    title: "Fini bois naturel",
    category: "Projet résidentiel",
    description:
      "Une solution chaleureuse pour moderniser les surfaces tout en conservant une ambiance élégante et intemporelle.",
  },
  {
    number: "03",
    title: "Espace commercial",
    category: "Projet professionnel",
    description:
      "Des surfaces renouvelées pour améliorer l’apparence d’un commerce, d’un bureau ou d’un espace d’accueil.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-neutral-950 px-6 py-24 text-white lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
          Projets récents
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
          <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
            Des transformations qui changent complètement l’ambiance d’un espace.
          </h2>

          <p className="max-w-md leading-7 text-white/60">
            Découvrez quelques exemples de transformations possibles avec des
            revêtements modernes, durables et soigneusement installés.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.number}
              className={`group flex min-h-[460px] flex-col justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-8 transition hover:bg-white/[0.1] ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/45">
                  {project.number}
                </span>

                <span className="rounded-full border border-white/15 px-4 py-2 text-xs text-white/60">
                  {project.category}
                </span>
              </div>

              <div>
                <h3 className="max-w-xl text-3xl font-medium tracking-[-0.04em] md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-6 max-w-md leading-7 text-white/55">
                  {project.description}
                </p>

                <p className="mt-8 text-sm font-semibold text-white transition group-hover:translate-x-1">
                  Voir le projet →
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}