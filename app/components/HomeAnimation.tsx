"use client";

import { motion, useReducedMotion } from "motion/react";
import { useRouter } from "next/navigation";

export function HomeAnimation() {
  const reduceMotion = useReducedMotion();
  const router = useRouter();

  const animation = {
    initial: reduceMotion ? false : { opacity: 0, y: 25 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as const },
  };

  return (
    <motion.div className="flex flex-col items-center text-center">
      <motion.div
        {...animation}
        transition={{ ...animation.transition, delay: 0.1 }}
        className="mb-9 flex items-center justify-center gap-3"
      />

      <motion.h1
        {...animation}
        transition={{ ...animation.transition, delay: 0.25 }}
        className="text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.95] tracking-[-0.085em]"
      >
        Hi, I'm
        <br />
        Basu<span className="font-serif font-normal italic text-[#E86B36]">.</span>
      </motion.h1>

      <motion.p
        {...animation}
        transition={{ ...animation.transition, delay: 0.4 }}
        className="mx-auto mt-5 text-base tracking-wide text-[#77716A] md:mt-8 md:text-xl"
      >
        Curious by nature. Building with purpose.
      </motion.p>

      <motion.button
        type="button"
        onClick={() => router.push("/about")}
        whileHover={reduceMotion ? {} : { scale: 1.05 }}
        whileTap={reduceMotion ? {} : { scale: 0.94 }}
        {...animation}
        transition={{ ...animation.transition, delay: 0.55 }}
        className="group mt-7 flex items-center gap-6 rounded-full bg-[#E86B36] px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#171717] md:mt-10"
      >
        KNOW MORE
        <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
          ↗
        </span>
      </motion.button>
    </motion.div>
  );
}