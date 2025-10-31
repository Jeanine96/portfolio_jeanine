import IconsColumn from "@/components/ProgramLanguageIcon";

const CodeIcons = [
  { src: "/nextjs-icon.svg", alt: "Next.js", rotate: 7.32 },
  { src: "/html5-icon.svg", alt: "HTML5" },
  { src: "/javascript-icon.svg", alt: "JavaScript" },
  { src: "/vuejs-icon.svg", alt: "Vue.js" },
  { src: "/css3-icon.svg", alt: "Vue.js" },
  { src: "/swiftui-icon.svg", alt: "SwiftUI" },
];

export default function Home() {
  return (
    <main>
      <section className="homePage flex flex-row ml-[152] mt-[60] items-center">
        <div className="text-frontpage  w-84">
          <div className="text-title">
            <h2 className="text-text-two text-fontsize-h2 font-h2">
              Front-end
            </h2>
            <div className="title flex flex-row items-center gap-4 ">
              <h2 className="text-text-two text-fontsize-h2 font-h2 mb-[20]">
                Developer
              </h2>
              <span className="material-symbols-rounded text-text-three !text-5xl">
                health_metrics
              </span>
            </div>
          </div>
          <p className="text-text-three text-fontsize-body font-body">
            Ik vind het interessant om digitale producten te ontwikkelen voor de
            medische wereld.
          </p>
        </div>

        <div className="picture w-1/5 ml-[35%]">
          <img
            className="rounded-lg w-full h-auto"
            src="./picture_jeanine.jpeg"
            alt="picture"
          />
        </div>

        <div className="">
          <IconsColumn programlanguageicons={CodeIcons} size={64} />
        </div>
      </section>
    </main>
  );
}
