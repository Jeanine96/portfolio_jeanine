import ProjectPage from "@/components/ProjectPage";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <main>
      <section
        id="homepage"
        className="flex flex-col ml-0 mr-0 max-h-screen mb-8 md:ml-[152px] md:mr-[92px]  "
      >
        <HomePage></HomePage>
      </section>

      <section id="projects" className="bg-tertiary px-[16px] md:px-[152]">
        <ProjectPage></ProjectPage>
      </section>
    </main>
  );
}
