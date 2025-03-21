import { motion } from "framer-motion";
import React, { useState } from "react";
import shadcnFavicon from "../assets/favicon.ico";
import reactRouterFavicon from "../assets/react-router-favicon.svg";
import { commands, items, languages } from "../constannts";
import CopyButton from "./CopyButton";

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState<keyof typeof commands>("npm");
  const [current, setCurrent] = useState<"ts" | "js">("ts");
  return (
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
                  {item.name == "Shadcn" ? (
                    <img
                      src={shadcnFavicon}
                      alt="Shadcn Logo"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  ) : item.name == "React Router DOM" ? (
                    <img
                      src={reactRouterFavicon}
                      alt="React Router DOM Logo"
                      className="w-5 h-5 sm:w-6 sm:h-6"
                    />
                  ) : (
                    <item.icon
                      className={`text-xl sm:text-2xl ${item.color}`}
                    />
                  )}
                </div>
                <h3 className="font-bold text-sm sm:text-base text-white">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800/30 backdrop-blur-md rounded-lg border border-white/10 shadow-inner">
            <div className=" flex items-center ">
              <div className="flex flex-wrap gap-2 mb-3 flex-1 ">
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
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs sm:text-sm text-gray-400 mr-1">
                  Language:
                </span>
                {languages.map((lang, i) => (
                  <button
                    key={i}
                    className={`flex items-center justify-center p-1.5 rounded-md transition-all duration-200 cursor-pointer ${
                      lang.value === current
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "text-gray-400 hover:bg-gray-700/50 border border-transparent"
                    }`}
                    onClick={() => setCurrent(lang.value)}
                    title={lang.value === "ts" ? "TypeScript" : "JavaScript"}
                  >
                    <lang.icon className="text-xl sm:text-2xl" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <div className="flex items-center text-xs text-gray-400 mb-1 px-1">
                <span>
                  Creating app with{" "}
                  {current === "js" ? "JavaScript" : "TypeScript"}
                </span>
              </div>
              <motion.div
                className="bg-gray-900/70 backdrop-blur-md p-3 sm:p-4 rounded-md border border-white/10 flex flex-col shadow-lg overflow-x-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={activeTab}
              >
                <div className="flex items-center w-full">
                  <span className="text-gray-500 mr-2">$</span>
                  <code className="text-sm whitespace-nowrap sm:text-base font-mono text-green-400 flex-1">
                    {commands[activeTab][current]}
                  </code>
                  <CopyButton text={commands[activeTab][current] as string} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
