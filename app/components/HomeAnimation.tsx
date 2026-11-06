"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function HomeAnimation() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();
  const pathname = usePathname();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
      setIsNavigating(false);
    }
  }, [pathname]);

  const animation = {
    initial: reduceMotion ? false : { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  function handleNavigation() {
    if (isNavigating) return;

    if (reduceMotion) {
      router.push("/about");
      return;
    }

    setIsNavigating(true);

    setTimeout(() => {
      router.push("/about");
    }, 450);
  }

  return (
    <motion.div
      animate={isNavigating ? { opacity: 0, y: -15 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex flex-col items-center text-center"
    >
      <motion.div
        {...animation}
        transition={{ ...animation.transition, delay: 0.1 }}
        className="mb-9 flex items-center justify-center gap-3"
      >
        <span className="h-2 w-2 rounded-full bg-[#E86B36]" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#77716A]">
          Computer Science Student · Web Developer
        </p>
      </motion.div>

      <motion.h1
        {...animation}
        transition={{ ...animation.transition, delay: 0.25 }}
        className="text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.95] tracking-[-0.085em]"
      >
        Hi, I'm
        <br />
        Basu<span className="font-serif font-normal italic text-[#E86B36]">.</span>
      </motion.h1>

      <motion.p
        {...animation}
        transition={{ ...animation.transition, delay: 0.4 }}
        className="mx-auto mt-10 max-w-2xl text-lg leading-8 text-[#77716A] md:text-xl"
      >
        I'm a CSE student who enjoys building things for the web,
        exploring technology and turning ideas into useful digital
        experiences.
      </motion.p>

      <motion.button
        type="button"
        onClick={handleNavigation}
        disabled={isNavigating}
        whileHover={reduceMotion ? {} : { scale: 1.05 }}
        whileTap={reduceMotion ? {} : { scale: 0.94 }}
        {...animation}
        transition={{ ...animation.transition, delay: 0.55 }}
        className="group mt-10 flex items-center gap-6 rounded-full bg-[#E86B36] px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#171717] disabled:cursor-wait"
      >
        KNOW MORE
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
          ↗
        </span>
      </motion.button>
    </motion.div>
  );
}