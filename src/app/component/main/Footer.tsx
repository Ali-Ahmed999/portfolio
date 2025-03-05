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
    <footer className="w-full h-full text-gray-200 p-4 bg-gray-900">
      <div className="flex flex-col items-center justify-center mx-auto">
        <div className="w-full flex flex-row items-center justify-around flex-wrap gap-4">
          {/* Community Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <h2 className="font-bold text-lg">Community</h2>
            <Link href="https://github.com/Ali-Ahmed999" target="_blank" aria-label="GitHub">
              <p className="flex items-center my-2 hover:text-yellow-400">
                <RxGithubLogo className="mr-2 hover:text-blue-500" />
                Github
              </p>
            </Link>
            <p className="flex items-center my-2">
              <RxDiscordLogo className="mr-2" />
              Discord
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <h2 className="font-bold text-lg">Social Media</h2>
            <p className="flex items-center my-2">
              <RxTwitterLogo className="mr-2" />
              Twitter
            </p>
            <Link
              href="https://www.linkedin.com/in/hafiz-ali-ahmed-9537b4292"
              target="_blank"
              aria-label="LinkedIn"
              className="flex items-center my-2 hover:text-blue-500">
              <RxLinkedinLogo className="mr-2" />
              LinkedIn
            </Link>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] flex flex-col items-center">
            <h2 className="font-bold text-lg">About</h2>
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


