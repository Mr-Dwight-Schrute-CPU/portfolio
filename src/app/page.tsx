'use client'
import TypingAnimation from "@/components/TypingAnimation";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiScrollToBottomLine } from "react-icons/ri";
import { MdOutlineMilitaryTech } from "react-icons/md";
import { skills as ImportedSkills} from "@/components/Skills";
import {projects} from "@/helpers/Project"
import Card from "@/components/Card";
import { FaChevronRight } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import EmailForm from "@/components/EmailForm";
import { ToastContainer } from "react-toastify";

export default function Home() {
  const skills = ImportedSkills;
  const router = useRouter();
  
  return (
    <div className="relative h-auto flex flex-col mx-auto w-7/12">
      <div className="mt-20">
        <p className="opacity-65 py-1 font-serif uppercase">&gt; Hello World !</p>
        <h1 className="text-7xl font-bold my-1 font-serif">Hey, I&apos;m <span className="text-indigo-500">Kunal Nasa</span></h1>
        <h3 className="text-3xl font-serif font-bold my-5">I am <TypingAnimation /></h3>
        <h4 className="text-xl font-semibold font-serif">I develop <span className="text-indigo-500 uppercase">Full-stack</span> applications actively seeking new opportunities to bring impactful solutions to life.</h4>
        <div className="flex font-serif items-center text-2xl my-5 gap-3">
          <p>Connect With Me</p>
          <Link className="transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 p-2 rounded-full" href='https://github.com/KunalNasa' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
          <Link className="transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 p-2 rounded-full" href='https://www.linkedin.com/in/kunal-nasa-24840b249/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
        </div>
        <div className="h-64 text-5xl w-full flex items-center justify-center animation-bounce">
          <RiScrollToBottomLine />
        </div>
      </div>

      <div className="my-14 mx-auto font-serif">
        <h2 className=" lg:text-7xl md:text-5xl sm:text-4xl  flex font-bold w-1/3 border-b-2 mx-auto mb-8">
          Skills <span className="text-indigo-500 px-2"><MdOutlineMilitaryTech /></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-auto">
  {skills.map((skill) => (
    <div
      key={skill.name}
      className={`skill-block flex items-center gap-2 md:text-xl text-black text-sm sm:text-lg font-semibold p-3 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl`}
    >
      <span>{skill.name}</span> 
      <span className={`text-xl`}>
        {skill.icon} 
      </span>
    </div>
  ))}
</div>
      </div>

      <div className="projects-div my-14 font-serif">
        <h3 className="md:text-4xl flex font-bold w-1/3 mb-8"> <span className="text-green-500">___</span> Projects </h3>
        <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          index < 2 && (
            <Card
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
            />
          )
        ))}
        </div>
        </div>
        
      </div>

      <div className="Projects-Button mx-auto my-10">
      <button onClick={() => {router.replace('/projects')}} className="tilt-button flex items-center gap-5 text-lg">
        Load More <FaChevronRight/>
  </button>
      </div>
      <div id="EmailSection">
        <EmailForm/>
      </div>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick pauseOnHover draggable />
    </div>
    
  );
}
// service_6bidlbz