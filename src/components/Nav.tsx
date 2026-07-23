"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Notes", href: "#notes" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center gap-4 md:gap-8">
        <a href="#" className="text-base font-medium text-muted hover:text-foreground transition-colors shrink-0">
          Jos
        </a>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <ul className="flex items-center gap-3 md:gap-8 overflow-x-auto md:overflow-visible scrollbar-none scroll-hint min-w-0">
            {links.map((link) => (
              <li key={link.href} className="shrink-0">
                <a
                  href={link.href}
                  className="text-xs md:text-sm text-muted-dim hover:text-foreground-muted transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
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
