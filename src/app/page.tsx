import EmailForm from "@/components/EmailForm";
import AboutMe from "@/components/AboutMe";
import MySkills from "@/components/MySkills";
import MyProjects from "@/components/MyProjects";

export const metadata = {
  title: 'Kunal Nasa - Portfolio',
  description: "Hey, I'm Kunal Nasa! Explore my portfolio, skills, and projects.",
  keywords: ['Kunal Nasa', 'Portfolio', 'Web Developer', 'AI', 'Next.js', 'MERN', 'React.js', 'MongoDB', 'Express', 'Node.js', 'Postgres', 'SQL'],
  authors: [{ name: 'Kunal Nasa' }],
  openGraph: {
    title: 'Kunal Nasa - Portfolio',
    description: 'Check out my portfolio, projects, and skills.',
    url: 'https://kunalnasa.xyz',
    images: [
      {
        url: '/Images/AppLogo.jpeg',
        width: 800,
        height: 600,
        alt: 'Kunal Nasa Portfolio Preview',
      },
    ],
  },
};
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