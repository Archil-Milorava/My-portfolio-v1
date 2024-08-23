import projects from "../sevices/projectsData";
import ProjectCard from "../ui/ProjectCard";

function ProjectsSection() {


  return (
    <section className={`h-[550px] w-full border-none p-9 rounded-2xl shadow-lg flex flex-col bg-[#fdfdfd]  transition-all duration-[1500ms] ease-in-out`} >
        <h1 className="text-5xl font-semibold uppercase tracking-wider text-green-main border-b border-b-black border-opacity-20 pb-2 ">Projects</h1>

        <div className="flex justify-around  h-full w-full items-center gap-8">
          {projects.map((data, index) => (
            <ProjectCard key={index} data={data} />
          ))}
        </div>
      
      
    </section>
  );
}

export default ProjectsSection;
