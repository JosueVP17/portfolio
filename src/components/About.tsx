export default function About() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-4">
          About
        </h2>
        <p className="text-base leading-relaxed text-zinc-400 max-w-2xl">
          Computer Systems Engineering student pursuing an ML internship. Hands-on experience in
          artificial intelligence, computer vision, data engineering, and optimization through
          research and applied ML projects. Currently at Universidad de Guanajuato with a completed
          exchange program at Chalmers University of Technology in Gothenburg, Sweden.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
            Computer Vision
          </span>
          <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
            Deep Learning
          </span>
          <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
            RAG Systems
          </span>
          <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
            MLOps
          </span>
          <span className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800">
            Optimization
          </span>
        </div>
      </div>
    </section>
  );
}
