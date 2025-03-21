import { IconType } from "react-icons";
import { CiRouter } from "react-icons/ci";
import { FiZap } from "react-icons/fi";
import {
  SiJavascript,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
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
    name: "Tailwind",
    desc: "Styling made easy",
    color: "text-sky-400",
  },
  {
    icon: FiZap,
    name: "Shadcn",
    desc: "Beautiful components",
    color: "text-sky-400",
  },
  {
    icon: CiRouter,
    name: "React Router DOM",
    desc: "Routing made easy",
    color: "text-sky-400",
  },
];

export const commands = {
  npm: {
    ts: "npm create react-jaldi my-app-name",
    js: "npm create react-jaldi js my-app-name",
  },
  yarn: {
    ts: "yarn create react-jaldi my-app-name",
    js: "yarn create react-jaldi js my-app-name",
  },
  pnpm: {
    ts: "pnpm create react-jaldi my-app-name",
    js: "pnpm create react-jaldi js my-app-name",
  },
  bun: {
    ts: "bun create react-jaldi my-app-name",
    js: "bun create react-jaldi js my-app-name",
  },
};

export const languages: Ilanguages[] = [
  { name: "TypeScript", value: "ts", icon: SiTypescript },
  { name: "JavaScript", value: "js", icon: SiJavascript },
];

export interface Ilanguages {
  name: string;
  value: "ts" | "js";
  icon: IconType;
}
