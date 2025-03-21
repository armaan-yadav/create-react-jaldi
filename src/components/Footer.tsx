import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className="absolute bottom-4 text-center text-gray-500 text-sm flex gap-2 w-full items-center justify-center text-white/80"
    >
      Made by
      <a
        href="https://github.com/armaan-yadav"
        target="_blank"
        className="flex items-center justify-center gap-1"
      >
        Armaan
        <FaGithub />
      </a>{" "}
      with ❤️ for React developers
    </motion.div>
  );
};

export default Footer;
