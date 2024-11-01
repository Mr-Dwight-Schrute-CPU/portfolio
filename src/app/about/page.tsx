'use client'
import Image from 'next/image'
import {  FaChevronRight, FaGithub, FaLinkedin, FaRegHandshake } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { GoProjectSymlink } from 'react-icons/go'
import { IoMailSharp } from "react-icons/io5";
import { IoInformationCircleOutline } from 'react-icons/io5'
import { FaTwitterSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className='MainContainer w-10/12 md:w-7/12 my-14 mx-auto flex flex-col items-center justify-center'>
      <h1 className='text-3xl text-center font-semibold md:text-5xl'>Hey, I am 
        <span className='text-blue-500'>
          <Link className="p-2 rounded-full" href='https://www.linkedin.com/in/kunal-nasa-24840b249/' target="_blank" rel="noopener noreferrer">@KunalNasa</Link>
        </span>
      </h1>
      <div>
        <Image width={150} height={150} src="/Images/HelloBitmoji.webp" alt="" />
      </div>
      <div className='about-me my-5 font-mono'>
        <h3 className='flex items-center gap-2 text-3xl font-semibold font-mono'> <IoInformationCircleOutline/> Brief Intro</h3>
        <p className='p-2 text-lg sm:text-2xl'>
        I am a third-year B.Tech student at <span className='text-blue-500 font-semibold'>USICT (GGSIPU Main Campus)
          </span>, passionate about web development and technology. With a strong foundation in full-stack development, I specialize in creating innovative and user-friendly applications using <span className='text-blue-500 font-semibold'> Next.js and the MERN stack.</span> I have experience working with tools like Zod and Tailwind CSS, which I use to enhance both the design and functionality of my projects. <br/> <br/>

        I am <span className='text-blue-500 font-semibold'>currently seeking internship opportunities</span>  to gain valuable industry experience and apply my skills in a real-world setting. I am eager to learn from professionals in the field and contribute to meaningful projects. My commitment to continuous learning drives me to tackle complex challenges and develop both my technical and soft skills, preparing me for a successful career in technology.
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center gap-5 my-5'>
        <button onClick={() => {router.replace('/#EmailSection')}} className="tilt-button flex items-center gap-5 text-xl">
          Leave A Message <IoMailSharp/> 
        </button>
        <button onClick={() => {router.replace('/projects')}} className="tilt-button flex items-center gap-5 text-xl">
              Visit Projects <GoProjectSymlink/>
        </button>
      </div>
      <div className='Connect-with-me text-center md:text-left w-full'>
        <div className='flex items-center gap-4 mb-5 text-2xl font-mono font-semibold'>
          <FaRegHandshake />
          <span className='text-blue-500'>Connect With Me</span>
        </div>
        <div className='flex items-center gap-1 text-3xl'>
        <Link className="transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 p-1 rounded-full" href='https://github.com/KunalNasa' target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
        <Link className="transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 p-1 rounded-full" href='https://www.linkedin.com/in/kunal-nasa-24840b249/' target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
        <Link className="transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 p-1 rounded-full" href='https://x.com/nasa_kunal' target="_blank" rel="noopener noreferrer"><FaTwitterSquare /></Link>
        <Link
          className="transform hover:-translate-y-2 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-500/50 p-1 rounded-full"
          href="mailto:kunalnasa.dev@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MdMail /> 
        </Link>

        </div>
      </div>
      <div className='my-10 mt-20 w-full text-right'>
      <Link href="mailto:kunalnasa.dev@gmail.com">
        <button className='tilt-button'>
          <div className='text-xl'>
          Glad to have you here
          </div>
          <div className='flex p-2 items-center gap-2 text-sm'>
          Send Me A Message
          <FaChevronRight/>
          </div>

        </button>
      </Link>
      </div>
    </div>
  )
}

export default page
