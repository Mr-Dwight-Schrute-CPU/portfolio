// src/components/Card.tsx
'use client';
import React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSpring, animated } from '@react-spring/web';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
// import Image from 'next/image';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  githubUrl: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, githubUrl }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  // const springProps = useSpring({
  //   scale: isHovered ? 1.05 : 1,
  //   config: { tension: 300, friction: 10 },
  // });

  return (
    <animated.div
      style={{
        transform: isHovered ? 'scale(1.05) rotate(2deg)' : 'scale(1) rotate(1deg)',
        borderRadius: '8px',
        border: '2px solid gray',
        overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative', // For positioning the GitHub icon
        height: '15rem',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image width={70} height={70} src = {imageUrl} alt={title} className="p-2 rounded-full object-cover" />
      <div className="p-4 overflow-auto">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className='overflow-auto text-sm'>{description}</p>
      </div>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-2xl hover:opacity-75 transition-opacity duration-200"
      >
        <FaGithub />
      </a>
    </animated.div>
  );
};

export default Card;
