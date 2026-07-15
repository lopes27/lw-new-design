import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950">
      <Image
        src="/images/hero-kitchen-luxury.png"
        alt="Cuisine transformée par Maison Surface"
        fill
        priority
        className="object-cover object-center"
        
      />

      <div className="absolute inset-0 bg-black/15" />
<div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/15" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Revêtement de cuisine haut de gamme · Montréal & Québec
          </p>

          <h1 className="text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
  Une nouvelle cuisine.
  <span className="block text-white/60">Sans tout remplacer.</span>
</h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
  Revêtements architecturaux haut de gamme pour cuisines, armoires et
  surfaces intérieures à Montréal et partout au Québec.
</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-black transition hover:bg-neutral-200"
            >
              Demander une soumission
            </a>

            <a
              href="#projects"
              className="inline-flex justify-center rounded-full border border-white/35 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white hover:text-black"
            >
              Voir les transformations
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}