 "use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const steps = [
  {
    number: "01",
    title: "Envoyez vos photos",
    description:
      "Montrez-nous votre cuisine, votre salle de bain ou votre espace commercial.",
    detail:
      "Quelques photos suffisent pour comprendre les surfaces, l’état actuel et le type de transformation souhaité.",
  },
  {
    number: "02",
    title: "Choisissez votre finition",
    description:
      "Nous vous aidons à sélectionner la couleur, la texture et le style adaptés.",
    detail:
      "Bois, pierre, mat, cachemire, béton ou haute brillance selon l’ambiance recherchée.",
  },
  {
    number: "03",
    title: "Nous transformons votre espace",
    description:
      "Les surfaces sont préparées et revêtues avec précision.",
    detail:
      "Une installation propre, soignée et pensée pour conserver la structure existante.",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="process"
      className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      <div className="mx-auto max-w-[1500px]">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-500">
                Comment ça fonctionne
              </p>

              <p className="mt-5 max-w-md text-sm leading-7 text-neutral-600">
                Un processus simple, clair et sans étapes inutiles.
              </p>
            </div>

            <h2 className="max-w-5xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] text-neutral-950 sm:text-5xl lg:text-7xl">
              Trois étapes pour transformer votre espace.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-14 overflow-hidden rounded-[2rem] border border-black/10 bg-white shadow-[0_30px_100px_rgba(20,20,18,0.09)]">
            <div className="grid lg:grid-cols-3">
              {steps.map((step, index) => {
                const isActive = index === activeStep;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    onMouseEnter={() => setActiveStep(index)}
                    className={`group relative min-h-[320px] border-b border-black/10 p-7 text-left transition duration-500 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 sm:p-9 ${
                      isActive
                        ? "bg-[#171816] text-white"
                        : "bg-white text-neutral-950 hover:bg-neutral-50"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={`text-sm font-medium ${
                          isActive ? "text-white/45" : "text-neutral-400"
                        }`}
                      >
                        {step.number}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex h-10 w-10 items-center justify-center rounded-full border transition duration-300 ${
                          isActive
                            ? "rotate-45 border-white/25 bg-white text-neutral-950"
                            : "border-black/10 text-neutral-500 group-hover:border-black/30"
                        }`}
                      >
                        ↗
                      </span>
                    </div>

                    <div className="mt-20">
                      <h3 className="max-w-xs text-2xl font-medium leading-tight tracking-[-0.03em] sm:text-3xl">
                        {step.title}
                      </h3>

                      <p
                        className={`mt-5 max-w-sm leading-7 ${
                          isActive ? "text-white/65" : "text-neutral-600"
                        }`}
                      >
                        {step.description}
                      </p>
                    </div>

                    <div
                      className={`absolute inset-x-7 bottom-7 h-px origin-left transition duration-500 sm:inset-x-9 sm:bottom-9 ${
                        isActive
                          ? "scale-x-100 bg-white/35"
                          : "scale-x-0 bg-black/20"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            <div className="grid gap-8 border-t border-black/10 bg-[#f5f2ed] p-7 sm:p-9 lg:grid-cols-[1fr_auto] lg:items-center">
              <div key={activeStep}>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Étape {steps[activeStep].number}
                </p>

                <p className="mt-4 max-w-3xl text-lg leading-8 text-neutral-700">
                  {steps[activeStep].detail}
                </p>
              </div>

              <a
                href="#contact"
                className="inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
              >
                Commencer mon projet
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}