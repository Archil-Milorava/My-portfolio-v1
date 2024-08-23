import AboutMe from "./sections/AboutMe";
import Header from "./sections/Header";
import ProjectsSection from "./sections/ProjectsSection";
import TechStack from "./sections/TechStack";
import SectionWrapper from "./ui/SectionWrapper";

function App() {
  return (
    <main className="h-[300vh] w-full flex flex-col space-y-12  bg-[#f5f5f5]">
      <Header />
      <SectionWrapper>
        <ProjectsSection />
      </SectionWrapper>
      <SectionWrapper>
        <div className="w-full h-full  flex gap-4">
          <AboutMe />
          <TechStack />
        </div>
      </SectionWrapper>
    </main>
  );
}

export default App;
