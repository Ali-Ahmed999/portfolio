import React from "react";
import Link from "next/link";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
const Footer = () => {
  return (
    <footer className="w-full h-full text-gray-200 p-6 shadow-lg border shadow-[#2A0E61]/50 bg-[#03441417] border-[#2A0E61] backdrop-blur-md">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full flex flex-col sm:flex-row items-center justify-between sm:justify-around flex-wrap gap-6 sm:gap-8">
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <h2 className="font-bold text-lg mb-2">Community</h2>
            <Link href="https://github.com/Ali-Ahmed999" target="_blank" aria-label="GitHub">
              <p className="flex items-center my-2 hover:text-gray-400">
                <RxGithubLogo className="mr-2 hover:text-gray-500 text-xl sm:text-2xl" />
                Github
              </p>
            </Link>
            <Link
              href="https://discord.com/channels/790484092772548613/1190583666548674570"
              target="_blank"
              aria-label="Discord"
            >
              <p className="flex items-center my-2 hover:text-purple-800">
                <RxDiscordLogo className="mr-2 hover:text-purple-800 text-xl sm:text-2xl" />
                Discord
              </p>
            </Link>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <h2 className="font-bold text-lg mb-2">Social Media</h2>
            <Link
              href="https://x.com/HafizAliAhmed9"
              target="_blank"
              aria-label="Twitter"
              className="flex items-center my-2 hover:text-gray-400"
            >
              <RxTwitterLogo className="mr-2 text-xl sm:text-2xl" />
              Twitter
            </Link>
            <Link
              href="https://www.linkedin.com/in/hafiz-ali-ahmed-9537b4292"
              target="_blank"
              aria-label="LinkedIn"
              className="flex items-center my-2 hover:text-blue-500"
            >
              <RxLinkedinLogo className="mr-2 text-xl sm:text-2xl" />
              LinkedIn
            </Link>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center mb-6 sm:mb-0">
            <h2 className="font-bold text-lg mb-2">About</h2>
            <p className="my-2">Contact Us</p>
            <p className="my-2">hafizaliahmed2004@gmail.com</p>
          </div>
        </div>

        {/* Footer Bottom Text */}
        <div className="mt-4 text-center text-sm text-gray-400">
          &copy; Hafiz Ali Ahmed 2024. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
