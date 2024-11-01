'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FaHome } from "react-icons/fa";
import { GoProjectSymlink } from "react-icons/go";
import { IoInformationCircleOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai"; // Hamburger icon
import ThemeToggle from './ThemeToggle'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle, DialogOverlay } from '@radix-ui/react-dialog';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex my-2 justify-between items-center sticky top-0 w-full py-4 z-50 px-4 md:px-10">
      
      {/* Logo */}
      <Link href="/" className="text-4xl font-bold">
        <Image className="rounded-lg" width={75} height={75} src="/Images/AppLogo.webp" alt="App Logo" />
      </Link>

      {/* Centered Links for Laptop/Tablet */}
      <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 border-2 border-white/30 bg-black/10 backdrop-blur-lg border-gray-400 rounded-full py-2 px-5 gap-8">
        <Link href="/" className={`py-2 min-w-36 justify-center px-4 flex items-center gap-1 rounded-full ${pathname === '/' ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-300 hover:text-gray-900'}`}>
          <FaHome /> Home
        </Link>
        <Link href="/projects" className={`py-2 min-w-36 justify-center px-4 flex items-center gap-1 rounded-full ${pathname === '/projects' ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-300 hover:text-gray-900'}`}>
          <GoProjectSymlink /> Projects
        </Link>
        <Link href="/about" className={`py-2 min-w-36 justify-center px-4 flex items-center gap-1 rounded-full ${pathname === '/about' ? 'bg-gray-300 text-gray-900' : 'hover:bg-gray-300 hover:text-gray-900'}`}>
          <IoInformationCircleOutline /> About Me
        </Link>
      </div>

      {/* Theme Toggle and Hamburger Menu for All Screens */}
      <div className="flex items-center space-x-3">
        <ThemeToggle />
        {/* Conditionally render Hamburger and Close icons */}
        {!isOpen && (
          <button onClick={() => setIsOpen(true)} className="md:hidden text-2xl">
            <AiOutlineMenu />
          </button>
        )}
      </div>

      {/* Sidebar Drawer */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogOverlay className="fixed inset-0 opacity-50" />
        
        <DialogContent className="relative z-10 rounded-lg shadow-lg w-1/2 p-6">
          <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-xl">
            &times;
          </button>
          <div className="flex flex-col gap-4 mt-4">
            <Link href="/" onClick={() => setIsOpen(false)} className={`py-2 flex items-center gap-2 ${pathname === '/' ? 'text-indigo-500' : ''}`}>
              <FaHome /> Home
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className={`py-2 flex items-center gap-2 ${pathname === '/projects' ? 'text-indigo-500' : ''}`}>
              <GoProjectSymlink /> Projects
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className={`py-2 flex items-center gap-2 ${pathname === '/about' ? 'text-indigo-500' : ''}`}>
              <IoInformationCircleOutline /> About Me
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  )
}

export default Navbar;
