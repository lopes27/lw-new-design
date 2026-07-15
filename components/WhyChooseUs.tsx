const reasons = [
  {
    title: "Sans démolition majeure",
    description:
      "Modernisez votre cuisine sans passer par une rénovation lourde, coûteuse et pleine de poussière.",
  },
  {
    title: "Installation rapide",
    description:
      "La plupart des projets peuvent être réalisés beaucoup plus rapidement qu’une rénovation traditionnelle.",
  },
  {
    title: "Finitions haut de gamme",
    description:
      "Nous utilisons des revêtements modernes pour créer une apparence propre, durable et raffinée.",
  },
  {
    title: "Solution plus abordable",
    description:
      "Obtenez un nouveau style pour votre cuisine sans remplacer complètement les armoires existantes.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Pourquoi nous choisir
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
              Une alternative élégante à la rénovation complète.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Maison Surface aide les propriétaires et les entreprises à
transformer leurs espaces avec une solution plus simple, plus
propre et plus efficace.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-neutral-300 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article key={reason.title} className="bg-neutral-100 p-8 md:p-10">
              <span className="text-sm text-neutral-400">
                0{index + 1}
              </span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em] text-neutral-950">
                {reason.title}
              </h3>

              <p className="mt-5 max-w-md leading-7 text-neutral-600">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}