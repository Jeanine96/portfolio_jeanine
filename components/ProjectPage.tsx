import { text } from "stream/consumers";
import ProjectItem from "./ProjectItem";
import { FiFigma, FiTag } from "react-icons/fi";
import { FaHtml5, FaSwift } from "react-icons/fa";
import { SiAdobephotoshop, SiJavascript, SiVite } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { BiLogoVuejs } from "react-icons/bi";
export default function ProjectPage() {
  return (
    <>
      {/* desktop */}
      <h3 className="text text-fontsize-h3-mobile pt-20 mb-6 md:pt-20 md:text-fontsize-h3 text-text-one font-h3 md:mb-8">
        Projecten
      </h3>
      <div className="hidden md:flex md:flex-col md:gap-30 pb-20">
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
            icon: <FaSwift />, text:"SwiftUI", fillType: "fill"
            },
           {
            icon: <FiFigma />, text:"Figma", fillType: "stroke"
            },
             {
            icon: <SiAdobephotoshop />, text:"Photoshop", fillType: "fill"
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
            icon: <SiVite />, text:"Vite", fillType: "fill"
            },
               {
            icon: <FaHtml5 />, text:"HTML", fillType: "fill"
            },
            {
            icon: <IoLogoCss3 />, text: "CSS", fillType: "fill"
            },
            {
            icon: <SiJavascript />, text:"Javascript", fillType: "fill"
            },
              {
            icon: <FiFigma />, text:"Figma", fillType: "stroke"
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
            icon: <BiLogoVuejs />, text:"Vue.js", fillType: "fill"
            },
                 {
            icon: <FiFigma />, text:"Figma", fillType: "stroke"
            },
          ]}
          buttonProps={{ text: "Bekijk project", redirectTo: "/project3" }}
        ></ProjectItem>
      </div>

      {/* mobile */}
      <div className="md:hidden">
        <div className="flex flex-col gap-20 pb-20">
          <ProjectItem
            title={"Runnovation"}
            description={
              "De Runnovation-app geeft hardlopers inzicht in de drukverdeling onder hun voeten, zodat ze blessures kunnen voorkomen en de druk op de podotherapeutische zorg vermindert. Via een virtuele podotherapeut ontvangen ze direct advies om de druk te verlagen."
            }
            media={"https://www.youtube.com/embed/f8Z0l5KseYs"}
            mediaType="youtube"
            mediaPosition="left"
            width="100%"
            height="50vw"
            tags={[
                    {
            icon: <FaSwift />, text:"SwiftUI", fillType: "fill"
            },
           {
            icon: <FiFigma />, text:"Figma", fillType: "stroke"
            },
             {
            icon: <SiAdobephotoshop />, text:"Photoshop", fillType: "fill"
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
            width="100%"
            height="100vw"
            tags={[
            {
            icon: <SiVite />, text:"Vite", fillType: "fill"
            },
               {
            icon: <FaHtml5 />, text:"HTML", fillType: "fill"
            },
            {
            icon: <IoLogoCss3 />, text: "CSS", fillType: "fill"
            },
            {
            icon: <SiJavascript />, text:"Javascript", fillType: "fill"
            },
              {
            icon: <FiFigma />, text:"Figma", fillType: "stroke"
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
            mediaPosition="left"
            width="100%"
            height="100vw"
            tags={[
            {
            icon: <BiLogoVuejs />, text:"Vue.js", fillType: "fill"
            },
                 {
            icon: <FiFigma />, text:"Figma", fillType: "stroke"
            },
            ]}
            buttonProps={{ text: "Bekijk project", redirectTo: "/project3" }}
          ></ProjectItem>
        </div>
      </div>
    </>
  );
}
