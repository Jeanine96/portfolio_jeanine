import Link from "next/link";

export default function Header() {
  return (
    <header>
      <span className="flex-row flex justify-between py-4 mx-[92px] items-center">
        <Link href={"/"}>
          <img className="w-1/2" src="/logo_jeanine.svg" alt="Logo" />
        </Link>
        <span className="material-symbols-rounded text-primary !text-5xl">
          segment
        </span>
      </span>
    </header>
  );
}
