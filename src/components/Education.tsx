"use client";

import { useState } from "react";

function UniLogo({ src, alt, fallback, light }: { src: string; alt: string; fallback: string; light?: boolean }) {
  const [error, setError] = useState(false);
  return (
    <div className={`shrink-0 w-28 h-28 rounded-xl overflow-hidden flex items-center justify-center ${light ? "bg-white p-4" : "bg-surface"}`}>
      {error ? (
        <span className="text-sm text-muted-dim font-medium">{fallback}</span>
      ) : (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain"
          onError={() => setError(true)}
        />
      )}
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-6">
          Education
        </h2>
        <div className="space-y-4">
          <div className="border border-border rounded-xl p-5 flex items-start gap-5">
            <UniLogo src="/ugto.png" alt="UGTO" fallback="UG" />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between flex-wrap gap-1">
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    Universidad de Guanajuato
                  </h3>
                  <p className="text-sm text-muted-dim">
                    Bachelor&apos;s in Computer Systems Engineering
                  </p>
                </div>
                <span className="text-sm text-muted-dim shrink-0">2022 – 2026</span>
              </div>
              <p className="mt-2 text-sm text-muted">
                GPA 9.8 &bull; High honors two consecutive years
              </p>
            </div>
          </div>
          <div className="border border-border rounded-xl p-5 flex items-start gap-5">
            <UniLogo src="/chalmers.png" alt="Chalmers" fallback="CT" light />
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between flex-wrap gap-1">
                <div>
                  <h3 className="text-base font-medium text-foreground">
                    Chalmers University of Technology
                  </h3>
                  <p className="text-sm text-muted-dim">
                    Study Abroad — Data Science and AI
                  </p>
                </div>
                <span className="text-sm text-muted-dim shrink-0">Jan – Jun 2026</span>
              </div>
              <p className="mt-2 text-sm text-muted">
                Design of AI Systems, Discrete Optimization, Applied ML, Computational
                Techniques for Large-Scale Data
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
