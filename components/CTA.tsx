export default function CTA() {
  return (
    <section id="contact" className="bg-white px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] bg-neutral-950 px-7 py-16 text-white md:px-14 lg:px-20 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
          Soumission gratuite
        </p>

        <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 className="max-w-4xl text-4xl font-medium leading-tight tracking-[-0.05em] md:text-6xl">
              Prêt à transformer votre espace?
            </h2>

            <p className="mt-6 max-w-2xl leading-7 text-white/60">
              Envoyez-nous des photos de votre cuisine ou de votre espace
              commercial et recevez une première orientation pour votre projet.
            </p>
          </div>

          <a
            href="mailto:contact@lwnewdesign.ca"
            className="inline-flex w-fit rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
          >
            Demander une soumission
          </a>
        </div>
      </div>
    </section>
  );
}