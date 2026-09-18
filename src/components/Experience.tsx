export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-6">
          Experience
        </h2>
        <div className="border-l border-border pl-5 space-y-6">
          <div>
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-base font-medium text-foreground">
                  AI &amp; Data Science Research Intern
                </h3>
                <p className="text-sm text-muted-dim">
                  Laboratorio Nacional CONAHCYT en IA y Ciencia de Datos (LNC-IACD) · Ecatepec de Morelos, Mexico · Hybrid
                </p>
              </div>
              <span className="text-xs text-muted-dim shrink-0">Aug 2026 – Present</span>
            </div>
            <ul className="mt-3 space-y-1.5">
              <li className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-purple-500 shrink-0 mt-1.5">&#8226;</span>
                Conducting research and technological development in artificial intelligence and data science.
              </li>
              <li className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-purple-500 shrink-0 mt-1.5">&#8226;</span>
                Applying machine learning and deep learning methods to research problems, including data processing, model development, experimentation, and evaluation.
              </li>
              <li className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-purple-500 shrink-0 mt-1.5">&#8226;</span>
                Participating in ongoing research projects within LNC-IACD.
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div>
                <h3 className="text-base font-medium text-foreground">
                  Student Research Assistant
                </h3>
                <p className="text-sm text-muted-dim">Universidad de Guanajuato</p>
              </div>
              <span className="text-xs text-muted-dim shrink-0">Oct 2025 – May 2026</span>
            </div>
            <ul className="mt-3 space-y-1.5">
              <li className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-purple-500 shrink-0 mt-1.5">&#8226;</span>
                Developed robust heart rate estimation system processing real-time video streams, delivering physiological metrics within 10 seconds for clinical validation.
              </li>
              <li className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-purple-500 shrink-0 mt-1.5">&#8226;</span>
                Implemented Mediapipe Hands framework for hand ROI detection and skin mask extraction achieving 90% accuracy across diverse lighting conditions.
              </li>
              <li className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-purple-500 shrink-0 mt-1.5">&#8226;</span>
                Engineered signal processing using band-pass filters and FFT to extract heart rate signals, validated within 48-180 BPM range.
              </li>
              <li className="text-sm text-muted leading-relaxed flex gap-3">
                <span className="text-purple-500 shrink-0 mt-1.5">&#8226;</span>
                Applied experimentation workflow using Git for version control and automated testing, ensuring reproducibility across 50+ validation runs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
