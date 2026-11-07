/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, trackPointer } from "@/lib/utils";

// **text** in a point renders as highlighted text.
const jobs = [
  {
    company: "Cookspace Technologies",
    role: "Full Stack Software Developer",
    period: "Mar 2026 — Present",
    meta: "Dhaka, Bangladesh",
    current: true,
    products: [
      {
        name: "MatchBD",
        about:
          "Matrimony platform · 5K+ downloads · 4.5★ on Google Play · NestJS API with 347 endpoints, 51-page admin",
        points: [
          "Primary mobile engineer on the **React Native/Expo** app (41 screens): OTP auth, NID verification, swipe discovery and live chat on **Supabase Realtime** with FCM push; wrote 80 of its 168 test files.",
          "Integrated the **Nagad** payment gateway end to end — RSA-signed NestJS client, server-verified settlement, in-app checkout.",
          "Hardened security and compliance: refresh-token rotation with replay detection, deny-by-default rate limiting, BullMQ retention jobs; automated iOS (Xcode Cloud) and Android releases.",
        ],
      },
      {
        name: "Kindred",
        about:
          "AI matchmaking app · Expo app (52 screens) · NestJS API (158 endpoints) · Python AI compatibility engine",
        points: [
          "Bootstrapped the Expo app: design system, OTP sign-in, NID and selfie KYC, Big Five personality onboarding.",
          "Built the admin tooling to monitor and retry the **AI compatibility engine** (FastAPI scoring + LLM analyst) running as BullMQ jobs.",
          "Designed and built the **trust-and-safety system** across API, app and admin: reports, blocks, suspensions and bans.",
          "Built an **MCP server** (16 tools) that lets AI coding agents query staging logs, deploys, queues and LLM usage, plus an e2e harness (11 suites) gating every PR.",
        ],
      },
    ],
    stack: ["React Native", "Expo", "NestJS", "Supabase", "BullMQ", "FastAPI", "Xcode Cloud"],
  },
  {
    company: "Munchies",
    role: "Software Engineer · Level 01 → Level 02",
    period: "May 2024 — Sep 2026",
    meta: "Late-night food delivery · 50K+ downloads on Google Play · 650+ restaurants",
    points: [
      "Led the platform rewrite from Parse/MongoDB to **Go + PostgreSQL (Supabase)**: **388 API endpoints**, a 100-page React admin and a Next.js storefront; a Python ETL migrated **269K+ orders**, 480K+ order items and 44K+ bKash payments.",
      "Backed the rewrite with **332 Go test files**, **~500 Playwright e2e tests** and legacy-parity audits.",
      "Replaced a paid geocoding API with in-house address search over OpenStreetMap data (**PostGIS + pg_trgm**, 139K places, Redis cache) — restaurant address matches went from **38% to 90%**.",
      "Built a GitHub Actions → Google Play pipeline for the Flutter app; added a double-refund guard and a unique index that ended duplicate payouts.",
      "On the earlier Node.js/NestJS stack, improved platform performance by **40%** with Redis caching and query optimization. Promoted to Level 02 within 10 months; mentored 4 junior engineers.",
    ],
    stack: ["Go", "PostgreSQL", "PostGIS", "Redis", "Next.js", "React", "Flutter", "Python", "Playwright"],
  },
  {
    company: "Norton-Gauss",
    role: "Software Engineer",
    period: "Feb 2025 — Mar 2026",
    meta: "Full-time · Remote",
    points: [
      "Built and scaled REST APIs integrating network infrastructure services (DAS, ERRCS, COMBA) via the Zabbix API.",
      "Wrote end-to-end network automation in **Playwright**, scaled to **100+ parallel executions**, replacing manual operator work.",
      "Improved backend performance by **50%** through message-queue offloading, database indexing and API-response caching.",
    ],
    stack: ["REST APIs", "Zabbix API", "Playwright", "Message queues"],
  },
];

function Points({ items }) {
  return (
    <ul className="mt-4 space-y-3">
      {items.map((point) => (
        <li key={point} className="flex gap-3 leading-relaxed text-zinc-400">
          <span aria-hidden className="mt-2.5 size-1.5 shrink-0 rounded-full bg-emerald-400/70" />
          <span>
            {point.split("**").map((part, i) =>
              i % 2 ? (
                <strong key={i} className="font-medium text-white">
                  {part}
                </strong>
              ) : (
                part
              )
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="02"
          label="Experience"
          intro="Three teams, one habit: own the feature from the screen to the database, and back it with tests."
        >
          Where I&apos;ve <em>shipped.</em>
        </SectionHeader>

        <ol className="relative mt-16 space-y-8 border-l border-white/10 pl-6 md:ml-2 md:pl-10">
          {jobs.map((job) => (
            <motion.li key={job.company} {...fadeUp()} className="relative">
              <span
                aria-hidden
                className={`absolute -left-[calc(1.5rem+5px)] top-9 size-[9px] rounded-full md:-left-[calc(2.5rem+5px)] ${
                  job.current
                    ? "bg-emerald-400 shadow-[0_0_0_4px_rgba(52,211,153,0.15),0_0_16px_rgba(52,211,153,0.8)]"
                    : "bg-zinc-600"
                }`}
              />
              <article onMouseMove={trackPointer} className="panel spotlight p-6 md:p-8">
                <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">{job.company}</h3>
                    <p className="mt-1 text-emerald-300">{job.role}</p>
                  </div>
                  <p className="flex items-center gap-2 font-mono text-xs text-zinc-400">
                    {job.current && (
                      <span className="rounded-full bg-emerald-400/15 px-2 py-0.5 text-emerald-300">Now</span>
                    )}
                    {job.period}
                  </p>
                </header>
                <p className="mt-2 text-sm text-zinc-500">{job.meta}</p>

                {job.products ? (
                  job.products.map((p) => (
                    <div key={p.name} className="mt-6 border-t border-white/[0.06] pt-6">
                      <h4 className="font-mono text-sm font-medium text-white">{p.name}</h4>
                      <p className="mt-1 text-sm text-zinc-500">{p.about}</p>
                      <Points items={p.points} />
                    </div>
                  ))
                ) : (
                  <Points items={job.points} />
                )}

                <ul className="mt-7 flex flex-wrap gap-2" aria-label="Tech used">
                  {job.stack.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
