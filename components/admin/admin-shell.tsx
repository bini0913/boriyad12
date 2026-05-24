"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard,
  GraduationCap,
  Newspaper,
  ImageIcon,
  Users,
  Share2,
  FileCog,
  ShieldCheck,
  LogOut,
} from "lucide-react";
import { createClient, isSupabaseConfigured } from "@/supabase/client";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/admissions", label: "Admissions", icon: GraduationCap },
  { href: "/admin/news", label: "News CMS", icon: Newspaper },
  { href: "/admin/media", label: "Media Manager", icon: ImageIcon },
  { href: "/admin/leadership", label: "Leadership", icon: Users },
  { href: "/admin/social", label: "Social Media", icon: Share2 },
  { href: "/admin/content", label: "Site Content", icon: FileCog },
  { href: "/admin/roles", label: "Roles & Permissions", icon: ShieldCheck },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const signOut = async () => {
    if (isSupabaseConfigured()) {
      const supabase = createClient();
      await supabase.auth.signOut();
    }
    router.push("/admin-login");
    router.refresh();
  };

  return (
    <div className="flex min-h-screen bg-[#040B1E] text-slate-100">
      <aside className="hidden w-72 shrink-0 flex-col border-r border-white/10 bg-gradient-to-b from-[#071638] to-[#040B1E] lg:flex">
        <div className="border-b border-white/10 px-6 py-6">
          <p className="font-display text-lg font-semibold text-[#E2C07A]">Boriyad CMS</p>
          <p className="text-xs text-white/60">Premium School Control Center</p>
        </div>
        <nav className="flex-1 space-y-1 p-4">
          {NAV.map((item) => {
            const active = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            const Icon = item.icon;
            return (
              <Link key={item.href} href={item.href} className={cn("flex items-center gap-3 rounded-md px-3 py-2.5 text-sm", active ? "bg-[#E2C07A]/15 text-[#E2C07A]" : "text-white/70 hover:bg-white/5 hover:text-white")}>
                <Icon className="h-4 w-4" />{item.label}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-white/10 p-4">
          <button type="button" onClick={signOut} className="flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-sm text-white/70 hover:bg-white/5 hover:text-white"><LogOut className="h-4 w-4" />Sign out</button>
        </div>
      </aside>
      <main className="flex-1 bg-gradient-to-br from-[#040B1E] via-[#081531] to-[#0A1E45] p-5 md:p-8">{children}</main>
    </div>
  );
}
