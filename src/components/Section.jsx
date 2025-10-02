import React from "react";

export default function Section({ id, title, badge, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mb-6 flex items-center gap-3">
        {badge ? (
          <span className="px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs">{badge}</span>
        ) : null}
        <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      </div>
      {children}
    </section>
  );
}

