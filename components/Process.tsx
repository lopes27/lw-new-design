 const steps = [
  {
    number: "01",
    title: "Premier échange",
    description:
      "Vous nous présentez votre espace, vos objectifs et quelques photos du projet.",
    detail: "Projet et besoins",
  },
  {
    number: "02",
    title: "Choix de la finition",
    description:
      "Nous vous aidons à sélectionner la couleur, la texture et le fini adaptés à votre intérieur.",
    detail: "Couleurs et textures",
  },
  {
    number: "03",
    title: "Préparation du projet",
    description:
      "Les surfaces sont évaluées et préparées avec soin avant le début de l’installation.",
    detail: "Évaluation et préparation",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Le revêtement est appliqué avec précision afin d’obtenir des lignes nettes et une finition uniforme.",
    detail: "Application professionnelle",
  },
  {
    number: "05",
    title: "Vérification finale",
    description:
      "Nous vérifions les détails et le résultat final avec vous avant de terminer le projet.",
    detail: "Contrôle de qualité",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="scroll-mt-24 bg-[#f3f1ed] px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Notre processus
          </p>

          <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-6xl">
            Une transformation simple, du premier échange à la finition.
          </h2>

          <p className="mt-7 max-w-md text-base leading-8 text-neutral-600">
            Une approche claire et personnalisée pour transformer vos surfaces
            existantes sans les complications d’une rénovation complète.
          </p>

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Démarrer mon projet
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="border-t border-neutral-300">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group grid gap-5 border-b border-neutral-300 py-8 sm:grid-cols-[60px_1fr] lg:grid-cols-[70px_1fr_auto] lg:items-start lg:py-10"
            >
              <span className="text-sm font-medium text-neutral-400">
                {step.number}
              </span>

              <div>
                <h3 className="text-2xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-3xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-neutral-600">
                  {step.description}
                </p>
              </div>

              <span className="hidden rounded-full border border-neutral-300 px-4 py-2 text-xs text-neutral-500 lg:block">
                {step.detail}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}