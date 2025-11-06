import IconsColumn from "@/components/ProgramLanguageIcon";
import ProjectPage from "@/components/ProjectPage";

export default function Home() {
  const codeIcons = [
    { src: "/nextjs-icon.svg", alt: "Next.js", rotate: -15.22 },
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
    <main>
      {/* homepage */}
      <section
        id="homepage"
        className="flex flex-row ml-[152] mr-[92] items-center max-h-screen "
        style={{ minHeight: "calc(100vh - 6rem)" }}
      >
        {/* text homepage */}
        <div className="w-84 items-center">
          {/* title */}
          <h2 className="text-text-two text-fontsize-h2 font-h2">Front-end</h2>
          <div className="flex flex-row items-center gap-4 ">
            <h2 className="text-text-two text-fontsize-h2 font-h2 mb-[20]">
              Developer
            </h2>
            <span className="material-symbols-rounded text-text-three !text-5xl">
              health_metrics
            </span>
          </div>
          {/* subtext */}
          <p className="text-text-three text-fontsize-body font-body">
            Ik vind het interessant om digitale producten te ontwikkelen voor de
            medische wereld.
          </p>
        </div>
        {/* picture */}
        <div className="flex-row flex justify-between items-center">
          <div className="w-1/4 ml-[44%] ">
            <img
              className="rounded-lg w-full h-auto relative z-10"
              src="./picture_jeanine.jpeg"
              alt="picture"
            />
            <div className="absolute top-63 left-232 z-0 h-[340] w-[236] border border-text-three rounded-lg bg-transparent"></div>
          </div>

          {/* program language icon array */}
          <IconsColumn className="gap-8" programlanguageicons={codeIcons} />
        </div>
      </section>

      {/* projects */}
      <section id="projects" className="bg-tertiary px-[152]">
        <ProjectPage></ProjectPage>
      </section>
    </main>
  );
}
