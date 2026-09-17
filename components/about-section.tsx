"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  BookOpen,
  ShieldCheck,
  AlertTriangle,
  Users,
  CheckCircle2,
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

const admins = [
  { role: "Owner HRC", names: ["Luis (@Cerrydie)", "Ayaa (@Iinayraa)"] },
  { role: "Admin Invite", names: ["Meicy (@Meicyreal)"] },
  { role: "Admin Asisten Bimbingan", names: ["Dilla (@Nurf4dill4h)"] },
  { role: "Admin Rekber Olshop", names: ["Eisha (@Zuniqlo)"] },
  { role: "Admin Rekber JB Akun", names: ["Np Saputra (@Tn3store)"] },
  { role: "Admin Reseller APK", names: ["Defa (@Oknotshe)", "Cen (@Cecenyyd)"] },
  { role: "Admin Kebsos & Nokos", names: ["Eisha (@Zuniqlo)", "Raychel (@Ciabeytipul)", "Elynagrace (@Elynbyutifull)"] },
  { role: "Admin Jasa Edit", names: ["Niko (@Nikosa01)"] },
  { role: "Admin Job Buzzer", names: ["Grizzlyn (@Applepiegoofiee)", "Shera (@Sera4ou)"] },
];

/* ------------------------------------------------------------------ */
/*  Animation                                                          */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AboutSection() {
  return (
    <section id="tentang" className="bg-white dark:bg-slate-900 py-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        
        {/* ── Intro Section ── */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center mb-24">
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
                  "Begitu bergabung, kamu masuk ke dalam dunia baru yang merupakan Tempat cari ilmu, cari cuan, dan cari circle yang 1 frekuensi."
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

        {/* ── Jajaran Pengurus ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl mb-3">
            Jajaran Pengurus HRC
          </h2>
          <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-400">
            Berikut adalah jajaran pengurus resmi yang siap melayani dan menemani perjalanan bisnis di Hanra Community.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16"
        >
          {admins.map((admin) => (
            <motion.div
              key={admin.role}
              variants={itemVariants}
              className="rounded-xl border border-slate-200 dark:border-slate-800 p-5 bg-white dark:bg-slate-900 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-2 mb-3">
                <Users className="h-4 w-4 text-indigo-500" />
                <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{admin.role}</h4>
              </div>
              <ul className="space-y-2">
                {admin.names.map((name, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0" />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Warning Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-rose-200 bg-rose-50 p-6 dark:border-rose-900/50 dark:bg-rose-950/20"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-full bg-rose-100 p-2 dark:bg-rose-900/50">
              <AlertTriangle className="h-6 w-6 text-rose-600 dark:text-rose-500" />
            </div>
            <div>
              <h3 className="font-semibold text-rose-900 dark:text-rose-400 mb-1">
                Imbauan Keamanan Transaksi
              </h3>
              <p className="text-sm text-rose-700 dark:text-rose-300 leading-relaxed">
                Akun pengurus resmi hanyalah daftar username yang tertera di atas. Jika ada pihak yang mengaku sebagai pengurus HRC namun menggunakan username yang berbeda, kamu <strong>wajib waspada</strong>. HRC tidak bertanggung jawab atas segala bentuk transaksi yang dilakukan di luar pengawasan Admin Resmi.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

