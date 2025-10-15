import React, { useEffect, useMemo, useState } from "react";
import profile from "../data/profile.json";

// 🌟 IMPORTANT: Corrected Duplicate IDs 🌟
// Use 'experience' and 'education' as unique IDs for scroll-spy functionality.
const NAV = [
  { id: "home", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" }, // Changed ID
  { id: "education", label: "Education" },   // Changed ID
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
  // 🌟 State for Mobile Menu 🌟
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  
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
    return () => { 
        window.removeEventListener("scroll", handler); 
        window.removeEventListener("resize", handler); 
    };
  }, []);

  // Use the single CSS var everywhere for consistency
  const grad = useMemo(() => ({ backgroundImage: "var(--accent-grad)" }), []);

  const handleLinkClick = (id) => {
    setActive(id);
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-900/70 backdrop-blur text-white">
      <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
        {/* Logo/Name */}
        <a href="#home" className="font-extrabold text-xl tracking-tight hover:no-underline z-50">
          <span className="bg-clip-text text-transparent select-none" style={grad}>
            {profile.name.split(" ")[0]}
          </span>
        </a>

        {/* Desktop Navigation (Visible on medium screens and up) */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {NAV.map(({ id, label }) => {
            const is = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => handleLinkClick(id)}
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

        {/* Accent Selector (Always visible, moved to the right on desktop) */}
        <div className="hidden md:flex items-center">
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

        {/* 🌟 Mobile Menu Button (Visible only on small screens) 🌟 */}
        <div className="flex items-center md:hidden z-50">
            {/* Mobile Accent Selector is moved here for access */}
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-2 py-1 ring-1 ring-white/10 mr-4">
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

            <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)} 
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                aria-label="Toggle menu"
            >
                {/* Hamburger Icon / Close Icon (using simple SVGs) */}
                {isMenuOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                )}
            </button>
        </div>
      </div>
      
      {/* 🌟 Mobile Menu Dropdown 🌟 */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-slate-900/95 backdrop-blur-md transition-all duration-300 overflow-hidden ${
        isMenuOpen ? 'max-h-screen border-b border-white/10 shadow-lg' : 'max-h-0 border-b-transparent'
      }`}>
        <nav className="flex flex-col p-4 space-y-2">
          {NAV.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => handleLinkClick(id)}
              className={`block text-lg px-3 py-3 rounded-lg text-center font-medium transition-colors ${
                active === id 
                  ? 'text-white font-bold' 
                  : 'text-zinc-300 hover:text-white hover:bg-white/10'
              }`}
              style={active === id ? { backgroundImage: 'var(--accent-grad)' } : {}}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>

    </header>
  );
}