const finishes = [
  {
    name: "Bois naturel",
    description: "Une apparence chaleureuse, élégante et intemporelle.",
  },
  {
    name: "Pierre et marbre",
    description: "Un effet raffiné pour créer une cuisine plus luxueuse.",
  },
  {
    name: "Fini mat",
    description: "Un rendu moderne, sobre et très actuel.",
  },
  {
    name: "Fini brillant",
    description: "Une surface lumineuse avec un effet plus contemporain.",
  },
  {
    name: "Béton architectural",
    description: "Un style minimaliste, urbain et sophistiqué.",
  },
  {
    name: "Couleurs unies",
    description: "Des tons neutres ou audacieux selon votre projet.",
  },
];

export default function Finishes() {
  return (
    <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Finitions disponibles
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
              Des textures et finis pensés pour transformer votre espace.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Choisissez parmi une sélection de finis modernes pour créer une
              cuisine plus chaleureuse, plus lumineuse ou plus contemporaine.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {finishes.map((finish) => (
            <article
              key={finish.name}
              className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-8 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl"
            >
              <div className="mb-10 h-40 rounded-[1.5rem] bg-[linear-gradient(135deg,#d8d1c7,#f4f0ea,#9b9185)]" />

              <h3 className="text-2xl font-medium tracking-[-0.03em] text-neutral-950">
                {finish.name}
              </h3>

              <p className="mt-4 leading-7 text-neutral-600">
                {finish.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}