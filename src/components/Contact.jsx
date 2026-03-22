import { useRef, useState } from "react"
import emailjs from "emailjs-com"

function Contact() {
  const form = useRef()
  const [status, setStatus] = useState({
    type: "",
    message: "",
  })
  const [isSending, setIsSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSending(true)
    setStatus({ type: "", message: "" })

    emailjs.sendForm(
      "service_ifqwpnn",
      "template_u37c88p",
      form.current,
      "cY6KoZeG9uuXXRYDh"
    )
      .then(() => {
        setStatus({
          type: "success",
          message: "Message sent successfully. I will get back to you soon.",
        })
        form.current.reset()
      })
      .catch(() => {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again in a moment.",
        })
      })
      .finally(() => {
        setIsSending(false)
      })
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden px-4 py-16 sm:px-6 sm:py-24"
    >
      <div className="absolute left-10 top-20 h-48 w-48 rounded-full bg-cyan-400/10 blur-[120px]"></div>
      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[140px]"></div>

      <div className="mx-auto max-w-6xl">
        <div className="mb-10 max-w-3xl sm:mb-14">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs uppercase tracking-[0.35em] text-cyan-300">
            Contact Channel
          </p>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Let&apos;s build something
            <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-fuchsia-400 bg-clip-text text-transparent">
              practical, scalable, and meaningful
            </span>
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-xl sm:p-8">
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">
              Open For Work
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">
              Freelance projects, internships, and full stack opportunities
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              If you have a project, product idea, or technical opportunity,
              feel free to reach out. I enjoy building practical applications
              across web development, backend logic, and data-focused workflows.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Email
                </p>
                <p className="mt-2 text-white">ranjansinghritu4321@gmail.com</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-white/45">
                  Availability
                </p>
                <p className="mt-2 text-white">Open to freelance and full-time roles</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-400/10 to-fuchsia-500/10 p-4">
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-300">
                  Response Time
                </p>
                <p className="mt-2 text-white">Usually within 24 hours</p>
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-5 backdrop-blur-xl sm:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Your name</span>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/10"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-slate-300">Your email</span>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/10"
                />
              </label>
            </div>

            <label className="mt-4 block">
              <span className="mb-2 block text-sm text-slate-300">Message</span>
              <textarea
                name="message"
                placeholder="Tell me about your project, role, or idea"
                rows="6"
                required
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/40 focus:bg-white/10"
              />
            </label>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSending}
                className="rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3 font-medium text-slate-950 transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === "success" ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
