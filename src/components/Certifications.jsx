import Section from "./Section.jsx";
import certs from "../data/certifications.json";

export default function Certifications() {
  return (
    <Section id="certifications" title="Certifications" badge="Credly-ish">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {certs.map((c) => (
          <div key={c.name} className="rounded-2xl p-5 bg-white/5 ring-1 ring-white/10">
            <h4 className="font-semibold">{c.name}</h4>
            <p className="text-sm text-zinc-400">{c.issuer} · {c.year}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
