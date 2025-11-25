import ProjectPage from "@/components/ProjectPage";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main>
      <section
        id="homepage"
        className="flex flex-col ml-[50px] mr-[20px] max-h-screen mb-8 md:ml-[152] mr-[92]  "
        style={{ minHeight: "calc(100vh - 6rem)" }}
      >
        <HomePage></HomePage>
      </section>

      <section id="projects" className="bg-tertiary px-[16px] md:px-[152]">
        <ProjectPage></ProjectPage>
      </section>
    </main>
  );
}
