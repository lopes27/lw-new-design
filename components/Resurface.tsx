const points = [
  {
    title: "Moins de démolition",
    description:
      "Évitez les travaux lourds, la poussière et les semaines de chantier dans votre maison.",
  },
  {
    title: "Moins de délais",
    description:
      "Transformez l’apparence de votre cuisine beaucoup plus rapidement qu’avec une rénovation complète.",
  },
  {
    title: "Moins de coûts",
    description:
      "Modernisez vos armoires existantes sans tout remplacer ni repartir de zéro.",
  },
  {
    title: "Plus d’impact visuel",
    description:
      "Obtenez une cuisine plus moderne, plus lumineuse et mieux adaptée à votre style.",
  },
];

export default function Resurface() {
  return (
    <section className="bg-neutral-950 px-6 py-24 text-white lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
            Resurfaçage intérieur
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
              Pourquoi remplacer quand vous pouvez resurfacer?
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              Le resurfaçage permet de transformer l’apparence de vos surfaces
              existantes avec des finis modernes, sans les contraintes d’une
              rénovation complète.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 md:grid-cols-2 lg:grid-cols-4">
          {points.map((point, index) => (
            <article key={point.title} className="bg-neutral-900 p-8">
              <span className="text-sm text-white/35">0{index + 1}</span>

              <h3 className="mt-16 text-2xl font-medium tracking-[-0.03em] text-white">
                {point.title}
              </h3>

              <p className="mt-5 leading-7 text-white/55">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}