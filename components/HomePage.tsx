import IconsColumn from "@/components/ProgramLanguageIcon";
import PulsingIcon from "@/components/PulsingIcon";
import ScrollDownIndicator from "@/components/ScrollDownIndicator";
export default function HomePage() {
  const codeIcons = [
    {
      src: "/nextjs-icon.svg",
      alt: "Next.js",
      rotate: -15.22,
    },
    {
      src: "/html5-icon.svg",
      alt: "HTML5",
      rotate: 15.22,
      className: "ml-auto",
    },
    { src: "/javascript-icon.svg", alt: "JavaScript", rotate: -15.22 },
    {
      src: "/vuejs-icon.svg",
      alt: "Vue.js",
      rotate: 15.22,
      className: "ml-auto",
    },
    { src: "/css3-icon.svg", alt: "css3.js", rotate: -15.22 },
    {
      src: "/swiftui-icon.svg",
      alt: "SwiftUI",
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
              className="gap-8 w-50"
              programlanguageicons={codeIcons}
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
