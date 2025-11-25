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
  size?: string;
  className?: string;
};

export default function IconsColumn({
  programlanguageicons,
  size,
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
              width={0}
              height={0}
              style={{ rotate: `${rotation}deg`, ...icon.style }}
              className={`${size ?? "w-16 h-16"} object-contain`}
            />
          </div>
        );
      })}
    </div>
  );
}
