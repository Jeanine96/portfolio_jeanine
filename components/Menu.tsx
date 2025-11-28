"use client";

import { useRef, useState, useEffect } from "react";
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
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  // Desktop hover
  const handleMenuShow = () => {
    if (window.innerWidth < 768) return;
    if (!menuBtnRef.current || !menuItemRef.current) return;
    gsap
      .timeline({ defaults: { ease: "power1.out", duration: 0.2 } })
      .to(menuBtnRef.current, { x: "100%" })
      .to(menuItemRef.current, { x: "0" });
  };

  const handleMenuHidden = () => {
    if (window.innerWidth < 768) return;
    if (!menuBtnRef.current || !menuItemRef.current) return;
    gsap
      .timeline({ defaults: { ease: "power1.out", duration: 0.2 } })
      .to(menuItemRef.current, { x: "100%" })
      .to(menuBtnRef.current, { x: "0" });
  };
  // Mobile menu events
  const openMobileMenu = () => {
    setHasInteracted(true);
    setMobileOpen(true);
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  useEffect(() => {
    if (!mobileMenuRef.current) return;
    if (!hasInteracted) return;

    if (mobileOpen) {
      gsap.set(mobileMenuRef.current, { x: "100%" });
      gsap.to(mobileMenuRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      document.body.style.overflow = "hidden";
    } else {
      gsap.to(mobileMenuRef.current, {
        x: "100%",
        duration: 0.25,
        ease: "power2.in",
      });
      document.body.style.overflow = "";
    }
  }, [mobileOpen, hasInteracted]);

  // Destkop events
  const scrollToSection = (hash: string) => {
    const el = document.getElementById(hash);
    if (!el) return;
    gsap.to(window, {
      duration: 1,
      ease: "power2.out",
      scrollTo: { y: el, offsetY: 0 },
    });
  };

  const handleClick = (url: string) => {
    closeMobileMenu();
    handleMenuHidden();

    const [path, hash] = url.split("#");
    if (pathname !== path) {
      router.push(path);
      if (hash) setTimeout(() => scrollToSection(hash), 300);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 768) return;
    if (!pointerRef.current) return;

    const movePointer = (e: MouseEvent) => {
      gsap.to(pointerRef.current!, {
        x: e.clientX - 10,
        y: e.clientY - 10,
        duration: 0.1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", movePointer);
    return () => window.removeEventListener("mousemove", movePointer);
  }, []);

  return (
    <>
      {/* Desktop menu */}
      <div
        onMouseEnter={handleMenuShow}
        onMouseLeave={handleMenuHidden}
        className="relative hidden md:flex overflow-x-hidden rounded-full"
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

      {/* Mobile menu */}
      <button
        onClick={openMobileMenu}
        className="md:hidden bg-secondary text-text-one px-6 py-2 rounded-full font-menu uppercase"
      >
        Menu
      </button>

      <div
        ref={mobileMenuRef}
        className="fixed inset-0 z-50 md:hidden bg-primary text-text-three flex flex-col p-6 gap-8 translate-x-full"
        aria-hidden={!mobileOpen}
      >
        <div className="flex justify-end">
          <button
            onClick={closeMobileMenu}
            aria-label="Close menu"
            className="material-symbols-rounded !text-5xl"
          >
            close
          </button>
        </div>

        <nav className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.url)}
              className="font-menu text-2xl uppercase text-left"
            >
              {item.text}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
