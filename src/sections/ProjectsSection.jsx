import projects from "../sevices/projectsData";
import ProjectCard from "../ui/ProjectCard";
import { motion } from "framer-motion";

function ProjectsSection() {
  return (
    <motion.section
      className={`sm:h-[35rem] sm:w-full p-2 m-0 bg-red-main   `}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: "easeInOut",
          },
        },
      }}
    >
      <h1 className="border-b border-b-white-main border-opacity-20 py-2 font-baskervville font-bold text-7xl text-white-main tracking-wider text-center">Projects</h1>

      <div className="  h-full w-full flex items-center gap-1 justify-around ">
          {projects.map((data, index) => (
            <ProjectCard key={index} data={data} />
          ))}
        </div>
    </motion.section>
  );
}

export default ProjectsSection;
