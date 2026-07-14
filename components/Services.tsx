const services = [
  {
    number: "01",
    title: "Revêtement de cuisine",
    description:
      "Transformation complète des cuisines avec des revêtements modernes, sans démolition et sans remplacer toute la structure.",
  },
  {
    number: "02",
    title: "Portes d’armoires et panneaux",
    description:
      "Application professionnelle sur les portes, tiroirs, côtés, panneaux et détails pour créer une finition uniforme.",
  },
  {
    number: "03",
    title: "Espaces commerciaux",
    description:
      "Rénovation de comptoirs, réceptions, bureaux et espaces commerciaux avec une apparence plus moderne et raffinée.",
  },
];

const benefits = [
  "Sans démolition",
  "Plus rapide qu’une rénovation",
  "Finitions haut de gamme",
  "Style personnalisé",
];

export default function Services() {
  return (
    <section id="services" className="bg-neutral-100 px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
            Une façon plus intelligente de rénover
          </p>

          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] text-neutral-950 md:text-6xl">
              Un nouveau style pour votre cuisine, sans tout remplacer.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600">
              Nous créons des transformations propres, rapides et élégantes
              pour les clients qui veulent moderniser leur espace sans passer
              par une rénovation complète.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-neutral-300 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div key={benefit} className="bg-white p-8">
              <span className="text-sm text-neutral-400">0{index + 1}</span>

              <h3 className="mt-16 text-xl font-medium text-neutral-950">
                {benefit}
              </h3>
            </div>
          ))}
        </div>

        <div className="mt-24">
          {services.map((service) => (
            <article
              key={service.number}
              className="grid gap-6 border-t border-neutral-300 py-10 md:grid-cols-[120px_1fr_1fr] md:items-center"
            >
              <span className="text-sm text-neutral-400">
                {service.number}
              </span>

              <h3 className="text-2xl font-medium tracking-[-0.03em] text-neutral-950 md:text-4xl">
                {service.title}
              </h3>

              <p className="max-w-md leading-7 text-neutral-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}