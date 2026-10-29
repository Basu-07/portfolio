
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import "./App.css";

function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const moveCursor = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setVisible(true);
    };

    const hideCursor = () => setVisible(false);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", hideCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        width: 24,
        height: 24,
        border: "1px solid #ff6338",
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 10000,
        opacity: visible ? 1 : 0,
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.2s ease",
      }}
    />
  );
}

function IntroScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;
    let startTime = 0;
    const duration = 1400;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const nextProgress = Math.min(
        100,
        Math.round((elapsed / duration) * 100)
      );

      setProgress(nextProgress);

      if (nextProgress < 100) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <motion.div
      className="intro-screen"
      exit={{
        y: "-100%",
        transition: {
          duration: 0.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
    >
      <div className="intro-top">
        <span>BASU®</span>
        <span>PORTFOLIO / 2026</span>
      </div>

      <div className="intro-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          CREATIVE DEVELOPER IN THE MAKING
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          BASU<span>.</span>
        </motion.h1>
      </div>

      <div className="intro-bottom">
        <span>DESIGN · CODE · CREATE</span>
        <span>{progress}%</span>
      </div>

      <div className="intro-progress">
        <motion.div
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear", duration: 0.1 }}
        />
      </div>
    </motion.div>
  );
}

const skills = [
  { number: "01", name: "Frontend", tools: "React · TypeScript · CSS" },
  { number: "02", name: "Backend", tools: "Supabase · PostgreSQL" },
  { number: "03", name: "Tools", tools: "Git · GitHub · VS Code" },
  { number: "04", name: "Exploring", tools: "UI/UX · Animation · AI" },
];

export default function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 1900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {showIntro && <IntroScreen key="intro" />}
      </AnimatePresence>

      <main className="portfolio">
        <nav className="navbar">
          <a className="brand" href="#home">B.</a>

          <span className="nav-status">
            <span className="status-dot" />
            CREATING WHAT'S NEXT
          </span>

          <a
            className="menu-link"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=basavaraj.basuu79@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            LET'S TALK <ArrowUpRight size={16} />
          </a>
        </nav>

        <section className="hero" id="home">
          <motion.div
            className="hero-label"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.8 }}
          >
            waitt
          </motion.div>

          <div className="hero-title">
            <motion.h1
              initial={{ opacity: 0, x: -70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              MAKING
            </motion.h1>

            <motion.div
              className="second-line"
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 1.9 }}
            >
              <span className="asterisk">✳</span>
              <h1>THE WEB</h1>
            </motion.div>

            <motion.h1
              className="outline-text"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 2 }}
            >
              MATTER<span className="orange-dot">.</span>
            </motion.h1>
          </div>

          <div className="hero-bottom">
            <p>
              I'm <strong>Basu</strong> — a computer science student exploring
              the space between creative design and useful technology.
            </p>

            <a
              href="#projects"
              className="round-link"
              aria-label="Explore projects"
            >
              <ArrowDownRight size={25} />
            </a>

            <span className="side-note">SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <div className="ticker" aria-label="Creative development and technology">
          <div className="ticker-track">
            {Array.from({ length: 4 }, (_, i) => (
              <span key={i}>
                CREATIVE DEVELOPMENT <b>✳</b> BUILDING FOR THE WEB <b>✳</b>
                DESIGN WITH PURPOSE <b>✳</b>
              </span>
            ))}
          </div>
        </div>

        <section className="projects" id="projects">
          <div className="section-heading">
            <span>01 / SELECTED WORK</span>
            <span>THINGS I'VE BUILT ↘</span>
          </div>

          <h2>
            A FEW THINGS
            <br />
            IN PROGRESS<span className="orange-dot">.</span>
          </h2>

          <motion.article
            className="project-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://spendwise-basuu.vercel.app"
              target="_blank"
              rel="noreferrer"
              aria-label="Open the live SpendWise website"
              style={{ display: "block", color: "inherit" }}
            >


              <div className="project-main">
                <span className="project-symbol">
                  S<span>↗</span>
                </span>

                <div>
                  <h3>SpendWise</h3>
                  <p>
                    A personal finance tracker exploring smarter ways to
                    understand money.
                  </p>
                </div>

                <ArrowUpRight className="project-arrow" size={30} />
              </div>

              <div className="project-tags">
                <span>REACT</span>
                <span>TYPESCRIPT</span>
                <span>SUPABASE</span>
              </div>
            </a>

            <a
              className="project-github"
              href="https://github.com/Basu-07"
              target="_blank"
              rel="noreferrer"
            >
              EXPLORE ON GITHUB <ArrowUpRight size={16} />
            </a>
          </motion.article>

          <div className="coming-soon">
            NOT THE FINAL FORM.
          </div>
        </section>

        <section className="skills" id="skills">
          <div className="section-heading">
            <span>02 / MY TOOLKIT</span>
            <span>ALWAYS LEARNING ↗</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            CURIOUS BY
            <br />
            NATURE<span className="orange-dot">.</span>
          </motion.h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.article
                className="skill-card"
                key={skill.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <span className="skill-number">{skill.number}</span>
                <h3>{skill.name}</h3>
                <p>{skill.tools}</p>
                <span className="skill-arrow">↗</span>
              </motion.article>
            ))}
          </div>
        </section>

        <footer id="contact">
          <span>HAVE AN IDEA?</span>

          <a
            href="mailto:basavaraj.basuu79@gmail.com"
            className="footer-title"
          >
            <span>
              LET'S MAKE
              <br />
              IT HAPPEN
            </span>
            <ArrowUpRight size={38} />
          </a>

          <div className="footer-bottom">
            <span>DESIGNED & BUILT BY BASU © 2026</span>

            <div className="social-links">
              <a
                href="https://github.com/Basu-07"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                GH ↗
              </a>
            </div>

            <a href="#home">BACK TO TOP ↑</a>
          </div>
        </footer>
      </main>
    </>
  );
}
