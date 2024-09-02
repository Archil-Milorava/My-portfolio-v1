import { useEffect, useState } from "react";
import AboutMe from "./sections/AboutMe";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import ProjectsSection from "./sections/ProjectsSection";
import TechStack from "./sections/TechStack";
import Spinner from "./Spinner";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner /> ;
  }

  return (
    <main className="h-auto w-full flex flex-col space-y-12  bg-white-main overflow-hidden">
      <Header />

      <ProjectsSection />

      <div className="h-[40rem] w-full flex items-center justify-center  gap-2 ">
        <AboutMe />
        <TechStack />
      </div>

      <Footer />
    </main>
  );
}

export default App;
