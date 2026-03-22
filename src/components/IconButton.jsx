function IconButton({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-xl text-slate-200 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-cyan-400/10 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]"
    >
      {children}
    </a>
  )
}

export default IconButton
