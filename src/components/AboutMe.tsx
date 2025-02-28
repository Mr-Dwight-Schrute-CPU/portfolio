import React from 'react'
import TypingAnimation from './TypingAnimation'
import Image from 'next/image'

const AboutMe = () => {
  return (
        <div className="md:mt-20 mt-14">
            <div className='flex justify-between'>
              <div>
                  <p className="opacity-65 py-1 font-serif uppercase">&gt; Hello World!</p>
                  <h1 className="md:text-6xl text-4xl font-bold my-1">Hey, I&apos;m <span className=" font-semibold text-blue-500">Kunal Nasa</span></h1>
                  <h3 className="md:text-2xl text-xl font-bold my-5">I am <TypingAnimation /></h3>
              </div>
              <div>
                    <Image width={150} height={150} src="/Images/HelloBitmoji.webp" alt="" />
              </div>
            </div>
            <h3 className='text-2xl font-semibold text-blue-500 my-2'>About</h3>
            <p className='text-gray-500'>

              I'm passionate about creating <span className=" text-blue-500 underline font-semibold ">full-stack</span> applications and always eager to explore new opportunities to deliver innovative solutions and make a meaningful impact. Currently, I'm a third-year B.Tech student at <span className='text-blue-500 underline font-semibold '>USICT (GGSIPU Main Campus)</span>, with a strong interest in web development and technology. I specialize in building user-friendly applications using <span className='text-blue-500 underline font-semibold '>Next.js and the MERN stack</span>. <br/> <br/>
              I'm <span className='text-blue-500 underline font-semibold '>actively looking for opportunities</span> to gain valuable industry experience and apply my skills in real-world settings. I'm excited to learn from professionals in the field and contribute to meaningful projects. My commitment to continuous learning drives me to tackle complex challenges and develop both my technical and soft skills, preparing me for a successful career in technology.
            </p>

          </div>
  )
}

export default AboutMe
