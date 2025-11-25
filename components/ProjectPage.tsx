import { text } from "stream/consumers";
import ProjectItem from "./ProjectItem";
import Tag from "./Tag";
export default function ProjectPage() {
  return (
    <>
      <h3 className="text text-fontsize-h3-mobile pt-10 md:pt-20 md:text-fontsize-h3 text-text-one font-h3 mb-8">
        Projecten
      </h3>
      <div className="flex flex-col md:gap-30 pb-20">
        <ProjectItem
          title={"Runnovation"}
          description={
            "De Runnovation-app geeft hardlopers inzicht in de drukverdeling onder hun voeten, zodat ze blessures kunnen voorkomen en de druk op de podotherapeutische zorg vermindert. Via een virtuele podotherapeut ontvangen ze direct advies om de druk te verlagen."
          }
          media={"https://www.youtube.com/embed/f8Z0l5KseYs"}
          mediaType="youtube"
          mediaPosition="right"
          width="35vw"
          height="20vw"
          tags={[
            {
              src: "/swiftui-icon-tag.svg",
              alt: "swiftui-icon-tag",
              text: "SwiftUI",
            },
          ]}
          buttonProps={{ text: "Bekijk project", redirectTo: "/project1" }}
        ></ProjectItem>
        <ProjectItem
          title={"Spotify voor dove gebruikers"}
          description={
            "Om Spotify toegankelijker te maken voor dove gebruikers is op de lyricspagina een visuele weergave van melodie en emotie ontwikkeld, zodat zij muziek beter kunnen volgen. Voor een nog intensere beleving kan haptische feedback worden toegevoegd, zodat de telefoon of smartwatch meetrilt op het ritme van de muziek."
          }
          media={"https://www.youtube.com/embed/o4C8NWHFYO8"}
          mediaType="youtube"
          mediaPosition="left"
          width="35vw"
          height="30vw"
          tags={[
            {
              src: "/vite-icon.svg",
              alt: "vite-icon-tag",
              text: "Vite",
            },
            {
              src: "/html5-icon-tag.svg",
              alt: "html5-icon-tag",
              text: "HTML",
            },
            {
              src: "/css3-icon-tag.svg",
              alt: "css3-icon-tag",
              text: "CSS",
            },
            {
              src: "/javascript-icon-tag.svg",
              alt: "javascript-icon-tag",
              text: "JavaScript",
            },
          ]}
          buttonProps={{ text: "Bekijk project", redirectTo: "/project2" }}
        ></ProjectItem>
        <ProjectItem
          title={"Praktijkervaring bij Bundeling"}
          description={
            "Tijdens mijn derdejaarsstage bij Bundeling werkte ik aan het platform dat organisaties helpt hun communicatie, documenten en processen overzichtelijk te beheren via app en web. Voor de webversie ontwikkelde ik nieuwe features in Vue.js om beter aan te sluiten bij de wensen en behoeften van klanten."
          }
          media={"/review-intership.png"}
          mediaType="image"
          mediaPosition="right"
          tags={[
            {
              src: "/vuejs-icon-tag.svg",
              alt: "vuejs-icon-tag",
              text: "Vue.js",
            },
          ]}
          buttonProps={{ text: "Bekijk project", redirectTo: "/project3" }}
        ></ProjectItem>
      </div>
    </>
  );
}
