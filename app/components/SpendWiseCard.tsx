"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function SpendWiseCard() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="group mx-2 md:mx-10">
      <motion.div
        initial={false}
        whileHover={
          reduceMotion
            ? {}
            : {
                rotateX: 5,
                rotateY: -5,
                y: -5,
                scale: 1.015,
              }
        }
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-xl border border-[#E86B36]/30 bg-white shadow-xl shadow-black/10"
      >
        {/* Browser bar */}
        <div className="flex items-center gap-1.5 border-b border-[#171717]/10 bg-[#FAFAF9] px-3 py-2 md:gap-2 md:px-4 md:py-3">
          <span className="h-2 w-2 rounded-full bg-[#E86B36] md:h-2.5 md:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#D6D3D1] md:h-2.5 md:w-2.5" />
          <span className="h-2 w-2 rounded-full bg-[#D6D3D1] md:h-2.5 md:w-2.5" />

          <span className="ml-2 text-[10px] text-[#77716A] md:ml-3 md:text-xs">
            SpendWise · Dashboard
          </span>
        </div>

        {/* Dashboard image */}
        <div
          className="relative"
          style={{ transform: "translateZ(25px)" }}
        >
          <Image
            src="/images/spendwise-dashboard.png"
            alt="SpendWise personal finance dashboard"
            width={1648}
            height={930}
            priority
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </motion.div>
    </div>
  );
}