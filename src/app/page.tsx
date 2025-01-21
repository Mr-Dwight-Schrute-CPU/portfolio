import EmailForm from "@/components/EmailForm";
import AboutMe from "@/components/AboutMe";
import MySkills from "@/components/MySkills";
import MyProjects from "@/components/MyProjects";

export default function Home() {
  return (
    <div className="relative h-auto w-full p-5 flex flex-col mx-auto md:w-8/12">
      <AboutMe/>
      <MySkills/>
      <MyProjects/>

      <div id="EmailSection">
        <h3 className="w-full text-center mt-10 text-3xl font-semibold">Stay Connected</h3>
        <EmailForm/>
      </div>
    </div>
    
  );
}