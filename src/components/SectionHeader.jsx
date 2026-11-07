/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/utils";

export default function SectionHeader({ index, label, intro, children }) {
  return (
    <motion.div {...fadeUp()} className="max-w-2xl">
      <p className="eyebrow">
        {index} — {label}
      </p>
      <h2 className="section-title mt-4">{children}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-zinc-400">{intro}</p>}
    </motion.div>
  );
}
