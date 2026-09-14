import { Head, Link } from '@inertiajs/react';
import {
    ArrowRight,
    CalendarDays,
    Mail,
    MapPin,
    Phone,
    ShieldCheck,
    Users,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const eventDetails = [
    {
        icon: CalendarDays,
        label: 'Pelaksanaan',
        value: '24–27 Desember 2026',
    },
    {
        icon: MapPin,
        label: 'Lokasi',
        value: 'Ponpes Roudlotul Huda, Lembeyan',
    },
    {
        icon: Users,
        label: 'Kuota',
        value: '25 calon pelatih',
    },
] as const;

export default function Landing() {
    return (
        <div className="flex min-h-screen flex-col overflow-hidden bg-white text-slate-950">
            <Head title="DIKLATPEL 2026 — CBP IPNU & KPP IPPNU Magetan" />

            <header className="relative z-20 border-b border-gray-200 bg-white/95 backdrop-blur-xl">
                <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
                    <Link href="/" aria-label="Beranda DIKLATPEL">
                        <img
                            src="/images/logo-diklatpel-2.webp"
                            alt="Logo DIKLATPEL PC IPNU IPPNU Magetan"
                            className="h-11 w-auto max-w-[190px] object-contain sm:h-12 sm:max-w-[280px]"
                        />
                    </Link>

                    <nav
                        className="flex items-center gap-1 sm:gap-2"
                        aria-label="Navigasi publik"
                    >
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/pendaftar">Peserta</Link>
                        </Button>
                        <Button
                            size="sm"
                            className="rounded-full bg-orange-500 px-4 text-white shadow-sm shadow-orange-200 hover:bg-orange-600"
                            asChild
                        >
                            <Link href="/register">
                                Daftar <ArrowRight className="size-4" />
                            </Link>
                        </Button>
                    </nav>
                </div>
            </header>

            <main className="relative isolate flex flex-1 items-center py-12 sm:py-16 lg:py-20">
                <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_0%,#fff7ed_0%,#ffffff_55%)]" />
                <div className="absolute top-20 left-1/2 -z-10 h-80 w-80 -translate-x-1/2 rounded-full border-[64px] border-orange-100/60 sm:h-[30rem] sm:w-[30rem] sm:border-[88px]" />
                <div className="absolute top-1/2 -left-24 -z-10 size-48 rounded-full bg-orange-50 blur-2xl" />
                <div className="absolute top-1/3 -right-24 -z-10 size-56 rounded-full bg-amber-50 blur-2xl" />

                <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <section className="mx-auto max-w-5xl text-center">
                        <Badge
                            variant="outline"
                            className="border-gray-200 bg-white/90 px-3 py-1.5 text-orange-600 shadow-sm"
                        >
                            <ShieldCheck className="size-3.5" />
                            DKC CBP IPNU &amp; KPP IPPNU Magetan
                        </Badge>

                        <p className="mt-7 text-xs font-bold tracking-[0.24em] text-orange-600 uppercase sm:text-sm">
                            Pendidikan dan Latihan Pelatih
                        </p>

                        <h1 className="font-display mx-auto mt-4 max-w-5xl text-6xl leading-none font-bold tracking-[-0.05em] sm:text-8xl lg:text-[6.5rem]">
                            DIKLATPEL{' '}
                            <span className="text-orange-500">2026</span>
                        </h1>

                        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                            DIKLATPEL 2026 menjadi ruang pembentukan pelatih
                            CBP–KPP yang tangguh, terampil, dan bertanggung
                            jawab dalam mendampingi proses pendidikan kader.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Button
                                size="lg"
                                className="h-12 w-full rounded-full bg-orange-500 px-7 text-white shadow-lg shadow-orange-200 hover:bg-orange-600 sm:w-auto"
                                asChild
                            >
                                <Link href="/register">
                                    Daftar DIKLATPEL
                                    <ArrowRight className="size-4" />
                                </Link>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="h-12 w-full rounded-full border-gray-300 bg-white px-7 hover:border-orange-300 hover:bg-orange-50 sm:w-auto"
                                asChild
                            >
                                <Link href="/pendaftar">Lihat peserta</Link>
                            </Button>
                        </div>
                    </section>

                    <Card className="mx-auto mt-12 max-w-6xl overflow-hidden border-gray-200 bg-white/95 py-0 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:mt-16">
                        <CardContent className="grid p-0 md:grid-cols-3">
                            {eventDetails.map((item, index) => (
                                <div
                                    key={item.label}
                                    className="relative flex items-center gap-4 border-b border-gray-200 px-5 py-5 text-left last:border-b-0 sm:px-7 md:border-r md:border-b-0 md:last:border-r-0"
                                >
                                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600 ring-1 ring-orange-100">
                                        <item.icon className="size-5" />
                                    </span>
                                    <div className="min-w-0">
                                        <p className="text-xs font-semibold tracking-[0.12em] text-slate-500 uppercase">
                                            {item.label}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold text-slate-950 sm:text-base">
                                            {item.value}
                                        </p>
                                    </div>
                                    {index === 0 ? (
                                        <span className="absolute top-0 left-0 h-1 w-full bg-orange-500 md:h-full md:w-1" />
                                    ) : null}
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </div>
            </main>

            <footer className="border-t border-slate-800 bg-slate-950 py-8 text-white">
                <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-6">
                            <img
                                src="/images/logo-putih-diklatpel.webp"
                                alt="Logo putih DIKLATPEL"
                                className="h-12 w-auto object-contain"
                            />
                            <p className="max-w-[380px] text-xs leading-relaxed text-slate-400">
                                Pendidikan dan Latihan Pelatih (DIKLATPEL) DKC CBP IPNU &amp; KPP IPPNU Kabupaten Magetan 2026.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 text-xs font-medium text-slate-400 sm:flex-row sm:items-start sm:gap-8">
                            <a href="mailto:pelajarnumagetan@gmail.com" className="flex items-center gap-2 pt-0.5 transition-colors hover:text-white">
                                <Mail className="h-4 w-4 shrink-0" />
                                <span>pelajarnumagetan@gmail.com</span>
                            </a>
                            <div className="flex flex-col gap-3">
                                <a href="https://wa.me/6285806246254" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                                    <Phone className="h-4 w-4 shrink-0" />
                                    <span>Komandan Agung (+62 858-0624-6254)</span>
                                </a>
                                <a href="https://wa.me/6285816204251" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                                    <Phone className="h-4 w-4 shrink-0" />
                                    <span>Komandan Lutfi (+62 858-1620-4251)</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-col items-start justify-between border-t border-slate-800 pt-6 md:flex-row md:items-center">
                        <p className="text-xs text-slate-500">
                            &copy; 2026 DKC CBP IPNU &amp; KPP IPPNU Kabupaten Magetan
                        </p>
                        <Link
                            href="/login"
                            className="mt-4 text-xs font-medium text-orange-400 transition-colors hover:text-orange-300 md:mt-0"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
