"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

interface ButtonProps {
  text: string;
  iconSrc?: string;
  iconAlt?: string;
  redirectTo?: string;
  className?: string;
}

export default function Button({
  text,
  iconSrc,
  iconAlt,
  redirectTo,
  className,
}: ButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (!redirectTo) return;

    if (redirectTo.startsWith("http")) {
      window.open(redirectTo, "_blank", "noopener,noreferrer");
    } else {
      router.push(redirectTo);
    }
  };
  return (
    <div className="flex-inline">
      <button
        onClick={handleClick}
        disabled={!redirectTo}
        className={`inline-flex items-center gap-2 py-2 px-4 bg-primary text-text-two text-fontsize-button font-button rounded-lg transition-colors duration-300 hover:bg-primary-lighter`}
      >
        {iconSrc && (
          <Image
            src={iconSrc}
            alt={iconAlt || "icon"}
            width={20}
            height={20}
            className="object-contain"
          />
        )}
        {text}
      </button>
    </div>
  );
}
