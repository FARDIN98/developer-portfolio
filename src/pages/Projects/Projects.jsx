import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, trackPointer } from "@/lib/utils";

// Production work: no public links, so each card leads with its headline number.
const systems = [
  {
    title: "Munchies platform rewrite",
    kicker: "Parse/MongoDB → Go + PostgreSQL",
    stat: "269K+",
    statLabel: "orders migrated",
    body: "388 API endpoints, a 100-page React admin and a Next.js storefront. A Python ETL moved 480K+ order items and 44K+ bKash payments, backed by 332 Go test files and ~500 Playwright e2e tests.",
    tags: ["Go", "PostgreSQL", "Supabase", "Python ETL", "Playwright"],
    className: "md:col-span-2",
  },
  {
    title: "In-house address search",
    kicker: "Replaced a paid geocoding API",
    stat: "38% → 90%",
    statLabel: "address match rate",
    body: "Search over OpenStreetMap data with PostGIS and pg_trgm across 139K places, fronted by a Redis cache.",
    tags: ["PostGIS", "pg_trgm", "Redis"],
  },
  {
    title: "MatchBD",
    kicker: "Matrimony app · 4.5★ on Google Play",
    stat: "41",
    statLabel: "app screens, primary engineer",
    body: "Live chat on Supabase Realtime, Nagad payments end to end, and refresh-token rotation with replay detection on a 347-endpoint NestJS API.",
    tags: ["React Native", "NestJS", "Supabase"],
  },
  {
    title: "Kindred",
    kicker: "AI matchmaking app",
    stat: "52",
    statLabel: "app screens, bootstrapped",
    body: "NID + selfie KYC and Big Five onboarding, a trust-and-safety system across app, API and admin, and tooling for its AI compatibility jobs.",
    tags: ["Expo", "NestJS", "BullMQ", "FastAPI"],
  },
  {
    title: "MCP server for AI agents",
    kicker: "Developer tooling",
    stat: "16",
    statLabel: "tools for coding agents",
    body: "Lets AI coding agents query staging logs, deploys, queues and LLM usage — paired with an 11-suite e2e harness that gates every PR.",
    tags: ["MCP", "Observability", "CI"],
  },
];

const sideProjects = [
  {
    title: "Prepwise",
    description:
      "Real-time voice AI interviewer (Vapi + Google Gemini) that runs role-specific mock interviews and gives structured feedback.",
    image: "https://i.postimg.cc/J0zrDHYC/Screenshot-2025-04-12-at-3-10-12-AM.png",
    tags: ["Next.js", "TypeScript", "Firebase", "Vapi", "Gemini"],
    githubLink: "https://github.com/FARDIN98/ai-mock-interview",
    liveLink: "https://ai-mock-interview-pied-five.vercel.app/",
  },
  {
    title: "Converso",
    description:
      "AI-powered LMS SaaS app with Clerk auth, a Supabase data layer, Sentry monitoring and Vitest coverage.",
    image: "https://i.postimg.cc/L8Kq1DQy/converso.png",
    tags: ["Next.js", "TypeScript", "Clerk", "Supabase", "Sentry"],
    githubLink: "https://github.com/FARDIN98/converso",
    liveLink: "https://converso-pearl.vercel.app/",
  },
  {
    title: "Movix",
    description:
      "Movie and TV discovery app with search by title, genre and keyword, plus cast, crew, ratings and release details from TMDb.",
    image: "https://i.postimg.cc/zGVkwdHV/Screenshot-2025-04-12-at-3-27-06-AM.png",
    tags: ["React", "Redux Toolkit", "React Router", "TMDb API"],
    githubLink: "https://github.com/FARDIN98/movix",
    liveLink: "https://movix-sites.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="03"
          label="Projects"
          intro="Production systems I've built at work, then a few things I've shipped on my own."
        >
          Selected <em>work.</em>
        </SectionHeader>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {systems.map((s, i) => (
            <motion.article
              key={s.title}
              {...fadeUp((i % 3) * 0.08)}
              onMouseMove={trackPointer}
              className={`panel spotlight flex flex-col p-6 md:p-8 ${s.className ?? ""}`}
            >
              <p className="font-mono text-xs text-zinc-500">{s.kicker}</p>
              <h3 className="mt-2 text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-6 text-gradient text-4xl font-semibold tracking-tight md:text-5xl">{s.stat}</p>
              <p className="mt-1 text-sm text-zinc-500">{s.statLabel}</p>
              <p className="mt-6 flex-1 leading-relaxed text-zinc-400">{s.body}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tech used">
                {s.tags.map((t) => (
                  <li key={t} className="chip">
                    {t}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.h3 {...fadeUp()} className="mt-24 font-mono text-sm uppercase tracking-[0.2em] text-zinc-500">
          Side projects
        </motion.h3>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {sideProjects.map((p, i) => (
            <motion.article
              key={p.title}
              {...fadeUp(i * 0.08)}
              className="panel group flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden border-b border-white/[0.08]">
                <img
                  src={p.image}
                  alt={`Screenshot of ${p.title}`}
                  loading="lazy"
                  className="size-full object-cover object-top transition duration-700 group-hover:scale-105"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#07080b]/70 to-transparent" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h4 className="text-lg font-semibold text-white">{p.title}</h4>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech used">
                  {p.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center gap-5 border-t border-white/[0.06] pt-5 text-sm">
                  <a
                    href={p.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-emerald-300 hover:text-emerald-200"
                  >
                    Live site <ArrowUpRight className="size-4" />
                    <span className="sr-only">for {p.title}</span>
                  </a>
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-white"
                  >
                    <Github className="size-4" /> Code
                    <span className="sr-only">for {p.title}</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
