import React from 'react'
import { Badge } from './ui/badge';
const MySkills = () => {
    const skills = [
        { name: "TypeScript" },
        { name: "MongoDB" },
        { name: "Node.js" },
        { name: "GitHub" },
        { name: "React" },
        { name: "Express" },
        { name: "JavaScript" },
        { name: "Git" },
        { name: "C++" },
        { name: "Next.js" },
        { name: "PostgreSQL" },
        { name: "Zod" },
        { name: "Bootstrap" },
        { name: "TailwindCSS" },
        { name: "Docker" },
        { name: "C" },
        { name: "Problem Solving" },
    ];
    return (
        <div className="md:my-14 my-5 w-full">
            <h2 className="text-2xl my-2 font-semibold">
                Skills 
            </h2>
            <div className="flex gap-2 text-xl flex-wrap">
                {skills.map((skill) => (
                        <div
                            key={skill.name}
                        >
                            <Badge>{skill.name}</Badge>
                        </div>
                ))}
                
            </div>
        </div>

    )
}

export default MySkills
