import React from "react";

export default function Education() {
  return (
    <section id="education" className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">
        <span className="underline decoration-[var(--accent-to)]">
          Education
        </span>
      </h2>

      <div className="space-y-16">
        {/* ===== FAU ===== */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image + label */}
          <div className="group relative flex flex-col items-center w-[260px] md:w-[300px]">
            <div
              className="relative w-[260px] h-[220px] md:w-[300px] md:h-[260px] transition-transform duration-500 ease-out"
              style={{ perspective: 800 }}
            >
              <img
                src="/fau.jpeg"
                alt="Florida Atlantic University"
                className="w-full h-full object-cover shadow-xl"
                style={{
                  /**
                   * Irregular / blob-like mask (keeps file simple, no SVG needed).
                   * Tweak points if you want a different silhouette.
                   */
                  clipPath:
                    "path('M30 20 Q140 0 300 15 Q300 120 300 240 Q180 260 40 245 Q0 180 20 110 Q10 60 30 20 Z')",
                  transform: "translateZ(0)", // hint chrome for smoother 3D
                }}
              />
              {/* subtle glow following accent */}
              <div
                className="pointer-events-none absolute -inset-2 rounded-[28px] blur-2xl opacity-40"
                style={{ backgroundImage: "var(--accent-grad)" }}
              />
              {/* 3D tilt on hover */}
              <div className="absolute inset-0 rounded-[28px] transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:[transform:rotateX(6deg)_rotateY(-6deg)]" />
            </div>

            {/* Label directly below image */}
            <span className="mt-3 inline-block px-3 py-1 text-sm rounded-full bg-[var(--accent-from)]/20 text-[var(--accent-to)]">
              Graduated
            </span>
          </div>

          {/* Right column */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <h3 className="text-xl font-bold">
                Florida Atlantic University (FAU)
              </h3>
              <span className="text-sm text-zinc-400">2023 – 2025</span>
            </div>

            <p className="text-zinc-200">
              A beautiful and diverse university in South Florida, known for its
              sports culture, innovative research, and strong influence in the
              region.
            </p>

            <h4 className="text-lg font-semibold underline decoration-[var(--accent-to)]">
              M.S. in Computer Science
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
              <span>• Software Engineering</span>
              <span>• Analysis of Algorithms</span>
              <span>• Computer Data Security</span>
              <span>• Cloud Security</span>
              <span>• Cloud Computing</span>
              <span>• Deep Learning</span>
              <span>• Social Media Web Analytics</span>
              <span>• Internet of Things (IoT)</span>
            </div>
          </div>
        </div>

        {/* ===== JNTU ===== */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image + label */}
          <div className="group relative flex flex-col items-center w-[240px] md:w-[280px]">
            <div
              className="relative w-[240px] h-[200px] md:w-[280px] md:h-[230px] transition-transform duration-500 ease-out"
              style={{ perspective: 800 }}
            >
              <img
                src="/jntu.jpeg"
                alt="Jawaharlal Nehru Technological University (JNTU)"
                className="w-full h-full object-cover shadow-xl"
                style={{
                  // different organic mask to vary the feel
                  clipPath:
                    "path('M20 30 Q120 0 260 25 Q280 120 260 210 Q150 230 30 215 Q0 160 12 100 Q5 55 20 30 Z')",
                  transform: "translateZ(0)",
                }}
              />
              <div
                className="pointer-events-none absolute -inset-2 rounded-[26px] blur-2xl opacity-35"
                style={{ backgroundImage: "var(--accent-grad)" }}
              />
              <div className="absolute inset-0 rounded-[26px] transition-transform duration-500 ease-out group-hover:scale-[1.05] group-hover:[transform:rotateX(6deg)_rotateY(-6deg)]" />
            </div>

            <span className="mt-3 inline-block px-3 py-1 text-sm rounded-full bg-[var(--accent-from)]/20 text-[var(--accent-to)]">
              Graduated
            </span>
          </div>

          {/* Right column */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <h3 className="text-xl font-bold">
                Jawaharlal Nehru Technological University (JNTU)
              </h3>
              <span className="text-sm text-zinc-400">2016 – 2020</span>
            </div>

            <p className="text-zinc-200">
              Where my engineering journey began — JNTU introduced me to the
              world of opportunities and technological growth, shaping my
              foundation in Computer Science.
            </p>

            <h4 className="text-lg font-semibold underline decoration-[var(--accent-to)]">
              B.S. in Computer Science
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm">
              <span>• C Language</span>
              <span>• DBMS</span>
              <span>• Intro to Data Science</span>
              <span>• Object Oriented Programming</span>
              <span>• VLSI</span>
              <span>• Embedded C</span>
              <span>• Integrated Circuit Design</span>
              <span>• Electromagnetic Theory</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
