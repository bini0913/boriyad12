import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { PageHero } from "@/components/layout/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { StatCounter } from "@/components/ui/stat-counter";
import { STATS } from "@/lib/constants";

const STAT_KEYS = ["placement", "students", "educators", "years"] as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function AboutPage() {
  const t = await getTranslations("about");
  const ts = await getTranslations("home.stats");
  const managerPhoto = process.env.NEXT_PUBLIC_MANAGER_PHOTO_URL || "/hero/bya-hero-cinematic.jpg";

  return (
    <>
      <PageHero eyebrow={t("hero.eyebrow")} title={t("hero.title")} description={t("hero.description")} />
      <Section>
        <div className="mb-16 grid gap-8 overflow-hidden rounded-2xl border border-border/60 bg-[#F8F7F4] p-6 shadow-[0_18px_60px_rgba(8,27,51,0.12)] lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-12 lg:p-10">
          <ScrollReveal>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-[#C9A86A]/35 bg-[#081B33]/5">
              <Image
                src={managerPhoto}
                alt={t("leadership.imageAlt")}
                width={900}
                height={1120}
                className="h-full w-full object-cover motion-safe:animate-[subtlePulse_6s_ease-in-out_infinite]"
                priority
              />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-[#C9A86A]">{t("leadership.eyebrow")}</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#081B33] md:text-4xl">{t("leadership.title")}</h2>
              <div className="mt-5 border-l-2 border-[#C9A86A] pl-4">
                <p className="font-display text-xl text-[#081B33]">{t("leadership.name")}</p>
                <p className="mt-1 text-sm font-medium leading-relaxed text-[#081B33]/80">{t("leadership.role")}</p>
                <p className="text-sm font-medium leading-relaxed text-[#081B33]/80">{t("leadership.school")}</p>
              </div>
              <p className="mt-6 text-base leading-relaxed text-[#081B33]/80">{t("leadership.message")}</p>
              <div className="mt-7 border-t border-[#C9A86A]/45 pt-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#081B33]/50">{t("leadership.signatureLabel")}</p>
                <p className="mt-2 font-display text-lg italic text-[#081B33]/75">{t("leadership.signatureName")}</p>
              </div>
              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#081B33] px-6 py-3 text-sm font-semibold text-[#F8F7F4] transition-all duration-300 hover:bg-[#0d2747] hover:shadow-[0_0_22px_rgba(201,168,106,0.45)]">
                {t("leadership.cta")}
              </button>
            </div>
          </ScrollReveal>
        </div>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal>
            <SectionHeader
              eyebrow={t("story.eyebrow")}
              title={t("story.title")}
              description={t("story.description")}
              align="left"
              className="mb-0"
            />
            <p className="mt-6 text-muted leading-relaxed">{t("story.body")}</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 gap-6">
              {STATS.map((s, i) => (
                <StatCounter key={STAT_KEYS[i]} value={s.value} suffix={s.suffix} label={ts(STAT_KEYS[i])} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>
      <Section dark className="cinematic-gradient">
        <ScrollReveal>
          <SectionHeader
            eyebrow={t("mission.eyebrow")}
            title={t("mission.title")}
            description={t("mission.description")}
            light
          />
        </ScrollReveal>
        <div className="grid gap-8 md:grid-cols-3">
          {(
            [
              { title: t("mission.missionTitle"), text: t("mission.mission") },
              { title: t("mission.visionTitle"), text: t("mission.vision") },
              { title: t("mission.valuesTitle"), text: t("mission.values") },
            ] as const
          ).map((card, i) => (
            <ScrollReveal key={card.title} delay={i * 0.1}>
              <div className="rounded-lg border border-white/10 bg-white/5 p-8">
                <h3 className="font-display text-xl font-semibold text-gold-400">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{card.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>
    </>
  );
}
