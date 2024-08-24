import { motion } from "framer-motion";

function SectionWrapper({children}) {
    return (
        <motion.section
        
        className="h-auto px-28"
        
        // initial="hidden"
        //   whileInView="visible"
        //   viewport={{ once: true }}
        //   variants={{
        //     hidden: { opacity: 0, y: 100 },
        //     visible: {
        //       opacity: 1,
        //       y: 0,
        //       transition: {
        //         duration: 1,
        //         ease: "easeInOut",
        //       },
        //     }
        //   }}
        >
            {children}
        </motion.section>
    )
}

export default SectionWrapper
