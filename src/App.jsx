import Header from "./sections/Header";
import ProjectsSection from "./sections/ProjectsSection";
import SectionWrapper from "./ui/SectionWrapper";

function App() {
  return (
    <main className="h-auto w-full flex flex-col gap-14 bg-white-main">
      <Header />
      <SectionWrapper>
        <ProjectsSection />
      </SectionWrapper>
    </main>
  );
}

export default App;
