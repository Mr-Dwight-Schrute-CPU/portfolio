import React from 'react'
import Card from './Card'
import { projects } from '@/helpers/Project'

const MyProjects = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <h3 className='text-4xl text-center font-semibold py-5'>Some Of My Recent Work</h3>
    <p className='text-lg text-center mb-8'>Here are a few projects I've worked on recently. Want to see more? Visit my <a href="/projects" className="text-gray-500 underline">Projects</a>.</p>
      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 gap-1 md:gap-2">
        {projects.map((project, index) => index < 4 && (
            <Card
              key={index}
              website={project.liveUrl ? project.liveUrl : undefined}
              image={project.imageUrl}
              title={project.title}
              description={project.description}
              github={project.githubUrl}
              techstack={project.techstack}
            />
        ))}
        </div>
    </div>
  )
}

export default MyProjects
