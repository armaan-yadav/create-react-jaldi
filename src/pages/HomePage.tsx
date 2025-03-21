import { motion } from "framer-motion";
import { FaGithub, FaNpm } from "react-icons/fa";
import logo from "../../public/logo.svg";
import CopyButton from "../components/CopyButton";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white overflow-x-hidden py-8 px-4 sm:px-6">
      {/* Content container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 space-y-4 sm:space-y-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold flex flex-col sm:flex-row items-center justify-start sm:justify-center lg:justify-start gap-2 sm:gap-4">
              <img
                src={logo}
                alt="React Jaldi Logo"
                className="h-[50px] sm:h-[60px] md:h-[80px]"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 h-[80px] flex items-center ">
                create-react-jaldi
              </span>
            </h1>

            <p className="mt-2 sm:mt-3 text-xl sm:text-2xl md:text-3xl font-medium text-gray-300">
              Stop wasting time on setup.
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">
                Start building instantly.
              </span>
            </p>

            <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-500">
              A modern React starter template with TypeScript, Tailwind CSS,
              Shadcn UI, React Router DOM, and Redux—all pre-configured and
              ready to go.
            </p>
            <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-400">
              Create an empty folder, paste the following command and it's done!
              It will automatically open the localhost in your browser.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2 sm:pt-4"
          >
            <button className="w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium transition-all bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg hover:from-purple-600 hover:to-blue-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-50 shadow-lg flex items-center justify-center">
              npm create react-jaldi .
              <CopyButton text="npm create react-jaldi ." />
            </button>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://github.com/armaan-yadav/package"
                target="_blank"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/create-react-jaldi"
                target="_blank"
                className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 text-base sm:text-lg font-medium text-white border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <FaNpm className="mr-2" /> npm
              </a>
            </div>
          </motion.div>
        </div>

        <FeaturesSection />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
