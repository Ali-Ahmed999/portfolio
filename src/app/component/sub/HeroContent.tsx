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
      className="flex flex-col md:flex-row items-center justify-center px-5 md:px-20 mt-24 md:mt-48 w-full z-[20] gap-0 md:gap-0"
    >
      {/* Left Content */}
      <div className="h-full w-full flex flex-col gap-4 md:gap-5 justify-center m-auto text-center md:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mx-auto md:mx-0"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[11px] md:text-[13px]">
            Agentic AI Developer & Educator Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-4 md:mt-6 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-[600px] w-auto h-auto leading-tight"
        >
          <span>
            Building
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Autonomous AI{" "}
            </span>
            Systems That Think Ahead
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-xs sm:text-sm md:text-md lg:text-lg text-gray-400 my-3 md:my-5 max-w-[600px] leading-relaxed"
        > 
          I&apos;m Hafiz Ali Ahmed, an Agentic AI Developer, Educator at Governor Sindh GenAI Initiative, and Co-Founder at Functions Global. I architect autonomous AI agents and calling systems with OpenAI Agent SDK, LangChain, n8n, and LangGraph2AI—intelligent systems that don&apos;t just respond, but reason, decide, and act independently.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mx-auto md:mx-0 hover:scale-105 transition-transform text-sm md:text-base"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Right Content (Image Section - Desktop & Tablet) */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center hidden sm:flex mt-10 sm:mt-0"
      >
        <div className="relative flex justify-center items-center">
          {/* Gradient Background Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          {/* Image Container with Gradient Border */}
          <div className="relative p-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-purple-500 rounded-full">
            <div className="bg-[#030014] rounded-full p-2">
              <Image
                src="/portfoliopicture.png"
                alt="Hafiz Ali Ahmed - Agentic AI Developer"
                height={420}
                width={420}
                className="rounded-full shadow-2xl object-cover w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px]"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;

