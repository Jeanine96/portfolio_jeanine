import ProjectItem from "./ProjectItem";
import Tag from "./Tag";
export default function ProjectPage() {
  return (
    <>
      <h3 className="text-fontsize-h3 text-text-one font-h3 pt-20 mb-8">
        Projects
      </h3>
      <div className="flex flex-col gap-30">
        <ProjectItem
          title={"Runnovation"}
          description={"Informatie over het project"}
          media={"https://www.youtube.com/embed/f8Z0l5KseYs"}
          mediaType="youtube"
          mediaPosition="right"
          width="100%"
          height="380px"
          tag={{
            src: "/swiftui-icon.svg",
            alt: "swiftui",
            text: "SwiftUI",
          }}
        ></ProjectItem>
        <ProjectItem
          title={"Spotify voor dove gebruikers"}
          description={"Informatie over het project"}
          media={"https://www.youtube.com/embed/o4C8NWHFYO8"}
          mediaType="youtube"
          mediaPosition="left"
          width="100%"
          height="600px"
        ></ProjectItem>
        <ProjectItem
          title={"Praktijkervaring bij Bundeling"}
          description={"Informatie over het project"}
          media={"/bundeling.png"}
          mediaType="image"
          mediaPosition="right"
          width={590}
          height={450}
        ></ProjectItem>
      </div>
    </>
  );
}
