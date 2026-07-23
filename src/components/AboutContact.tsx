export default function AboutContact() {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-4">
            About
          </h2>
          <p className="text-sm leading-relaxed text-zinc-400">
            Computer Systems Engineering student pursuing an ML internship. Hands-on experience in
            artificial intelligence, computer vision, data engineering, and optimization through
            research and applied ML projects. Currently at Universidad de Guanajuato with a completed
            exchange program at Chalmers University of Technology in Gothenburg, Sweden.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {["Computer Vision", "Deep Learning", "RAG Systems", "MLOps", "Optimization"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs rounded-md bg-zinc-900 text-zinc-400 border border-zinc-800"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
        <div id="contact">
          <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-4">
            Contact
          </h2>
          <div className="space-y-3">
            <a
              href="mailto:jos.val.pe07@gmail.com"
              className="block text-base text-white hover:text-purple-400 transition-colors font-medium"
            >
              jos.val.pe07@gmail.com
            </a>
            <div className="text-sm text-zinc-500 leading-relaxed">
              Guanajuato, Mexico<br />
              +52 (464) 167-6847
            </div>
            <div className="flex items-center gap-5 pt-2">
              <a
                href="https://github.com/JosueVP17"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/josue-valenzuela-perez-84979b336"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://leetcode.com/u/JosueVP17/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-white transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.47-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.52 8.71l6.213-6.24a1.374 1.374 0 00.03-1.942 1.38 1.38 0 00-.963-.529z" />
                  <path d="M12.484 3a1.374 1.374 0 00-.961.438l-6.93 6.944a5.527 5.527 0 00-.518.578l8.328 8.159c.545.54 1.428.537 1.972-.003a1.38 1.38 0 00.003-1.955l-5.776-5.666 6.162-6.208a1.378 1.378 0 00.003-1.951 1.38 1.38 0 00-.965-.437z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
