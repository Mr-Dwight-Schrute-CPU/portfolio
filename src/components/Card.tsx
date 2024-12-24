'use client';
import React from 'react';
import { animated, useSpring } from '@react-spring/web';
import {FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
  githubUrl: string;
  liveUrl?: string; // Optional field for live link
}

const Card: React.FC<CardProps> = ({ imageUrl, title, description, githubUrl, liveUrl }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const router = useRouter();

  const animationProps = useSpring({
    transform: isHovered ? 'scale(1.05) rotate(-2deg)' : 'scale(1) rotate(0deg)',
    config: { duration: 300 }, // Smooth transition
  });

  return (
    <animated.div
      style={{
        ...animationProps,
        borderRadius: '8px',
        border: '2px solid gray',
        overflow: 'hidden',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
        position: 'relative',
        height: 'auto', // Adjusts to content
        maxWidth: '350px', // Constrains the card's width for responsiveness
        margin: 'auto', // Centers the card
        cursor: 'pointer', // Adds pointer cursor on hover
      }}
      onClick={() => {
        router.replace(githubUrl);
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Image with an overlay */}
        <Image
          width={350}
          height={200}
          src={imageUrl}
          alt={title}
          className={`object-cover w-full h-48 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-70'
          }`}
        />
        {/* Overlay Layer */}
        {!isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm overflow-auto">{description}</p>
      </div>

      <div className="absolute top-4 right-4 flex gap-3 z-10">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:opacity-75 transition-opacity duration-200"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className=" hover:opacity-75 transition-opacity duration-200 text-2xl "
        >
          <FaGithub />
        </a>
      </div>
    </animated.div>
  );
};

export default Card;
