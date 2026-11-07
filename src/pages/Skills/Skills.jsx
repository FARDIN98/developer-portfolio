import { motion } from "framer-motion";
import { Code2, Database, Server, Smartphone, Workflow } from "lucide-react";
import {
  SiAmazonwebservices,
  SiDart,
  SiDocker,
  SiDrizzle,
  SiExpo,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiFlutter,
  SiGithubactions,
  SiGo,
  SiGooglegemini,
  SiJavascript,
  SiJest,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenai,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedis,
  SiShadcnui,
  SiSupabase,
  SiTailwindcss,
  SiTypeorm,
  SiTypescript,
  SiVitest,
  SiXcode,
} from "react-icons/si";
import SectionHeader from "@/components/SectionHeader";
import { fadeUp, trackPointer } from "@/lib/utils";

const icons = {
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Go: SiGo,
  Python: SiPython,
  Dart: SiDart,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  Express: SiExpress,
  FastAPI: SiFastapi,
  Redis: SiRedis,
  TypeORM: SiTypeorm,
  Drizzle: SiDrizzle,
  Prisma: SiPrisma,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  "React Native": SiReact,
  Expo: SiExpo,
  Flutter: SiFlutter,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "React Query": SiReactquery,
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  "Xcode Cloud": SiXcode,
  AWS: SiAmazonwebservices,
  Jest: SiJest,
  Vitest: SiVitest,
  OpenAI: SiOpenai,
  Gemini: SiGooglegemini,
};

const groups = [
  {
    title: "Backend",
    icon: Server,
    items: ["Node.js", "NestJS", "Express", "Go", "FastAPI", "REST APIs", "BullMQ", "Redis", "TypeORM", "Drizzle", "Prisma", "GORM"],
    className: "lg:col-span-2",
  },
  { title: "Languages", icon: Code2, items: ["TypeScript", "JavaScript", "Go", "SQL", "Python", "Dart"] },
  {
    title: "Data",
    icon: Database,
    items: ["PostgreSQL", "PostGIS", "pg_trgm", "Row-Level Security", "Supabase", "MongoDB", "Firebase"],
  },
  {
    title: "Mobile & Frontend",
    icon: Smartphone,
    items: ["React Native", "Expo", "Flutter", "React", "Next.js", "Tailwind CSS", "shadcn/ui", "React Query", "Zustand"],
  },
  {
    title: "DevOps, Testing & AI",
    icon: Workflow,
    items: ["Docker", "GitHub Actions", "Xcode Cloud", "AWS", "Playwright", "Jest", "Vitest", "OpenAI", "Gemini", "Vapi", "MCP"],
  },
];

const ticker = Object.keys(icons);

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader
          index="04"
          label="Stack"
          intro="The tools I reach for across every layer — picked for the job, not the hype."
        >
          Every layer, <em>one toolbox.</em>
        </SectionHeader>
      </div>

      <div
        aria-hidden
        className="mt-14 flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <div className="flex shrink-0 animate-marquee gap-10 pr-10 motion-reduce:animate-none">
          {[...ticker, ...ticker].map((name, i) => {
            const Icon = icons[name];
            return (
              <span key={i} className="flex shrink-0 items-center gap-2.5 font-mono text-sm text-zinc-500">
                <Icon className="size-5" />
                {name}
              </span>
            );
          })}
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
        {groups.map(({ title, icon: GroupIcon, items, className }, i) => (
          <motion.div
            key={title}
            {...fadeUp((i % 3) * 0.08)}
            onMouseMove={trackPointer}
            className={`panel spotlight p-6 md:p-7 ${className ?? ""}`}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-emerald-300">
                <GroupIcon className="size-5" />
              </span>
              <h3 className="font-semibold text-white">{title}</h3>
            </div>
            <ul className="mt-6 flex flex-wrap gap-2">
              {items.map((name) => {
                const Icon = icons[name];
                return (
                  <li key={name} className="chip py-1.5 text-[13px] transition-colors hover:border-emerald-400/40 hover:text-white">
                    {Icon && <Icon aria-hidden className="size-3.5" />}
                    {name}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
