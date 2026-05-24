import { socialChannels } from "@/lib/admin-cms";

export default function SocialPage() {
  return <div className="space-y-4"><h1 className="font-display text-2xl text-white">Social Media Manager</h1><p className="text-sm text-slate-300">Update links and synchronize footer channels automatically.</p><div className="grid gap-2 sm:grid-cols-2">{socialChannels.map((c)=><div key={c} className="rounded-lg border border-white/10 bg-white/5 p-3 text-white">{c}</div>)}</div></div>;
}
