 import Image from "next/image";
import Reveal from "@/components/Reveal";

const finishes = [
  {
    name: "Bois naturel",
    description:
      "Des textures chaleureuses et intemporelles inspirées du chêne et du noyer.",
    image: "/images/finishes/finish-wood.png",
    size: "large",
  },
  {
    name: "Pierre et marbre",
    description:
      "L’élégance de la pierre naturelle avec une finition raffinée et contemporaine.",
    image: "/images/finishes/finish-marble.png",
    size: "standard",
  },
  {
    name: "Fini ultra-mat",
    description:
      "Une surface douce, sobre et moderne avec très peu de réflexion.",
    image: "/images/finishes/finish-matte.png",
    size: "standard",
  },
  {
    name: "Béton architectural",
    description:
      "Une texture minérale subtile pour une ambiance urbaine et sophistiquée.",
    image: "/images/finishes/finish-concrete.png",
    size: "standard",
  },
  {
    name: "Cachemire et greige",
    description:
      "Des tons neutres, chaleureux et élégants pour une cuisine intemporelle.",
    image: "/images/finishes/finish-cashmere.png",
    size: "standard",
  },
  {
    name: "Fini haute brillance",
    description:
      "Une surface lumineuse aux reflets contrôlés pour un style contemporain.",
    image: "/images/finishes/finish-glossy.png",
    size: "large",
  },
];

export default function Finishes() {
  return (
    <section
      id="finishes"
      className="overflow-hidden bg-[#f3f1ed] px-4 py-24 sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
              Finitions disponibles
            </p>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-500">
              Une sélection de textures et de couleurs adaptée aux espaces
              résidentiels et commerciaux.
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-7xl">
              Des surfaces qui changent complètement la perception de votre
              espace.
            </h2>
          </div>
        </div>

        </Reveal>

        <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {finishes.map((finish, index) => {
            let columnClass = "lg:col-span-5";

            if (finish.size === "large") {
              columnClass = "lg:col-span-7";
            }

            if (index === 2 || index === 3) {
              columnClass = "lg:col-span-6";
            }

            return (
              <Reveal
                key={finish.name}
                delay={(index % 2) * 110}
                className={columnClass}
              >
              <article className="group relative h-full min-h-[460px] overflow-hidden rounded-[2rem] bg-neutral-900">
                <Image
                  src={finish.image}
                  alt={`Finition architecturale ${finish.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 58vw"
                  className="object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/5" />

                <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-black/20 text-xs font-medium text-white/80 backdrop-blur-md">
                  0{index + 1}
                </div>

                <div className="absolute inset-x-0 bottom-0 p-7 text-white sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                    Collection architecturale
                  </p>

                  <h3 className="mt-3 text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
                    {finish.name}
                  </h3>

                  <div className="grid transition-all duration-500 ease-out lg:grid-rows-[0fr] lg:opacity-0 lg:group-hover:grid-rows-[1fr] lg:group-hover:opacity-100">
                    <div className="overflow-hidden">
                      <p className="max-w-md pt-4 leading-7 text-white/70">
                        {finish.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-5">
                    <span className="text-sm text-white/65">
                      Voir la finition
                    </span>

                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col gap-5 border-t border-neutral-300 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-sm leading-7 text-neutral-500">
            Les couleurs et textures peuvent varier selon l’éclairage et les
            écrans. Des échantillons sont disponibles pour confirmer votre
            sélection.
          </p>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
          >
            Voir les échantillons
            <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="mt-12 flex flex-col gap-6 rounded-[2rem] border border-black/10 bg-white p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
  <div>
    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
      Plus de possibilités
    </p>

    <h3 className="mt-3 text-2xl font-medium tracking-[-0.03em] text-neutral-950 sm:text-3xl">
      Vous cherchez une couleur précise?
    </h3>

    <p className="mt-3 max-w-2xl leading-7 text-neutral-600">
      Découvrez notre catalogue complet de couleurs, textures et finis
      architecturaux.
    </p>
  </div>

  <a
    href="#contact"
    className="inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
  >
    Demander notre catalogue
    <span aria-hidden="true">↗</span>
  </a>
</div>
      </div>
    </section>
  );
}