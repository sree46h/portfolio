import React from "react";
import { Code2, Brain, Activity } from "lucide-react";

/** Small pill/chip */
function Chip({ children }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs/5 bg-white/5 text-zinc-300 ring-1 ring-white/10">
      {children}
    </span>
  );
}

/** One card */
function FocusCard({ icon: Icon, title, blurb, bullets, chips = [] }) {
  return (
    <div
      className="group relative rounded-2xl p-[1px] transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundImage: "var(--accent-grad)" }}
    >
      <div className="rounded-2xl h-full bg-slate-900/70 backdrop-blur px-5 py-6 ring-1 ring-white/10">
        <div className="flex items-center gap-3 mb-3">
          <div className="grid place-items-center h-10 w-10 rounded-xl text-white"
               style={{ backgroundImage: "var(--accent-grad)" }}>
            <Icon className="h-5 w-5" />
          </div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>

        <p className="text-sm text-zinc-300/90 mb-4">{blurb}</p>

        <ul className="space-y-2 text-sm text-zinc-300">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full"
                    style={{ backgroundImage: "var(--accent-grad)" }} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {chips.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {chips.map((c) => (
              <Chip key={c}>{c}</Chip>
            ))}
          </div>
        )}

        {/* soft glow on hover, tied to accent */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
             style={{ backgroundImage: "var(--accent-grad)" }} />
      </div>
    </div>
  );
}

export default function FocusCards() {
  return (
    <section aria-labelledby="focus-cards" className="py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4">
        <h2 id="focus-cards" className="text-2xl md:text-3xl font-semibold text-white mb-6">
          A Few Things About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <FocusCard
            icon={Code2}
            title="Web Development"
            blurb="I design and build modern, performant web apps with clean architecture and delightful UX."
            bullets={[
              "React / TypeScript with Tailwind",
              "Node/Express APIs + Auth (JWT/OAuth)",
              "Accessibility, testing, and CI-friendly"
            ]}
            chips={["React", "TypeScript", "Tailwind", "Node", "REST", "JWT/OAuth"]}
          />

          <FocusCard
            icon={Brain}
            title="Data Engineering & AI"
            blurb="Comfortable working with data pipelines and ML-enabled features to make apps smarter."
            bullets={[
              "ETL with Python + SQL (MySQL/Postgres)",
              "API-first analytics dashboards",
              "Model integration & inference endpoints"
            ]}
            chips={["Python", "SQL", "Postgres", "ETL", "AI Inference"]}
          />

          <FocusCard
            icon={Activity}
            title="Life / Hobbies"
            blurb="Balance matters. I recharge with movement, food, and sci-fi."
            bullets={[
              "Travel + Gym + cooking new recipes",
              "Big fan of sci-fi & physics reading",
              "Favorite: *A Brief History of Time* (Hawking)"
            ]}
            chips={["Travel", "Gym", "Cooking", "Sci-Fi"]}
          />
        </div>
      </div>
    </section>
  );
}
