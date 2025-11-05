import Image from "next/image";
import Tag from "./Tag";
import Button from "./Button";

interface TagProps {
  src: string;
  alt: string;
  text: string;
}

interface ProjectItemProps {
  title: string;
  description: string;
  media: string;
  mediaType?: "image" | "youtube";
  mediaPosition?: "left" | "right";
  width?: number | string;
  height?: number | string;
  className?: string;
  tags?: TagProps[];
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
  tags = [],
}: ProjectItemProps) {
  const MediaElement =
    mediaType === "image" ? (
      <div className="relative w-[35vw] h-[23vw]">
        <Image
          src={media}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    ) : (
      <iframe
        src={media}
        style={{ width: width || "100%", height: height || "" }}
        className={`rounded-lg ${className}`}
      ></iframe>
    );

  return (
    <div className="flex flex-col ">
      <h4 className="font-h4 text-fontsize-h4 text-text-one mb-6">{title}</h4>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} {...tag} />
          ))}
        </div>
      )}
      <div className="flex flex-row  mt-8 gap-35">
        {mediaPosition === "left" && (
          <div className="flex-1">{MediaElement}</div>
        )}
        <div className="flex flex-col h-full gap-6">
          <p className="text-text-one text-fontsize-body font-body leading-lineheight-text-regular flex-1">
            {description}
          </p>
          <Button text={"Bekijk project"}></Button>
        </div>

        {mediaPosition === "right" && (
          <div className="flex-1 flex justify-end">{MediaElement}</div>
        )}
      </div>
    </div>
  );
}
