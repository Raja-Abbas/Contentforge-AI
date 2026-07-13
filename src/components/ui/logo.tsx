"use client";

import React from "react";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const iconSize = size === "sm" ? 28 : size === "md" ? 36 : 48;
  const textSize = size === "sm" ? "text-lg" : size === "md" ? "text-xl" : "text-2xl";

  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="forge-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#c084fc" />
          </linearGradient>
        </defs>
        <rect width="48" height="48" rx="12" fill="url(#forge-grad)" />
        {/* AI spark/forge icon */}
        <path
          d="M24 10l3 8h8l-6.5 5 2.5 8L24 26l-7 5 2.5-8L13 18h8l3-8z"
          fill="white"
          fillOpacity="0.95"
        />
        <path
          d="M24 32l1.5 4h4l-3.25 2.5 1.25 4L24 39l-3.5 3.5 1.25-4L18.5 36h4l1.5-4z"
          fill="white"
          fillOpacity="0.6"
        />
      </svg>
      {showText && (
        <span className={`${textSize} font-bold tracking-tight`}>
          <span className="text-foreground">Content</span>
          <span className="text-violet-600 dark:text-violet-400">Forge</span>
          <span className="text-muted-foreground font-medium text-sm ml-1">AI</span>
        </span>
      )}
    </div>
  );
}
