'use client'
import ThemeToggle from './ThemeToggle'

import { IconBrandGithub, IconBrandLinkedin, IconBrandX, IconScript } from '@tabler/icons-react';
import { FloatingDock } from './ui/floating-dock';
import { BsMailbox } from 'react-icons/bs';
import { MdAllInbox, MdEmail } from 'react-icons/md';

const Navbar = () => {
  const links = [
    // {
    //   title: "Home",
    //   icon: (
    //     <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "/",
    // },
 
    // {
    //   title: "Projects",
    //   icon: (
    //     <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "/projects",
    // },
    // {
    //   title: "About Me",
    //   icon: (
    //     <IconRobotFace className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "/about",
    // },
    {
      title: "Resume",
      icon: (
        <IconScript className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/17c00acJCWrzgti_xv7yLuqoNQQ9EmBwg/view?usp=sharing",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/kunal-nasa-24840b249/",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/nasa_kunal",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `https://github.com/KunalNasa`,
    },
    {
      title: "Email",
      icon: (
        <MdEmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: `mailto:kunalnasa.dev@gmail.com`,
    },
    {
      title: "Theme",
      icon: <ThemeToggle/>,
      href: `#`,
    },
  ];
  return (
    <div className="flex items-center justify-center fixed bottom-10 z-50 w-full bg-none">
      
    <FloatingDock
      // mobileClassName="translate-y-20" 
      items={links}
    />
  </div>
  )
}

export default Navbar;
