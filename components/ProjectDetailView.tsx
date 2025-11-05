// components/ProjectDetail.tsx
import Image from "next/image";
import Tag from "./Tag";

interface TagProps {
  src: string;
  alt: string;
  text: string;
}

interface ProjectDetailProps {
  title: string;
  tags?: TagProps[];
  image: string;
  description: string | string[];
}

export default function ProjectDetailView({
  title,
  tags = [],
  image,
  description = "",
}: ProjectDetailProps) {
  return (
    <div className="flex flex-col  max-w-2xl mx-auto py-20">
      <h3 className="text-fontsize-h3 text-text-one font-h3 mb-8">{title}</h3>

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
          className="object-contain rounded-lg max-w-lg max-h-[60vh]"
        />
      </div>

      <div className="text-text-one text-fontsize-body font-body leading-lineheight-text-regular">
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
    </div>
  );
}
