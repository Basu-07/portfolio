
import Link from "next/link";
import { HomeAnimation } from "./components/HomeAnimation";
import { Aurora } from "./components/ui/aurora";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-transparent text-[#171717]">
      <Aurora />

      <nav className="relative z-10 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-8 md:px-12">
        <Link href="/" className="text-2xl font-black tracking-[-0.08em]">
          BASU<span className="text-[#E86B36]">.</span>
        </Link>

        <Link
          href="/about"
          className="text-sm font-medium text-[#77716A] transition-colors hover:text-[#E86B36]"
        >
          About me ↗
        </Link>
      </nav>

      <section className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col items-center justify-center px-6 pb-20 pt-12">
        <HomeAnimation />
      </section>
    </main>
  );
}
