"use client";

import React, { FC } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../../utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent: FC = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-48 w-full z-[20]"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start sm:mt-10">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-4xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Providing
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              the best{" "}
            </span>
            project experience
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-md md:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          AI Agents and passionate about AI stuff. Check out my projects and skills.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Right Content (Image Section) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full justify-center items-center hidden md:flex"
      >
        <div className="relative w-[650px] h-[650px]">
          <Image
            src="/main.svg"
            alt="Main background"
            height={450}
            width={450}
            className="absolute top-0 left-0"
          />
          <Image
            src="/mainIcons.svg"
            alt="Icons overlay"
            height={550}
            width={550}
            className="absolute top-0 left-0 opacity-80"
          />
        </div>
      </motion.div>

      {/* Right Content (Mobile - Hidden on larger screens) */}
      <motion.div className="w-full h-full justify-center items-center sm:hidden">
        <div className="relative w-[300px] h-[300px]"></div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

