"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PulsingIconProps {
  iconName: string;
  size?: string;
  pulseAmount?: number;
  className?: string;
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
