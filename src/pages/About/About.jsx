import { motion } from "framer-motion";
import portrait from "@/assets/images/fardin.jpg";
import { fadeUp } from "@/lib/utils";

const facts = [
  { k: "2+ yrs", v: "shipping to production" },
  { k: "L1 → L2", v: "promoted in 10 months" },
  { k: "4", v: "junior engineers mentored" },
  { k: "4", v: "languages: Bangla, English, Hindi, Urdu" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-4 sm:px-6 md:grid-cols-[0.8fr_1.2fr]">
        <motion.div {...fadeUp()} className="relative mx-auto w-full max-w-sm">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-emerald-400/30 via-cyan-400/10 to-violet-500/30 blur-2xl"
          />
          <div className="overflow-hidden rounded-[2rem] border border-white/10">
            <img
              src={portrait}
              alt="Portrait of Fardin Ehsan Ahamad"
              width={900}
              height={1027}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-top transition duration-700 hover:scale-[1.03]"
            />
          </div>
          <div className="absolute -bottom-5 -right-2 rounded-xl border border-white/10 bg-zinc-950/90 px-4 py-3 font-mono text-xs backdrop-blur sm:-right-6">
            <p className="text-zinc-500">based in</p>
            <p className="text-white">Dhaka, BD · UTC+6</p>
          </div>
        </motion.div>

        <div>
          <motion.div {...fadeUp()}>
            <p className="eyebrow">01 — About</p>
            <h2 className="section-title mt-4">
              From pixels to <em>Postgres.</em>
            </h2>
          </motion.div>

          <motion.div {...fadeUp(0.1)} className="mt-7 space-y-4 text-lg leading-relaxed text-zinc-400">
            <p>
              I started out as a front-end developer and kept following the request further down the
              stack. Today I own features end to end: the mobile screen, the API behind it, the
              background job it kicks off and the PostgreSQL schema it lands in.
            </p>
            <p>
              At <span className="text-white">Munchies</span> I led the rewrite from Parse/MongoDB to
              Go + PostgreSQL. Now at <span className="text-white">Cookspace</span> I&apos;m building
              MatchBD and Kindred — React Native apps backed by NestJS, BullMQ and a Python AI engine.
            </p>
            <p>
              I care about the unglamorous parts too: tests, data migrations, security hardening and
              release pipelines.
            </p>
          </motion.div>

          <motion.dl {...fadeUp(0.2)} className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {facts.map(({ k, v }) => (
              <div key={v} className="flex flex-col-reverse border-l border-emerald-400/30 pl-4">
                <dt className="mt-1 text-sm text-zinc-500">{v}</dt>
                <dd className="text-xl font-semibold text-white">{k}</dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
