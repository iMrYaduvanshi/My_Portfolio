import profileImage from "../assets/profile.jpg"

function About() {
  const highlights = [
    { label: "Core Stack", value: "Python, Java, React, MySQL" },
    { label: "ML Tools", value: "Pandas, NumPy, Scikit-learn" },
    { label: "Based In", value: "India" },
    { label: "Open To", value: "Freelance / Full-time" },
  ]

  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="absolute top-24 left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>
      <div className="absolute bottom-16 right-12 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:64px_64px] opacity-20"></div>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2 md:gap-10 items-center">
        <div className="relative order-2 mx-auto w-full max-w-[380px] md:order-1 md:max-w-[420px] md:-translate-y-4">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border border-cyan-400/20 bg-cyan-400/5"></div>
          <div className="absolute -inset-4 bg-gradient-to-tr from-cyan-400/20 via-transparent to-fuchsia-500/20 blur-3xl"></div>

          <div className="relative aspect-[4/4.8] rounded-[1.75rem] border border-white/10 bg-white/5 p-3 pb-16 backdrop-blur-xl sm:rounded-[2rem] md:pb-3">
            <img
              src={profileImage}
              alt="Rituranjan Kumar"
              className="h-full w-full rounded-[1.5rem] object-cover object-center"
            />

            <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3 backdrop-blur-xl md:bottom-5 md:left-auto md:right-[-1.5rem] md:w-[230px]">
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                Build Mindset
              </p>
              <p className="mt-2 text-sm text-white/80">
                Building applications that feel practical, reliable, and clean.
              </p>
            </div>
          </div>
        </div>

        <div className="relative z-10 order-1 md:order-2">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300 sm:px-4 sm:text-xs sm:tracking-[0.35em]">
            Developer Profile
          </p>

          <h2 className="mb-5 max-w-xl text-3xl font-bold leading-tight sm:mb-6 sm:text-4xl md:text-5xl">
            I turn ideas into
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              practical software solutions
            </span>
          </h2>

          <p className="mb-6 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
            I am a developer with experience across full stack development,
            Python programming, and machine learning fundamentals. I work with
            Java, React, JavaScript, MySQL, and Python to build structured,
            practical, and user-focused applications.
          </p>

          <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-400">
            My background also includes data preprocessing, exploratory data
            analysis, feature engineering, and beginner-friendly machine
            learning workflows. I enjoy solving problems with clean code,
            efficient logic, and continuous learning.
          </p>

          <div className="mb-8 grid gap-3 sm:grid-cols-2">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className={`group rounded-xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md transition duration-300 hover:-translate-y-1 sm:p-4 ${
                  index % 2 === 0
                    ? "hover:shadow-[0_0_30px_rgba(34,211,238,0.18)]"
                    : "hover:shadow-[0_0_30px_rgba(217,70,239,0.18)]"
                }`}
              >
                <p className="mb-1.5 text-[11px] uppercase tracking-[0.24em] text-white/45">
                  {item.label}
                </p>
                <p className="text-sm text-white sm:text-base">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mb-6 rounded-[1.5rem] border border-white/10 bg-slate-950/50 p-4 sm:p-5 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.32em] text-cyan-300">
              Development Approach
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
              I care about clean code, reliable system flow, and clarity in
              problem solving. Whether I am building a web application,
              connecting a database, or working with Python data workflows, I
              focus on practical and maintainable solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-sm text-slate-300 sm:gap-3">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              Python
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              Java
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              HTML
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              CSS
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              JavaScript
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              React
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              MySQL
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              JDBC
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              SQL
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 sm:px-4">
              Machine Learning
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
