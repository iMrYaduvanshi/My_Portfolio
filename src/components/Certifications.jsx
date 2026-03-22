function Certifications() {
  const certifications = [
    {
      title: "Data Science Job Simulation",
      issuer: "Forage",
      focus: "Data analysis, problem solving, and practical simulation work",
    },
    {
      title: "Microsoft AI Fundamentals",
      issuer: "Microsoft",
      focus: "Core AI concepts and foundational machine learning understanding",
    },
    {
      title: "Python for Data Science",
      issuer: "NPTEL",
      focus: "Python-based data workflows and analytics fundamentals",
    },
  ]

  return (
    <section
      id="certifications"
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-[120px]"></div>
      <div className="absolute right-0 bottom-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[120px]"></div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Certifications
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Verified learning that supports
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              my technical foundation
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-slate-300">
            A concise set of certifications aligned with Python, AI
            fundamentals, and data-focused problem solving.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {certifications.map((item, index) => (
            <article
              key={item.title}
              className="group rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.14)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-cyan-300">
                  Certified
                </span>
                <span className="text-xs text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{item.issuer}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.focus}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
