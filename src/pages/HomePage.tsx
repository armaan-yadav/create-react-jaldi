import { motion, useMotionValue } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaNpm } from "react-icons/fa";
import logo from "../../public/logo.svg";
import CopyButton from "../components/CopyButton";
import Footer from "../components/Footer";
import { commands, items } from "../constannts";

const HomePage = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof commands>("npm");
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white overflow-x-hidden py-8 px-4 sm:px-6"
      onMouseMove={handleMouseMove}
    >
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

            <p className="mt-3 sm:mt-5 text-base sm:text-lg md:text-xl text-gray-400">
              A modern React starter template with TypeScript, Tailwind CSS,
              Shadcn UI, and Redux—all pre-configured and ready to go.
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

        {/* Right side - Visual elements */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-1 relative w-full mt-8 lg:mt-0"
        >
          <div className="relative p-1 bg-gradient-to-r from-purple-500/80 via-blue-500/80 to-purple-500/80 rounded-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            <div className="bg-gray-900/40 backdrop-blur-md p-4 sm:p-6 rounded-lg border border-white/10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {items.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-gray-800/50 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/5 hover:border-white/20 relative group overflow-hidden shadow-lg"
                  >
                    <div
                      className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"
                      style={
                        {
                          backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                          "--tw-gradient-from": `rgb(${
                            i % 2 ? "149, 76, 233" : "56, 189, 248"
                          })`,
                          "--tw-gradient-to": `rgb(${
                            i % 2 ? "56, 189, 248" : "149, 76, 233"
                          })`,
                        } as React.CSSProperties
                      }
                    />
                    <div className="flex items-center mb-2 sm:mb-3">
                      <item.icon
                        className={`text-xl sm:text-2xl ${item.color}`}
                      />
                    </div>
                    <h3 className="font-bold text-sm sm:text-base text-white">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800/30 backdrop-blur-md rounded-lg border border-white/10 shadow-inner">
                <div className="flex flex-wrap gap-2 mb-3">
                  {["npm", "Yarn", "pnpm", "Bun"].map((tab) => (
                    <motion.button
                      key={tab}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                      className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-md font-medium text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                        activeTab === tab.toLowerCase()
                          ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md"
                          : "bg-gray-800/70 text-gray-400 hover:bg-gray-700/70 backdrop-blur-sm"
                      }`}
                      onClick={() =>
                        setActiveTab(tab.toLowerCase() as keyof typeof commands)
                      }
                    >
                      {tab}
                    </motion.button>
                  ))}
                </div>
                <motion.div
                  className="bg-gray-900/50 backdrop-blur-md p-2 sm:p-3 rounded-md border border-white/5 flex items-center shadow-lg overflow-x-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  key={activeTab}
                >
                  <code className="text-xs whitespace-nowrap sm:text-sm font-mono text-green-400 flex-1">
                    $ {commands[activeTab]}
                  </code>
                  <CopyButton text={commands[activeTab] as string} />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
