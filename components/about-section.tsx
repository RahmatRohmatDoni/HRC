"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Briefcase,
  GraduationCap,
  TrendingUp,
  MessageCircle,
  MessageSquare,
  Coins,
  ArrowRight,
  ChevronsDown,
  LineChart,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const features = [
  {
    title: "12+ Bisnis",
    subtitle: "Penghasil Uang",
    icon: Briefcase,
  },
  {
    title: "Edukasi Skill",
    subtitle: "(Marketing, Editing,\nCrypto, dll)",
    icon: GraduationCap,
  },
  {
    title: "Support System",
    subtitle: "Aktif",
    icon: Users,
  },
  {
    title: "Komunitas",
    subtitle: "yang Positif",
    icon: TrendingUp,
  },
];

const benefits = [
  {
    title: "Curhat & Diskusi Keuangan",
    description: "Tanya apa saja, tanpa ragu.",
    icon: MessageSquare,
  },
  {
    title: "Konsultasi Investasi",
    description: "Dari sudut pandang owner.",
    icon: LineChart,
  },
  {
    title: "Cari Solusi Bersama",
    description: "Karena kamu nggak sendiri.",
    icon: Users,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutSection() {
  return (
    <section id="tentang" className="relative bg-slate-950 py-24 px-6 overflow-hidden text-white">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-purple-600/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        
        {/* ── Top Section: Text & Image ── */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-sm text-indigo-300 backdrop-blur-sm mb-6">
              <Users className="h-4 w-4" />
              Hanra Community (HRC)
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6 leading-tight">
              Komunitas Online untuk<br />
              <span className="bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                Belajar, Bertumbuh
              </span><br />
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                dan Saling Mendukung.
              </span>
            </h2>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              Hanra Community (HRC) adalah komunitas online yang menyediakan berbagai fasilitas, mulai dari <strong>12 bisnis penghasil uang</strong>, <strong>edukasi skill</strong>, hingga <strong>support system aktif</strong>.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
             <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-30 blur-2xl animate-pulse" />
                <Image
                  src="/HRC.jpg"
                  alt="Hanra Community Logo"
                  fill
                  className="rounded-full object-cover ring-4 ring-white/10 shadow-2xl"
                  priority
                />
             </div>
          </motion.div>
        </div>

        {/* ── 4 Features Row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-purple-500 shadow-lg shadow-purple-500/20 mb-4">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-white text-base">{feature.title}</h3>
                <p className="text-sm text-slate-400 mt-1 whitespace-pre-line">{feature.subtitle}</p>
              </div>
            );
          })}
        </motion.div>

        {/* ── Big Feature Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-3xl bg-white/[0.03] border border-white/[0.08] p-8 lg:p-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="h-8 w-8 text-white fill-white/20" />
                <h3 className="text-3xl font-bold italic leading-tight">
                  Bingung soal uang?<br />
                  <span className="text-purple-400">Jangan dipendam sendiri.</span>
                </h3>
              </div>
              
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Di Hanra Community, kamu bisa curhat dan diskusi soal keuangan atau investasi langsung di grup, serta dapatkan <strong className="text-purple-400 font-semibold">sudut pandang dari owner.</strong>
              </p>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
                  <Coins className="h-6 w-6" />
                </div>
                <p className="text-sm text-indigo-200/80">
                  Fasilitas konsultasi ini biasanya berbayar di luar, tapi di HRC kamu bisa <strong className="text-indigo-200">akses gratis!</strong>
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="space-y-6 lg:border-l lg:border-white/10 lg:pl-12">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-indigo-400 to-blue-600 shadow-lg shadow-blue-500/20">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base mb-1">{benefit.title}</h4>
                      <p className="text-sm text-slate-400">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </motion.div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-col items-center text-center"
        >
          <a
            href="#links"
            className="group flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 mb-8"
          >
            <Users className="h-5 w-5" />
            Yuk Gabung Sekarang
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>

          <div className="flex flex-col items-center gap-2 text-slate-400 animate-bounce">
            <ChevronsDown className="h-5 w-5" />
            <span className="text-sm">Scroll untuk melihat lebih banyak</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
