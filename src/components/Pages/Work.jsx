import React from "react";
import Heading from "../Global/Heading";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import Template from "./Template ";
import TempImg from '../../assets/Work/Image.png'
import TempImg2 from '../../assets/Work/Image2.png'
import TempImg3 from '../../assets/Work/Image3.png'
import TempImg4 from '../../assets/Work/Image4.png'
import TempImg5 from '../../assets/Work/Image5.png'
import TempImg6 from '../../assets/Work/Image6.png'
import Button from "../Global/Button";

const Work = () => {
  return (
    <>
      <div className="bg-[#F4F6FC]">
        <div className="container py-32">
          <div className="flex flex-col items-center">
            <span className="text-[16px] font-medium leading-7 tex-[#282938] opacity-70">
              What we created
            </span>
            <Heading Heading={"What we created"} />
            <div className="mt-6 flex flex-col items-center">
              <p className="text-[16px] font-medium leading-7 tex-[#282938] opacity-70">
                We help teams create great digital products by providing them
                with tools and technology
              </p>
              <p className="text-[16px] font-medium leading-7 tex-[#282938] opacity-70">
                to make the design-to-code process universally accessible.
              </p>
            </div>

            <div className=" flex gap-9 mt-7">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-[#ffffff]  hover:scale-110 hover:bg-black  hover:text-white transition duration-300"
              >
                <FaFacebookF className="text-lg" />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-[#ffffff] hover:scale-110 hover:bg-black hover:text-white transition duration-300"
              >
                <FaTwitter className="text-lg" />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-[#ffffff] hover:scale-110 hover:bg-black hover:text-white transition duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-[#ffffff] hover:scale-110 hover:bg-black hover:text-white transition duration-300"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          <div className="py-24">
            <div className="flex flex-col items-center">
              <ul className="flex gap-8 text-[16px] font-medium leading-7 tex-[#282938] opacity-70">
                <li className="hover:text-[#2405F2] cursor-pointer">All</li>
                <li className="hover:text-[#2405F2] cursor-pointer">UI Design</li>
                <li className="hover:text-[#2405F2] cursor-pointer">Webflow Design</li>
                <li className="hover:text-[#2405F2] cursor-pointer">Figma Design</li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 ">
                <Template
                src={TempImg}
                h1={"Template 1"}
                p={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."}
                />
                <Template
                src={TempImg2}
                h1={"Template 2"}
                p={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."}
                />
                <Template
                src={TempImg3}
                h1={"Template 3"}
                p={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."}
                />
                <Template
                src={TempImg4}
                h1={"Template 4"}
                p={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."}
                />
                <Template
                src={TempImg5}
                h1={"Template 5"}
                p={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."}
                />
                <Template
                src={TempImg6}
                h1={"Template 6"}
                p={"Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle."}
                />
            </div>
          </div>
          <div className="flex flex-col items-center py-32">
            <Heading Heading={"Let's build something great together"} />
            <Heading Heading={"together"} />
            <div className="mt-5 mb-10 flex flex-col items-center">
              <p className="text-[16px] font-medium leading-7 tex-[#282938] opacity-70">
                Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies 
              </p>
              <p className="text-[16px] font-medium leading-7 tex-[#282938] opacity-70">
                nec dolor sit amet, scelerisque cursus purus.
              </p>
            </div>
            <Button className={'border-none !bg-[#FCD980]'}>Contact Us</Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Work;
