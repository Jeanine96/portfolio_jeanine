import ProjectDetailView from "@/components/ProjectDetailView";
import { BiLogoVuejs } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";

export default function IntershipBundelingProject() {
  return (
    <section className="bg-tertiary">
      <ProjectDetailView
        title={"Praktijkervaring bij Bundeling"}
        tags={[
          {
            icon: <BiLogoVuejs />,
            text: "Vue.js",
            fillType: "fill",
          },
          {
            icon: <FiFigma />,
            text: "Figma",
            fillType: "stroke",
          },
        ]}
        image={"/bundeling.png"}
        description={[
          "Tijdens mijn derdejaarsstage heb ik een semester stage gelopen bij Bundeling. Dit bedrijf biedt een platform, beschikbaar als zowel mobiele app als webversie, waarmee organisaties al hun interne communicatie, documenten, processen en leden- of medewerkersinteracties samenbrengen in één omgeving. Het doel hiervan is om meer overzicht te creëren, de betrokkenheid te vergroten en efficiënter te werken.",

          "Mijn opdracht bestond uit het aanpassen van de huidige webversie, zodat deze beter aansluit op de wensen en behoeften van de klanten. Daarmee wordt de concurrentiepositie van Bundeling op de markt versterkt, wat kan leiden tot groei en behoud van het klantenbestand.",

          "Gedurende mijn stage heb ik ervaren hoe het er binnen een ICT-bedrijf aan toe gaat. Ik heb geleerd om volgens de Agile-methode te werken. Tijdens mijn stageopdracht heb ik het volledige proces doorlopen: van onderzoek en het ontwikkelen van prototypes in Figma tot het testen van deze prototypes en het programmeren van de uiteindelijke features.",

          "De features heb ik toegevoegd aan de bestaande GitHub-repository van het bedrijf, waarbij ik gebruik heb gemaakt van Vue.js. Om een van de features functioneel te maken, heb ik API’s gebruikt om data uit de database op te halen en items te kunnen toevoegen of verwijderen. Door het gebruik van de database bleef de data behouden wanneer de webversie werd afgesloten.",

          "Op basis van mijn stage heb ik interesse gekregen om te leren hoe ik zelf een database kan opzetten en gebruiken.",
        ]}
      />
    </section>
  );
}
