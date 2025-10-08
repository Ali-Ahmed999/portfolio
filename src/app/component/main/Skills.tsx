import {
  Backend_skill,
  Frontend_skill,
  Skill_data,
  AI_skill,
} from "../../../../Constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />

      {/* AI & ML Skills Row - Featured */}
      <div className="w-full mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Agentic AI & Machine Learning
          </span>
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {AI_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Full Stack Development Skills */}
      <div className="w-full mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-center mb-6 text-gray-300">
          Full Stack Development
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Frontend Skills Row */}
      <div className="w-full mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-center mb-4 text-gray-400">
          Frontend Technologies
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {Frontend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Backend Skills Row */}
      <div className="w-full mb-6">
        <h3 className="text-lg md:text-xl font-semibold text-center mb-4 text-gray-400">
          Backend & DevOps
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Background Video */}
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-50 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="metadata"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;

