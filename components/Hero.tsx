import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950">
      <Image
        src="/images/hero-kitchen.png"
        alt="Modern kitchen transformation by LW New Design"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/15" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/25" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
            Revêtement de cuisine haut de gamme · Montréal & Québec
          </p>

          <h1 className="text-5xl font-medium leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Transformez votre cuisine.
            <span className="block text-white/60">Sans rénovation complète.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-white/78 md:text-lg">
  Nous transformons les cuisines, les armoires et les surfaces avec des
  revêtements haut de gamme, une finition précise et beaucoup moins de
  complications qu’une rénovation traditionnelle.
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
              Voir les projets
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}