import Link from "next/link";
import { Reveal } from "../components/Reveal";


const skills = [
  "HTML", "CSS", "JavaScript", "React", "TypeScript",
  "Next.js", "Tailwind CSS", "Supabase", "Git & GitHub",
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#F4EFE6] text-[#171717]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <Link href="/" className="text-2xl font-black tracking-[-0.08em]">
          BASU<span className="text-[#E86B36]">.</span>
        </Link>
        <Link href="/" className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77716A] transition-colors hover:text-[#E86B36]">
          ← Back Home
        </Link>
      </nav>

      <div className="mx-auto max-w-5xl px-6 pb-24 pt-12 text-center">

        {/* Heading */}
        <Reveal>
          <section className="border-b border-[#171717]/15 pb-20">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              A LITTLE ABOUT ME
            </p>
            <h1 className="text-[clamp(3.5rem,9vw,7.5rem)] font-semibold leading-[0.95] tracking-[-0.08em]">
              More than
              <br />
              just <span className="font-serif italic text-[#E86B36]">code.</span>
            </h1>
            <p className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-[#77716A] md:text-xl">
              I'm Basu, a Computer Science student and web developer who enjoys
              building useful things for the web.
            </p>
          </section>
        </Reveal>

        {/* Journey */}
        <Reveal>
          <section className="border-b border-[#171717]/15 py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              01 / MY JOURNEY
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Learning by building.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#77716A]">
              I'm currently pursuing Computer Science Engineering at RYMEC.
              My journey into development is about learning new technologies,
              solving problems and turning ideas into working projects.
            </p>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-[#77716A]">
              Currently exploring full-stack development, Python and Data
              Structures & Algorithms. I believe the best way to learn is to
              build something real.
            </p>
          </section>
        </Reveal>

        {/* Skills */}
        <Reveal>
          <section className="border-b border-[#171717]/15 py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              02 / WHAT I USE
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Tools & technologies.
            </h2>
            <p className="mt-4 text-[#77716A]">
              Technologies I've worked with or am currently exploring.
            </p>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-[#171717]/15 px-5 py-3 text-sm transition-colors duration-300 hover:border-[#E86B36] hover:text-[#E86B36]">
                  {skill}
                </span>
              ))}
              <span className="rounded-full border border-dashed border-[#E86B36]/60 px-5 py-3 text-sm text-[#77716A]">
                Python · Learning
              </span>
              <span className="rounded-full border border-dashed border-[#E86B36]/60 px-5 py-3 text-sm text-[#77716A]">
                DSA · Learning
              </span>
            </div>
          </section>
        </Reveal>

        {/* Projects */}
        <Reveal>
          <section className="border-b border-[#171717]/15 py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              03 / SELECTED WORK
            </p>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-4xl">
              Things I've built.
            </h2>

            <div className="mx-auto mt-12 max-w-3xl border-t border-[#171717]/15 py-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <h3 className="text-2xl font-semibold">SpendWise</h3>
                <span className="text-xs uppercase tracking-widest text-[#77716A]">
                  Personal Project · 01
                </span>
              </div>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-[#77716A]">
                A personal finance tracker designed to help users manage
                expenses and understand their spending.
              </p>
              <p className="mt-4 text-sm text-[#77716A]">
                React · TypeScript · Supabase
              </p>
              <div className="mt-5 flex justify-center gap-6 text-sm font-semibold">
                <a href="https://spendwise-basuu.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-[#E86B36]">
                  Live Website ↗
                </a>
                <a href="https://github.com/Basu-07/spendwise" target="_blank" rel="noopener noreferrer" className="hover:text-[#E86B36]">
                  GitHub ↗
                </a>
              </div>
            </div>

            <div className="mx-auto max-w-3xl border-t border-[#171717]/15 py-8">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <h3 className="text-2xl font-semibold">Dream & Design</h3>
                <span className="text-xs uppercase tracking-widest text-[#77716A]">
                  Client Project · 02
                </span>
              </div>
              <p className="mx-auto mt-4 max-w-xl leading-7 text-[#77716A]">
                A website redesign project focused on creating a modern
                digital experience for a creative agency.
              </p>
              <p className="mt-4 text-sm text-[#77716A]">
                Next.js · TypeScript · Motion
              </p>
              <a href="https://github.com/Basu-07/dream-design" target="_blank" rel="noopener noreferrer" className="mt-5 inline-block text-sm font-semibold hover:text-[#E86B36]">
                GitHub ↗
              </a>
            </div>
          </section>
        </Reveal>

        {/* Contact */}
        <Reveal>
          <section className="py-20">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              04 / GET IN TOUCH
            </p>
            <h2 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.05em] md:text-6xl">
              Have an idea?
              <br />
              Let's connect<span className="text-[#E86B36]">.</span>
            </h2>
            <a href="mailto:basavaraj.basuu79@gmail.com" className="mt-8 inline-block border-b border-[#E86B36] pb-2 text-lg font-medium hover:text-[#E86B36]">
              basavaraj.basuu79@gmail.com ↗
            </a>
            <div className="mt-8">
              <a href="https://github.com/Basu-07" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-[#E86B36]">
                GitHub ↗
              </a>
            </div>
          </section>
        </Reveal>

        <footer className="border-t border-[#171717]/15 pt-6 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77716A]">
          © 2026 BASU
        </footer>
      </div>
    </main>
  );
}