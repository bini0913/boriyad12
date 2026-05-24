"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { backgroundMotion, heroEase } from "@/components/hero/hero-animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : backgroundMotion}
        transition={reduced ? undefined : heroEase}
      >
        <Image
          src="/hero/bya-hero-cinematic.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          quality={92}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#081B33]/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/82 via-[#081B33]/56 to-[#081B33]/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/62 via-transparent to-[#081B33]/30" />
    </div>
  );
}
