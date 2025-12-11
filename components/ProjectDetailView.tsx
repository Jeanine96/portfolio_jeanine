// components/ProjectDetail.tsx
import Image from "next/image";
import Tag from "./Tag";
import Button from "./Button";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface TagProps {
  text: string;
  icon:ReactNode;
  fillType: "fill" | "stroke";
}

interface ProjectDetailProps {
  title: string;
  tags?: TagProps[];
  image: string;
  description: string | string[];
  buttonProps?: {
    text: string;
    redirectTo?: string;
    icon?: IconType;       
     iconColor?: string;
  };
}

export default function ProjectDetailView({
  title,
  tags = [],
  image,
  buttonProps,
  description = "",
}: ProjectDetailProps) {
  return (
    <div className="flex flex-col px-4  md:max-w-2xl md:mx-auto py-20">
      <h3 className="text-fontsize-h3-mobile text-text-one font-h3 mb-4 md:text-fontsize-h3 md:mb-8">
        {title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <Tag key={index} {...tag} />
        ))}
      </div>

      <div className="flex justify-center my-16">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="object-contain rounded-lg max-h-[40vh] md:max-w-lg md:max-h-[60vh]"
        />
      </div>

      <div className="text-fontsize-body-mobile text-text-one md:text-fontsize-body font-body leading-lineheight-text-regular mb-2">
        {Array.isArray(description) ? (
          description.map((para, idx) => (
            <p key={idx} className="mb-4">
              {para}
            </p>
          ))
        ) : (
          <p>{description}</p>
        )}
      </div>

    {buttonProps && (
  <Button
    text={buttonProps.text}
    redirectTo={buttonProps.redirectTo}
    icon={buttonProps.icon}
    iconColor={buttonProps.iconColor}
  />
)}
    </div>
  );
}
