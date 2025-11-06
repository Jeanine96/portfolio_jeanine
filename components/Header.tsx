"use client";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
  const menuItems = [
    { id: 1, text: "Home", url: "#homepage" },
    { id: 2, text: "Projecten", url: "#projects" },
    { id: 3, text: "Contact", url: "#contact" },
  ];

  return (
    <header>
      <span className="flex-row flex justify-between py-4 mx-[92px] items-center">
        <Link href={"/"}>
          <img className="w-1/2" src="/logo_jeanine.svg" alt="Logo" />
        </Link>
        <Menu menuItems={menuItems} />
      </span>
    </header>
  );
}
