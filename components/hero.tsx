"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[350px] w-[500px] rounded-full bg-purple-600/20 blur-[100px]" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Logo */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6"
        >
          <Image
            src="/HRC.jpg"
            alt="Hanra Community"
            width={100}
            height={100}
            className="rounded-full ring-4 ring-indigo-500/30"
            priority
            loading="eager"
          />
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-indigo-300 backdrop-blur-sm"
        >
          <Users className="h-4 w-4" />
          Ekosistem Freelance Digital #1
        </motion.div>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Bangun Karir Digital &amp; Freelance Anda Bersama{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Hanra Community
          </span>
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
        >
          Ekosistem lengkap dengan 12+ peluang bisnis digital, fasilitas
          edukasi, dan komunitas suportif.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-indigo-600 text-white hover:bg-indigo-700 cursor-pointer"
            onClick={() =>
              document
                .getElementById("jobs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Lihat Peluang
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10 cursor-pointer"
            onClick={() =>
              document
                .getElementById("links")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Gabung Sekarang
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
