import React, { useMemo, useRef, useState, useEffect } from "react";
import "./Timeline.css";

// Component for a single item in the timeline
function TimelineItem({ item, index }) {
  // Determine if the card is on the left (even index) or right (odd index)
  const isLeft = index % 2 === 0; 
  const isExperience = item.type === "exp";
  const label = isExperience ? "Skills:" : "Coursework:";
  const itemsArray = isExperience ? item.stack : item.courses;

  // Create a comma-separated string from the array
  const courseList = itemsArray.join(', ');

  // JSX for the flippable card content
  const CardContent = (
    <div className="flip" id="education">
      <div className="flip-inner">
        {/* FRONT FACE */}
        <div className="flip-face flip-front">
          <div className="front-content">
            <img src={item.logo} alt={item.org} className="logo" /> 
            <h3 className="title">{item.org}</h3>
            <p className="dates">{item.dates}</p>
            <p className="hint">Hover / tap to flip →</p>
          </div>
        </div>
        
        {/* BACK FACE - UPDATED CONTENT STRUCTURE */}
        <div className="flip-face flip-back">
          <div className="back-content">
            <h4 className="role">{item.title}</h4> 
            <p className="back-label">{label}</p>
            <p className="course-list">{courseList}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <li className="timeline-row">
      
      {/* 1. LEFT Card Column (Content only if index is even) */}
      <div className="card-column left">
        {isLeft ? <div className="card-wrap left">{CardContent}</div> : <div />}
      </div>

      {/* 2. MIDDLE Dot Column */}
      <div className="dot-column">
        <span className="dot" />
      </div>

      {/* 3. RIGHT Card Column (Content only if index is odd) */}
      <div className="card-column right">
        {!isLeft ? <div className="card-wrap right">{CardContent}</div> : <div />}
      </div>
    </li>
  );
}

const MemoizedTimelineItem = React.memo(TimelineItem);

// Main Timeline Component
export default function Timeline() {
  const items = useMemo (
    () => [
      
      { type: "edu", title: "M.S. in Computer Science", org: "Florida Atlantic University (FAU)", dates: "Jul 2023 – Apr 2025", logo: "/fau.png", courses: ["Software Engineering", "Analysis of Algorithms", "Computer Data Security", "Cloud Security", "Cloud Computing", "Deep Learning", "Social Media & Web Analytics", "Internet of Things (IoT)"], },
      { type: "exp", title: "Full-Stack Developer", org: "6D Technologies", dates: "Nov 2021 – Aug 2023", logo: "/6d_tech.jpeg", stack: ["React.js", "Node.js", "Express.js", "TypeScript", "SQL", "Docker", "Kubernetes", "GitLab CI/CD"], },
      { type: "exp", title: "Programming Analyst", org: "Cognizant", dates: "Apr 2020 – Nov 2021", logo: "/cognizant.png", stack: ["React.js", "Node.js", "Redux", "Jest", "Docker"], },
      { type: "exp", title: "Software Engineer Intern", org: "GroundHog", dates: "Mar 2019 – Sep 2019", logo: "/grounhog.png", stack: ["React.js", "TypeScript", "CI", "Unit Tests"], },
      { type: "edu", title: "B.S. in Computer Science", org: "JNTU", dates: "2016 - 2020", logo: "/jntu.png", courses: ["C Language", "DBMS", "Intro to Data Science", "Object Oriented Programming", "VLSI", "Embedded C", "Integrated Circuit Design", "Electromagnetic Theory"], },
    ],
    [],
  );

  // State and Ref for Scroll-Triggered Animation
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      },
      { root: null, rootMargin: '0px', threshold: 0.2 }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        observer.unobserve(timelineRef.current);
      }
    };
  }, []);

  return (
    <section 
      className={`timeline-sec ${isVisible ? 'animate-in' : ''}`} 
      ref={timelineRef}
    >
      
      {/* 1. HEADER */}
      <div className="timeline-header">
        <h2 className="sec-title">Experience & Education</h2>
        <div className="motto-wrap">
            <p className="top-motto">A Journey of Growth</p>
            <p className="top-motto-subtitle">"Fuelled by passion, powered by perseverance."</p>
        </div>
      </div>
      
      {/* 2. BODY */}
      <div className="timeline-body">
          <div className="timeline-rail" />
          <ol className="timeline-list">
            {items.map((it, idx) => (
              <MemoizedTimelineItem key={idx} item={it} index={idx} />
            ))}
          </ol>
      </div>
      
      {/* 3. FOOTER */}
      <p className="bottom-motto">"Learning, building, and growing — the journey continues."</p>
    </section>
  );
}