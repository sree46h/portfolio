import Section from "./Section.jsx";
import projects from "../data/projects.json";

function ProjectCard({ title, description, tags, image, live_url, github_url }) {
  return (
    <div className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:translate-y-[-2px] transition">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-[1.03] transition" />
        {live_url && (
          <a href={live_url} target="_blank" rel="noreferrer"
             className="absolute top-3 left-3 px-2 py-1 text-xs rounded-full bg-black/60 backdrop-blur">
            Live Demo
          </a>
        )}
      </div>
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-zinc-300">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((t) => <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-white/10 ring-1 ring-white/10">{t}</span>)}
        </div>
        <div className="mt-3 flex gap-2">
          {github_url && <a className="px-3 py-1 rounded-lg bg-white/10 ring-1 ring-white/10 hover:bg-white/15 hover:no-underline" href={github_url} target="_blank" rel="noreferrer">GitHub</a>}
          {live_url && <a className="px-3 py-1 rounded-lg bg-white text-slate-900 hover:bg-white/90 hover:no-underline" href={live_url} target="_blank" rel="noreferrer">Open</a>}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <Section id="projects" title="Featured Projects" badge="Showcase">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
      </div>
    </Section>
  );
}
