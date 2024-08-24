import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";


function Footer() {
  return (
    <section className="bg-[#424242] w-full h-[10rem] mt-4 flex ">
      <div className=" w-1/2 h-full flex flex-col items-start justify-center px-8 space-y-4 font-baskervville">
        <h1 className="text-white-main text-2xl font-semibold tracking-widest">
          Archil Milorava
        </h1>
        <p className="text-white-main">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>
      <div className=" w-1/2 h-full flex flex-col items-end justify-center px-8 space-y-4 font-baskervville">
        <h1 className="text-white-main text-xl font-semibold tracking-widest">
          SOCIAL
        </h1>
        <ul className="flex gap-2">
          <li>
            <a href="https://www.linkedin.com/in/archil-milorava-9199a110a/" target="_blank">
              <FaLinkedin className="text-2xl text-white-main"/>
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/achi.barsa" target="_blank">
              <FaGithubSquare className="text-2xl text-white-main"/>
            </a>
          </li>

          <li>
            <a href="https://github.com/Archil-Milorava" target="_blank">
              <FaFacebookSquare className="text-2xl text-white-main"/>
            </a>
          </li>
        </ul>
        <p className="text-white-main tracking-widest font-baskervville text-lg"> achimilorava16@gmail.com</p>
      </div>
    </section>
  );
}

export default Footer;
