import Section from "./Section.jsx";
import data from "../data/experience.json";

export default function Experience() {
  return (
    <Section id="experience" title="Experience" badge="Timeline">
      <div className="space-y-6">
        {data.map((job) => (
          <div key={job.company} className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{job.role} • {job.company}</h3>
                <p className="text-sm text-zinc-400">{job.period}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.stack.map((t) => (
                <span key={t} className="px-2.5 py-0.5 rounded-full text-xs bg-white/10 ring-1 ring-white/10">{t}</span>
              ))}
            </div>
            <ul className="mt-3 list-disc pl-5 text-zinc-300 space-y-1">
              {job.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
