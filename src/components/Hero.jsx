import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import IconButton from "./IconButton"

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-36 sm:px-6 sm:pt-44 md:pt-48 lg:pt-44"
    >
      <div className="absolute left-1/2 top-0 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]"></div>
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-[120px]"></div>
      <div className="absolute bottom-0 right-8 h-80 w-80 rounded-full bg-blue-500/10 blur-[140px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30"></div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-12">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-[10px] uppercase tracking-[0.28em] text-cyan-300 sm:mb-5 sm:px-4 sm:text-xs sm:tracking-[0.35em]">
            Full Stack Developer / Python ML Enthusiast
          </p>

          <h1 className="mb-5 max-w-4xl text-[2.6rem] font-bold leading-[0.95] sm:mb-6 sm:text-5xl md:text-7xl">
            I build practical full stack
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              solutions with Python and Java.
            </span>
          </h1>

          <p className="mb-7 max-w-2xl text-[15px] leading-7 text-slate-300 sm:mb-8 sm:text-lg">
            I build across frontend, backend, and database layers using Java,
            React, JavaScript, MySQL, and Python. My work also includes data
            analysis and machine learning fundamentals with Pandas, NumPy, and
            Scikit-learn.
          </p>

          <div className="mb-8 flex flex-col gap-3 sm:mb-10 sm:flex-row sm:gap-4">
            <a
              href="#projects"
              className="rounded-xl border border-cyan-300/30 bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-center font-medium text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] sm:px-6"
            >
              Explore Projects
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-center text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:px-6"
            >
              Let&apos;s Connect
            </a>

            <a
              href="https://github.com/iMrYaduvanshi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-fuchsia-400/20 bg-fuchsia-400/10 px-5 py-3 text-center text-fuchsia-200 transition duration-300 hover:-translate-y-1 hover:bg-fuchsia-400/15 sm:px-6"
            >
              View GitHub
            </a>

            <a
              href="/resume.pdf"
              download
              className="rounded-xl border border-white/15 bg-slate-950/50 px-5 py-3 text-center text-white transition duration-300 hover:-translate-y-1 hover:bg-white/10 sm:px-6"
            >
              Download Resume
            </a>
          </div>

          <div className="flex gap-3 sm:gap-4">
            <IconButton link="https://github.com/iMrYaduvanshi">
              <FaGithub />
            </IconButton>

            <IconButton link="https://www.linkedin.com/in/rituranjan-kumar-81a30a264">
              <FaLinkedin />
            </IconButton>

            <IconButton link="mailto:ranjansinghritu4321@gmail.com">
              <FaEnvelope />
            </IconButton>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-[2rem] border border-cyan-400/10 bg-cyan-400/5 blur-2xl"></div>
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-4 backdrop-blur-xl sm:rounded-[2rem] sm:p-6">
            <div className="mb-5 flex items-center justify-between sm:mb-6">
              <div>
                <p className="text-[10px] uppercase tracking-[0.28em] text-cyan-300 sm:text-xs sm:tracking-[0.35em]">
                  Dev Lab
                </p>
                <p className="mt-2 text-lg font-semibold text-white sm:text-xl">
                  Building across the full stack
                </p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-300">
                Online
              </span>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/45">
                  Current Focus
                </p>
                <p className="mt-3 text-base text-white sm:text-lg">
                  Full stack builds, Python projects, and machine learning practice
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white sm:text-3xl">3+</p>
                  <p className="mt-2 text-sm text-slate-400">
                    focused projects across web and data
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-white sm:text-3xl">24/7</p>
                  <p className="mt-2 text-sm text-slate-400">
                    focus on learning and shipping
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
                  Workflow
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Build with clean logic, connect data workflows, refine the
                  interface, and keep shipping practical solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
