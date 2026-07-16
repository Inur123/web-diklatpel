"use client";

import { HERO_BADGE, HERO_SUBTITLE } from "@/constants/landing";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

export default function HeroSection() {
  const router = useRouter();

  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const offsetPosition = element.offsetTop - 70;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-[75vh] flex-col items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 pt-24 pb-8 text-center sm:px-8 lg:px-12"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 30%, rgba(249, 115, 22, 0.15) 0%, transparent 60%),
          linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: "100% 100%, 45px 45px, 45px 45px",
      }}
    >
      {/* Decorative Glow Elements */}
      <div className="absolute top-[20%] left-[10%] -z-10 h-72 w-72 rounded-full bg-[#f97316]/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[10%] -z-10 h-72 w-72 rounded-full bg-[#ea580c]/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6">
        {/* Badge */}
        <span
          id="hero-badge"
          className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#121212] px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#f97316]"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-[#f97316] animate-pulse" />
          {HERO_BADGE}
        </span>

        {/* Heading */}
        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          PENDIDIKAN &{" "}
          <span className="text-[#f97316] block sm:inline">
            LATIHAN PELATIH 2026
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-xs leading-relaxed text-neutral-400 sm:text-sm font-medium">
          {HERO_SUBTITLE}
        </p>

        {/* CTAs */}
        <div className="flex flex-row items-center justify-center gap-3 mt-4 w-full max-w-md mx-auto">
          <button
            onClick={() => router.push("/register")}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#f97316] py-3.5 px-3 sm:px-8 text-[10px] sm:text-xs font-bold text-white transition-all duration-200 hover:bg-[#ea580c] hover:shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:-translate-y-0.5 cursor-pointer border-0"
          >
            Daftar <span className="hidden xs:inline">Sekarang</span>{" "}
            <ArrowRight className="h-3 w-3 shrink-0" />
          </button>
          <button
            onClick={() => handleScrollTo("alur")}
            className="flex-1 inline-flex items-center justify-center rounded-lg border border-[#262626] bg-[#121212]/50 py-3.5 px-3 sm:px-8 text-[10px] sm:text-xs font-bold text-neutral-300 transition-all duration-200 hover:border-neutral-700 hover:bg-neutral-900 cursor-pointer"
          >
            TOR Kegiatan
          </button>
        </div>
      </div>
    </section>
  );
}
