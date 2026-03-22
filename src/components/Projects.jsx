function Projects() {
  const projects = [
    {
      title: "PyJac (Universal Compiler)",
      label: "Python Application",
      desc: "A Python-based universal compiler GUI built with modular OOP design to simplify compiler detection and execution workflows.",
      stack: ["Python", "OOP", "PyInstaller", "GUI"],
      features: [
        "Modular architecture for cleaner compiler management",
        "Automatic detection of C, C++, Java, and Python compilers",
        "Executable packaging using PyInstaller",
      ],
      accent: "from-fuchsia-500/20 to-cyan-400/20",
      liveLink: "",
      githubLink: "https://github.com/iMrYaduvanshi/Universal_Compiler",
    },
    {
      title: "Spotify Music Recommendation System",
      label: "ML Project",
      desc: "A machine learning project that groups similar songs and supports recommendation logic using clustering and feature-based analysis.",
      stack: ["Python", "Pandas", "NumPy", "Scikit-learn"],
      features: [
        "Applied K-Means clustering for song grouping",
        "Performed preprocessing and feature engineering",
        "Visualized insights using Matplotlib and Seaborn",
      ],
      accent: "from-emerald-400/20 to-cyan-400/20",
      liveLink: "",
      githubLink: "https://github.com/iMrYaduvanshi/Spotify-Music-Recommendation-System-Using-KMeans",
    },
    {
      title: "Mini Banking Application",
      label: "Java CLI Project",
      desc: "A command-line based banking system built using Java and MySQL to handle core banking operations with a simple, menu-driven user flow.",
      stack: ["Java", "MySQL", "JDBC", "Command Line"],
      features: [
        "User login and secure account access",
        "Money transfer between accounts",
        "Check account balance instantly",
        "Deposit and withdraw money",
        "View account details and transaction actions",
      ],
      accent: "from-amber-400/20 to-cyan-400/20",
      liveLink: "",
      githubLink: "https://github.com/iMrYaduvanshi/Mini-Banking-Application",
    },
  ]

  return (
    <section id="projects" className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[120px]"></div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Project Archive
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Selected work from my
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              full stack project lab
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-slate-300">
            A focused set of projects across Python, machine learning, and Java
            application development, presented with clear stack and outcome.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-4 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 sm:rounded-[2rem] sm:p-6"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.accent} opacity-60`}></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.14),transparent_35%)]"></div>

              <div className="relative grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                <div>
                  <div className="mb-4 flex flex-wrap items-center gap-3 sm:mb-6">
                    <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-cyan-300 sm:text-xs sm:tracking-[0.25em]">
                      {project.label}
                    </span>
                    <span className="text-sm text-white/45">
                      {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-white sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300 sm:mt-4 sm:text-base">
                    {project.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6 sm:gap-3">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200 sm:px-4 sm:py-2 sm:text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-2 sm:mt-6">
                    {project.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                      >
                        <span className="h-2 w-2 rounded-full bg-cyan-300"></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative">
                  <div className="rounded-[1.5rem] border border-white/10 bg-[linear-gradient(160deg,rgba(15,23,42,0.92),rgba(15,23,42,0.72))] p-4 shadow-[0_0_40px_rgba(15,23,42,0.35)] sm:p-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.3em] text-cyan-300 sm:text-xs">
                          Project Snapshot
                        </p>
                        <p className="mt-2 text-lg font-semibold text-white">
                          Clean structure, clear outcome
                        </p>
                      </div>
                      <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
                        {project.stack.length} tools
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                          Category
                        </p>
                        <p className="mt-2 text-sm text-white">{project.label}</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                        <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                          Focus
                        </p>
                        <p className="mt-2 text-sm text-white">{project.stack[0]}</p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      <p className="text-[10px] uppercase tracking-[0.24em] text-white/45">
                        Highlights
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {project.features.slice(0, 3).map((feature) => (
                          <span
                            key={feature}
                            className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1.5 text-xs text-slate-200"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <a
                        href={project.liveLink || "#contact"}
                        target={project.liveLink ? "_blank" : undefined}
                        rel={project.liveLink ? "noopener noreferrer" : undefined}
                        className="rounded-xl bg-white px-4 py-2 text-center text-sm font-medium text-slate-950 transition duration-300 hover:scale-105"
                      >
                        {project.liveLink ? "Live Demo" : "No Live Demo"}
                      </a>
                      <a
                        href={project.githubLink || "https://github.com/iMrYaduvanshi"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl border border-white/15 px-4 py-2 text-center text-sm text-white transition duration-300 hover:bg-white/10"
                      >
                        {project.githubLink ? "GitHub Repo" : "Profile Link"}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
