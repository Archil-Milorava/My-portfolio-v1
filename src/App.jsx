import AboutMe from "./sections/AboutMe";
import Header from "./sections/Header";
import ProjectsSection from "./sections/ProjectsSection";
import TechStack from "./sections/TechStack";
import SectionWrapper from "./ui/SectionWrapper";
import {motion} from "framer-motion"

function App() {
  return (
    <main className="h-[300vh] w-full flex flex-col space-y-12  bg-white-main">
      <Header />

      <ProjectsSection />

      <SectionWrapper>
        <motion.div className="w-full h-full  flex gap-4 mt-2"


          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: true }}
          // variants={{
          //   hidden: { opacity: 0, x: 1000 },
          //   visible: {
          //     opacity: 1,
          //     x: 0,
          //     transition: {
          //       duration: 2,
          //       ease: "easeInOut",
          //     },
          //   },
          // }}
        
        >
          <AboutMe />
          <TechStack />
        </motion.div>
      </SectionWrapper>
    </main>
  );
}

export default App;
