import Image from "next/image";
import Tag from "./Tag";
interface ProjectItemProps {
  title: string;
  description: string;
  media: string;
  mediaType?: "image" | "youtube";
  mediaPosition?: "left" | "right";
  width?: number | string;
  height?: number | string;
  className?: string;
  tag?: {
    src: string;
    alt: string;
    text: string;
  };
}

export default function ProjectItem({
  title,
  description,
  media,
  mediaType = "image",
  mediaPosition = "right",
  width,
  height,
  className = "",
  tag,
}: ProjectItemProps) {
  const MediaElement =
    mediaType === "image" ? (
      <Image
        src={media}
        alt={title}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
        style={{
          width: typeof width === "string" ? width : undefined,
          height: typeof height === "string" ? height : undefined,
          objectFit: "cover",
        }}
        className={`rounded-lg ${className}`}
      />
    ) : (
      <iframe
        src={media}
        style={{ width: width || "100%", height: height || "auto" }}
        className={`rounded-lg ${className}`}
      ></iframe>
    );

  return (
    // text
    <div className="flex row justify-between gap-16">
      {mediaPosition === "left" && <div className="w-1/2">{MediaElement}</div>}
      <div className="flex flex-col items-start">
        <h4 className="font-h4 text-fontsize-h4 text-text-one mb-4">{title}</h4>
        {tag && <Tag {...tag} />}
        <p className="text-text-one text-fontsize-body font-body">
          {description}
        </p>
      </div>
      {/* picture right or left */}

      {mediaPosition === "right" && <div className="w-1/2">{MediaElement}</div>}
    </div>
  );
}
