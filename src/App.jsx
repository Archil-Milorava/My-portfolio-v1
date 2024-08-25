import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import ProjectsSection from "./sections/ProjectsSection";
import TechStack from "./sections/TechStack";
import SectionWrapper from "./ui/SectionWrapper";

function App() {
  return (
    <main className="h-auto w-full flex flex-col space-y-12  bg-white-main overflow-hidden">
      <Header />

      <ProjectsSection />

      <SectionWrapper>
        <div className="w-full h-full  flex gap-3 my-10">
          <AboutMe />
          <TechStack />
        </div>
      </SectionWrapper>
      <Footer />
    </main>
  );
}

export default App;
