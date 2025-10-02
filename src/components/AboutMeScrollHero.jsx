import React, { useEffect, useRef, useState } from "react";

// The official text, split into logical sentences/phrases for the reveal
const INTRO_TEXT_CHUNKS = [
  "Hi, I’m Sreeharinaidu Rangani, an experienced Software Developer and Computer Science graduate passionate about creating impactful digital solutions.",
  "With a strong background in Full-Stack Web Development, AI Automation, and AI Agent Development, I enjoy turning complex ideas into clean, functional, and creative experiences.",
  "Over the past few years, I’ve built scalable web applications, secure backend systems, and intelligent AI-driven workflows using technologies like React.js, Node.js, Express.js, SQL, MongoDB, Postgres, AWS, Docker, and Kubernetes.",
  "Beyond coding, I thrive on problem-solving, continuous learning, and pushing boundaries—whether that means mentoring teammates, leading projects, or experimenting with new technologies.",
  "My portfolio reflects not just the projects I’ve built, but also my journey of growth, curiosity, and dedication to innovation.",
];

// Helper component to apply the Intersection Observer logic to individual text blocks
const RevealedText = React.memo(({ text, index }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Stop observing once the element is visible
          observer.unobserve(entry.target); 
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        // Reveal when 60% of the element is visible
        threshold: 0.6, 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Use a slight sequential delay based on the index for a cascading effect
  const delay = `${index * 150}ms`;

  return (
    <p
      ref={ref}
      className={`
        reveal-chunk transition-all duration-1000 ease-out 
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-10 translate-y-8'}
      `}
      style={{ transitionDelay: delay }} 
    >
      {/* Highlight the name and key technologies for emphasis */}
      {index === 0 && text.includes('Sreeharinaidu Rangani') ? (
          <span className="font-bold text-white">
            {text.split('Sreeharinaidu Rangani')[0]}
            Sreeharinaidu Rangani
          </span>
        ) : index === 2 ? (
            // Highlight the core technologies list
            <span className="font-semibold text-white/90">
                {text}
            </span>
        ) : (
            text
        )
      }
      {/* Add back the period unless it's the last sentence */}
      {index < INTRO_TEXT_CHUNKS.length - 1 ? '.' : ''}
    </p>
  );
});

//---

export default function AboutMeReveal() {
  return (
    <section 
      id="about-me" 
      // Ensure section padding and dark background
      className="py-20 md:py-32 bg-[#0b0b0f] text-center" 
    >
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Title: Uses the accent color and is fully visible immediately */}
        <h1 
          className="text-5xl md:text-6xl font-extrabold mb-10 text-white"
          style={{ color: 'var(--accent-to)' }} 
        >
          About Me
        </h1>
        
        {/* The Text Container: The parent container for the revealing chunks */}
        <div 
          className="text-xl md:text-2xl text-zinc-300 leading-relaxed space-y-6"
        >
          
          {INTRO_TEXT_CHUNKS.map((text, index) => (
            // Render each sentence/chunk with its own reveal logic
            <RevealedText key={index} text={text} index={index} />
          ))}
          
        </div>
      </div>
    </section>
  );
}