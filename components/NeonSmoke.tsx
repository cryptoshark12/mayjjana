"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function NeonSmoke() {
  const { scrollYProgress } = useScroll();

  const y1 = useTransform(scrollYProgress, [0, 0.6], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 0.6], [0, -260]);
  const x1 = useTransform(scrollYProgress, [0, 0.6], [0, 60]);
  const x2 = useTransform(scrollYProgress, [0, 0.6], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.7], [0.55, 0.85, 0.2]);
  const blur = useTransform(scrollYProgress, [0, 0.6], [18, 34]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.svg
        style={{ y: y1, x: x1, opacity }}
        className="absolute -top-24 left-[-10%] h-[520px] w-[620px]"
        viewBox="0 0 800 800"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="14" result="blurFx" />
            <feColorMatrix
              in="blurFx"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 18 -7"
              result="glowFx"
            />
            <feMerge>
              <feMergeNode in="glowFx" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="neonGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(214,178,94,0.0)" />
            <stop offset="0.45" stopColor="rgba(214,178,94,0.55)" />
            <stop offset="1" stopColor="rgba(160,90,255,0.40)" />
          </linearGradient>
        </defs>

        <motion.path
          d="M120 640 C 240 520, 260 420, 170 320 C 80 220, 140 140, 280 160 C 420 180, 430 120, 360 80"
          stroke="url(#neonGrad1)"
          strokeWidth="34"
          strokeLinecap="round"
          filter="url(#glow1)"
          initial={{ pathLength: 0.2 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          style={{ filter: `blur(${blur.get()}px)` as unknown as any }}
        />
      </motion.svg>

      <motion.svg
        style={{ y: y2, x: x2, opacity }}
        className="absolute top-10 right-[-12%] h-[560px] w-[680px]"
        viewBox="0 0 800 800"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="16" result="blurFx2" />
            <feColorMatrix
              in="blurFx2"
              type="matrix"
              values="
                1 0 0 0 0
                0 1 0 0 0
                0 0 1 0 0
                0 0 0 18 -7"
              result="glowFx2"
            />
            <feMerge>
              <feMergeNode in="glowFx2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <linearGradient id="neonGrad2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(214,178,94,0.0)" />
            <stop offset="0.5" stopColor="rgba(214,178,94,0.45)" />
            <stop offset="1" stopColor="rgba(60,200,255,0.35)" />
          </linearGradient>
        </defs>

        <motion.path
          d="M650 690 C 560 600, 520 500, 610 420 C 700 340, 640 240, 480 270 C 320 300, 280 220, 360 150"
          stroke="url(#neonGrad2)"
          strokeWidth="30"
          strokeLinecap="round"
          filter="url(#glow2)"
          initial={{ pathLength: 0.15 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeOut", delay: 0.2 }}
          style={{ filter: `blur(${blur.get()}px)` as unknown as any }}
        />
      </motion.svg>

      <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/40" />
    </div>
  );
}
