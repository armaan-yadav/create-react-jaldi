import { motion } from "framer-motion";
import { FaGithub, FaNpm } from "react-icons/fa";
import logo from "../../public/logo.svg";
import CopyButton from "../components/CopyButton";
import FeaturesSection from "../components/FeaturesSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden py-12 px-4 sm:px-6">
      {/* Content container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left side - Text content */}
        <div className="flex-1 space-y-5 sm:space-y-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold flex flex-col sm:flex-row items-center justify-start sm:justify-center lg:justify-start gap-3 sm:gap-4">
              <img
                src={logo}
                alt="React Jaldi Logo"
                className="h-[45px] sm:h-[55px] md:h-[70px] drop-shadow-[0_0_15px_rgba(167,139,250,0.5)]"
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 h-[70px] flex items-center">
                create-react-jaldi
              </span>
            </h1>

            <p className="mt-2 sm:mt-4 text-lg sm:text-xl md:text-2xl font-medium text-gray-200 leading-relaxed">
              Stop wasting time on setup.
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-semibold">
                Start building instantly.
              </span>
            </p>

            <div className="mt-4 sm:mt-6 space-y-3 backdrop-blur-sm bg-black/20 p-4 rounded-xl border border-gray-800">
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                A modern React starter template with TypeScript, Tailwind CSS,
                Shadcn UI, React Router DOM, and Redux—all pre-configured and
                ready to go.
              </p>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                Create an empty folder, paste the command below, choose between{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-medium px-1">
                  js or ts
                </span>{" "}
                and you're done! The site will automatically open in your
                browser.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 pt-3 sm:pt-4"
          >
            <div className="enhanced-glow-container">
              <button className="enhanced-glow-button w-full sm:w-auto px-5 sm:px-7 py-3 text-base sm:text-lg font-medium bg-gray-900 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
                <code className="font-mono">npm create react-jaldi .</code>
                <CopyButton text="npm create react-jaldi ." />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <a
                href="https://github.com/armaan-yadav/package"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 text-base sm:text-lg font-medium text-white bg-gray-900/80 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all hover:border-purple-500 hover:scale-102"
              >
                <FaGithub className="mr-2 text-lg" /> GitHub
              </a>
              <a
                href="https://www.npmjs.com/package/create-react-jaldi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-3 text-base sm:text-lg font-medium text-white bg-gray-900/80 border border-gray-700 rounded-lg hover:bg-gray-800 transition-all hover:border-blue-500 hover:scale-102"
              >
                <FaNpm className="mr-2 text-lg" /> npm
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
