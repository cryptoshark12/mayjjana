"use client";

import { motion } from "framer-motion";
import GlowButton from "./GlowButton";
import NeonSmoke from "./NeonSmoke";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <NeonSmoke />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian/80 via-night to-night" />
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold/90 tracking-[0.25em] text-xs md:text-sm uppercase"
        >
          Burlington • Middle Eastern Cuisine • Lounge
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 text-4xl md:text-6xl font-semibold leading-tight"
        >
          Mayjjana <span className="text-gold">Restaurant</span> & Lounge
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-white/80 text-base md:text-lg"
        >
          Elevated Middle Eastern flavors, handcrafted juices, desserts, and a luxury lounge atmosphere — designed for unforgettable nights.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <GlowButton href="/reservations">Reserve a Table</GlowButton>
          <GlowButton href="/menu" variant="ghost">View Menu</GlowButton>
        </motion.div>

        <div className="mt-10 text-white/70 text-sm">
          {site.address} • <a className="text-gold hover:underline" href={`tel:${site.phone.replace(/[^0-9+]/g,"")}`}>{site.phone}</a>
        </div>
      </div>
    </section>
  );
}
