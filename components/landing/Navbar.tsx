"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { NAV_LINKS } from "@/constants/landing";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Periksa target scroll dari localStorage agar URL tetap bersih tanpa #
    const savedTarget = localStorage.getItem("scrollTarget");
    if (savedTarget && window.location.pathname === "/") {
      localStorage.removeItem("scrollTarget");
      setTimeout(() => {
        // eslint-disable-next-line react-hooks/immutability
        handleScrollToSection(savedTarget);
      }, 300);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const offsetPosition = element.offsetTop - 45;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "top-0 mx-auto max-w-full w-full bg-[#0a0a0a]/95 border-b border-[#262626] shadow-lg backdrop-blur-md rounded-none"
          : "top-4 mx-auto max-w-6xl w-[90%] bg-[#121212]/80 border border-[#262626] shadow-xl backdrop-blur-md rounded-[40px]"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ease-in-out ${
          isScrolled ? "px-8 py-4" : "px-10 py-3.5"
        }`}
      >
        {/* Logo */}
        <span
          onClick={() => {
            if (window.location.pathname !== "/") {
              router.push("/");
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="flex flex-col leading-tight cursor-pointer select-none"
        >
          <span className="text-xs font-black tracking-wider text-[#f97316]">
            DIKLATPEL
          </span>
          <span className="text-[8px] font-semibold text-neutral-400 tracking-wider">
            PC IPNU IPPNU MAGETAN
          </span>
        </span>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link, i) => (
            <span
              key={`${link.href}-${i}`}
              onClick={() => {
                if (link.href.startsWith("/")) {
                  router.push(link.href);
                } else if (window.location.pathname !== "/") {
                  // Simpan target tujuan ke localStorage untuk scroll nanti
                  localStorage.setItem("scrollTarget", link.href);
                  // Redirect ke URL bersih / tanpa ada tambahan hashtag
                  router.push("/");
                } else {
                  handleScrollToSection(link.href);
                }
              }}
              className="text-[11px] font-bold text-neutral-400 transition-colors duration-200 hover:text-[#f97316] cursor-pointer select-none"
            >
              {link.label}
            </span>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push("/register")}
            className="hidden rounded-full bg-[#f97316] px-6 py-2 text-[11px] font-bold text-white transition-all duration-200 hover:bg-[#ea580c] hover:shadow-[0_0_15px_rgba(249,115,22,0.4)] md:inline-flex cursor-pointer border-0"
          >
            Daftar
          </button>

          {/* Mobile Menu Button */}
          <button
            id="navbar-mobile-menu-btn"
            aria-label="Toggle mobile menu"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="text-neutral-400 md:hidden hover:text-[#f97316] cursor-pointer border-0 bg-transparent"
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav
          className="bg-[#0a0a0a] border-t border-[#262626] px-6 pb-6 pt-2 md:hidden transition-all duration-300 rounded-b-[40px]"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link, i) => (
              <li key={`${link.href}-${i}`}>
                <span
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (link.href.startsWith("/")) {
                      router.push(link.href);
                    } else if (window.location.pathname !== "/") {
                      localStorage.setItem("scrollTarget", link.href);
                      router.push("/");
                    } else {
                      handleScrollToSection(link.href);
                    }
                  }}
                  className="block rounded-lg px-3 py-2 text-xs font-semibold text-neutral-400 transition-colors hover:bg-neutral-900 hover:text-[#f97316] cursor-pointer select-none"
                >
                  {link.label}
                </span>
              </li>
            ))}
            <li>
              <button
                onClick={() => router.push("/register")}
                className="mt-2 block w-full rounded-full bg-[#f97316] px-4 py-2 text-center text-xs font-semibold text-white cursor-pointer border-0"
              >
                Daftar
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
