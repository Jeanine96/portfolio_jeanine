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
      className: "ml-35",
    },
    { src: "/javascript-icon.svg", alt: "JavaScript", rotate: -15.22 },
    {
      src: "/vuejs-icon.svg",
      alt: "Vue.js",
      rotate: 15.22,
      className: "ml-35",
    },
    { src: "/css3-icon.svg", alt: "css3.js", rotate: -15.22 },
    {
      src: "/swiftui-icon.svg",
      alt: "SwiftUI",
      rotate: 15.22,
      className: "ml-35",
    },
  ];
  return (
    <>
      <div className="flex flex-col md:flex-row items-center">
        {/* text homepage */}
        <div className="w-84 items-center">
          {/* title */}
          <h2 className="text-text-two text-fontsize-h2 font-h2">Front-end</h2>
          <div className="flex flex-row items-center gap-4 ">
            <h2 className="text-text-two text-fontsize-h2 font-h2 mb-[20]">
              Developer
            </h2>
            <PulsingIcon
              iconName="health_metrics"
              size="!text-5xl"
              pulseAmount={0.3}
              className="text-text-three"
            />
          </div>
          {/* subtext */}
          <p className="text-text-three text-fontsize-body font-body">
            Ik vind het interessant om digitale producten te ontwikkelen voor de
            medische wereld.
          </p>
        </div>
        {/* picture */}
        <div className="flex-row flex justify-between items-center">
          <div className="relative md:w-1/4 ml-0 md:ml-[44%]">
            <div className="absolute inset-0 translate-x-6 translate-y-6 border border-text-three rounded-lg z-0"></div>
            <img
              className="rounded-lg w-full h-auto relative z-10"
              src="./picture_jeanine.jpeg"
              alt="picture"
            />
          </div>

          {/* program language icon array */}
          <IconsColumn className="gap-8" programlanguageicons={codeIcons} />
        </div>
      </div>
      <div className="flex col mt-auto justify-center">
        <ScrollDownIndicator />
      </div>
    </>
  );
}
