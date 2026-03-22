import { FaHtml5, FaCss3Alt, FaReact, FaJs, FaGitAlt, FaPython, FaJava, FaDatabase } from "react-icons/fa"
import { SiTailwindcss, SiNodedotjs, SiMysql, SiSpring, SiScikitlearn } from "react-icons/si"

function Skills() {
  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
      color: "text-orange-300",
      desc: "Strong foundation in Core Java, OOP concepts, and command-line application development.",
    },
    {
      name: "MySQL",
      icon: <SiMysql />,
      color: "text-sky-300",
      desc: "Comfortable with relational database concepts, queries, and Java database connectivity workflows.",
    },
    {
      name: "Python",
      icon: <FaPython />,
      color: "text-sky-300",
      desc: "Primary language for data analysis, scripting, machine learning practice, and clean problem solving.",
    },
    {
      name: "Machine Learning",
      icon: <SiScikitlearn />,
      color: "text-orange-400",
      desc: "Hands-on with EDA, regression, classification, clustering, and feature engineering workflows.",
    },
    {
      name: "React",
      icon: <FaReact />,
      color: "text-cyan-400",
      desc: "Builds responsive interfaces with reusable components and clean section-based frontend structure.",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      color: "text-yellow-400",
      desc: "Used for frontend logic, interaction handling, and strengthening modern web development fundamentals.",
    },
    {
      name: "HTML & CSS",
      icon: <div className="flex gap-2"><FaHtml5 /><FaCss3Alt /></div>,
      color: "text-blue-300",
      desc: "Comfortable creating responsive layouts, clean structure, and polished visual presentation for the web.",
    },
    {
      name: "JDBC & Spring",
      icon: <div className="flex gap-2"><FaDatabase /><SiSpring /></div>,
      color: "text-emerald-400",
      desc: "Used for backend connectivity, database integration, and Java full stack fundamentals.",
    },
    {
      name: "Pandas & NumPy",
      icon: <div className="flex gap-2"><FaPython /><FaDatabase /></div>,
      color: "text-cyan-300",
      desc: "Used for preprocessing, data handling, numerical operations, and analysis workflows.",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "text-cyan-300",
      desc: "Uses utility-first styling to build sharp, modern interfaces quickly with consistent spacing and visual rhythm.",
    },
    {
      name: "Git & GitHub",
      icon: <FaGitAlt />,
      color: "text-orange-400",
      desc: "Uses version control for collaboration, open-source contribution, and maintaining cleaner development workflows.",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs />,
      color: "text-green-400",
      desc: "Familiar with the JavaScript runtime ecosystem while building and running modern frontend projects.",
    },
  ]

  return (
    <section id="skills" className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 sm:py-24">
      <div className="absolute right-0 top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-[120px]"></div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Core Stack
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Technical skills shaped by
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              Python, full stack work, and ML fundamentals
            </span>
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
          <div
            key={index}
            className="group rounded-[1.5rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.14)]"
          >
            <div className="mb-8 flex items-center justify-between">
              <div className={`text-4xl transition duration-300 group-hover:scale-110 ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="text-xs text-white/35">0{index + 1}</span>
            </div>

            <p className="text-lg font-medium text-white">{skill.name}</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {skill.desc}
            </p>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Skills
