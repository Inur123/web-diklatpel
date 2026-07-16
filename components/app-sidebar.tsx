"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { ShieldCheck, LayoutDashboard, X, ClipboardList, Settings } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  userEmail: string;
  userName: string;
}

export function AppSidebar({ userEmail, userName, ...props }: AppSidebarProps) {
  const { setOpenMobile } = useSidebar();
  const pathname = usePathname();

  const userData = {
    name: userName,
    email: userEmail,
    avatar: "",
  };

  const isDashboardActive = pathname === "/dashboard";
  const isRegistrasiActive = pathname.startsWith("/registrasi");
  const isSettingsActive = pathname === "/settings";

  return (
    <Sidebar className="!border-r !border-neutral-200 bg-white" {...props}>
      <SidebarHeader className="h-16 !border-b !border-neutral-200 bg-white flex items-center justify-between px-4 flex-row">
        <SidebarMenu className="flex-1">
          <SidebarMenuItem>
            <SidebarMenuButton size="lg">
              <span className="flex items-center gap-2 cursor-default select-none">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-[#f97316] text-white">
                  <ShieldCheck className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-xs leading-tight font-black">
                  <span className="truncate text-gray-800">DIKLATPEL</span>
                  <span className="truncate text-[9px] text-gray-400">ADMIN PORTAL</span>
                </div>
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        {/* X Close Button - Mobile Only */}
        <button
          onClick={() => setOpenMobile(false)}
          className="md:hidden flex items-center justify-center p-1.5 rounded-lg !text-neutral-500 hover:!bg-[#f97316]/5 hover:!text-[#f97316] transition-all cursor-pointer border-0 bg-transparent"
          aria-label="Tutup sidebar"
        >
          <X className="h-4 w-4" />
        </button>
      </SidebarHeader>

      <SidebarContent className="p-3 bg-white">
        <SidebarMenu className="space-y-0.5">
          {/* Dashboard */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setOpenMobile(false)}
              className={`w-full transition-all duration-200 ease-out cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                isDashboardActive
                  ? "bg-[#f97316]/10 text-[#f97316] font-bold hover:bg-[#f97316]/15 shadow-[inset_3px_0_0_0_#f97316]"
                  : "text-neutral-700 hover:bg-neutral-100/80 hover:text-neutral-900"
              }`}
              render={
                <Link href="/dashboard" className="flex items-center gap-2 px-3 py-2 rounded-lg w-full">
                  <LayoutDashboard className={`size-4 transition-transform group-hover/button:scale-110 ${isDashboardActive ? "text-[#f97316]" : "text-neutral-500"}`} />
                  <span className={`text-xs font-bold ${isDashboardActive ? "text-[#f97316]" : "text-neutral-700"}`}>
                    Dashboard
                  </span>
                </Link>
              }
            />
          </SidebarMenuItem>

          {/* Registrasi & Seleksi */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setOpenMobile(false)}
              className={`w-full transition-all duration-200 ease-out cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                isRegistrasiActive
                  ? "bg-[#f97316]/10 text-[#f97316] font-bold hover:bg-[#f97316]/15 shadow-[inset_3px_0_0_0_#f97316]"
                  : "text-neutral-700 hover:bg-neutral-100/80 hover:text-neutral-900"
              }`}
              render={
                <Link href="/registrasi" className="flex items-center gap-2 px-3 py-2 rounded-lg w-full">
                  <ClipboardList className={`size-4 transition-transform group-hover/button:scale-110 ${isRegistrasiActive ? "text-[#f97316]" : "text-neutral-500"}`} />
                  <span className={`text-xs font-bold ${isRegistrasiActive ? "text-[#f97316]" : "text-neutral-700"}`}>
                    Registrasi
                  </span>
                </Link>
              }
            />
          </SidebarMenuItem>

          {/* Settings */}
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => setOpenMobile(false)}
              className={`w-full transition-all duration-200 ease-out cursor-pointer hover:scale-[1.02] active:scale-[0.98] ${
                isSettingsActive
                  ? "bg-[#f97316]/10 text-[#f97316] font-bold hover:bg-[#f97316]/15 shadow-[inset_3px_0_0_0_#f97316]"
                  : "text-neutral-700 hover:bg-neutral-100/80 hover:text-neutral-900"
              }`}
              render={
                <Link href="/settings" className="flex items-center gap-2 px-3 py-2 rounded-lg w-full">
                  <Settings className={`size-4 transition-transform group-hover/button:scale-110 ${isSettingsActive ? "text-[#f97316]" : "text-neutral-500"}`} />
                  <span className={`text-xs font-bold ${isSettingsActive ? "text-[#f97316]" : "text-neutral-700"}`}>
                    Pengaturan
                  </span>
                </Link>
              }
            />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="bg-white !border-t !border-neutral-200">
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  );
}
