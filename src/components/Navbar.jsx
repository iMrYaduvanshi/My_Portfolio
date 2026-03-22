import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <>
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/55 px-3 py-3 text-white backdrop-blur-xl sm:px-6 sm:py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 shadow-[0_0_30px_rgba(15,23,42,0.25)] sm:py-3">
          <div>
            <p className="text-base font-bold sm:text-xl">Rituranjan Kumar</p>
            <p className="hidden text-[10px] uppercase tracking-[0.3em] text-cyan-300 sm:block">
              Full Stack Dev Lab
            </p>
          </div>

          <button
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-2xl transition duration-300 hover:bg-white/10 md:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            ☰
          </button>

          <ul className="hidden items-center gap-3 md:flex">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="rounded-full border border-transparent px-4 py-2 text-sm text-slate-300 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="rounded-full border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-2 text-sm text-fuchsia-200 transition duration-300 hover:-translate-y-1 hover:bg-fuchsia-400/15"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/iMrYaduvanshi"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300 transition duration-300 hover:-translate-y-1 hover:bg-cyan-400/15"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/70 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-72 overflow-y-auto border-l border-white/10 bg-slate-950/95 p-6 text-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Navigation</p>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Quick Access
            </p>
          </div>

          <button
            onClick={() => setMenuOpen(false)}
            className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-2xl"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="flex flex-col gap-3 text-lg">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition duration-300 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            download
            className="rounded-2xl border border-fuchsia-400/20 bg-fuchsia-400/10 px-4 py-4 text-fuchsia-200 transition duration-300 hover:bg-fuchsia-400/15"
          >
            Download Resume
          </a>
          <a
            href="https://github.com/iMrYaduvanshi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-4 text-cyan-300 transition duration-300 hover:bg-cyan-400/15"
          >
            View GitHub
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
