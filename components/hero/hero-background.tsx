"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  backgroundMotion,
  booksMotion,
  girlMotion,
  girlSway,
  heroEase,
} from "@/components/hero/hero-animations";
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
          className="object-cover object-[70%_center] md:object-contain md:object-center lg:object-cover lg:object-center"
          sizes="100vw"
          quality={92}
        />
      </motion.div>

      <motion.div
        className="absolute inset-y-[16%] right-[7%] hidden w-[36%] origin-bottom md:block"
        animate={reduced ? undefined : girlMotion}
        transition={reduced ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div
          className="relative h-full w-full"
          animate={reduced ? undefined : girlSway}
          transition={reduced ? undefined : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-0 overflow-hidden [clip-path:ellipse(44%_50%_at_52%_49%)]">
            <Image
              src="/hero/bya-hero-cinematic.jpg"
              alt=""
              fill
              className="object-cover object-[78%_34%] scale-[1.3] saturate-[0.95] contrast-[1.04]"
              sizes="36vw"
            />

            <div
              aria-hidden
              className="absolute right-[14%] top-[20%] h-[44%] w-[48%] rounded-[36%] bg-[#0a1b3f]/32 mix-blend-multiply"
            />
            <div
              aria-hidden
              className="absolute right-[36.5%] top-[31%] h-[26%] w-[6.8%] bg-gradient-to-b from-[#081739] via-[#0b204a] to-[#050c1f]"
              style={{ clipPath: "polygon(50% 0, 100% 16%, 68% 100%, 32% 100%, 0 16%)" }}
            />
            <div
              aria-hidden
              className="absolute right-[39%] top-[33.2%] h-[3.8%] w-[2.8%] rounded-full border border-[#d4a739]/70 bg-[#0d1f45] shadow-[0_0_8px_rgba(212,167,57,0.22)]"
            />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-[20%] right-[20%] hidden h-[18%] w-[24%] md:block"
        animate={reduced ? undefined : booksMotion}
        transition={reduced ? undefined : { duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute inset-0 overflow-hidden [clip-path:ellipse(50%_44%_at_55%_52%)]">
          <Image
            src="/hero/bya-hero-cinematic.jpg"
            alt=""
            fill
            className="object-cover object-[74%_73%] scale-[1.45]"
            sizes="24vw"
          />
        </div>
      </motion.div>

      <div className="absolute inset-0 bg-[#081B33]/38" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#081B33]/88 via-[#081B33]/62 to-[#081B33]/24" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#081B33]/66 via-transparent to-[#081B33]/36" />
    </div>
  );
}
