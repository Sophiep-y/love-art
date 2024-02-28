import { motion } from "framer-motion";

function AnimationLayout({ children }) {
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-full h-full origin-top"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export default AnimationLayout;
