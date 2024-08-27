import StackIcon from "tech-stack-icons";
import { motion } from "framer-motion";

function TechStack() {
  return (
    <motion.div
    
    
    initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {  x: 150 },
            visible: {
              
              x: 0,
              transition: {
                duration: 2,
                ease: "easeInOut",
              },
            },
          }}
    
    
    
    className="font-baskervville text-green-main  h-[572px] w-[526px] bg-[url(https://i.postimg.cc/cL1x14fP/bg2.png)] bg-cover shadow-lg border border-green-main border-opacity-20 p-16 overflow-hidden">
      <h1 className="text-5xl font-extrabold tracking-widest border-b border-b-black text-end border-opacity-20 pb-2">
        Skills
      </h1>
      <motion.div
        className="grid grid-rows-auto grid-cols-4 space-y-4 gap-2 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,

            transition: {
              staggerChildren: 0.1,
              ease: "easeInOut",
            },
          },
        }}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="html5"
            className=" h-18 p-2 bg-gray-700  bg-opacity-10 mt-4"
          />
        </motion.div>


        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="css3"
            className=" h-18 p-2 bg-gray-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="js"
            className="h-18 p-2 bg-gray-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="reactjs"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="nextjs"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="tailwindcss"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="git"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="github"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="supabase"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="redux"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="framer"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <StackIcon
            name="typescript"
            className="h-18 p-2 bg-slate-700  bg-opacity-10"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default TechStack;
