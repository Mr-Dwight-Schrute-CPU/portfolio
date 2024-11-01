"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return <TypeAnimation sequence={[
        "Full Stack Developer",
        1000,
        "Lifelong Learner",
        1000,
        "Building Engaging User Experiences",
        1000,
        "Exploring New Technologies",
        1000,
      ]}
       wrapper="span" speed={50} className="font-bold font-serif lg:text-3xl text-indigo-500" repeat={Infinity} />;
};

export default TypingAnimation;