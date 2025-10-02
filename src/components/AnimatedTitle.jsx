import React, { useState, useEffect } from 'react';

// Animation speed controls
const TYPING_SPEED = 150; 
const DELETING_SPEED = 100;
const PAUSE_DURATION = 1500; 

export default function AnimatedTitle({ roles }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (isDeleting) {
      // Deleting Logic
      if (displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length); 
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
        }, DELETING_SPEED);
      }
    } else {
      // Typing Logic
      if (displayText === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), PAUSE_DURATION); 
      } else {
        timer = setTimeout(() => {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
        }, TYPING_SPEED);
      }
    }

    return () => clearTimeout(timer);
  }, [roleIndex, isDeleting, displayText, roles]);

  return (
    <p className="mt-2 text-xl md:text-3xl font-semibold text-zinc-300">
      <span className="text-[var(--accent-to)]">{displayText}</span>
      {/* Typing cursor that blinks */}
      <span 
        className="inline-block w-1 h-6 md:h-8 bg-[var(--accent-to)] ml-1 align-bottom"
        style={{ animation: 'blink 0.7s infinite' }}
      >
        &nbsp;
      </span>
    </p>
  );
}