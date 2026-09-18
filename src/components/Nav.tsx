"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Notes", href: "#notes" },
  { label: "Skills", href: "#skills" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState<string>("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-colors ${
        scrolled ? "bg-bg/90 border-b border-border shadow-sm" : "bg-bg/60 border-b border-transparent"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center gap-4 md:gap-8">
        <a
          href="#"
          className="shrink-0 font-mono text-sm font-medium text-foreground-muted hover:text-purple-400 transition-colors"
        >
          <span className="text-purple-400">&lt;</span>Jos<span className="text-purple-400">/&gt;</span>
        </a>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <ul className="flex items-center gap-1 md:gap-2 overflow-x-auto md:overflow-visible scrollbar-none scroll-hint min-w-0">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href} className="shrink-0">
                  <a
                    href={link.href}
                    className={`block px-3 py-1.5 rounded-full text-xs md:text-sm transition-colors ${
                      isActive
                        ? "text-purple-300 bg-purple-500/15 font-medium"
                        : "text-muted-dim hover:text-foreground-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <button
            onClick={toggleTheme}
            className="shrink-0 p-2 rounded-lg text-muted-dim hover:text-foreground hover:bg-surface-alt transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size="16" /> : <Moon size="16" />}
          </button>
        </div>
      </div>
    </nav>
  );
}
