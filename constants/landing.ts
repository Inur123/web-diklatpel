export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Timeline", href: "#alur" },
  { label: "Persyaratan", href: "#persyaratan" },
  { label: "Fasilitas", href: "#persyaratan" },
  { label: "Pendaftar", href: "/pendaftar" },
] as const;

// ─── Hero ───────────────────────────────────────────────────────────────────────
export const HERO_BADGE = "PENDAFTARAN DIKLATPEL DKC CBP KPP MAGETAN";

export const HERO_SUBTITLE =
  "Episentrum Kaderisasi : Orkestrasi Gerakan Inklusif, Wujudkan Instruktur-Pelatih yang Solutif-Transformatif";

// ─── Event Info ────────────────────────────────────────────────────────────────
export const EVENT_INFO = [
  {
    id: "date",
    label: "TANGGAL KEGIATAN",
    value: "29 Mei - 1 Juni 2026",
  },
  {
    id: "location",
    label: "LOKASI / VENUE",
    value: "Graha NU Kab. Magetan",
  },
  {
    id: "quota",
    label: "TARGET PESERTA",
    value: "25 Peserta Pilihan (DKC/DKAC)",
  },
] as const;

// ─── Why Section ───────────────────────────────────────────────────────────────
export const WHY_STATS = [
  {
    id: "program",
    category: "NAMA PROGRAM",
    title: "Pendidikan Dan Latihan Pelatih",
    description: "DIKLATPEL CBP KPP",
  },
  {
    id: "focus",
    category: "FOKUS UTAMA",
    title: "Mencetak Pelatih & Instruktur Handal",
    description: "Kompeten & Solutif",
  },
  {
    id: "organizer",
    category: "PENYELENGGARA",
    title: "DKC CBP KPP Kabupaten Magetan",
    description: "CBP KPP Magetan",
  },
] as const;

// ─── Timeline / Alur ───────────────────────────────────────────────────────────────
export const TIMELINE_STEPS = [
  { date: "28 APR - 16 MEI 2026", label: "Pendaftaran Online & Berkas" },
  { date: "18 MEI 2026", label: "Screening & Pengumpulan Esai" },
  { date: "21 MEI 2026", label: "Pengumuman Hasil Seleksi" },
  { date: "25 MEI 2026", label: "Technical Meeting" },
  { date: "29 MEI - 01 JUNI 2026", label: "Pelaksanaan Forum Utama (Graha NU)" },
] as const;

// ─── Registration & Requirements ────────────────────────────────────────────────
export const ADMIN_REQUIREMENTS = [
  {
    title: "Sertifikat DIKLATAMA",
    desc: "Telah mengikuti DIKLATAMA minimal selama 6 Bulan.",
  },
  {
    title: "Karya Tulis Esai",
    desc: "Esai dengan tema 'Manajemen Pelatihan ideal CBP KPP' (Minimal 500 kata).",
  },
  {
    title: "Surat Rekomendasi",
    desc: "Surat rekomendasi resmi dari DKAC / PAC / DKC.",
  },
  {
    title: "Surat Keterangan Sehat",
    desc: "Surat keterangan sehat resmi dari instansi kesehatan / dokter.",
  },
  {
    title: "Surat Izin Orang Tua",
    desc: "Surat izin tertulis dari orang tua / wali untuk mengikuti kegiatan.",
  },
  {
    title: "Pakta Integritas & Materai",
    desc: "Membawa pakta integritas yang ditandatangani di atas materai 10.000.",
  },
  {
    title: "Foto Formal PDL",
    desc: "Foto 4x3 memakai seragam PDL sebanyak 1 lembar.",
  },
  {
    title: "Curriculum Vitae (CV)",
    desc: "Daftar riwayat hidup terbaru mengenai data diri dan riwayat kaderisasi.",
  },
] as const;

export const TICKET_PRICES = [
  { label: "HTM Kader Internal", price: "Rp 100.000" },
  { label: "HTM Kader Eksternal", price: "Rp 125.000" },
] as const;

export const FACILITIES = [
  "Materi & Kurikulum Pelatih (12 Materi Utama)",
  "Pakaian PDH & PDL (Perlengkapan Individu)",
  "Tenda Camping & Logistik Kelompok",
  "Sertifikat Kelulusan Resmi DIKLATPEL",
  "Akses Jaringan Pelatih & Instruktur",
  "Konsumsi & Kopi selama 4 hari penuh",
] as const;

export const CONTACT_INFO = {
  address: "Graha NU Kabupaten Magetan, Jawa Timur",
  phone: [
    { name: "Komandan Baidowi", number: "082132330118" },
    { name: "Komandan Fiya", number: "085880379626" },
  ],
  email: "dkccbpkppmagetan@gmail.com",
} as const;

