import Image from "next/image";

type ProgramLanguageIcon = {
  src: string;
  alt: string;
};

type IconsColumnProps = {
  programlanguageicons: ProgramLanguageIcon[];
  size?: number;
  rotate?: number;
  className?: string;
};

export default function IconsColumn({
  programlanguageicons,
  size = 64,
  rotate = 0,
  className = "",
}: IconsColumnProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {programlanguageicons.map((icon, index) => (
        <div key={index} className="shrink-0">
          <Image
            src={icon.src}
            alt={icon.alt}
            width={size}
            height={size}
            className="object-contain  rotate-[${rotate}deg]"
          />
        </div>
      ))}
    </div>
  );
}
