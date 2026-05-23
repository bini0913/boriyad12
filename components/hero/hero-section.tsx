"use client";

import { HeroBackground } from "@/components/hero/hero-background";
import { HeroContent } from "@/components/hero/hero-content";
import { HeroFloatingIcons } from "@/components/hero/hero-floating-icons";
import { HeroSliderDots } from "@/components/hero/hero-slider-dots";
import { HeroStatsStrip } from "@/components/hero/hero-stats-strip";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#081B33]" aria-label="Hero">
      <div className="relative flex min-h-0 flex-1 flex-col">
        <HeroBackground />
        <HeroFloatingIcons />
        <HeroSliderDots />

        <div className="relative mx-auto flex min-h-0 w-full max-w-[1400px] flex-1 flex-col justify-center">
          <HeroContent />
        </div>
      </div>

      <HeroStatsStrip />
    </section>
  );
}
