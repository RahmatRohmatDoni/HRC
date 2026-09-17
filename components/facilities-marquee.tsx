"use client";

import { motion } from "framer-motion";

const facilities = [
  "Tutorial QRIS",
  "Channel eWallet",
  "Tips Trik Sukses",
  "Kelas Wording",
  "Bahan Promosi",
  "Channel Caption",
  "Teknik Marketing",
  "Info Penipuan",
  "Kelas Crypto dari 0",
];

export default function FacilitiesMarquee() {
  // Duplicate for seamless looping
  const items = [...facilities, ...facilities];

  return (
    <section className="bg-slate-50 dark:bg-slate-950 py-16 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Fasilitas Lengkap
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Semua yang kamu butuhkan untuk sukses di dunia digital, sudah kami
            siapkan.
          </p>
        </motion.div>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-950" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-950" />

        <div className="marquee-track flex w-max gap-4">
          {items.map((item, i) => (
            <div
              key={`${item}-${i}`}
              className="inline-flex shrink-0 items-center rounded-full border border-indigo-200 bg-white px-5 py-2.5 text-sm font-medium text-indigo-700 shadow-sm dark:border-indigo-800 dark:bg-slate-900 dark:text-indigo-300"
            >
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-indigo-500" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

