import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp } from "@/lib/utils";

const awards = [
  { place: "1st Runner-Up", event: "Final Year Design Project" },
  { place: "3rd Runner-Up", event: "Database Project" },
];

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader index="05" label="Education">
          The <em>foundation.</em>
        </SectionHeader>

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          <motion.article {...fadeUp()} className="panel p-6 md:col-span-3 md:p-8">
            <GraduationCap aria-hidden className="size-7 text-emerald-300" />
            <p className="mt-6 font-mono text-xs text-zinc-500">2020 — 2025</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              B.Sc. in Computer Science &amp; Engineering
            </h3>
            <p className="mt-2 text-zinc-400">United International University, Dhaka</p>
          </motion.article>

          <motion.article {...fadeUp(0.08)} className="panel p-6 md:col-span-2 md:p-8">
            <Trophy aria-hidden className="size-7 text-amber-300" />
            <p className="mt-6 font-mono text-xs text-zinc-500">UIU CSE Project Show</p>
            <ul className="mt-3 space-y-3">
              {awards.map((a) => (
                <li key={a.event}>
                  <span className="font-semibold text-white">{a.place}</span>
                  <span className="text-zinc-400"> — {a.event}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
