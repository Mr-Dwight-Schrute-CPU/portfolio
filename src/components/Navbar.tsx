'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex sticky md:top-0 bottom-0 w-full justify-around my-2 py-2 items-center'>
        <Image width={100} height={100} src="/Images/Logo.svg" alt="" />
        <div className='flex gap-10  backdrop-blur-xl bg-white/10 rounded-full py-5 px-10'>
            <Link href='/'>Home</Link>
            <Link href='/projects'>Projects</Link>
            <Link href='/about'>About Me</Link>
        </div>
        <div>Day/Night</div>
    </div>
  )
}

export default Navbar
