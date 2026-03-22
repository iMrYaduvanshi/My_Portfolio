import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaLaptopCode,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiPostman,
  SiMysql,
  SiGithub,
} from "react-icons/si"

function TechStack() {
  const tech = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-400", note: "Semantic page structure" },
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-400", note: "Responsive styling and layouts" },
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400", note: "Client-side logic and interactivity" },
    { name: "React", icon: <FaReact />, color: "text-cyan-400", note: "Component-driven frontend development" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-300", note: "Fast and consistent UI styling" },
    { name: "Python", icon: <FaPython />, color: "text-sky-300", note: "AI, scripting, and data analysis learning" },
    { name: "Java", icon: <FaJava />, color: "text-red-400", note: "Core backend logic and application development" },
    {
      name: "C Language",
      icon: <span className="text-3xl font-bold">C</span>,
      color: "text-blue-300",
      note: "Core programming concepts",
    },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-400", note: "Server-side JavaScript basics and tooling" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500", note: "NoSQL database exploration" },
    { name: "MySQL", icon: <SiMysql />, color: "text-sky-400", note: "Relational database design and queries" },
    { name: "Postman", icon: <SiPostman />, color: "text-orange-400", note: "API testing and request validation" },
    { name: "Git", icon: <FaGitAlt />, color: "text-orange-500", note: "Version control for active development" },
    { name: "GitHub", icon: <SiGithub />, color: "text-white", note: "Collaboration, repositories, and project sharing" },
    { name: "VS Code", icon: <FaLaptopCode />, color: "text-blue-400", note: "Primary code editor" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-amber-400", note: "Backend services exploration" },
    { name: "Vercel", icon: <SiVercel />, color: "text-white", note: "Deployment and hosting" },
    {
      name: "Databases",
      icon: <span className="text-2xl font-bold">DB</span>,
      color: "text-fuchsia-300",
      note: "Working across SQL and NoSQL environments",
    },
  ]

  return (
    <section
      id="tech"
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="absolute left-0 top-20 h-60 w-60 rounded-full bg-fuchsia-500/10 blur-[130px]"></div>
      <div className="absolute right-0 bottom-10 h-60 w-60 rounded-full bg-cyan-400/10 blur-[130px]"></div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Full Tech Stack
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Technologies I use and
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              tools that support full stack development
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-slate-300">
            My stack covers interfaces, backend fundamentals, databases, API
            tooling, deployment, version control, and ongoing AI learning with Python.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tech.map((item, index) => (
            <div
              key={item.name}
              className="group rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.14)]"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className={`text-4xl transition duration-300 group-hover:scale-110 ${item.color}`}>
                  {item.icon}
                </div>
                <span className="text-xs text-white/35">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <p className="text-lg font-medium text-white">{item.name}</p>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                {item.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
