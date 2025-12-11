"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { IconType } from "react-icons";

export type ProgramLanguageIcon = {
  icon: IconType; 
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
  fillType?: "fill" | "stroke"; 
};

type IconsColumnProps = {
  programlanguageicons: ProgramLanguageIcon[];
  size?: string; 
  className?: string;
};

export default function IconsColumn({
  programlanguageicons,
  size = "w-10 h-10 md:w-16 md:h-16",
  className = "",
}: IconsColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!columnRef.current) return;

    const icons = columnRef.current.querySelectorAll(".icon-item");

    gsap.from(icons, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.4,
    });
  }, []);

  return (
    <div ref={columnRef} className={`flex flex-col ${className}`}>
      {programlanguageicons.map((iconItem, index) => {
        const rotation = iconItem.rotate ?? 0;
        const IconComponent = iconItem.icon;

        
        const fillClass =
          iconItem.fillType === "stroke"
            ? "stroke-current"
            : "fill-current";

        return (
          <div
            key={index}
            className={`icon-item shrink-0 ${iconItem.className ?? ""}`}
            style={{ ...iconItem.style }}
          >
            <IconComponent
              className={`${size} ${fillClass} text-text-one opacity-70`}
              style={{ rotate: `${rotation}deg`, ...iconItem.style }}
            />
          </div>
        );
      })}
    </div>
  );
}
