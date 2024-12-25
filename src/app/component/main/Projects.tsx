import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-auto flex flex-col md:flex-row gap-10 px-10 cursor-pointer">
        <Link
        href={"https://www.linkedin.com/in/hafiz-ali-ahmed-9537b4292"}>
        <ProjectCard
          src="/project2.png"
          title="Modern Next.js Portfolio"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
          </Link>
        <ProjectCard
          src="/project3.png"
          title="Interactive Website Cards"
          description="Photo Album | Next.js | TypeScript | Tailwind CSS | Shadcn UI | Cloudinary"
 
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Website"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </div>
    </div>
  );
};

export default Projects;
