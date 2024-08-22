import { useState } from "react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ data }) {
  const [isHovered, setIsHovered] = useState(false);
  const {
    title,
    description,
    image,
    link,
    githubLink,
    fullStack,
    technologies,
  } = data;


  return (
    <div
      className="h-80 w-72 border border-none shadow-2xl hover:w-[55rem] cursor-pointer rounded-md transition-all duration-1000 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className=" h-full w-full flex gap-2 overflow-hidden bg-white-main">
          <img src={image} className="h-full w-2/4  object-cover" alt={title} />

          <div className=" pl-2 h-full w-2/4 max-h-full overflow-hidden flex flex-col items-start justify-between py-4">
            <h1 className="text-2xl font-semibold tracking-wide text-red-main uppercase">
              {title}
            </h1>
            <p className="text-sm text-black-main ">{description}</p>
            <small>
              Built with |{" "}
              <span className="text-red-main">{technologies.join(", ")}</span>
            </small>

            <button className="w-3/4 h-10 ml-8  border-2 border-green-main flex items-center  text-3xl text-green-main justify-center hover:bg-green-main hover:text-white-main transition-all duration-500 ">
              <a href={githubLink} target="blank">
                <FaGithub />
              </a>
            </button>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex flex-col overflow-hidden">
          <img src={image} className="h-3/4 object-cover" alt={image} />
          <div className=" h-1/4 flex flex-col items-start justify-around p-2">
            <h1 className="text-2xl font-semibold tracking-wide text-red-main uppercase">
              {title}
            </h1>
            <p className="text-sm text-green-main uppercase tracking-widest">
              Hover for more...
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
