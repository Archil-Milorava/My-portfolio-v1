import { useState } from "react";
import { FaGithub } from "react-icons/fa";

function ProjectCard() {
  const [isHovered, setIsHovered] = useState(false);

  return (
      <>
    <div
      className="flex flex-col hover:w-[36rem]  h-80 w-64 transition-all duration-500 rounded-md cursor-pointer shadow-xl overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className=" w-full h-2/3">
        <img
          src="../../public/wild-2.png"
          className="h-full object-cover "
          alt="prj"
        />
      </div>
      <div className=" w-full h-1/3 flex flex-col items-center space-y-2 p-2">
        <h2 className="uppercase font-semibold tracking-wide text-red-main">
          The Wild Oasis / FullStack
        </h2>
        <p className="text-center text-xs">
          In This project user can manage hotel
        </p>
        {isHovered && (
          <div className="flex gap-3 items-center">
            <a href="">
              <FaGithub className="text-xl text-red-main hover:text-opacity-60 transition-all" />
            </a>
            <p className="text-xs">
              Built with: React-Query, React-Router, Supabase, Styled Components
            </p>
          </div>
        )}
      </div>
    </div>
    <div
    className="flex flex-col hover:w-[36rem]  h-80 w-64 transition-all duration-500 rounded-md cursor-pointer shadow-xl overflow-hidden"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
    <div className=" w-full h-2/3">
      <img
        src="../../public/wild-2.png"
        className="h-full object-cover "
        alt="prj"
      />
    </div>
    <div className=" w-full h-1/3 flex flex-col items-center space-y-2 p-2">
      <h2 className="uppercase font-semibold tracking-wide text-red-main">
        The Wild Oasis / FullStack
      </h2>
      <p className="text-center text-xs">
        In This project user can manage hotel
      </p>
      {isHovered && (
        <div className="flex gap-3 items-center">
          <a href="">
            <FaGithub className="text-xl text-red-main hover:text-opacity-60 transition-all" />
          </a>
          <p className="text-xs">
            Built with: React-Query, React-Router, Supabase, Styled Components
          </p>
        </div>
      )}
    </div>
  </div>
  </>
  );
}

export default ProjectCard;
