"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  BookOpen,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const pillars = [
  {
    title: "Penghasilan",
    description:
      "Disediakan melalui bisnis yang sistemnya sudah disiapkan matang.",
    icon: Rocket,
    color: "bg-blue-500",
    lightColor: "bg-blue-500/10 text-blue-500",
  },
  {
    title: "Skill dan Edukasi",
    description:
      "Memastikan kamu tidak sekadar ikut-ikutan, tetapi benar-benar menguasai cara menjalankan bisnisnya.",
    icon: BookOpen,
    color: "bg-indigo-500",
    lightColor: "bg-indigo-500/10 text-indigo-500",
  },
  {
    title: "Komunitas & Keamanan",
    description:
      "Tidak berjuang sendirian. Tersedia grup sharing, layanan rekber, dan informasi seputar anti-penipuan.",
    icon: ShieldCheck,
    color: "bg-emerald-500",
    lightColor: "bg-emerald-500/10 text-emerald-500",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutSection() {
  return (
    <section id="tentang" className="bg-white dark:bg-slate-900 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* ── Intro Section ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-6">
              Tentang Hanra Community
            </h2>
            <div className="space-y-4 text-lg text-slate-600 dark:text-slate-400">
              <p>
                <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">Hanra Community (HRC)</strong> adalah komunitas online yang menyediakan berbagai fasilitas, mulai dari 12 bisnis penghasil uang via HP, edukasi skill (marketing, editing, crypto), hingga support system aktif.
              </p>
              <p>
                Semua fasilitas ini terhubung ke dalam <strong>33 channel dan grup khusus</strong> yang memiliki fungsi serta peluangnya masing-masing.
              </p>
              <div className="mt-8 rounded-2xl bg-indigo-50 dark:bg-indigo-950/30 p-6 border border-indigo-100 dark:border-indigo-900">
                <p className="text-indigo-900 dark:text-indigo-200 font-medium italic">
                  Free Konsultasi investasi dan keuangan langsung dari owner.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-4 sm:grid-cols-1"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">3 Pilar Utama HRC</h3>
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="flex gap-4 p-4 rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
                  <div className={`shrink-0 flex h-12 w-12 items-center justify-center rounded-xl ${pillar.lightColor}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white">{pillar.title}</h4>
                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{pillar.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
