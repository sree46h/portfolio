import React from "react";

export const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur ${className}`}>
    {children}
  </div>
);

export const Badge = ({ children }) => (
  <span className="text-xs px-2 py-1 rounded-full bg-white/5 ring-1 ring-white/10">
    {children}
  </span>
);