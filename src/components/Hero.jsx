import React, { useState, useEffect } from "react";
import profile from "../data/profile.json";
import AnimatedTitle from "./AnimatedTitle"; 

// Array of roles to cycle through
const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Fullstack Developer",
  "MERN Stack Developer",
  "Cloud Engineer",
  "AI Software Engineer",
];

export default function Hero() {
  const [showImage, setShowImage] = useState(false);
  // Removed showBlast state

  useEffect(() => {
    // Show the image after a short delay (e.g., 1 second)
    // The ring animation will start immediately and run infinitely in the background.
    const imageShowTimer = setTimeout(() => {
      setShowImage(true);
    }, 1000); // Image appears after 1 second

    return () => {
      clearTimeout(imageShowTimer);
    };
  }, []); 

  return (
    <section id="home" className="scroll-mt-24 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT SIDE: Text Content */}
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 ring-1 ring-white/10 text-xs mb-4">
            <span>💼 {profile.availability}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Hello. <br/> I'm {profile.name}
          </h1>
          
          <AnimatedTitle roles={roles} />

          <p className="mt-4 text-zinc-400">{profile.intro}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            
            {/* 🌟 Download Résumé Button (Solid Accent Gradient) */}
            <a 
              href={`${import.meta.env.BASE_URL}Sreehari_Resume.pdf`}
             download="Sreehari_Resume.pdf"
              className="px-4 py-2 rounded-xl text-white font-medium hover:no-underline transition-all duration-300"
              style={{ backgroundImage: 'var(--accent-grad)', boxShadow: '0 4px 10px rgba(245, 158, 11, 0.4)' }}
            >
              Download Résumé
            </a>
            
            {/* 🌟 Contact Button (Outline Accent Gradient) */}
            <a 
              href={`mailto:${profile.email}`} 
              className="px-4 py-2 rounded-xl bg-white/5 ring-1 ring-white/10 text-zinc-300 hover:bg-white/10 hover:no-underline transition-all duration-300 button-accent-outline"
            >
              Contact
            </a>
            
            <span className="text-sm text-zinc-400">📍 {profile.location}</span>
          </div>
        </div>

        {/* RIGHT SIDE: Profile Image with Animated Ring */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-[-10px] rounded-full profile-ring-animation"> 
              {/* The spinning ring element (now infinite) */}
            </div>

            {/* PROFILE IMAGE: Appears after the initial delay */}
            {showImage && (
              <img
                src="/my_image.jpg"
                alt="Portrait"
                className="relative z-10 w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105 hero-image-appear"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}