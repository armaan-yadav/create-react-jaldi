import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { commands } from "../constannts";
import CopyButton from "./CopyButton";

type Props = {
  activeTab: keyof typeof commands;
  setActiveTab: Dispatch<SetStateAction<keyof typeof commands>>;
};

const PackageSelector = ({ activeTab, setActiveTab }: Props) => {
  return (
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
        <CopyButton text={commands[activeTab]} />
      </motion.div>
    </div>
  );
};

export default PackageSelector;
