// import React from "react";

// import {
//     RxDiscordLogo,
//     RxGithubLogo,
//     RxInstagramLogo,
//     RxTwitterLogo,
//     RxLinkedinLogo,
// } from "react-icons/rx";

// import Link from "next/link";

// const Footer = () => {
//     return (
//         <div className="w-full h-full text-gray-200 p-[15px] ">
//             <div className="w-full flex flex-col items-center justify-center m-auto">
//                 <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


//                     <div className="min-w-[200px] h-auto flex flex-col items-center justify-start cursor-pointer">
//                         <div className="font-bold text-[16px]">Community</div>
//                         <Link 
//                         href={"https://github.com/Ali-Ahmed999"}>
//                         <p className="flex flex-row items-center my-[15px] cursor-pointer hover:text-yellow-400">
//                             <RxGithubLogo className="hover:text-blue-500"  />
//                             <span className="text-[15px] ml-[6px] hover:text-yellow-400">Github</span>
//                         </p>
//                         </Link>
//                         <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                             <RxDiscordLogo />
//                             <span className="text-[15px] ml-[6px]">Discord</span>
//                         </p>
//                     </div>
//                     <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                         <div className="font-bold text-[16px]">Social Media</div>

//                         <p className="flex flex-row items-center my-[15px] cursor-pointer">
//                             <RxTwitterLogo />
//                             <span className="text-[15px] ml-[6px] cursor-pointer">Twitter</span>
//                         </p>
//                         <Link
//                             target="_blank"
//                             href={"https://www.linkedin.com/in/hafiz-ali-ahmed-9537b4292"}
//                             className="flex flex-row items-center my-[15px] cursor-pointer">
//                                 <RxLinkedinLogo className="hover:text-blue-500 cursor-pointer" />
//                                 <div className="text-[15px] ml-[6px] hover:text-blue-500 hover:cursor-pointer">LinkedIn</div>
//                         </Link>
//                          {/* <Link href={"https://www.linkedin.com/in/hafiz-ali-ahmed-9537b4292"}>
//                          <RxLinkedinLogo className="cursor-pointer"/>
//                         </Link> */}
//                     </div>
//                     <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
//                         <div className="font-bold text-[16px]">About</div>
//                         <p className="flex flex-row items-center my-[15px] cursor-pointer">

//                             <span className="text-[15px] ml-[6px]">Contact Us</span>
//                         </p>
//                         <p className="flex flex-row items-center my-[15px] cursor-pointer">

//                             <span className="text-[15px] ml-[6px]">alikhanahmed999@gmail.com</span>
//                         </p>
//                     </div>
//                 </div>
//                 <div className="mb-[20px] text-[15px] text-center">
//                     &copy; Hafiz Ali Ahmed 2024 Inc. All rights reserved
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Footer


import Link from "next/link";
import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full text-gray-200 p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start cursor-pointer">
            <div className="font-bold text-[16px]">Community</div>
            <a
              href="https://github.com/Ali-Ahmed999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo className="hover:text-blue-500" />
              <span className="text-[15px] ml-[6px] hover:text-yellow-400">
                GitHub
              </span>
            </a>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <RxDiscordLogo />
              <span className="text-[15px] ml-[6px]">Discord</span>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
        <Link href={"https://www.linkedin.com/in/hafiz-ali-ahmed-9537b4292"}>
                            <RxLinkedinLogo className="cursor-pointer"/>
                        </Link>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxTwitterLogo className="hover:text-blue-400" />
              <span className="text-[15px] ml-[6px] hover:text-yellow-400">
                Twitter
              </span>
            </a>
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Contact Us</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                alikhanahmed999@gmail.com
              </span>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mb-[20px] text-[15px] text-center">
          &copy; Hafiz Ali Ahmed 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
    </div>
  );

};

export default Footer;
