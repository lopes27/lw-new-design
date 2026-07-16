 export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#17130f]/90 text-white shadow-[0_8px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a href="#" className="group flex items-center gap-3">
         <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-xs font-semibold text-white">
  MS
</span>

<span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
  Maison Surface
</span>
        </a>

        <nav className="hidden items-center gap-9 text-sm text-white/70 md:flex">
          <a href="#before-after" className="transition hover:text-white">
            Avant / Après
          </a>

          <a href="#services" className="transition hover:text-white">
            Services
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projets
          </a>

          <a href="#contact" className="transition hover:text-white">
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-neutral-200"
        >
          Soumission gratuite
        </a>
      </div>
    </header>
  );
}