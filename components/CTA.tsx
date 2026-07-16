 "use client";

import { useState } from "react";
import type { FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

// Cole aqui o endpoint copiado no Formspree.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xbdndkyr";

// Coloque o número com código do país, somente números.
// Exemplo canadense: 15141234567
const WHATSAPP_NUMBER = "15145818948";

const whatsappMessage = encodeURIComponent(
  "Bonjour Maison Surface, je viens de remplir le formulaire de soumission. Voici les photos de mon projet."
);

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`;

export default function CTA() {
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Impossible d’envoyer le formulaire.");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-neutral-950 px-4 py-24 text-white sm:px-6 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
              Demande de soumission
            </p>

            <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.03] tracking-[-0.05em] sm:text-5xl lg:text-7xl">
              Parlez-nous de votre projet.
            </h2>

            <p className="mt-7 max-w-md text-base leading-8 text-white/60">
              Remplissez le formulaire avec quelques informations. Nous vous
              contacterons pour discuter de votre espace, de la finition
              recherchée et des prochaines étapes.
            </p>

            <div className="mt-10 border-t border-white/10 pt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/35">
                Pour une estimation plus précise
              </p>

              <p className="mt-4 max-w-md leading-7 text-white/60">
                Après l’envoi, vous pourrez nous transmettre des photos de votre
                cuisine ou de votre espace directement sur WhatsApp.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white p-7 text-neutral-950 sm:p-10 lg:p-12">
            {status === "success" ? (
              <div className="flex min-h-[560px] flex-col justify-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-neutral-950 text-xl text-white">
                  ✓
                </span>

                <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                  Demande envoyée
                </p>

                <h3 className="mt-5 max-w-lg text-4xl font-medium leading-tight tracking-[-0.04em]">
                  Merci. Envoyez-nous maintenant les photos de votre projet.
                </h3>

                <p className="mt-6 max-w-lg leading-7 text-neutral-600">
                  Les photos nous aideront à mieux comprendre les surfaces à
                  transformer et à préparer une estimation plus précise.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-9 inline-flex w-fit items-center gap-3 rounded-full bg-neutral-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800"
                >
                  Envoyer les photos sur WhatsApp
                  <span aria-hidden="true">↗</span>
                </a>

                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-5 w-fit text-sm font-medium text-neutral-500 underline underline-offset-4 transition hover:text-neutral-950"
                >
                  Envoyer une autre demande
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="_gotcha"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <input
                  type="hidden"
                  name="_subject"
                  value="Nouvelle demande de soumission — Maison Surface"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Nom complet
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Votre nom"
                      className="mt-3 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-4 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Téléphone
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      inputMode="tel"
                      autoComplete="tel"
                      placeholder="514 000-0000"
                      className="mt-3 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-4 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Courriel
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="nom@courriel.com"
                      className="mt-3 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-4 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="city"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Ville
                    </label>

                    <input
                      id="city"
                      name="city"
                      type="text"
                      required
                      autoComplete="address-level2"
                      placeholder="Laval, Montréal, Terrebonne..."
                      className="mt-3 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-4 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Type de projet
                    </label>

                    <select
                      id="project"
                      name="project"
                      required
                      defaultValue=""
                      className="mt-3 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-4 outline-none transition focus:border-neutral-950 focus:bg-white"
                    >
                      <option value="" disabled>
                        Sélectionnez
                      </option>
                      <option value="Cuisine">Cuisine</option>
                      <option value="Salle de bain">Salle de bain</option>
                      <option value="Mobilier intégré">
                        Mobilier intégré
                      </option>
                      <option value="Espace commercial">
                        Espace commercial
                      </option>
                      <option value="Autre">Autre</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="finish"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Finition recherchée
                    </label>

                    <select
                      id="finish"
                      name="finish"
                      defaultValue=""
                      className="mt-3 w-full rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-4 outline-none transition focus:border-neutral-950 focus:bg-white"
                    >
                      <option value="">Je ne sais pas encore</option>
                      <option value="Bois naturel">Bois naturel</option>
                      <option value="Marbre">Marbre</option>
                      <option value="Mat">Mat</option>
                      <option value="Béton">Béton</option>
                      <option value="Cachemire">Cachemire</option>
                      <option value="Brillant">Brillant</option>
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-neutral-700"
                    >
                      Parlez-nous de votre projet
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Décrivez brièvement les surfaces que vous souhaitez transformer..."
                      className="mt-3 w-full resize-none rounded-2xl border border-neutral-300 bg-neutral-50 px-4 py-4 outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:bg-white"
                    />
                  </div>
                </div>

                {status === "error" && (
                  <p
                    role="alert"
                    className="mt-6 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    Une erreur est survenue. Veuillez réessayer ou nous
                    contacter directement sur WhatsApp.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-full bg-neutral-950 px-6 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-neutral-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending"
                    ? "Envoi en cours..."
                    : "Envoyer ma demande"}

                  {status !== "sending" && (
                    <span aria-hidden="true">↗</span>
                  )}
                </button>

                <p className="mt-5 text-xs leading-5 text-neutral-400">
                  Vos informations seront utilisées uniquement pour répondre à
                  votre demande de soumission.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}