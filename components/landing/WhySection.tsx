"use client";

import { WHY_STATS } from "@/constants/landing";
import { Info, BookOpen, UserCheck, Users } from "lucide-react";

export default function WhySection() {
  const getStatIcon = (id: string) => {
    switch (id) {
      case "program":
        return <BookOpen className="h-5 w-5 text-[#f97316]" />;
      case "focus":
        return <UserCheck className="h-5 w-5 text-[#f97316]" />;
      case "organizer":
        return <Users className="h-5 w-5 text-[#f97316]" />;
      default:
        return null;
    }
  };

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
      id="tentang" 
      className="bg-[#0a0a0a] px-6 py-20 sm:px-8 lg:px-12"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
        `,
        backgroundSize: "45px 45px",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left card with top accent bar */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="relative overflow-hidden rounded-2xl border border-[#262626] bg-[#121212]/50 p-8 shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#f97316]" />
              <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 text-[#f97316] border border-[#262626]">
                <Info className="h-4 w-4" />
              </div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                DASAR PEMIKIRAN
              </p>
              <h3 className="mt-2 text-sm font-black text-white leading-snug">
                Pendidikan &amp; Latihan Pelatih Magetan
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-neutral-400 font-medium">
                Menciptakan instruktur pelatih yang tanggap terhadap perkembangan zaman dan memiliki ideologis yang kuat.
              </p>
              <button
                onClick={() => handleScrollTo("alur")}
                className="mt-6 inline-flex items-center text-xs font-semibold text-neutral-300 hover:text-[#f97316] cursor-pointer border-0 bg-transparent"
              >
                Selengkapnya →
              </button>
            </div>
          </div>

          {/* Right text and stats */}
          <div className="lg:col-span-8 flex flex-col justify-center lg:pl-10">
            <p className="text-[9px] font-black uppercase tracking-wider text-neutral-400">
              TENTANG KEGIATAN
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-white sm:text-3xl">
              Mengapa <span className="text-[#f97316]">DIKLATPEL</span> Sangat Penting?
            </h2>
            <p className="mt-4 text-xs leading-relaxed text-neutral-400 font-medium">
              Kaderisasi merupakan aspek fundamental dalam menjaga kesinambungan dan keberlanjutan suatu organisasi. CBP &amp; KPP berperan sebagai ujung tombak dalam membina dan mencetak kader yang kompeten, responsif, kritis, serta solutif dalam menjawab tantangan perubahan zaman.
            </p>

            {/* Stats list layout */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {WHY_STATS.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-2xl border border-[#262626] bg-[#121212]/30 p-6 shadow-sm hover:border-[#f97316]/50 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-900 border border-[#262626]">
                    {getStatIcon(stat.id)}
                  </div>
                  <p className="mt-4 text-[9px] font-black uppercase tracking-wider text-neutral-400">
                    {stat.category}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-white leading-snug">
                    {stat.title}
                  </p>
                  <p className="mt-4 text-sm font-black text-[#f97316] uppercase tracking-wider">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
