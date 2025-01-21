import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './ui/badge'
import { FaGlobeAmericas } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Separator } from './ui/separator';

type props = {
  image : string,
  title : string,
  description : string,
  website? : string,
  github : string,
  techstack : string[]
}
const Card = ({image, title, description, website, github, techstack} : props) => {
  return (
    <div className="MainContainer bg-white dark:bg-black rounded-md  mx-auto border border-gray-700">
      <div className="h-auto hover:scale-95 hover:rounded-b-md w-full rounded-t-md overflow-hidden transition-transform duration-500 ease-in-out">
        <Image 
          className="object-cover hover:rounded-b-md" 
          src={image} 
          alt="Image" 
          width={500} 
          height={300} 
        />
      </div>
      <Separator/>
      <div className='flex flex-col py-4 p-2 w-full'>
        <h4 className='text-xl mb-3 font-semibold'>{title}</h4>
        <p className='text-sm'>{description}</p>
      </div>
      <div className='Techstack text-sm p-2 flex flex-wrap gap-3'>
        {techstack.map((item, index) => (
          <p className='text-sm dark:bg-gray-800 bg-gray-300 rounded-lg px-2' key={index}>{item}</p>
        )) }
      </div>
      <div className='p-2 mt-2 mb-4 flex gap-3'>
          {website && <Badge> <Link className='flex gap-1 items-center' href={website}><span><FaGlobeAmericas/></span>Website</Link> </Badge>}
       
        <Badge>
        
        <Link className='flex gap-1 items-center' href={github}><span><FaGithub/></span>Repo</Link>
        </Badge>
      </div>
      </div>
      
  )
}

export default Card
