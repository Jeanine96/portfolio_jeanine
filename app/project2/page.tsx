"use client"
import ProjectDetailView from "@/components/ProjectDetailView";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript, SiVite } from "react-icons/si";

export default function SpotifyDeafUserProject() {
  return (
    <section className="bg-tertiary">
      <ProjectDetailView
        title={"Spotify voor dove gebruikers"}
        tags={[
          {
            icon: <SiVite />,
            text: "Vite",
            fillType: "fill",
          },
          {
            icon: <FaHtml5 />,
            text: "HTML",
            fillType: "fill",
          },
          {
            icon: <IoLogoCss3 />,
            text: "CSS",
            fillType: "fill",
          },
          {
            icon: <SiJavascript />,
            text: "Javascript",
            fillType: "fill",
          },
          {
            icon: <FiFigma />,
            text: "Figma",
            fillType: "stroke",
          },
        ]}
        image={"/spotify-dove-gebruiker-screenshot.png"}
        description={[
          "Sinds 2025 zijn de WCAG-richtlijnen aangescherpt om digitale producten toegankelijker te maken voor mensen met een beperking. Daarom onderzocht ik hoe Spotify toegankelijker kan worden voor dove gebruikers, zodat zij muziek beter kunnen ervaren.",

          "Via literatuuronderzoek en interviews op YouTube heb ik onderzocht hoe dove mensen muziek beleven. Zij ervaren muziek vooral via trillingen van de bas en gebruiken songteksten om de muziek te begrijpen. Hoewel Spotify al songteksten toont, missen dove gebruikers een visuele weergave van de melodie en emotie van een nummer.",

          "Op basis van deze inzichten heb ik een concept ontwikkeld waarin bij de songtekst in Spotify een visualisatie van de melodie en emotie wordt toegevoegd. Om de beleving te versterken kan de telefoon of smartwatch via haptische feedback meetrillen op het ritme van de muziek. Als dat niet voldoende is, kunnen speciale inlegzolen worden ontwikkeld die via Bluetooth meetrillen. Uit literatuuronderzoek blijkt namelijk dat trillende vloeren op festivals de muziekbeleving van dove mensen effectief versterken.",

          "Voor mijn prototype richtte ik mij eerst op de visuele weergave. Ik maakte verschillende varianten en testte deze bij horende deelnemers die zich moesten inleven in dove gebruikers, zonder geluid. Hun feedback heb ik verwerkt in de uiteindelijke versie. Ondanks meerdere pogingen lukte het niet om het prototype te testen met dove gebruikers, waardoor ik hun directe feedback mis om het concept verder te ontwikkelen.",

          "Tijdens dit project heb ik geleerd om component-based te werken in Vite. Volgende keer wil ik me verder verdiepen in het structureren van code volgens het C4-model en in het gebruik van duidelijkere benamingen.",
        ]}
           buttonProps={{
                text: "Bekijk code",
                redirectTo: "https://github.com/Jeanine96/Runnovation",
                icon: FaGithub,
                iconColor: "text-text-two",
              }}
      />
    </section>
  );
}
