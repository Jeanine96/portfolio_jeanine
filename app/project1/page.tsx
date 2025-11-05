import ProjectDetailView from "@/components/ProjectDetailView";

export default function RunnovationProject() {
  return (
    <section className="bg-tertiary">
      <ProjectDetailView
        title={"Runnovation"}
        tags={[
          {
            src: "/swiftui-icon-tag.svg",
            alt: "swiftui-icon-tag",
            text: "SwiftUI",
          },
        ]}
        image={"/runnovation-screenshot.png"}
        description={[
          "In Nederland wordt de zorg duurder en lopen de wachttijden voor een behandeling op. Dit is ook het geval bij de Podotherapiepraktijken volgens de directeur van een praktijk.",
          "Uit mijn literatuuronderzoek blijkt dat hardlopen een van de populairste sporten in Nederland is. Veel hardlopers krijgen vroeg of laat te maken met overbelastingsblessures, waarvoor zij vaak de podotherapeut raadplegen.",
          "Uit interviews met hardlopers komt naar voren dat zij onvoldoende informatie hebben om overbelastingsblessures te voorkomen. Een belangrijke oorzaak is een verkeerd looppatroon, waarbij de druk te veel op één plek onder de voet komt te liggen. Dit kan ook invloed hebben op gewrichten hoger in het lichaam.",
          "Om hardlopers inzicht te geven in hun looppatroon, kunnen zij inlegzolen met sensoren in hun hardloopschoenen leggen en deze via Bluetooth koppelen aan de Runnovation-app. Tijdens het hardlopen wordt bijgehouden hoe de druk onder de voeten is verdeeld. Wanneer er op een bepaalde plek te veel druk ontstaat, kan de hardloper via de app aan de virtuele podotherapeut vragen welke maatregelen hij of zij alvast kan nemen. Helpt dat niet, dan is het raadzaam om een podotherapeut te raadplegen.",
          "Om het idee duidelijk te maken aan de doelgroep, heb ik in mijn prototype de druk onder de voeten gesimuleerd door op het scherm te drukken. Voor verdere ontwikkeling zijn inlegzolen met sensoren nodig die via Bluetooth met de app verbonden kunnen worden. Op die manier kan het concept daadwerkelijk getest worden door de doelgroep om te zien of het idee in de praktijk werkt.",
          "Tijdens dit project heb ik geleerd om een native app te programmeren met SwiftUI. Daarnaast heb ik een API van een chatbot gebruikt om de virtuele podotherapeut werkend te maken.",
        ]}
      />
    </section>
  );
}
