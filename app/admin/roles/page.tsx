export default function RolesPage() {
  const roles = ["Super Admin", "Admissions Officer", "Content Editor", "News Manager"];
  return <div className="space-y-4"><h1 className="font-display text-2xl text-white">Roles & Permissions</h1><div className="rounded-lg border border-white/10 bg-white/5 p-4 text-slate-200">Role-based access matrix ready for Supabase policies and route-level guards.</div><ul className="grid gap-2 sm:grid-cols-2">{roles.map((r)=><li key={r} className="rounded-lg border border-white/10 bg-[#0b1f46] p-3 text-white">{r}</li>)}</ul></div>;
}
