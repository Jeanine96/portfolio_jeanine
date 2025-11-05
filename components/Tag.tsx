import Image from "next/image";

interface TagProps {
  src: string;
  alt: string;
  text: string;
}

export default function Tag({ src, alt, text }: TagProps) {
  return (
    <div className="items-center px-4 py-2 bg-accent rounded-full gap-2 inline-flex">
      <Image
        src={src}
        alt={alt}
        width={16}
        height={16}
        className="object-contain"
      />
      <span className="text-fontsize-tag font-tag text-text-one">{text}</span>
    </div>
  );
}
