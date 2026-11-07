/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { fadeUp } from "@/lib/utils";
import { EMAIL, GITHUB, LINKEDIN, RESUME_URL } from "@/lib/profile";

const layers = [
  { label: "Mobile & web", stack: "React Native · Next.js", stat: "55K+ downloads" },
  { label: "APIs", stack: "NestJS · Go", stat: "388 endpoints" },
  { label: "Workers & AI", stack: "BullMQ · FastAPI", stat: "async jobs" },
  { label: "Data", stack: "PostgreSQL · Redis", stat: "269K+ orders" },
];

const stats = [
  { value: 55, suffix: "K+", label: "Play Store downloads across apps I've shipped" },
  { value: 269, suffix: "K+", label: "orders migrated in the Munchies rewrite" },
  { value: 388, label: "API endpoints in a single Go rewrite" },
  { value: 500, prefix: "~", label: "Playwright e2e tests behind that rewrite" },
];

const socials = [
  { href: GITHUB, label: "GitHub", icon: Github },
  { href: LINKEDIN, label: "LinkedIn", icon: Linkedin },
  { href: `mailto:${EMAIL}`, label: "Email", icon: Mail },
];

function Counter({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {n}
      {suffix}
    </span>
  );
}

function StackTrace() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl border border-white/10 bg-zinc-950/70 p-5 shadow-[0_0_120px_-30px_rgba(52,211,153,0.45)] backdrop-blur-xl sm:p-6"
    >
      <div className="mb-6 flex items-center gap-2 font-mono text-xs text-zinc-500">
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="size-2.5 rounded-full bg-zinc-700" />
        <span className="ml-2">~/fardin/request.trace</span>
      </div>

      <div className="relative pl-8">
        {/* The rail a "request" travels down, from the client to the database */}
        <div className="absolute bottom-6 left-3 top-6 w-px bg-gradient-to-b from-emerald-400/70 via-cyan-400/40 to-violet-400/70">
          <span className="absolute -left-[3px] size-[7px] animate-trace rounded-full bg-emerald-200 shadow-[0_0_14px_3px_rgba(110,231,183,0.8)] motion-reduce:hidden" />
        </div>

        <ol className="space-y-3">
          {layers.map((layer, i) => (
            <motion.li
              key={layer.label}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.12 }}
              className="relative flex items-center gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-3 sm:p-4"
            >
              <span className="absolute -left-6 top-1/2 size-2 -translate-y-1/2 rounded-full border border-emerald-300/60 bg-zinc-950" />
              <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-white/10 bg-zinc-900 font-mono text-[11px] text-emerald-300">
                0{i + 1}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium text-white">{layer.label}</p>
                <p className="truncate font-mono text-xs text-zinc-500">{layer.stack}</p>
              </div>
              <span className="chip hidden shrink-0 sm:inline-flex">{layer.stat}</span>
            </motion.li>
          ))}
        </ol>
      </div>

      <p className="mt-6 font-mono text-xs text-zinc-500">
        <span className="text-emerald-400">✓</span> one engineer, every layer
      </p>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pb-20 pt-32 md:pt-40">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.09)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_30%,black,transparent)]" />
        <div className="absolute -top-48 left-[5%] h-[34rem] w-[34rem] animate-aurora rounded-full bg-emerald-500/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-24 h-[30rem] w-[30rem] animate-aurora rounded-full bg-violet-600/20 blur-[120px] [animation-delay:-9s]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            {...fadeUp()}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 font-mono text-xs text-emerald-200"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Full Stack Software Developer @ Cookspace
          </motion.p>

          <motion.h1
            {...fadeUp(0.1)}
            className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            I build products <em className="text-gradient font-serif font-normal italic">end to end.</em>
          </motion.h1>

          <motion.p {...fadeUp(0.2)} className="mt-7 max-w-xl text-lg leading-relaxed text-zinc-400">
            Hi, I&apos;m <span className="text-white">Fardin Ehsan Ahamad</span> — a full-stack engineer
            shipping React Native apps, Next.js dashboards and the Go &amp; NestJS APIs, queues and
            PostgreSQL behind them.
          </motion.p>

          <motion.div {...fadeUp(0.3)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-emerald-200"
            >
              See my work
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={RESUME_URL}
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              <Download className="size-4" />
              Download résumé
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mt-10 flex items-center gap-5 text-zinc-500">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-white"
              >
                <Icon className="size-5" />
              </a>
            ))}
            <span className="h-4 w-px bg-white/10" />
            <span className="inline-flex items-center gap-1.5 text-sm">
              <MapPin className="size-4" /> Dhaka, Bangladesh
            </span>
          </motion.div>
        </div>

        <StackTrace />
      </div>

      <div className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.08] lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              {...fadeUp(i * 0.08)}
              className="flex flex-col-reverse bg-[#07080b] p-5 sm:p-6 md:p-8"
            >
              <dt className="mt-2 text-sm text-zinc-500">{s.label}</dt>
              <dd className="text-gradient text-4xl font-semibold tracking-tight md:text-5xl">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
