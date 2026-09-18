"use client";

import { useState } from "react";

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="animate-fade-in max-w-5xl mx-auto grid md:grid-cols-[auto_1fr] gap-10 md:gap-16 items-center">
        <div className="w-64 h-64 md:w-88 md:h-88 rounded-full overflow-hidden border-2 border-border bg-surface-alt flex items-center justify-center mx-auto md:mx-0 shrink-0">
          {imgError ? (
            <span className="text-7xl text-muted-dim">JV</span>
          ) : (
            <img
              src="/profile.jpg"
              alt="Josue Valenzuela Perez"
              className="w-full h-full object-cover"
              onError={() => setImgError(true)}
            />
          )}
        </div>
        <div>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
            Josue Valenzuela Perez
          </h1>
          <p className="mt-1 text-lg text-muted">
            AI/ML Engineer &bull; Computer Systems Engineering Student, Class of 2026
          </p>
          <p className="text-sm text-muted-dim">
            Universidad de Guanajuato &bull; Chalmers University of Technology
          </p>

          <div className="mt-5 max-w-lg relative">
            <div className="absolute -inset-2 bg-purple-600/25 blur-xl rounded-xl" aria-hidden="true" />
            <div className="relative rounded-lg border border-purple-500/50 bg-surface px-5 py-4 font-mono text-sm leading-relaxed shadow-lg shadow-purple-900/20">
              <p className="text-muted-dim text-xs">
                <span className="text-purple-400">$</span> whoami --availability
              </p>
              <p className="mt-2 text-foreground font-semibold">
                <span className="text-purple-400">&gt;</span> status: <span className="text-green-400">open</span> &middot; internship / entry-level, full-time
              </p>
              <p className="text-foreground font-semibold">
                <span className="text-purple-400">&gt;</span> remote / hybrid / onsite, starts immediately
                <span className="animate-blink text-purple-400">&#9615;</span>
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-relaxed text-muted max-w-lg">
            AI Research Intern at CONAHCYT&apos;s National AI &amp; Data Science Lab (LNC-IACD),
            graduating from Universidad de Guanajuato in 2026 with a completed exchange at Chalmers
            University of Technology. Hands-on experience in computer vision, deep learning, and
            optimization through applied research and independent ML projects.
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Computer Vision", "Deep Learning", "RAG Systems", "MLOps", "Optimization"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md bg-surface text-muted border border-border"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="mailto:jos.val.pe07@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm font-medium transition-colors"
              title="jos.val.pe07@gmail.com"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4L12 13 2 4" />
              </svg>
              Get in touch
            </a>
            <a
              href="tel:+524641676847"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground-muted hover:bg-surface-alt text-sm font-medium transition-colors"
              title="+52 (464) 167-6847"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              Call
            </a>
            <a
              href="/CV_EN.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground-muted hover:bg-surface-alt text-sm font-medium transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Resume
            </a>
            <a
              href="#notes"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-foreground-muted hover:bg-surface-alt text-sm font-medium transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                <line x1="8" y1="7" x2="16" y2="7" />
                <line x1="8" y1="11" x2="14" y2="11" />
              </svg>
              Notes
            </a>
            <span className="flex items-center gap-1.5 text-sm text-muted-dim">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Guanajuato, Mexico
            </span>
          </div>

          <div className="mt-5 flex items-center gap-4">
            <a
              href="https://github.com/JosueVP17"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-dim hover:text-purple-400 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/josue-valenzuela-perez-84979b336"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-dim hover:text-purple-400 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://leetcode.com/u/JosueVP17/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-dim hover:text-purple-400 transition-colors"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.47-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.52 8.71l6.213-6.24a1.374 1.374 0 00.03-1.942 1.38 1.38 0 00-.963-.529z" />
                <path d="M12.484 3a1.374 1.374 0 00-.961.438l-6.93 6.944a5.527 5.527 0 00-.518.578l8.328 8.159c.545.54 1.428.537 1.972-.003a1.38 1.38 0 00.003-1.955l-5.776-5.666 6.162-6.208a1.378 1.378 0 00.003-1.951 1.38 1.38 0 00-.965-.437z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
