const skillGroups = [
  {
    name: "Languages",
    skills: ["Python", "C++", "C", "JavaScript", "TypeScript"],
  },
  {
    name: "ML/AI",
    skills: [
      "PyTorch",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "OpenCV",
      "LangChain",
      "ChromaDB",
      "Ollama",
    ],
  },
  {
    name: "Data",
    skills: ["Pandas", "NumPy", "SQL"],
  },
  {
    name: "Optimization",
    skills: ["CVXPY", "Gurobi"],
  },
  {
    name: "Tools",
    skills: ["Git", "Docker", "FastAPI", "Redis", "PostgreSQL"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-medium text-purple-400 tracking-widest uppercase mb-6">
          Skills
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {skillGroups.map((group) => (
            <div key={group.name}>
              <h3 className="text-xs font-medium text-muted-dim tracking-wider uppercase mb-2">
                {group.name}
              </h3>
              <ul className="space-y-1">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
