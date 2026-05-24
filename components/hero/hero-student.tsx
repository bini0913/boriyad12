"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { studentFloat, studentTransition } from "@/components/hero/hero-animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroStudent() {
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[48%] md:block lg:w-[46%] xl:w-[44%]">
      <motion.div
        className="relative h-full w-full"
        animate={reduced ? undefined : studentFloat}
        transition={reduced ? undefined : studentTransition}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/hero/bya-hero-cinematic.jpg"
            alt="Boriyad Youth Academy student in uniform"
            fill
            priority
            className="object-cover object-[78%_22%] scale-[1.35] saturate-[0.95] contrast-[1.04] lg:scale-[1.28]"
            sizes="(max-width: 1024px) 50vw, 44vw"
          />

          <div
            aria-hidden
            className="absolute right-[16%] top-[30%] h-[38%] w-[43%] rounded-[35%] bg-[#0b1a3e]/30 mix-blend-multiply blur-[1px]"
          />
          <div
            aria-hidden
            className="absolute right-[32.2%] top-[35%] h-[24%] w-[5.6%] bg-gradient-to-b from-[#081739] via-[#0b204a] to-[#050c1f]"
            style={{ clipPath: "polygon(50% 0, 100% 16%, 68% 100%, 32% 100%, 0 16%)" }}
          />
          <div
            aria-hidden
            className="absolute right-[34.3%] top-[36.5%] h-[3.2%] w-[2.1%] rounded-full border border-[#d4a739]/70 bg-[#0d1f45] shadow-[0_0_8px_rgba(212,167,57,0.25)]"
          />
        </div>
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#081B33] to-transparent" />
      </motion.div>
    </div>
  );
}
