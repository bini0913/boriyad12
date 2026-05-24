import { getApplicationsServer, type ApplicationRecord } from "@/services/applications.service";
import { ApplicationsTable } from "@/components/admin/applications-table";

export default async function AdmissionsPage() {
  let applications: ApplicationRecord[] = [];
  try { applications = await getApplicationsServer(); } catch {}
  return <div className="space-y-4"><h1 className="font-display text-2xl text-white">Admissions Management</h1><p className="text-sm text-slate-300">Review applications, update statuses, contact parents, and store notes.</p><ApplicationsTable applications={applications} /></div>;
}
