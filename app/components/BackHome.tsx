"use client";

import { useRouter } from "next/navigation";

export function BackHome() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/")}
      className="rounded-full px-2 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#77716A] transition-colors hover:text-[#E86B36] md:px-0 md:text-xs md:tracking-[0.18em]"
    >
      ← Back Home
    </button>
  );
}