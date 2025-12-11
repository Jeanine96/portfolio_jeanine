"use client";

import { useRouter } from "next/navigation";
import { IconType } from "react-icons"; 

interface ButtonProps {
  text: string;
  icon?: IconType;       
  iconColor?: string;     
  redirectTo?: string;
  className?: string;
}

export default function Button({
  text,
  icon: Icon,
  iconColor = "text-text-two",
  redirectTo,
  className = "",
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
        {Icon && (
          <Icon
            className={`w-5 h-5 ${iconColor}`}
          />
        )}
        {text}
      </button>
    </div>
  );
}
