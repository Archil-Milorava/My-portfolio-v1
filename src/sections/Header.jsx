import Navbar from "../ui/Navbar";
import Presentation from "../ui/Presentation";

import { motion } from "framer-motion";

function Header() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0},
        visible: {
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: "easeInOut",
          },
        },
      }}
    >
      <Navbar />
      <Presentation />
    </motion.section>
  );
}

export default Header;
