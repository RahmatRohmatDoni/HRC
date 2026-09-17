"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface LinkItem {
  label: string;
  description: string;
  imageSrc?: string;
  icon?: React.ElementType;
  href: string;
}

const telegramLinks: LinkItem[] = [
  {
    label: "Channel Pusat HRC",
    description: "Info & pengumuman terbaru",
    imageSrc: "/telegram.png",
    href: "https://t.me/HanraCommunity",
  },
  {
    label: "Komunitas HRC",
    description: "Diskusi & sharing member",
    imageSrc: "/telegram.png",
    href: "https://t.me/bbisnistelegram",
  },
  {
    label: "Testi Member Sukses",
    description: "Bukti nyata hasil member",
    icon: Star,
    href: "https://t.me/rahasiasuksesnara",
  },
];

const socialLinks: LinkItem[] = [
  {
    label: "TikTok",
    description: "Tips & insight harian",
    imageSrc: "/tiktok.png",
    href: "https://www.tiktok.com/@luisnayaa?_r=1&_t=zs-98wks2e8yy4",
  },
  {
    label: "Instagram",
    description: "Konten visual & update",
    imageSrc: "/instagram.png",
    href: "https://www.instagram.com/welldinnn?igsh=bjhtZ3dxdXIxaDdz",
  },
  {
    label: "LYNK.ID",
    description: "Semua link dalam satu tempat",
    imageSrc: "/lynk.png",
    href: "https://lynk.id/hanracommunity",
  },
];

/* ------------------------------------------------------------------ */
/*  Animation                                                          */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Reusable Link Card                                                 */
/* ------------------------------------------------------------------ */

function LinkCard({ link }: { link: LinkItem }) {
  const Icon = link.icon;
  return (
    <motion.a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      variants={itemVariants}
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-3.5 transition-colors hover:border-white/10 hover:bg-white/[0.06]"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] p-2">
        {link.imageSrc ? (
          <Image
            src={link.imageSrc}
            alt={link.label}
            width={22}
            height={22}
            className="object-contain"
          />
        ) : Icon ? (
          <Icon className="h-5 w-5 text-amber-400" />
        ) : null}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-white">{link.label}</p>
        <p className="text-xs text-slate-500">{link.description}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-600 transition-all group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </motion.a>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export default function LinkTreeSection() {
  return (
    <section
      id="links"
      className="relative overflow-hidden bg-slate-950 py-24 px-6"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="mx-auto max-w-3xl">
        {/* ── Section Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col items-center text-center"
        >
          <div className="relative mb-6">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 opacity-60 blur-lg" />
            <Image
              src="/HRC.jpg"
              alt="Hanra Community"
              width={80}
              height={80}
              className="relative rounded-full ring-2 ring-white/20"
            />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Terhubung dengan Kami
          </h2>
          <p className="mx-auto mt-3 max-w-md text-slate-400">
            Pilih channel yang paling nyaman buat kamu.
          </p>
        </motion.div>

        {/* ── CTA: Chat Owner ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <motion.a
            href="https://t.me/flowerdiee"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-500/10 to-sky-500/5 p-5 transition-all hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500 p-3 shadow-lg shadow-blue-500/20">
              <Image
                src="/telegram.png"
                alt="Telegram"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg font-bold text-white">Chat Owner Langsung</p>
              <p className="text-sm text-blue-300/70">
                Tanya apa saja lewat Telegram — fast response!
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-blue-500/50 transition-all group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </motion.div>

        {/* ── Group: Telegram ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mb-10"
        >
          <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 p-1.5">
              <Image src="/telegram.png" alt="Telegram" width={18} height={18} className="object-contain" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400">
              Telegram
            </h3>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-3">
            {telegramLinks.map((link) => (
              <LinkCard key={link.label} link={link} />
            ))}
          </div>
        </motion.div>

        {/* ── Group: Sosial Media ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.div variants={itemVariants} className="mb-4 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-pink-500/10 p-1.5">
              <Image src="/instagram.png" alt="Sosial Media" width={18} height={18} className="object-contain" />
            </div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-pink-400">
              Sosial Media
            </h3>
            <div className="h-px flex-1 bg-white/[0.06]" />
          </motion.div>
          <div className="grid gap-3 sm:grid-cols-3">
            {socialLinks.map((link) => (
              <LinkCard key={link.label} link={link} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
