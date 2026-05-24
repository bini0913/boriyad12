export default function ContentPage() {
  const areas = ["Mission", "Vision", "Counters", "Achievements", "About text", "Homepage content"];
  return <div className="space-y-4"><h1 className="font-display text-2xl text-white">Site Content Manager</h1><div className="grid gap-2 sm:grid-cols-2">{areas.map((a)=><div key={a} className="rounded-lg border border-white/10 bg-white/5 p-3 text-white">{a}</div>)}</div></div>;
}
