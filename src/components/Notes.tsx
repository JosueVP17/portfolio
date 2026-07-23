"use client";

import FadeIn from "./FadeIn";

const notes = [
  {
    title: "Backpropagation",
    description: "Step-by-step derivation of the backpropagation algorithm for training neural networks, from the chain rule to weight updates.",
    file: "/notes/backpropagation.pdf",
    tags: ["Deep Learning", "Calculus"],
  },
];

export default function Notes() {
  return (
    <section id="notes" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-6">
          Notes
        </h2>
        <p className="text-sm text-muted mb-6 max-w-lg">
          Quick technical explanations on AI/ML concepts I&apos;ve written up.
        </p>
        <FadeIn>
          <div className="space-y-3">
            {notes.map((note) => (
              <a
                key={note.title}
                href={note.file}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-border rounded-xl p-5 hover:border-foreground-muted transition-colors"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-foreground group-hover:text-purple-400 transition-colors">
                      {note.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted leading-relaxed">
                      {note.description}
                    </p>
                  </div>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    className="shrink-0 mt-0.5 text-muted-dim group-hover:text-purple-400 transition-colors"
                  >
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded-md bg-surface text-muted-dim border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
