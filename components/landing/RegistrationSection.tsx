import {
  ADMIN_REQUIREMENTS,
  TICKET_PRICES,
  FACILITIES,
} from "@/constants/landing";
import { FileText, Check, Gift } from "lucide-react";

export default function RegistrationSection() {
  return (
    <section
      id="persyaratan"
      className="bg-[#0a0a0a] px-6 py-20 sm:px-8"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.01) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.01) 1px, transparent 1px)
        `,
        backgroundSize: "45px 45px",
      }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-14 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#121212] px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#f97316]">
            PANDUAN LENGKAP
          </span>
          <h2 className="mt-4 text-2xl font-black leading-tight text-white sm:text-3xl">
            Syarat Pendaftaran &amp; Biaya
          </h2>
          <p className="mt-2 text-xs text-neutral-400 font-medium">
            Informasi kelengkapan berkas administrasi, biaya kontribusi, dan
            fasilitas peserta
          </p>
        </div>

        {/* 3 Columns */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 items-stretch">
          {/* Col 1: Berkas Administrasi */}
          <div
            className="rounded-2xl border border-[#262626] bg-[#121212]/30 p-6 shadow-sm flex flex-col lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900 border border-[#262626] text-[#f97316]">
                <FileText className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-black text-white">
                Berkas Administrasi
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 flex-1">
              {ADMIN_REQUIREMENTS.map((req, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
                    <Check className="h-3 w-3" />
                  </div>
                  <div>
                    <h4 className="text-[11px] font-bold text-neutral-200 leading-tight">
                      {req.title}
                    </h4>
                    <p className="text-[10px] text-neutral-400 font-medium mt-0.5 leading-relaxed">
                      {req.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Tiket Orange/Hitam */}
          <div className="relative overflow-hidden rounded-2xl border border-[#262626] bg-[#121212]/80 p-8 text-white shadow-lg flex flex-col gap-6">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#f97316]" />
            <div>
              <p className="text-[8px] font-bold uppercase tracking-widest text-[#f97316] mb-1">
                REGISTRATION HTM
              </p>
              <h3 className="text-sm font-black text-white mb-4">
                DIKLATPEL HTM
              </h3>

              <div className="space-y-3.5">
                {TICKET_PRICES.map((ticket, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center text-xs"
                  >
                    <p className="text-[11px] font-bold text-neutral-300">
                      {ticket.label}
                    </p>
                    <p className="text-[11px] font-black text-[#f97316]">
                      {ticket.price}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#262626] pt-4">
              <p className="text-[8px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
                INFO PEMBAYARAN:
              </p>
              <div className="space-y-3 text-[10px]">
                <p className="text-neutral-400 leading-relaxed">
                  Pembayaran kontribusi pendaftaran dapat dikoordinasikan
                  langsung melalui WhatsApp Panitia pelaksana:
                </p>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="font-bold text-[#f97316]">
                    Komandan Baidowi
                  </span>
                  <span className="font-mono text-neutral-300">
                    0821 3233 0118
                  </span>
                </div>
                <div className="flex flex-col gap-1 mt-2">
                  <span className="font-bold text-[#f97316]">
                    Komandan Fiya
                  </span>
                  <span className="font-mono text-neutral-300">
                    0858 8037 9626
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3: Fasilitas Peserta */}
          <div
            className="rounded-2xl border border-[#262626] bg-[#121212]/30 p-6 shadow-sm flex flex-col"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900 border border-[#262626] text-[#f97316]">
                <Gift className="h-5 w-5" />
              </div>
              <h3 className="text-sm font-black text-white">
                Fasilitas Peserta
              </h3>
            </div>
            <div className="space-y-2 flex-1">
              {FACILITIES.map((facility, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-[#262626] bg-neutral-900/50 px-4 py-3 hover:border-neutral-700 transition-colors"
                >
                  <Check className="h-3.5 w-3.5 text-[#f97316] shrink-0" />
                  <p className="text-[11px] font-bold text-neutral-300 leading-tight">
                    {facility}
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
