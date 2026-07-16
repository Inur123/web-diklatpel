import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DIKLATPEL DKC CBP KPP MAGETAN 2026",
  description:
    "Portal Resmi Pendaftaran Pendidikan dan Latihan Pelatih (DIKLATPEL) DKC CBP KPP Kabupaten Magetan 2026",
  keywords: [
    "DIKLATPEL",
    "Pendidikan dan Latihan Pelatih",
    "CBP",
    "KPP",
    "IPNU",
    "IPPNU",
    "Magetan",
    "2026",
  ],
  openGraph: {
    title: "DIKLATPEL DKC CBP KPP MAGETAN 2026",
    description:
      "Portal Resmi Pendaftaran Pendidikan dan Latihan Pelatih (DIKLATPEL) DKC CBP KPP Kabupaten Magetan 2026",
    type: "website",
    locale: "id_ID",
  },
};

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={inter.className}>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
