'use client'
import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

import { projects } from '@/helpers/Project'
import Card from '@/components/Card'
import { useRouter } from 'next/navigation'
import { IoInformationCircleOutline } from 'react-icons/io5'
import Link from 'next/link'
const page = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <div className='MainContainer flex flex-col w-7/12 mx-auto'>
      <div className=' flex items-center p-4 flex-col-reverse md:flex-row justify-between w-full'>
        <Image width={300} height={300} src="/Images/SomeRecentWork.svg" alt="Some Recent Work" />
        <Image width={200} height={200} src="/Images/Bitmoji.webp" alt="Some Recent Work" />
      </div>
      <div className="projects-div my-2 font-serif mb-10">
        <div className="flex justify-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
            <Card
              key={index}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
            />
        ))}
        </div>

        </div>
        
      </div>
      <div className='my-10 w-full'>
      <button onClick={() => {router.replace('/about')}} className="tilt-button flex items-center mx-auto gap-5 text-lg">
        About Me <IoInformationCircleOutline className='text-2xl'/>
  </button>
      </div>
      <div className='my-10 mt-20 w-full text-right'>
      <Link href="/#EmailSection">
        <button className='tilt-button'>
          <div className='text-xl'>
          Liked My Projects ?
          </div>
          <div className='flex p-2 items-center gap-2 text-sm'>
          Show some love here
          <FaChevronRight/>
          </div>

        </button>
      </Link>
      </div>
    </div>
  )
}

export default page
