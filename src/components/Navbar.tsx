'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import ThemeToggle from './ThemeToggle'
import Image from 'next/image';
const Navbar = () => {
    const pathname = usePathname();

  return (
    <nav className="flex my-2 justify-between items-center sticky top-0 w-full py-4 z-50 px-10">
      {/* Logo */}
      <Link href='/' className='gradient-text font-futura-3d text-4xl font-bold'><Image className='rounded-lg' width={75} height={75} src="/Images/AppLogo.webp" alt="" /></Link>

      {/* Centered Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 border-2 border-white/30 bg-black/10 backdrop-blur-lg  border-gray-400 rounded-full py-2 px-5 flex gap-8">
        <Link href="/" className={`py-2 min-w-36 justify-center px-4 flex items-center gap-1 rounded-full ${pathname === '/' ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-300 hover:text-gray-900'}`}><FaHome/>Home</Link>
        <Link href="/projects" className={`py-2 min-w-36 justify-center flex items-center gap-1 px-4 rounded-full ${pathname === '/projects' ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-300 hover:text-gray-900'}`}><GoProjectSymlink/>Projects</Link>
        <Link href="/about" className={`py-2 min-w-36 justify-center flex items-center gap-1 px-4 rounded-full ${pathname === '/about' ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-300 hover:text-gray-900'}`}><IoInformationCircleOutline/>About Me</Link>
      </div>

      {/* Day/Night Toggle */}
      <ThemeToggle/>
    </nav>
  )
}

export default Navbar;
