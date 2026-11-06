
import Link from "next/link";
import { HomeAnimation } from "./components/HomeAnimation";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F4EFE6] text-[#171717]">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <Link href="/" className="text-2xl font-black tracking-[-0.08em]">
          BASU<span className="text-[#E86B36]">.</span>
        </Link>

        <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#77716A]">
          Personal Portfolio
        </span>
      </nav>

      <section className="mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-20 pt-12">
        <HomeAnimation />
      </section>

      <footer className="mx-auto flex w-full max-w-7xl items-center justify-between border-t border-[#171717]/15 px-6 py-6 md:px-12">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77716A]">
          BASED IN INDIA
        </p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#77716A]">
          WELCOME TO MY WORLD
        </p>
      </footer>
    </main>
  );
}
