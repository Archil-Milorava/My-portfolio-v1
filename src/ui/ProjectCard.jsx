import { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
      className="h-80 w-72 border border-none shadow-md hover:w-[55rem] cursor-pointer rounded-md transition-all duration-1000 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="rounded-sm h-full w-full flex gap-2 overflow-hidden bg-white-main">
          <img src={image}  className=" h-full w-2/4  object-cover" alt={title} />

          <div className=" font-baskervville pl-2 h-full w-2/4 max-h-full overflow-hidden flex flex-col items-start justify-between py-4">
            <h1 className="text-2xl font-semibold tracking-wide text-red-main uppercase">
              {title}
            </h1>
            <p className="text-lg text-black-main ">{description}</p>
            <small className="font-semibold">
              Built with |{" "}
              <span className="text-lg text-red-main">
                {technologies.join(", ")}
              </span>
            </small>

            <div className="flex gap-4 w-full h-auto justify-around items-center pr-2 ">
              <button
                onClick={() => window.open(githubLink)}
                className=" w-32 h-10  border-2 border-green-main flex items-center justify-center text-md text-green-main tracking-wide font-semibold cursor-pointer hover:opacity-70 transition-all"
              >
                <FaGithub className="text-2xl" />
              </button>
              <button
                onClick={() => window.open(link)}
                className=" w-32 h-10  border-2 border-green-main flex items-center justify-center text-md text-green-main tracking-wide font-semibold cursor-pointer hover:opacity-70 transition-all"
              >
                Preview <FaExternalLinkAlt />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="shadow-xl h-full w-full flex flex-col overflow-hidden bg-white-main rounded-sm font-baskervville ">
          <img
            src={image}
            className="h-3/4 object-cover blur-[0.5px]"
            alt={image}
          />
          <div className=" h-1/4 flex flex-col items-start justify-around p-2">
            <h1 className="text-center w-full text-xl font-semibold tracking-wide text-red-main uppercase">
              {title}
            </h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
