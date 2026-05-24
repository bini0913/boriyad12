import type { ApplicationRecord } from "@/services/applications.service";

export type ActivityItem = {
  id: string;
  title: string;
  detail: string;
  at: string;
  tone?: "info" | "success" | "warning";
};

export type NewsPost = {
  id: string;
  title: string;
  status: "draft" | "published";
  featured: boolean;
  image: string;
  updatedAt: string;
};

export const demoNewsPosts: NewsPost[] = [
  { id: "n1", title: "Boriyad wins East Africa STEM Challenge", status: "published", featured: true, image: "/hero/bya-hero-cinematic.jpg", updatedAt: "2026-05-20" },
  { id: "n2", title: "Campus expansion opening ceremony", status: "draft", featured: false, image: "/hero/bya-hero-cinematic.jpg", updatedAt: "2026-05-18" },
  { id: "n3", title: "Scholarship admission round announced", status: "published", featured: false, image: "/hero/bya-hero-cinematic.jpg", updatedAt: "2026-05-14" },
];

export const demoMediaCollections = [
  "Homepage images",
  "Leadership photos",
  "Gallery",
  "Hero backgrounds",
  "Achievements images",
];

export const socialChannels = ["Instagram", "Facebook", "Telegram", "TikTok", "LinkedIn", "YouTube"];

export function getDashboardStats(applications: ApplicationRecord[]) {
  const pendingAdmissions = applications.filter((a) => a.status === "pending").length;
  const approvedApplications = applications.filter((a) => a.status === "approved").length;
  return {
    pendingAdmissions,
    approvedApplications,
    publishedNews: demoNewsPosts.filter((n) => n.status === "published").length,
    visitors: 12480,
  };
}

export function buildRecentActivity(applications: ApplicationRecord[]): ActivityItem[] {
  const latestAdmissions = applications.slice(0, 3).map((a) => ({
    id: a.id,
    title: `Application ${a.reference_id} moved to ${a.status}`,
    detail: `${a.student_name} • ${a.parent_name}`,
    at: a.created_at,
    tone: a.status === "approved" ? "success" : a.status === "pending" ? "warning" : "info",
  }));

  return [
    ...latestAdmissions,
    { id: "sys-1", title: "Hero media collection updated", detail: "Homepage visual pack replaced", at: "2026-05-23T09:45:00Z", tone: "info" },
    { id: "sys-2", title: "Featured news published", detail: "STEM challenge article set as featured", at: "2026-05-22T14:20:00Z", tone: "success" },
  ];
}
