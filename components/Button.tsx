// components/Button.tsx
import Image from "next/image";

interface ButtonProps {
  text: string; // Only text
  iconSrc?: string; // Optional image icon
  iconAlt?: string; // Alt text for the image
  onClick?: () => void;
  className?: string;
}

export default function Button({
  text,
  iconSrc,
  iconAlt,
  onClick,
  className,
}: ButtonProps) {
  return (
    <div className="flex-inline">
      <button
        onClick={onClick}
        className={`inline-flex items-center gap-2 py-2 px-4 bg-primary text-text-two text-fontsize-button font-button rounded-lg transition-colors duration-300 hover:bg-primary-lighter ${className}`}
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
