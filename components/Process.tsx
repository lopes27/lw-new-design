const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Nous discutons de votre projet, de vos besoins, de votre style et des surfaces à transformer.",
  },
  {
    number: "02",
    title: "Sélection des finis",
    description:
      "Nous vous aidons à choisir les couleurs, textures et finis qui correspondent le mieux à votre espace.",
  },
  {
    number: "03",
    title: "Préparation des surfaces",
    description:
      "Les surfaces sont nettoyées et préparées avec soin pour assurer une application propre et durable.",
  },
  {
    number: "04",
    title: "Installation",
    description:
      "Le revêtement est appliqué avec précision pour obtenir un résultat uniforme, moderne et haut de gamme.",
  },
  {
    number: "05",
    title: "Résultat final",
    description:
      "Vous profitez d’un espace transformé, sans démolition majeure et avec beaucoup moins de complications.",
  },
];

export default function Process() {
  return (
    <section className="bg-neutral-100 px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Notre processus
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
              Une transformation simple, propre et bien organisée.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              De la première consultation jusqu’à l’installation finale, chaque
              étape est pensée pour rendre votre projet clair, efficace et sans
              stress inutile.
            </p>
          </div>
        </div>

        <div className="mt-20">
          {steps.map((step) => (
            <article
              key={step.number}
              className="grid gap-6 border-t border-neutral-300 py-9 md:grid-cols-[120px_1fr_1fr] md:items-start"
            >
              <span className="text-sm text-neutral-400">{step.number}</span>

              <h3 className="text-2xl font-medium tracking-[-0.03em] text-neutral-950 md:text-4xl">
                {step.title}
              </h3>

              <p className="max-w-md leading-7 text-neutral-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}