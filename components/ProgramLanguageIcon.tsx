import Image from "next/image";

type ProgramLanguageIcon = {
  src: string;
  alt: string;
  rotate?: number;
  className?: string;
  style?: React.CSSProperties;
};

type IconsColumnProps = {
  programlanguageicons: ProgramLanguageIcon[];
  size?: number;
  className?: string;
};

export default function IconsColumn({
  programlanguageicons,
  size = 64,
  className = "",
}: IconsColumnProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {programlanguageicons.map((icon, index) => {
        const rotation = icon.rotate ?? 0;

        return (
          <div
            key={index}
            className={`shrink-0 ${icon.className ?? ""}`}
            style={{ ...icon.style }}
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={size}
              height={size}
              style={{ rotate: `${rotation}deg`, ...icon.style }}
              className="object-contain"
            />
          </div>
        );
      })}
    </div>
  );
}
