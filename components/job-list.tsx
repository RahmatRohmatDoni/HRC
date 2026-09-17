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
  Smartphone,
  BarChart3,
  BookOpen,
  GraduationCap,
  Wifi,
  Palette,
  Video,
  Zap,
  ShoppingBag,
  ShieldCheck,
  Megaphone,
  Users,
} from "lucide-react";

const jobs = [
  {
    title: "Reseller APK Premium",
    icon: Smartphone,
    penjelasan: "Jual akses aplikasi berbayar (Canva Pro, Netflix, dll) resmi dari supplier HRC.",
    caraKerja: "Promosikan akun, beli dari supplier saat ada pesanan, lalu berikan data login ke pelanggan.",
    keuntungan: "Margin selisih harga jual & modal. Permintaan sangat tinggi di kalangan anak muda.",
  },
  {
    title: "Agen Kebsos",
    icon: BarChart3,
    penjelasan: "Sediakan jasa tambah followers, likes, & views untuk Instagram, TikTok, dll.",
    caraKerja: "Jual dengan harga di atas grosir, terima pesanan, dan input ke sistem otomatis HRC.",
    keuntungan: "Margin untung bisa 100-200%. Sangat dicari pengusaha online untuk bangun social proof.",
  },
  {
    title: "Reseller Ebook",
    icon: BookOpen,
    penjelasan: "Akses 43 juta file PDF/Ebook berbagai tema untuk dijual kembali tanpa stok fisik.",
    caraKerja: "Download ebook dari cloud HRC, paketkan, dan promosikan di marketplace/sosmed.",
    keuntungan: "Keuntungan 100% milikmu, tanpa biaya ongkir, dan produk bisa dijual berkali-kali.",
  },
  {
    title: "Reseller Produk Digital",
    icon: GraduationCap,
    penjelasan: "Akses 15.000+ produk digital & 160 kelas bisnis siap jual (PLR/Resell Rights).",
    caraKerja: "Pilih produk, tentukan harga sendiri, promosikan, lalu kirim link akses ke pembeli.",
    keuntungan: "Stok tak terbatas, untung 100%, dan bebas dijual eceran maupun paketan.",
  },
  {
    title: "Agen Kuota & Top Up",
    icon: Wifi,
    penjelasan: "Bisnis pulsa, kuota, & top up game dengan harga modal distributor tangan pertama.",
    caraKerja: "Promosikan list harga ke teman, terima uang, dan order instan via sistem HRC.",
    keuntungan: "Repeat order sangat tinggi karena produk merupakan kebutuhan pokok digital sehari-hari.",
  },
  {
    title: "Editing Formal",
    icon: Palette,
    penjelasan: "Jasa desain & edit dokumen, presentasi, atau proposal kelas profesional (High-ticket).",
    caraKerja: "Pelajari modul desain HRC, buat portofolio, lalu tawarkan jasa ke UKM/instansi.",
    keuntungan: "Dibayar tinggi per proyek. Bisa hasilkan ratusan ribu hingga jutaan rupiah sekali closing.",
  },
  {
    title: "Content Creator TikTok",
    icon: Video,
    penjelasan: "Job performance-based: dibayar berdasarkan jumlah like organik video promosimu di TikTok.",
    caraKerja: "Buat & upload video original HRC, tunggu 3 hari untuk interaksi organik, lapor admin untuk klaim.",
    keuntungan: "Tanpa batas maksimal gaji. Akun TikTok dengan 0 followers pun tetap bisa menghasilkan uang.",
  },
  {
    title: "Reseller Buzzer",
    icon: Zap,
    penjelasan: "Job meramaikan media sosial klien HRC (like/komen) via sistem pendaftaran bot yang adil.",
    caraKerja: "Ambil tugas dari bot Telegram, kerjakan instruksi (like/komen), lalu lapor untuk klaim saldo.",
    keuntungan: "Minimal penarikan sangat rendah (Rp2.000). Tugasnya ringan, cepat, dan 100% dari HP.",
  },
  {
    title: "Olshop HRC",
    icon: ShoppingBag,
    penjelasan: "Platform jual beli produk fisik/digital internal khusus untuk >45.000 member HRC.",
    caraKerja: "Posting barang jualan di grup, arahkan transfer ke Rekber Admin, kirim barang, dana cair.",
    keuntungan: "Promosi gratis ke puluhan ribu target pasar dan transaksi sangat aman dengan sistem Rekber.",
  },
  {
    title: "Rekber & Jual Beli Akun",
    icon: ShieldCheck,
    penjelasan: "Jasa perantara (Rekber) transaksi aman dan jual beli aset digital (akun game/sosmed).",
    caraKerja: "Jual beli akun dari supplier, atau gunakan admin Rekber sebagai penengah pembayaran pihak ke-3.",
    keuntungan: "Transaksi aman dari penipu (uang ditahan admin). Penjual tenang, pembeli nyaman berbelanja.",
  },
  {
    title: "Referral Premium",
    icon: Megaphone,
    penjelasan: "Program afiliasi ringan: kamu hanya mencari calon member tanpa perlu repot presentasi.",
    caraKerja: "Promosikan testimoni, arahkan calon pembeli chat Owner HRC, dan lapor saat closing.",
    keuntungan: "Kerja sangat ringan, dan kamu otomatis dapat komisi Rp20.000 per member yang bergabung.",
  },
  {
    title: "Pengembang Komunitas",
    icon: Users,
    penjelasan: "Program kemitraan: jual hak akses keanggotaan HRC ke orang yang ingin belajar cari cuan.",
    caraKerja: "Jual akses (Rp10-60rb), pembeli bayar ke kamu, transfer Rp5rb ke admin untuk input sistem.",
    keuntungan: "Profit super tinggi (mendekati 100%) dengan modal input hanya Rp5.000 per member baru.",
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
                <Card className="h-full transition-shadow hover:shadow-lg border-slate-200 dark:border-slate-800 flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="text-lg leading-tight">{job.title}</CardTitle>
                    <CardDescription className="mt-2 text-slate-600 dark:text-slate-400">
                      {job.penjelasan}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4 text-sm mt-auto">
                    <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-950/30 p-3 rounded-lg">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-[10px] font-bold text-blue-600 dark:text-blue-300">
                        1
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="text-blue-700 dark:text-blue-400 block mb-0.5">
                          Cara Kerja:
                        </strong>
                        {job.caraKerja}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-[10px] font-bold text-green-600 dark:text-green-300">
                        2
                      </span>
                      <span className="text-slate-700 dark:text-slate-300 leading-relaxed">
                        <strong className="text-green-700 dark:text-green-400 block mb-0.5">
                          Keuntungan:
                        </strong>
                        {job.keuntungan}
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
