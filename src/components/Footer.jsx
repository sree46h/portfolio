import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaEnvelope } from 'react-icons/fa';

// Placeholder data for social links
const SOCIAL_LINKS = [
  { name: 'Email', href: 'mailto:sreeharinaidur@gmail.com', Icon: FaEnvelope }, 
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/sreehari-naidu', Icon: FaLinkedinIn }, 
  { name: 'GitHub', href: 'https://github.com/sreeharinaidu46', Icon: FaGithub }, 
  { name: 'Instagram', href: '#', Icon: FaInstagram }, 
];

export default function Footer() {
  
  // Custom function to apply the gradient to the icon foreground
  const handleGradientHover = (e, isHovering) => {
    const style = e.currentTarget.style;
    
    style.WebkitBackgroundClip = 'text';
    style.backgroundClip = 'text';

    if (isHovering) {
      style.backgroundImage = 'var(--accent-grad)';
      style.WebkitTextFillColor = 'transparent'; 
      style.TextFillColor = 'transparent';
    } else {
      style.backgroundImage = 'none';
      style.WebkitTextFillColor = 'inherit';
      style.TextFillColor = 'inherit';
    }
  };

  return (
    // 🌟 Replace Tailwind border with custom gradient class 🌟
    // Note: The original py-10 padding is now managed by the custom class and its content padding.
    <footer className="mt-12 py-10 text-center text-sm text-zinc-400 footer-gradient-border">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Social Icons Section */}
        <div className="flex justify-center space-x-6 mb-6">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:no-underline transition-colors duration-200"
              style={{
                background: 'none', 
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'inherit',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => handleGradientHover(e, true)}
              onMouseLeave={(e) => handleGradientHover(e, false)}
              aria-label={`Visit my ${link.name}`}
            >
              <link.Icon size={24} /> 
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p>© {new Date().getFullYear()} Sreeharinaidu. Built with React + Tailwind.</p>
      </div>
    </footer>
  );
}