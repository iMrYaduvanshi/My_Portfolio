import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import IconButton from "./IconButton"

function Footer() {
  return (
    <footer className="px-4 pb-8 pt-6 sm:px-6 sm:pb-10">
      <div className="mx-auto mt-10 max-w-6xl">
        <div className="mb-8 h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        <div className="flex flex-col gap-6 rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition duration-300 hover:border-cyan-300/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)] md:flex-row md:items-center md:justify-between sm:p-8">
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
              Full Stack Dev Lab
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              Rituranjan Kumar
            </h3>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
              Building practical software solutions with full stack
              development, Python, and data-driven problem solving.
            </p>
            <p className="mt-3 text-xs text-slate-500">
              © 2026 Rituranjan Kumar. All rights reserved.
            </p>
          </div>

          <div className="flex gap-4">
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
      </div>
    </footer>
  )
}

export default Footer
