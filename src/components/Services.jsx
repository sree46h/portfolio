// src/components/Services.jsx
import React from "react";
import { Code2, Laptop2, Database } from "lucide-react";

/** One service card — picks up your --accent-* CSS vars */
const ServiceCard = ({ icon: Icon, title, desc, bullets }) => (
  <div
    className="group relative rounded-2xl p-[1px] transition-transform duration-300 hover:-translate-y-1"
    style={{ backgroundImage: "var(--accent-grad)" }}
  >
    <div className="rounded-2xl h-full bg-slate-900/70 backdrop-blur px-6 py-7 ring-1 ring-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="grid place-items-center h-12 w-12 rounded-xl text-white"
          style={{ backgroundImage: "var(--accent-grad)" }}
        >
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>

      <p className="text-sm text-zinc-300/90 mb-5">{desc}</p>

      <ul className="space-y-2 text-sm text-zinc-300">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span
              className="mt-1 h-1.5 w-1.5 rounded-full"
              style={{ backgroundImage: "var(--accent-grad)" }}
            />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* soft accent glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-25"
        style={{ backgroundImage: "var(--accent-grad)" }}
      />
    </div>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "var(--accent-grad)" }}
            >
              My Services &amp; Works
            </span>
          </h2>
          <p className="mt-3 text-zinc-300/80 max-w-2xl mx-auto">
            From modern web apps to data pipelines and intelligent features—built
            with performance, clarity, and growth in mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={Code2}
            title="Full Stack Web Development"
            desc="Complete web solutions from frontend to backend, including responsive design, database integration, and deployment. Using modern technologies like React, Node.js, and cloud services."
            bullets={[
              "Responsive Design",
              "Database Integration",
              "API Development",
              "Cloud Deployment",
            ]}
          />

          <ServiceCard
            icon={Laptop2}
            title="Software Development"
            desc="Custom software tailored to your goals—from internal tools and dashboards to automation and integrations—built with clean, scalable architecture."
            bullets={[
              "Custom Solutions",
              "Scalable Architecture",
              "Performance Optimization",
              "Cross-Platform",
            ]}
          />

          <ServiceCard
            icon={Database}
            title="Data Engineering & AI"
            desc="Reliable data pipelines and practical AI integrations. Streaming, batch ETL, analysis, and model inference that unlock real product value."
            bullets={[
              "Streaming (Apache Kafka)",
              "ETL Jobs (Python / SQL)",
              "Data Analysis (Pandas / SQL)",
              "Model Inference APIs",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
