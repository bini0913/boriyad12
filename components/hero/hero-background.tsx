"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { heroCompositionMotion, heroCompositionTransition } from "@/components/hero/hero-animations";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroBackground() {
  const reduced = useReducedMotion();

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : heroCompositionMotion}
        transition={reduced ? undefined : heroCompositionTransition}
      >
        <Image
          src="/hero/bya-hero-cinematic.jpg"
          alt=""
          fill
          priority
          className="object-cover object-[68%_center] sm:object-[70%_center] md:object-contain md:object-center lg:object-cover lg:object-center"
          sizes="100vw"
          quality={92}
        />
      </motion.div>

      <div className="absolute inset-0 bg-[#081B33]/34" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/86 via-[#081B33]/58 to-[#081B33]/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/64 via-transparent to-[#081B33]/32" />
    </div>
  );
}
