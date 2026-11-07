import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { RESUME_URL } from "@/lib/profile";

const links = [
  { id: "about", text: "About" },
  { id: "experience", text: "Experience" },
  { id: "projects", text: "Projects" },
  { id: "skills", text: "Stack" },
  { id: "education", text: "Education" },
  { id: "contact", text: "Contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [active, setActive] = useState("");

  // Highlight the section that crosses the middle of the viewport.
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("main section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-zinc-950/70 py-2 pl-5 pr-2 shadow-lg shadow-black/20 backdrop-blur-xl"
      >
        <a href="#home" className="font-mono text-sm font-medium text-white">
          fardin<span className="text-emerald-400">.dev</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ id, text }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? "true" : undefined}
                className={`relative block rounded-full px-4 py-2 text-sm transition-colors ${
                  active === id ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                {active === id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                {text}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={RESUME_URL}
            download
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-200 sm:inline-flex"
          >
            Résumé
          </a>
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="grid size-10 place-items-center rounded-full text-white hover:bg-white/10 md:hidden"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <ul
          id="mobile-nav"
          className="mx-auto mt-2 max-w-6xl space-y-1 rounded-2xl border border-white/10 bg-zinc-950/95 p-2 backdrop-blur-xl md:hidden"
        >
          {links.map(({ id, text }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                {text}
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_URL}
              download
              className="block rounded-xl px-4 py-3 font-medium text-emerald-300 hover:bg-white/5"
            >
              Download résumé
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
