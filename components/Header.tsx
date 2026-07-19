"use client";

import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Avant / Après", href: "#before-after" },
  { label: "Finitions", href: "#popular-finishes" },
  { label: "Projets", href: "#projects" },
  { label: "Processus", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(0);

  // Bloqueia o scroll do fundo quando o menu mobile está aberto.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Header réactif : compact après le hero, se cache en défilant
  // vers le bas et réapparaît dès qu'on remonte.
  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setScrolled(y > 24);
      setHidden(y > 140 && y > lastY.current && !menuOpen);
      lastY.current = y;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "border-white/10 bg-[#17130f]/92 shadow-[0_8px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "border-transparent bg-gradient-to-b from-black/55 to-transparent"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-500 lg:px-10 ${
          scrolled ? "py-3.5" : "py-5"
        }`}
      >
        <a
          href="#"
          className="group flex items-center gap-3"
          onClick={() => setMenuOpen(false)}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-xs font-semibold text-white transition-transform duration-500 group-hover:rotate-[360deg]">
            MS
          </span>

          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white">
            Maison Surface
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm text-white/80 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link relative transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-3 text-xs font-semibold text-neutral-950 transition duration-300 hover:-translate-y-0.5 hover:bg-neutral-200 sm:inline-flex"
          >
            Soumission gratuite
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 md:hidden"
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[6px] h-[2px] w-full bg-white transition-opacity duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[12px] h-[2px] w-full bg-white transition-transform duration-300 ${
                  menuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/10 bg-[#17130f]/95 backdrop-blur-xl transition-[max-height] duration-300 ease-out md:hidden ${
          menuOpen ? "max-h-[420px]" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-6 py-5">
          {navLinks.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${index * 45}ms` : "0ms" }}
              className={`rounded-2xl px-3 py-3 text-base text-white/80 transition-all duration-300 hover:bg-white/5 hover:text-white ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0"
              }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-3 inline-flex justify-center rounded-full bg-white px-5 py-3.5 text-sm font-semibold text-neutral-950"
          >
            Soumission gratuite
          </a>
        </nav>
      </div>
    </header>
  );
}
