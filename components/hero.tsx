"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Users, MonitorPlay, ClipboardCheck, TrendingUp, ChevronDown } from "lucide-react";
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
    <section className="relative overflow-hidden bg-slate-950 text-white pb-16">
      {/* Decorative blurred orbs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-purple-600/20 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex flex-col items-center justify-center px-6 pt-24 text-center">
        {/* Logo */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6"
        >
          <div className="relative w-24 h-24 sm:w-28 sm:h-28">
             <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-30 blur-2xl animate-pulse" />
             <Image
               src="/HRC.jpg"
               alt="Hanra Community"
               fill
               className="rounded-full object-cover ring-2 ring-indigo-500/50 shadow-2xl"
               priority
               loading="eager"
             />
          </div>
        </motion.div>

        <motion.div
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-sm text-indigo-200 backdrop-blur-sm"
        >
          <Users className="h-4 w-4" />
          Belajar &bull; Praktik &bull; Menghasilkan
        </motion.div>

        <motion.h1
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="max-w-4xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          Akses Bisnis Digital.<br />
          <span className="bg-gradient-to-r from-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
            Langsung Praktik.
          </span>
        </motion.h1>

        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl"
        >
          Untuk pelajar, mahasiswa, dan IRT<br />
          yang ingin punya penghasilan sampingan.
        </motion.p>

        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 mb-16 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600 border-0 cursor-pointer px-8 rounded-full shadow-lg shadow-purple-500/25"
            onClick={() =>
              document
                .getElementById("links")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Mulai Eksplorasi
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-indigo-400/50 bg-transparent text-white hover:bg-indigo-500/10 cursor-pointer px-8 rounded-full"
            onClick={() =>
              document
                .getElementById("jobs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Lihat Program
          </Button>
        </motion.div>

        {/* 3 Cards */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-4xl mb-16 px-4"
        >
          {[
            { title: "Belajar Skill", icon: MonitorPlay },
            { title: "Praktik Nyata", icon: ClipboardCheck },
            { title: "Peluang\nSampingan", icon: TrendingUp },
          ].map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="flex flex-col items-center justify-center p-8 rounded-[2rem] bg-indigo-950/40 border border-indigo-500/20 shadow-lg shadow-black/20 hover:bg-indigo-900/40 transition-colors">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-b from-indigo-500/20 to-transparent mb-6">
                  <Icon className="h-10 w-10 text-purple-400" />
                </div>
                <h3 className="font-bold text-white text-lg text-center whitespace-pre-line">{card.title}</h3>
                <div className="h-1 w-8 bg-purple-500 rounded-full mt-4" />
              </div>
            );
          })}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center gap-3 text-slate-400 cursor-pointer animate-bounce mt-4"
          onClick={() =>
            document
              .getElementById("jobs")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50">
             <ChevronDown className="h-5 w-5" />
          </div>
          <span className="text-sm">Scroll untuk lihat peluang</span>
        </motion.div>
      </div>
    </section>
  );
}
