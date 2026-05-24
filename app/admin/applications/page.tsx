import { redirect } from "next/navigation";

export default function LegacyApplicationsPage() {
  redirect("/admin/admissions");
}
