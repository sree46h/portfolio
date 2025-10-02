import React from "react";
import Section from "./Section.jsx";
import skills from "../data/skills.json";
import './Skills.css';

// Component for a single Hexagonal Skill Badge
function SkillBadge({ name, image }) {
  // Uses custom CSS classes for the hexagonal shape and glow effect
  // The 'group' class enables the hover effect for the tooltip (.skill-badge-name)
  return (
    <div className="skill-badge-container group"> 
      <div className="skill-badge-icon">
        {/* Skill Logo */}
        <img 
          src={image} 
          alt={name} 
          className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      {/* Tooltip for the skill name - appears on hover */}
      <span className="skill-badge-name">{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <Section id="skills" title="Skills & Technologies" badge="Interactive">
      {/* RESPONSIVENESS IMPLEMENTED HERE: 
        - 'hidden' hides the container by default (mobile view)
        - 'md:flex' shows the container as a flex box on medium screens (768px) and up
      */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 py-8 px-4">
        {skills.map((s) => (
          <SkillBadge key={s.name} name={s.name} image={s.image} />
        ))}
      </div>
    </Section>
  );
}