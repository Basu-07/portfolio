
"use client";

import {
  createContext,
  useContext,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type TransitionContextType = {
  navigate: (path: string) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function usePageTransition() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error(
      "usePageTransition must be used inside PageTransitionProvider"
    );
  }

  return context;
}

export function PageTransitionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  function navigate(path: string) {
    if (path !== pathname) {
      router.push(path);
    }
  }

  return (
    <TransitionContext.Provider value={{ navigate }}>
      <AnimatePresence mode="sync" initial={false}>
        <motion.div
          key={pathname}
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 12 }
          }
          animate={{ opacity: 1, y: 0 }}
          exit={
            reduceMotion
              ? undefined
              : { opacity: 0, y: -8 }
          }
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          className="relative min-h-screen"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </TransitionContext.Provider>
  );
}
