 const socialLinks = [
  {
    label: "Instagram",
    shortLabel: "IG",
    href: "https://www.instagram.com/maisonsurfacewrap/",
  },
  {
    label: "Facebook",
    shortLabel: "FB",
    href: "https://www.facebook.com/maisonsurfaceQC",
  },
  {
    label: "WhatsApp",
    shortLabel: "WA",
    href: "https://wa.me/15145818948",
  },
  {
    label: "Courriel",
    shortLabel: "@",
    href: "mailto:maisonsurfacecontact@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#110f0d] px-4 py-12 text-white sm:px-6 lg:px-10 lg:py-16">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 border-b border-white/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xs font-semibold">
                MS
              </span>

              <span className="text-sm font-semibold uppercase tracking-[0.25em]">
                Maison Surface
              </span>
            </a>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50">
              Revêtements architecturaux pour cuisines, armoires et surfaces
              intérieures. Une transformation élégante sans tout remplacer.
            </p>

            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-neutral-200"
            >
              Demander une soumission
              <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              Navigation
            </p>

            <nav className="mt-6 flex flex-col gap-4 text-sm text-white/60">
              <a href="#avant-apres" className="transition hover:text-white">
                Avant / Après
              </a>

              <a href="#services" className="transition hover:text-white">
                Services
              </a>

              <a href="#projects" className="transition hover:text-white">
                Projets
              </a>

              <a href="#process" className="transition hover:text-white">
                Notre processus
              </a>

              <a href="#contact" className="transition hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/35">
              Nous suivre
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {socialLinks.map((social) => {
                const isEmail = social.href.startsWith("mailto:");

                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    aria-label={social.label}
                    className="group flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3 text-sm text-white/65 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
                  >
                    <span>{social.label}</span>

                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-[10px] font-semibold transition group-hover:bg-white group-hover:text-neutral-950">
                      {social.shortLabel}
                    </span>
                  </a>
                );
              })}
            </div>

            <p className="mt-7 text-xs uppercase leading-6 tracking-[0.16em] text-white/30">
              Montréal · Laval
              <br />
              Rive-Nord · Rive-Sud
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Maison Surface. Tous droits réservés.</p>

          <div className="flex gap-5">
            <a href="#" className="transition hover:text-white">
              Politique de confidentialité
            </a>

            <a href="#contact" className="transition hover:text-white">
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}