import AboutMe from "./sections/AboutMe";
import Header from "./sections/Header";
import ProjectsSection from "./sections/ProjectsSection";
import TechStack from "./sections/TechStack";
import SectionWrapper from "./ui/SectionWrapper";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="h-[300vh] w-full flex flex-col space-y-12  bg-[#f5f5f5]">
      <Header />

      <SectionWrapper>
        <div className="w-full h-full  flex gap-4 mt-2">
          <AboutMe />
          <TechStack />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <ProjectsSection />
      </SectionWrapper>
    </main>
  );
}

export default App;
