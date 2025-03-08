import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { RxGithubLogo } from "react-icons/rx";
import { FiChevronRight } from "react-icons/fi"; // Prominent arrow icon
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 relative" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      {/* Grid layout for project cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-5 sm:px-10 justify-center w-full">
        {/* Project 1 */}
        <div className="relative flex flex-col items-center">
          <ProjectCard
            src="/project2.png"
            title="Next.js Portfolio"
            description="Portfolio Website | Next.js | TypeScript | Tailwind CSS | Shadcn UI"
          />
          <div className="absolute top-2 left-2 z-10">
            <Link href="https://github.com/Ali-Ahmed999" target="_blank">
              <RxGithubLogo className="text-3xl text-white hover:text-gray-400 cursor-pointer" />
            </Link>
          </div>
          <div className="absolute top-2 right-2 z-10">
            <Link href="https://my-portfolio-project-vert.vercel.app/" target="_blank">
              <FiChevronRight className="text-4xl text-white hover:text-gray-400 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Project 2 */}
        <div className="relative flex flex-col items-center">
          <ProjectCard
            src="/project3.png"
            title="Photo Gallery App"
            description="Photo Album | Next.js | TypeScript | Tailwind CSS | Shadcn UI | Cloudinary"
          />
          <div className="absolute top-2 left-2 z-10">
            <Link href="https://github.com/Ali-Ahmed999/cloudinary-photo-gallery-app" target="_blank">
              <RxGithubLogo className="text-3xl text-white hover:text-gray-400 cursor-pointer" />
            </Link>
          </div>
          <div className="absolute top-2 right-2 z-10">
            <Link href="https://cloudinary-photo-gallery-88ashyb70-hafiz-ali-ahmeds-projects.vercel.app/gallery" target="_blank">
              <FiChevronRight className="text-4xl text-white hover:text-gray-400 cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Project 3 */}
        <div className="relative flex flex-col items-center">
          <ProjectCard
            src="/ecommerce.png"
            title="E-commerce Website"
            description="E-commerce Website | Next.js | TypeScript | Tailwind CSS | Shadcn UI"
          />
          <div className="absolute top-2 left-2 z-10">
            <Link href="https://github.com/Ali-Ahmed999" target="_blank">
              <RxGithubLogo className="text-3xl text-gray-400 hover:text-gray-600 cursor-pointer" />
            </Link>
          </div>
          <div className="absolute top-2 right-2 z-10">
            <Link href="https://hackathon-beryl.vercel.app/" target="_blank">
              <FiChevronRight className="text-4xl text-gray-400 hover:text-gray-600 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
