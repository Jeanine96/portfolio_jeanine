"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PulsingIconProps {
  iconName: string; // Google Material icon name
  size?: string; // Tailwind text size (e.g., 'text-4xl')
  pulseAmount?: number; // Fraction to grow/shrink (e.g., 0.5 = 50%)
  className?: string; // Additional Tailwind classes
}

export default function PulsingIcon({
  iconName,
  size,
  pulseAmount = 0.5,
  className = "",
}: PulsingIconProps) {
  const iconRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const icon = iconRef.current;

    if (icon) {
      const animation = gsap.to(icon, {
        scale: `+=${pulseAmount}`,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, [pulseAmount]);

  return (
    <span
      ref={iconRef}
      className={`material-symbols-rounded ${size ?? ""} ${className}`}
    >
      {iconName}
    </span>
  );
}
