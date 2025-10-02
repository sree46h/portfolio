import React, { useEffect, useMemo, useState } from "react";
import profile from "../data/profile.json";

const NAV = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  // { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" }
];

const ACCENTS = [
  ["#f59e0b", "#ec4899"],
  ["#0ea5e9", "#22d3ee"],
  ["#10b981", "#06b6d4"],
  ["#8b5cf6", "#ec4899"],
  ["#94a3b8", "#e2e8f0"]
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [accentIdx, setAccentIdx] = useState(() => {
    const saved = localStorage.getItem("accentIdx");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    const [from, to] = ACCENTS[accentIdx];
    const root = document.documentElement;
    root.style.setProperty("--accent-from", from);
    root.style.setProperty("--accent-to", to);
    root.style.setProperty("--accent-grad", `linear-gradient(90deg, ${from}, ${to})`);
    localStorage.setItem("accentIdx", String(accentIdx));
  }, [accentIdx]);

  // Scroll spy (simple midpoint)
  useEffect(() => {
    const handler = () => {
      const ids = NAV.map(n => n.id);
      const mids = ids.map(id => {
        const el = document.getElementById(id);
        if (!el) return [id, Infinity];
        const rect = el.getBoundingClientRect();
        const mid = rect.top + window.scrollY + rect.height / 2;
        return [id, Math.abs(mid - (window.scrollY + window.innerHeight / 2))];
      });
      mids.sort((a,b) => a[1]-b[1]);
      setActive(mids[0][0]);
    };
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler);
    return () => { window.removeEventListener("scroll", handler); window.removeEventListener("resize", handler); };
  }, []);

  // ✅ Use the single CSS var everywhere for consistency
  const grad = useMemo(() => ({ backgroundImage: "var(--accent-grad)" }), []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur text-white">
      <div className="mx-auto max-w-6xl h-16 px-4 flex items-center">
        <a href="#home" className="font-extrabold text-xl tracking-tight hover:no-underline">
          <span className="bg-clip-text text-transparent select-none" style={grad}>
            {profile.name.split(" ")[0]}
          </span>
        </a>

        <nav className="flex-1 flex justify-center items-center space-x-8">
          {NAV.map(({ id, label }) => {
            const is = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`relative inline-flex items-center px-2 py-2 text-sm hover:no-underline transition-colors ${
                  is ? "text-white font-semibold" : "text-zinc-300 hover:text-white"
                }`}
              >
                {label}
                {is && (
                  <span className="absolute left-1/2 -bottom-1 h-[3px] w-16 -translate-x-1/2 rounded-full" style={grad} />
                )}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center">
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/10">
            {ACCENTS.map(([from, to], i) => (
              <button
                key={i}
                onClick={() => setAccentIdx(i)}
                className={`h-6 w-6 rounded-full ring-2 transition ${accentIdx === i ? "ring-white" : "ring-transparent hover:ring-white/40"}`}
                style={{ backgroundImage: `linear-gradient(90deg, ${from}, ${to})` }}
                aria-label={`accent-${i}`}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
