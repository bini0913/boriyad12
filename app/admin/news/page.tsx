import { demoNewsPosts } from "@/lib/admin-cms";

export default function NewsPage() {
  return <div className="space-y-4"><h1 className="font-display text-2xl text-white">News CMS</h1><p className="text-sm text-slate-300">Create, edit, delete and feature posts with image upload-ready records.</p><div className="grid gap-3">{demoNewsPosts.map((n)=><div key={n.id} className="rounded-lg border border-white/10 bg-white/5 p-4"><p className="font-medium text-white">{n.title}</p><p className="text-xs text-slate-300">{n.status} {n.featured ? "• Featured" : ""}</p></div>)}</div></div>;
}
