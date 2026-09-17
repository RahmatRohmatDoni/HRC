"use client";

import { motion } from "framer-motion";
import { MessageCircle, Share2, Coffee, ShoppingCart } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups = [
  {
    id: "sharing",
    icon: MessageCircle,
    title: "Grup Sharing HRC",
    description:
      "Cerita pengalaman, curhat bisnis, dan saling support sesama member. Tempat terbaik untuk belajar dari yang sudah sukses.",
  },
  {
    id: "sfs",
    icon: Share2,
    title: "Grup SFS / Mutualan",
    description:
      "Support sosmed, naikkan followers, dan bangun jaringan. Kolaborasi bareng untuk tumbuh bersama.",
  },
  {
    id: "random",
    icon: Coffee,
    title: "Grup Random / Upwork",
    description:
      "Ngobrol santai, bahas kerja online, sharing tips freelance platforms. Suasana chill tapi insightful.",
  },
  {
    id: "order",
    icon: ShoppingCart,
    title: "GC Order Olshop & GC Diskusi Editing",
    description:
      "Obrolan teknis dan panduan admin. Tempat koordinasi order, diskusi teknik editing, dan tanya jawab seputar operasional.",
  },
];

export default function CommunityAccordion() {
  return (
    <section className="bg-white dark:bg-slate-900 py-20 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Kamu Tidak Berjuang Sendirian!
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Bergabunglah dengan grup-grup komunitas kami yang aktif dan suportif.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion className="w-full space-y-3">
            {groups.map((group) => {
              const Icon = group.icon;
              return (
                <AccordionItem
                  key={group.id}
                  value={group.id}
                  className="rounded-lg border border-slate-200 px-4 dark:border-slate-800"
                >
                  <AccordionTrigger className="hover:no-underline cursor-pointer">
                    <div className="flex items-center gap-3 text-left">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-indigo-100 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{group.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pl-12 text-muted-foreground">
                    {group.description}
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
