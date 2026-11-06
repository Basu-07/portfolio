
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/Reveal";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "TypeScript",
  "Next.js",
  "Tailwind CSS",
  "Supabase",
  "Git & GitHub",
];

export default function About() {
  return (
    <main className="min-h-screen bg-[#F4EFE6] text-[#171717]">
      {/* NAVIGATION */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <Link href="/" className="text-2xl font-black tracking-[-0.08em]">
          BASU<span className="text-[#E86B36]">.</span>
        </Link>

        <Link
          href="/"
          className="text-sm font-medium text-[#77716A] transition-colors hover:text-[#E86B36]"
        >
          ← Back Home
        </Link>
      </nav>

      <div className="mx-auto max-w-6xl px-6 pb-24 pt-12">
        {/* INTRODUCTION */}
        <Reveal>
          <section className="border-b border-[#171717]/15 pb-24">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              A LITTLE ABOUT ME
            </p>

            <h1 className="text-[clamp(3.5rem,9vw,8rem)] font-semibold leading-[0.9] tracking-[-0.085em]">
              More than
              <br />
              just <span className="font-serif italic text-[#E86B36]">code.</span>
            </h1>

            <div className="mt-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <p className="max-w-xl text-lg leading-8 text-[#77716A] md:text-xl">
                I'm Basu. I enjoy exploring ideas, figuring out how things
                work and turning them into something useful on the web.
              </p>

              <span className="text-sm font-medium text-[#77716A]">
                Scroll to know me ↓
              </span>
            </div>
          </section>
        </Reveal>

        {/* JOURNEY */}
        <Reveal>
          <section className="border-b border-[#171717]/15 py-24">
            <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
                  01 / MY JOURNEY
                </p>

                <h2 className="mt-8 text-4xl font-semibold leading-[1.1] tracking-[-0.06em] md:text-5xl">
                  Started with curiosity.
                  <span className="mt-2 block font-serif italic font-normal text-[#E86B36]">
                    Still building.
                  </span>
                </h2>
              </div>

              <div className="space-y-5 text-base leading-8 text-neutral-600">
                <p>
                  I'm a Computer Science Engineering student who started
                  exploring web development out of curiosity. What began
                  with learning how websites work gradually turned into
                  an interest in building them myself.
                </p>

                <p>
                  As I learned more, I started experimenting with frontend
                  development, databases, authentication and backend
                  services. Working on real projects helped me understand
                  how different technologies come together to create
                  something people can actually use.
                </p>

                <p>
                  I'm still learning, exploring new technologies and
                  improving with every project. My goal is to become a
                  developer who can turn ideas into useful, well-crafted
                  digital experiences.
                </p>
              </div>
            </div>
          </section>
        </Reveal>

        {/* SKILLS */}
        <Reveal>
          <section className="border-b border-[#171717]/15 py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              02 / MY TOOLKIT
            </p>

            <div className="mt-6 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <h2 className="text-4xl font-semibold tracking-[-0.06em] md:text-5xl">
                Things I work with.
              </h2>

              <p className="max-w-sm text-sm leading-7 text-[#77716A]">
                A growing collection of tools and technologies I've used
                while learning and building projects.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-[#171717]/15 px-5 py-3 text-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E86B36] hover:text-[#E86B36]"
                >
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

        {/* SELECTED WORK */}
        <Reveal>
          <section className="border-b border-[#171717]/15 py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              03 / SELECTED WORK
            </p>

            <h2 className="mt-6 text-4xl font-semibold tracking-[-0.06em] md:text-6xl">
              Built with curiosity.
              <br />
              <span className="font-serif italic font-normal text-[#E86B36]">
                Made to be useful.
              </span>
            </h2>

            {/* SPENDWISE PROJECT CARD */}
            <div className="mt-16 overflow-hidden rounded-2xl border border-[#171717]/10 bg-[#EAE3D8]">
              {/* PROJECT HEADER */}
              <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-6 md:px-10">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E86B36]">
                    PERSONAL PROJECT · 01
                  </p>

                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.06em] md:text-4xl">
                    SpendWise<span className="text-[#E86B36]">.</span>
                  </h3>
                </div>

                <span className="rounded-full border border-[#171717]/15 px-4 py-2 text-xs text-[#77716A]">
                  Finance · Web Application
                </span>
              </div>

              {/* REAL DASHBOARD SCREENSHOT */}
              <div className="mx-4 overflow-hidden rounded-xl border border-[#171717]/10 bg-white shadow-xl shadow-black/5 md:mx-10">
                <div className="flex items-center gap-2 border-b border-[#171717]/10 bg-[#FAFAF9] px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E86B36]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D6D3D1]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D6D3D1]" />

                  <span className="ml-3 text-xs text-[#77716A]">
                    SpendWise · Dashboard
                  </span>
                </div>

                <Image
                  src="/images/spendwise-dashboard.png"
                  alt="SpendWise personal finance dashboard"
                  width={1648}
                  height={930}
                  priority
                  className="h-auto w-full object-cover object-top transition-transform duration-700 hover:scale-[1.015]"
                />
              </div>

              {/* PROJECT DESCRIPTION */}
              <div className="px-6 py-10 md:px-10 md:py-14">
                <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E86B36]">
                      ABOUT THE PROJECT
                    </p>

                    <h4 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">
                      A clearer picture of your money.
                    </h4>

                    <div className="mt-6 space-y-5 text-base leading-8 text-[#77716A]">
                      <p>
                        SpendWise is a personal finance tracking application
                        designed to make managing money simpler and more
                        organised. It helps users keep track of their income
                        and expenses, understand their spending habits, and
                        get a clearer picture of where their money goes.
                      </p>

                      <p>
                        The application brings together a financial dashboard,
                        transaction management, spending analytics and
                        reports. It also includes AI Scan, which helps users
                        turn payment screenshots into transaction entries,
                        making everyday expense tracking easier.
                      </p>

                      <p>
                        Built with React, TypeScript, Tailwind CSS and
                        Supabase, SpendWise combines a responsive interface
                        with backend authentication and database services.
                        Building this project gave me practical experience
                        in developing a full-stack application and turning
                        an idea into a deployed product.
                      </p>
                    </div>
                  </div>

                  {/* PROJECT DETAILS */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E86B36]">
                      WHAT'S INCLUDED
                    </p>

                    <ul className="mt-5 space-y-4 text-sm text-[#77716A]">
                      {[
                        "Personal account authentication",
                        "Income and expense tracking",
                        "Transaction management",
                        "Financial dashboard",
                        "Spending analytics and reports",
                        "AI Scan for payment screenshots",
                      ].map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <span className="mt-1 text-[#E86B36]">↗</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-10 border-t border-[#171717]/10 pt-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E86B36]">
                        BUILT WITH
                      </p>

                      <p className="mt-4 text-sm leading-7 text-[#77716A]">
                        React · TypeScript · Supabase · Tailwind CSS · Vercel
                      </p>
                    </div>
                  </div>
                </div>

                {/* PROJECT LINKS */}
                <div className="mt-10 flex flex-wrap items-center justify-between gap-5 border-t border-[#171717]/10 pt-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#77716A]">
                    EXPLORE THE PROJECT
                  </p>

                  <div className="flex flex-wrap gap-6 text-sm font-semibold">
                    <a
                      href="https://spendwise-basuu.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#E86B36]"
                    >
                      Live Website ↗
                    </a>

                    <a
                      href="https://github.com/Basu-07/spendwise"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors hover:text-[#E86B36]"
                    >
                      Source Code ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* CONTACT */}
        <Reveal>
          <section className="py-24">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E86B36]">
              04 / GET IN TOUCH
            </p>

            <h2 className="mt-8 text-5xl font-semibold leading-[1.05] tracking-[-0.07em] md:text-7xl">
              Have something
              <br />
              in mind?
              <span className="text-[#E86B36]"> Let's talk.</span>
            </h2>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <a
                href="mailto:basavaraj.basuu79@gmail.com"
                className="border-b border-[#E86B36] pb-2 text-lg font-medium no-underline transition-colors hover:text-[#E86B36]"
              >
                basavaraj.basuu79@gmail.com ↗
              </a>

              <a
                href="https://github.com/Basu-07"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-medium transition-colors hover:text-[#E86B36]"
              >
                GitHub ↗
              </a>
            </div>
          </section>
        </Reveal>

        {/* FOOTER */}
        <footer className="flex flex-wrap justify-between gap-4 border-t border-[#171717]/15 pt-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77716A]">
          <span>© 2026 BASU</span>
          <span>Made with curiosity.</span>
        </footer>
      </div>
    </main>
  );
}
