"use client";

import { motion } from "motion/react";

export function PageTransition() {
  return (
    <motion.div
      initial={{ y: "0%" }}
      animate={{ y: "-100%" }}
      transition={{
        duration: 1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className="pointer-events-none fixed inset-0 z-[100] bg-[#F4EFE6]"
    />
  );
}