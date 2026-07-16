import { TIMELINE_STEPS } from "@/constants/landing";

export default function FlowSection() {
  return (
    <section
      id="alur"
      className="bg-[#0a0a0a] px-6 py-20"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
        `,
        backgroundSize: "45px 45px",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#121212] px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#f97316]">
            TAHAPAN ALUR
          </span>
          <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
            Alur Pelaksanaan Kegiatan 2026
          </h2>
          <p className="mt-2 text-xs text-neutral-400 font-medium">
            Jadwal lengkap tahapan seleksi administrasi hingga pelaksanaan forum
          </p>
        </div>

        {/* Steps Horizontal */}
        <div className="relative mt-12">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-10 right-10 top-6 hidden h-0.5 bg-[#262626] lg:block"
            aria-hidden="true"
          />

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {TIMELINE_STEPS.map((step, index) => (
              <div
                key={index}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-4 font-black text-xs transition-all duration-200 ${
                    index === 4
                      ? "border-[#f97316]/20 bg-[#f97316] text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]"
                      : "border-[#262626] bg-[#121212] text-neutral-300 hover:border-neutral-700"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="mt-2 text-[8px] font-bold text-neutral-400">
                  {step.date}
                </p>
                <p className="mt-1.5 text-[10px] font-bold text-white leading-tight px-2">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
