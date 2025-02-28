"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return <TypeAnimation sequence={[
        "a Full Stack Developer",
        1000,
        "a Lifelong Learner",
        1000,
        "Open to Work!!!",
        1000,
      ]}
       wrapper="span" speed={50} className="font-bold  lg:text-2xl text-green-500" repeat={Infinity} />;
};

export default TypingAnimation;