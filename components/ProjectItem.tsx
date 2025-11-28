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
  buttonProps?: { text: string; redirectTo?: string };
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
  buttonProps,
}: ProjectItemProps) {
  const MediaElement =
    mediaType === "image" ? (
      <div className="relative w-full h-[100vw] md:w-[25vw] md:h-[24vw]">
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
      <h4 className="text-fontsize-h4-mobile font-h4 text-text-one mb-4 md:mb-6 md:text-fontsize-h4 ">
        {title}
      </h4>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} {...tag} />
          ))}
        </div>
      )}
      <div className="flex-col md:flex md:flex-row mt-8 gap-35">
        {mediaPosition === "left" && (
          <div className="md:flex-1">{MediaElement}</div>
        )}
        <div className="flex flex-col h-full gap-6">
          <p className="text-text-one text-fontsize-body-mobile font-body leading-lineheight-text-regular mt-4 md:text-fontsize-body flex-1">
            {description}
          </p>
          {buttonProps && <Button {...buttonProps} />}
        </div>

        {mediaPosition === "right" && (
          <div className="md:flex-1 flex justify-end">{MediaElement}</div>
        )}
      </div>
    </div>
  );
}
