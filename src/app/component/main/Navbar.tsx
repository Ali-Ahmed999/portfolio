import Image from "next/image";
import React from "react";
import { Socials } from "../../../../Constants";
import Link from "next/link";
import { Margarine } from "next/font/google";
import { RxLinkedinLogo } from "react-icons/rx";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex items-center justify-between m-auto px-[10px]">
        <Link
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer hover:animate-slowspin w-[100px]"
            style={{ marginLeft: '-2.5rem'}}
          />

          <span className="font-bold ml-3 text-gray-300 flex-row items-center text-base text-[20px] hidden sm:block">
            Hafiz Ali Ahmed
          </span>
        </Link>
        <div className="w-[600px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
        <Link href={"https://www.linkedin.com/in/hafiz-ali-ahmed-9537b4292"}>
                            <RxLinkedinLogo className="cursor-pointer"/>
                        </Link>
            <Link href={"#about-me"} className="cursor-pointer">
              About me
            </Link>
            <Link href={"#skills"} className="cursor-pointer">
              Skills
            </Link>
            <Link href={"#projects"} className="cursor-pointer">
              Projects
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={34}
              height={34}
              className="w-[30px] hidden md:block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
