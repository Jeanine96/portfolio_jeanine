import React, { ReactNode } from "react";

export interface TagProps {
  icon: ReactNode;
  text: string;
  fillType?: "fill" | "stroke"; 
}

export default function Tag({ icon, text, fillType = "fill" }: TagProps) {

  const iconClass =
    fillType === "stroke"
      ? "text-text-one w-4 h-4 stroke-current" 
      : "text-text-one w-4 h-4 fill-current"; 

  return (
    <div className="items-center px-4 py-2 bg-accent rounded-full gap-2 inline-flex">
      <span className="w-4 h-4 flex items-center">
        {React.isValidElement(icon)
          ? React.cloneElement(icon as React.ReactElement<any>, {
              className: iconClass,
            })
          : icon}
      </span>

      <span className="text-fontsize-tag font-tag text-text-one">{text}</span>
    </div>
  );
}
