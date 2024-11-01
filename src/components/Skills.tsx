import { 
  SiTypescript, 
  SiMongodb, 
  SiNodedotjs, 
  SiGithub, 
  SiReact, 
  SiExpress, 
  SiJavascript, 
  SiGit, 
  SiCplusplus, 
  SiNextdotjs, 
  SiTailwindcss 
} from "react-icons/si";

export const skills = [
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "MongoDB", icon: <SiMongodb className = "text-green-600"/> },
  { name: "Node.js", icon: <SiNodedotjs className = "text-green-500"/> },
  { name: "GitHub", icon: <SiGithub className = "text-gray-800"/> },
  { name: "React", icon: <SiReact className = "text-sky-400"/> },
  { name: "Express", icon: <SiExpress className = "text-gray-200"/> }, // Changed to light gray for better visibility
  { name: "JavaScript", icon: <SiJavascript className = "text-yellow-500"/> },
  { name: "Git", icon: <SiGit className = "text-orange-600"/> },
  { name: "C++", icon: <SiCplusplus className = "text-blue-800"/> },
  { name: "Next.js", icon: <SiNextdotjs className = "text-gray-950"/> }, // Changed to light gray for better visibility
  { name: "Tailwind CSS", icon: <SiTailwindcss className = "text-cyan-500"/> },
];