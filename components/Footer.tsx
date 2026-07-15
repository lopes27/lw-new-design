export default function Footer() {
  return (
    <footer className="bg-white px-6 pb-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-neutral-200 pt-10 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
        <p>© 2026 Maison Surface. Tous droits réservés.</p>

        <div className="flex gap-6">
          <a href="#" className="transition hover:text-neutral-950">
            Instagram
          </a>

          <a href="#" className="transition hover:text-neutral-950">
            Facebook
          </a>

          <a href="mailto:contact@lwnewdesign.ca" className="transition hover:text-neutral-950">
            Courriel
          </a>
        </div>
      </div>
    </footer>
  );
}