import { demoMediaCollections } from "@/lib/admin-cms";

export default function MediaPage() {
  return <div className="space-y-4"><h1 className="font-display text-2xl text-white">Media Manager</h1><p className="text-sm text-slate-300">Storage-backed collections for no-code visual updates.</p><div className="grid gap-3 sm:grid-cols-2">{demoMediaCollections.map((item)=><div key={item} className="rounded-lg border border-white/10 bg-white/5 p-4 text-white">{item}</div>)}</div></div>;
}
