import { getApplicationsServer, type ApplicationRecord } from "@/services/applications.service";
import { buildRecentActivity, getDashboardStats } from "@/lib/admin-cms";

export default async function AdminDashboardPage() {
  let applications: ApplicationRecord[] = [];
  try { applications = await getApplicationsServer(); } catch {}
  const stats = getDashboardStats(applications);
  const activity = buildRecentActivity(applications);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-3xl font-semibold text-white">Executive Dashboard</h1>
        <p className="mt-2 text-sm text-slate-300">Admissions and content operations in one premium CMS.</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          ["Pending Admissions", stats.pendingAdmissions],
          ["Approved Applications", stats.approvedApplications],
          ["Published News", stats.publishedNews],
          ["Visitors", stats.visitors],
        ].map(([label, value]) => (
          <div key={String(label)} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <p className="text-xs uppercase tracking-wide text-slate-400">{label}</p>
            <p className="mt-3 font-display text-3xl text-[#E2C07A]">{value}</p>
          </div>
        ))}
      </div>
      <section className="rounded-xl border border-white/10 bg-[#06122B]/80 p-6">
        <h2 className="font-display text-xl text-white">Recent Activity</h2>
        <div className="mt-4 space-y-3">
          {activity.map((item) => (
            <div key={item.id} className="rounded-lg border border-white/10 bg-white/5 p-3">
              <p className="text-sm font-medium text-white">{item.title}</p>
              <p className="text-xs text-slate-300">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
