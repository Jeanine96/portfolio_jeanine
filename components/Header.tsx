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
      {/* desktop */}
      <span className="hidden md:flex md:flex-row md:justify-between md:py-4 md:items-center mx-[92px]">
        <Link href={"/"}>
          <img className="w-1/2" src="/logo_jeanine.svg" alt="Logo" />
        </Link>
        <Menu menuItems={menuItems} />
      </span>
      {/* mobile */}
      <div className="bg-primary md:hidden p-4">
        <span className="flex-row flex justify-between py-4 mx-5 items-center ">
          <Link href={"/"}>
            <img className="w-1/2" src="/logo_jeanine.svg" alt="Logo" />
          </Link>
          <Menu menuItems={menuItems} />
        </span>
      </div>
    </header>
  );
}
