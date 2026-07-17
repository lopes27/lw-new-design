import Image from "next/image";

const marqueeItems = [
  "Bois naturel",
  "Pierre et marbre",
  "Fini ultra-mat",
  "Béton architectural",
  "Cachemire et greige",
  "Haute brillance",
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden ms-bg-dark">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/hero-kitchen-luxury.png"
          alt="Cuisine transformée par Maison Surface"
          fill
          priority
          sizes="100vw"
          className="ms-hero-image object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-black/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-6 pt-28 lg:px-10">
        <div className="max-w-5xl">
          <p
            className="ms-fade-up mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/80"
            style={{ animationDelay: "150ms" }}
          >
            Revêtement de cuisine haut de gamme · Montréal & Québec
          </p>

          <h1
            className="ms-fade-up text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: "300ms" }}
          >
            Une nouvelle cuisine.
            <span className="block text-white/60">Sans tout remplacer.</span>
          </h1>

          <p
            className="ms-fade-up mt-8 max-w-2xl text-base leading-8 text-white/80 md:text-lg"
            style={{ animationDelay: "480ms" }}
          >
            Revêtements architecturaux haut de gamme pour cuisines, armoires et
            surfaces intérieures à Montréal et partout au Québec.
          </p>

          <div
            className="ms-fade-up mt-10 flex flex-col gap-4 sm:flex-row"
            style={{ animationDelay: "640ms" }}
          >
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Demander une soumission
            </a>

            <a
              href="#projects"
              className="inline-flex justify-center rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-black"
            >
              Voir les transformations
            </a>
          </div>
        </div>
      </div>

      <div
        className="ms-fade-up relative z-10 border-t border-white/10 bg-black/25 backdrop-blur-sm"
        style={{ animationDelay: "820ms" }}
      >
        <div className="ms-marquee py-5">
          <div className="ms-marquee-track">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex shrink-0 items-center"
              >
                {marqueeItems.map((item) => (
                  <span
                    key={`${copy}-${item}`}
                    className="flex items-center gap-10 pr-10 text-xs font-semibold uppercase tracking-[0.3em] text-white/60"
                  >
                    {item}
                    <span className="h-1 w-1 rounded-full bg-white/35" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
