function Experience() {
  const experience = [
    {
      period: "Oct 2025 - Dec 2025",
      duration: "3 months",
      role: "Java Full Stack Intern",
      company: "EduSkills Foundation",
      desc: "Completed a virtual internship focused on full stack development, strengthening backend fundamentals as well as frontend implementation skills.",
      points: [
        "Worked with Core Java, OOP concepts, JDBC, and Spring fundamentals.",
        "Built understanding of application architecture, backend flow, and database connectivity.",
        "Used HTML, CSS, and JavaScript for interface-level implementation during guided projects.",
      ],
    },
    {
      period: "Aug 2025 - Dec 2025",
      duration: "5 months",
      role: "Open Source Developer",
      company: "GirlScript Summer of Code",
      desc: "Contributed in an open-source learning environment that improved collaboration, consistency, and practical software development discipline.",
      points: [
        "Participated in community-driven development and issue-based contribution workflows.",
        "Improved code reading, collaboration, and version control practices in a distributed setup.",
        "Strengthened problem-solving through iterative contributions and technical learning.",
      ],
    },
    {
      period: "Jul 2025",
      duration: "1 month",
      role: "Campus Ambassador",
      company: "My Job Grow",
      desc: "Represented the brand on campus and supported student engagement initiatives through promotion and coordination activities.",
      points: [
        "Helped drive awareness through digital outreach and communication campaigns.",
        "Supported event coordination and student engagement efforts in a collaborative environment.",
        "Built confidence in leadership, communication, and brand representation.",
      ],
    },
    {
      period: "Jun 2025 - Jul 2025",
      duration: "2 months",
      role: "AI Intern",
      company: "Edunet Foundation",
      desc: "Completed structured training and project work in Python, data analysis, and machine learning foundations with a practical, hands-on approach.",
      points: [
        "Worked on data cleaning, exploratory data analysis, and predictive modeling tasks.",
        "Used libraries such as Pandas, NumPy, Matplotlib, and scikit-learn on real datasets.",
        "Documented workflows and presented findings in a clear, data-driven format.",
      ],
    },
    {
      period: "Jun 2025",
      duration: "Training phase",
      role: "Data Science Trainee",
      company: "Haridwar University",
      desc: "Worked on Python-based data science and machine learning tasks with a focus on preprocessing, analysis, and model development.",
      points: [
        "Built supervised and unsupervised machine learning models using Python and Scikit-learn.",
        "Performed data preprocessing, feature engineering, and exploratory data analysis.",
        "Optimized Python scripts and improved execution efficiency during project work.",
      ],
    },
  ]

  return (
    <section id="experience" className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute left-10 top-24 h-52 w-52 rounded-full bg-fuchsia-500/10 blur-[120px]"></div>

      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Timeline
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Experience shaped by
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              full stack learning and real project work
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-slate-300">
            A concise view of my experience across full stack development, data
            science, and collaborative learning experiences.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
            Latest to earliest
          </div>
          <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
            Focused on internships, open source, and growth roles
          </div>
        </div>

        <div className="relative mx-auto max-w-4xl pl-10 sm:pl-14">
          <div className="absolute left-3 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-blue-500 to-fuchsia-500 sm:left-5"></div>

        {experience.map((item, index) => (
          <div
            key={index}
            className="relative mb-8 sm:mb-10"
          >
            <div
              className={`absolute -left-[31px] top-7 h-4 w-4 rounded-full shadow-[0_0_20px_rgba(34,211,238,0.85)] sm:-left-[39px] ${
                index === 0 ? "bg-cyan-300" : "bg-fuchsia-400"
              }`}
            ></div>

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs uppercase tracking-[0.22em] text-cyan-300">
                  {item.period}
                </span>
                <span className="text-sm text-slate-400">{item.duration}</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{item.role}</h3>
              <p className="mb-4 text-slate-400">{item.company}</p>
              <p className="text-sm leading-7 text-slate-300">{item.desc}</p>
              <div className="mt-4 space-y-2">
                {item.points.map((point) => (
                  <div key={point} className="flex gap-2 text-sm leading-6 text-slate-400">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300"></span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Experience
