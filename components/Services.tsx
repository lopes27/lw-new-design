 "use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/Reveal";

const services = [
  {
    number: "01",
    name: "Cuisine",
    title: "Transformez votre cuisine sans tout remplacer.",
    description:
      "Nous modernisons les armoires, les portes, les panneaux et les îlots tout en conservant la structure existante.",
    details: ["Armoires", "Portes", "Panneaux", "Îlots"],
    image: "/images/services/service-kitchen2.jpeg",
  },
  {
    number: "02",
    name: "Salle de bain",
    title: "Créez une nouvelle ambiance sans rénovation complète.",
    description:
      "Nous transformons les meubles-lavabos, les rangements et les surfaces décoratives avec une finition adaptée.",
    details: ["Meubles-lavabos", "Rangements", "Panneaux", "Surfaces"],
    image: "/images/services/service-bathroom1.jpeg",
  },
  {
    number: "03",
    name: "Mobilier intégré",
    title: "Donnez une nouvelle identité à votre mobilier.",
    description:
      "Bibliothèques, rangements et meubles intégrés peuvent être modernisés avec des textures architecturales.",
    details: ["Bibliothèques", "Rangements", "Meubles", "Détails"],
    image: "/images/services/service-furniture4.jpeg",
  },
  {
    number: "04",
    name: "Espaces commerciaux",
    title: "Modernisez rapidement vos surfaces professionnelles.",
    description:
      "Une solution adaptée aux comptoirs, réceptions, bureaux et panneaux commerciaux.",
    details: ["Réceptions", "Comptoirs", "Bureaux", "Panneaux"],
    image: "/images/services/service-commercial3.jpeg",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section
      id="services"
      className="ms-bg-cream scroll-mt-24 px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Ce que nous transformons
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
                Sélectionnez un espace pour découvrir ce que Maison Surface
                peut moderniser.
              </p>
            </div>

            <h2 className="max-w-4xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-7xl">
              Une solution adaptée à chaque espace.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="overflow-hidden rounded-[2rem] border border-black/10 bg-[#171816] text-white shadow-[0_30px_100px_rgba(20,20,18,0.14)]">
            <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
              <div className="flex flex-col">
                <div className="border-b border-white/10 p-6 sm:p-8 lg:p-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">
                    Sélectionnez un espace
                  </p>
                </div>

                <div className="flex-1">
                  {services.map((service, index) => {
                    const isActive = index === activeIndex;

                    return (
                      <button
                        key={service.name}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`group grid w-full grid-cols-[44px_1fr_auto] items-center gap-4 border-b border-white/10 px-6 py-6 text-left transition duration-300 sm:px-8 lg:px-10 ${
                          isActive
                            ? "bg-white text-neutral-950"
                            : "text-white hover:bg-white/5"
                        }`}
                      >
                        <span
                          className={`text-xs font-medium ${
                            isActive ? "text-neutral-400" : "text-white/35"
                          }`}
                        >
                          {service.number}
                        </span>

                        <span className="text-lg font-medium sm:text-xl">
                          {service.name}
                        </span>

                        <span
                          aria-hidden="true"
                          className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm transition duration-300 ${
                            isActive
                              ? "rotate-45 border-neutral-300 bg-neutral-950 text-white"
                              : "border-white/20 text-white/60 group-hover:border-white/50"
                          }`}
                        >
                          ↗
                        </span>
                      </button>
                    );
                  })}
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-neutral-200"
                  >
                    Demander une soumission
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>

              <div className="relative min-h-[580px] overflow-hidden lg:min-h-[680px]">
                {services.map((service, index) => (
                  <Image
                    key={service.name}
                    src={service.image}
                    alt={`${service.name} transformée par Maison Surface`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className={`object-cover transition duration-700 ease-out ${
                      index === activeIndex
                        ? "scale-100 opacity-100"
                        : "pointer-events-none scale-[1.04] opacity-0"
                    }`}
                  />
                ))}

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

                <div
                  key={activeService.name}
                  className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-12"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
                    {activeService.name}
                  </p>

                  <h3 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">
                    {activeService.title}
                  </h3>

                  <p className="mt-5 max-w-2xl leading-7 text-white/70">
                    {activeService.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {activeService.details.map((detail) => (
                      <span
                        key={detail}
                        className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs text-white/75 backdrop-blur-md"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <div className="mt-5 grid overflow-hidden rounded-[1.5rem] border border-black/10 bg-white sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Structure conservée",
              "Finitions architecturales",
              "Résidentiel et commercial",
              "Évaluation gratuite",
            ].map((item, index) => (
              <div
                key={item}
                className="border-b border-black/10 px-6 py-6 last:border-b-0 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <span className="text-xs text-neutral-400">
                  0{index + 1}
                </span>

                <p className="mt-3 font-medium text-neutral-950">{item}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}