"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { usePathname, useRouter } from "next/navigation";

gsap.registerPlugin(ScrollToPlugin);

interface MenuItem {
  id: number;
  text: string;
  url: string;
}

interface AnimatedMenuProps {
  menuItems: MenuItem[];
}

export default function Menu({ menuItems }: AnimatedMenuProps) {
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuItemRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleMenuShow = () => {
    if (!menuBtnRef.current || !menuItemRef.current) return;

    gsap
      .timeline({ defaults: { ease: "power1.out", duration: 0.2 } })
      .to(menuBtnRef.current, { x: "100%" })
      .to(menuItemRef.current, { x: "0" });
  };

  const handleMenuHidden = () => {
    if (!menuBtnRef.current || !menuItemRef.current) return;

    gsap
      .timeline({ defaults: { ease: "power1.out", duration: 0.2 } })
      .to(menuItemRef.current, { x: "100%" })
      .to(menuBtnRef.current, { x: "0" });
  };

  const scrollToSection = (hash: string) => {
    const el = document.getElementById(hash);
    if (!el) return;

    gsap.to(window, {
      duration: 1,
      ease: "power2.out",
      scrollTo: {
        y: el,
        offsetY: 0,
      },
    });
  };

  const handleClick = (url: string) => {
    handleMenuHidden();

    const [path, hash] = url.split("#");

    if (pathname !== path) {
      router.push(path);

      if (hash) {
        setTimeout(() => {
          scrollToSection(hash);
        }, 300);
      }
    }
  };
  return (
    <div
      onMouseEnter={handleMenuShow}
      onMouseLeave={handleMenuHidden}
      className="relative flex overflow-x-hidden rounded-full"
    >
      <div
        ref={menuItemRef}
        className="h-12 flex items-center gap-6 bg-primary text-text-three px-6 rounded-full translate-x-full"
      >
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleClick(item.url)}
            className="font-menu uppercase hover:text-primary-400 transition duration-500 ease-out"
          >
            {item.text}
          </button>
        ))}
      </div>
      <button
        ref={menuBtnRef}
        className="h-12 flex items-center gap-2 bg-primary text-text-three px-6 rounded-full font-menu uppercase absolute right-0 z-50"
      >
        Menu
      </button>
    </div>
  );
}
