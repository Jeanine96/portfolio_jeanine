"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

type ProgramLanguageIcon = {
  src: string;
  alt: string;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
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
      y: -100, // fall from above
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.4, // <— one-by-one falling
    });
  }, []);

  return (
    <div ref={columnRef} className={`flex flex-col ${className}`}>
      {programlanguageicons.map((icon, index) => {
        const rotation = icon.rotate ?? 0;

        return (
          <div
            key={index}
            className={`icon-item shrink-0 ${icon.className ?? ""}`}
            style={{ ...icon.style }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={0}
              height={0}
              style={{ rotate: `${rotation}deg`, ...icon.style }}
              className={`${size} object-contain`}
            />
          </div>
        );
      })}
    </div>
  );
}
