"use client";
import IconsColumn, { ProgramLanguageIcon } from "@/components/ProgramLanguageIcon";
import ScrollDownIndicator from "@/components/ScrollDownIndicator";
import { BiLogoVuejs } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export default function HomePage() {
  const codeIcons: ProgramLanguageIcon[] = [
    {
     icon: TbBrandNextjs,
     fillType: "stroke",
      rotate: -15.22,
    },
    {
     icon:FaHtml5,
      rotate: 15.22,
           fillType: "fill",
      className: "ml-auto",
    },
    { icon: SiJavascript,  fillType: "fill", rotate: -15.22 },
    {
      icon: BiLogoVuejs,
      rotate: 15.22,
       fillType: "fill",
      className: "ml-auto",
    },
    { icon: IoLogoCss3,  fillType: "fill", rotate: -15.22 },
    {
     icon: FiFigma,
      fillType: "stroke",
      rotate: 15.22,
      className: "ml-auto",
    },
  ];
  return (
    <div className="w-full">
      {/* Desktop Layout */}
      <div className="hidden: md:flex flex-col ">
        <div className="hidden md:flex flex-row items-center justify-between gap-48">
          {/* Title */}
          <div className="w-84">
            <h2 className="text-text-two text-fontsize-h2 font-h2">
              Front-end
            </h2>
            <div className="flex flex-row items-center gap-4">
              <h2 className="text-text-two text-fontsize-h2 font-h2 mb-[20]">
                Developer
              </h2>
            </div>
            <p className="text-text-three text-fontsize-body font-body">
              Ik vind het interessant om digitale producten te ontwikkelen, die
              gebruiksvriendelijk zijn.
            </p>
          </div>

          {/* Picture with Icons */}
          <div className="flex flex-row items-center gap-25">
            <div className="relative w-48">
              <div className="absolute inset-0 translate-x-6 translate-y-6 border border-text-three rounded-lg z-0"></div>
              <img
                className="rounded-lg w-full h-auto relative z-10"
                src="./picture_jeanine.jpeg"
                alt="picture"
              />
            </div>
          <IconsColumn
     className="gap-8 w-55"
            programlanguageicons=  {codeIcons}
/>
          </div>
        </div>
        {/* Scroll Down */}
        <div className="hidden md:flex justify-center">
          <ScrollDownIndicator />
        </div>
      </div>
      {/* Mobile Layout */}
      <div className="flex flex-col bg-primary md:hidden">
        <div className="w-84 px-4 pb-10 pt-0">
          <h2 className="text-text-two text-fontsize-h2 font-h2">Front-end</h2>
          <div className="flex flex-row items-center gap-4">
            <h2 className="text-text-two text-fontsize-h2 font-h2 mb-[20]">
              Developer
            </h2>
          </div>
          <p className="text-text-three text-fontsize-body font-body">
            Ik vind het interessant om digitale producten te ontwikkelen, die
            gebruiksvriendelijk zijn.
          </p>
        </div>

        <div className="flex flex-row items-center gap-20 bg-secondary px-4 py-6">
          <div className="relative w-40">
            <div className="absolute inset-0 translate-x-4 translate-y-4 border border-text-three rounded-lg z-0"></div>
            <img
              className="rounded-lg w-full h-auto relative z-10"
              src="./picture_jeanine.jpeg"
              alt="picture"
            />
          </div>
          <IconsColumn
            className="gap-4 w-40"
            programlanguageicons={codeIcons}
          />
        </div>
      </div>
    </div>
  );
}
