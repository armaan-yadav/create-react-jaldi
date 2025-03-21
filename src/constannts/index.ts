import { FiZap } from "react-icons/fi";
import { SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

export const items = [
  {
    icon: SiTypescript,
    name: "TypeScript",
    desc: "Type-safety built in",
    color: "text-blue-400",
  },
  {
    icon: SiRedux,
    name: "Redux Toolkit",
    desc: "State management",
    color: "text-purple-400",
  },
  {
    icon: FiZap,
    name: "Fast Setup",
    desc: "Ready in seconds",
    color: "text-amber-400",
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind + Shadcn",
    desc: "Beautiful components",
    color: "text-sky-400",
  },
];

export const commands = {
  npm: "npm create react-jaldi my-app-name",
  yarn: "yarn create react-jaldi my-app-name",
  pnpm: "pnpm create react-jaldi my-app-name",
  bun: "bun create react-jaldi my-app-name",
};
