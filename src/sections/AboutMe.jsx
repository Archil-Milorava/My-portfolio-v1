import { motion } from "framer-motion";
function AboutMe() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { x: -500 },
        visible: {
          x: 0,
          transition: {
            duration: 2,
            ease: "easeInOut",
          },
        },
      }}
      className="h-[572px] w-[799px] bg-[url(https://i.postimg.cc/TP4Y4MLF/bg3.png)] bg-cover shadow-md  p-16 border border-green-main border-opacity-20"
    >
      <h1 className="text-5xl text-green-main font-extrabold tracking-wider border-b border-b-green-main border-opacity-30 font-baskervville  pb-2">
        Get to know me
      </h1>
      <p className=" h-full w-full text-md text-start pt-10 leading-8 text-green-main">
        I&apos;m a{" "} full stack Web Developer. 
        <span className="font-bold"> Frontend Focused</span>{" "}
        building the Front and backend of Websites and Web Applications that leads to
        the success of the overall product. Check out some of my work in the
        Projects section.
        <br />
        <br />
        Feel free to Connect or Follow me on my{" "}
        <a
          className="font-bold text-yellow-500 tracking-wide"
          href="https://www.linkedin.com/in/archil-milorava-9199a110a/"
          target="_blank"
        >
          Linkedin
        </a>{" "}
        where we can share useful content related to Web Development and
        Programming.
        <br />
        <br />
        I&apos;m open to <span className="font-bold tracking-wide">
          Job
        </span>{" "}
        opportunities where I can contribute,<span className="font-bold tracking-wide"> learn and grow. </span> If you have a good
        opportunity that matches my skills and experience then don&apos;t
        hesitate to <span className="font-bold">contact</span> me.
      </p>
    </motion.div>
  );
}

export default AboutMe;
