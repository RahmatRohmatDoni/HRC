"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Users,
  BookOpen,
  Zap,
  Wifi,
  ShoppingBag,
  BarChart3,
  Smartphone,
  Video,
  Palette,
  ShieldCheck,
  Megaphone,
  GraduationCap,
} from "lucide-react";

const jobs = [
  {
    title: "Community Developer",
    icon: Users,
    caraKerja: "Penghubung komunitas",
    keuntungan: "Komisi member baru",
    tantangan: "Butuh soft skill",
  },
  {
    title: "Reseller Ebook",
    icon: BookOpen,
    caraKerja: "Jual ulang PDF",
    keuntungan: "Margin fleksibel",
    tantangan: "Persaingan tinggi",
  },
  {
    title: "Job Buzzer",
    icon: Zap,
    caraKerja: "Micro-tasking sosmed",
    keuntungan: "Santai & cepat",
    tantangan: "Bayaran per tugas kecil",
  },
  {
    title: "Agen Kuota & Top Up",
    icon: Wifi,
    caraKerja: "Jual pulsa/game",
    keuntungan: "Repeat order tinggi",
    tantangan: "Persaingan ketat",
  },
  {
    title: "Olshop & Preloved",
    icon: ShoppingBag,
    caraKerja: "Jual barang bekas/baru",
    keuntungan: "Ubah barang jadi uang",
    tantangan: "Butuh foto & kejujuran kondisi",
  },
  {
    title: "Agen Kebsos",
    icon: BarChart3,
    caraKerja: "Jasa SMM/Followers",
    keuntungan: "Beli grosir jual ecer",
    tantangan: "Klien kritis soal kualitas akun",
  },
  {
    title: "Reseller APK Premium",
    icon: Smartphone,
    caraKerja: "Jual langganan Canva/Netflix",
    keuntungan: "Demand tinggi",
    tantangan: "Repot kelola garansi",
  },
  {
    title: "Reseller Jasa Editing",
    icon: Video,
    caraKerja: "Dropship jasa video",
    keuntungan: "Tanpa skill teknis",
    tantangan: "Butuh komunikasi brief akurat",
  },
  {
    title: "Jasa Editing Soft & Formal",
    icon: Palette,
    caraKerja: "Desain visual/QRIS",
    keuntungan: "Value tinggi",
    tantangan: "Butuh skill Canva/Photoshop",
  },
  {
    title: "Rekber & Jual Beli Akun",
    icon: ShieldCheck,
    caraKerja: "Pihak ketiga/flipping akun",
    keuntungan: "Dapat fee aman",
    tantangan: "Butuh trust tinggi",
  },
  {
    title: "Referral Premium",
    icon: Megaphone,
    caraKerja: "Arahkan buyer ke owner",
    keuntungan: "Komisi cair tanpa ribet closing",
    tantangan: "Butuh channel promosi luas",
  },
  {
    title: "Reseller Produk Digital & Kelas Bisnis",
    icon: GraduationCap,
    caraKerja: "Jual ulang template/kelas",
    keuntungan: "Stok unlimited",
    tantangan: "Harus pandai riset pasar",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function JobList() {
  return (
    <section id="jobs" className="bg-slate-50 dark:bg-slate-950 py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            12+ Peluang Bisnis Digital
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Temukan peluang yang sesuai dengan kemampuan dan minat Anda. Semua
            bisa dimulai dari HP.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {jobs.map((job) => {
            const Icon = job.icon;
            return (
              <motion.div key={job.title} variants={cardVariants}>
                <Card className="h-full transition-shadow hover:shadow-lg border-slate-200 dark:border-slate-800">
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription>{job.caraKerja}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-green-500" />
                      <span>
                        <strong className="text-green-700 dark:text-green-400">
                          Keuntungan:
                        </strong>{" "}
                        {job.keuntungan}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="mt-0.5 inline-block h-2 w-2 shrink-0 rounded-full bg-amber-500" />
                      <span>
                        <strong className="text-amber-700 dark:text-amber-400">
                          Tantangan:
                        </strong>{" "}
                        {job.tantangan}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export { jobs };
