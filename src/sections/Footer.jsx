import { useRef, useState } from "react";
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoCopy } from "react-icons/io5";
import {motion} from 'framer-motion'

function Footer() {
  const [textCopy, setTextCopy] = useState(true);
  const emailRef = useRef(null);

  function handleCopy() {
    navigator.clipboard.writeText(emailRef.current.textContent);
    setTextCopy(false);
    setTimeout(() => setTextCopy(true), 10000);
  }

  return (
    <motion.section 

    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {opacity:0, y: 100 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      },
    }}


    className="bg-[#424242] w-full h-[22rem] mt-4 flex">

<img src="https://i.ibb.co/MfQw4Yx/Screenshot-20240827-192745.jpg" alt="profile-photo" className="" />


      <div className="w-1/2 h-full flex flex-col items-start justify-center px-8 space-y-4 font-baskervville">
        <h1 className="text-white-main text-2xl font-semibold tracking-widest">
          Archil Milorava
        </h1>
        <p className="text-white-main">
          A Full stack  Web Developer building the Frontend and backend of Websites and
          Web Applications that leads to the success of the overall product
        </p>
      </div>
      <div className="w-1/2 h-full flex flex-col items-end justify-center px-8 space-y-4 font-baskervville ">
        <h1 className="text-white-main text-xl font-semibold tracking-widest">
          SOCIAL
        </h1>
        <ul className="flex gap-2">
          <li>
            <a
              href="https://www.linkedin.com/in/archil-milorava-9199a110a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-2xl text-white-main" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Archil-Milorava"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithubSquare className="text-2xl text-white-main" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/achi.barsa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookSquare className="text-2xl text-white-main" />
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-1">
          {textCopy ? (
            <IoCopy
              className="text-sm text-white-main cursor-pointer hover:text-opacity-50 transition-all"
              onClick={handleCopy}
            />
          ) : (
            <small className="text-xs text-white-main">copied!</small>
          )}
          <p
            ref={emailRef}
            className="text-white-main tracking-widest font-baskervville text-lg"
          >
            achimilorava16@gmail.com
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default Footer;
