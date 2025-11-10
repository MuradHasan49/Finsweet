import React from "react";
import Button from "../Global/Button";
import ArrowBTN from "./ArrowBTN";
import BannerImg from "../../assets/BannerImg/Illustration.svg";

import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <>
      <div className="bg-[#1C1E53] py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-15">
            <div className="flex flex-col items-center md:items-start  lg:w-[582px] h-full ">
              <h1 className="text-[54px] font-semibold leading-[74px] text-white">
                Building stellar websites for early startups
              </h1>
              <p className="opacity-70 mt-6 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </p>
              <div className=" mt-12">
                <div className="flex items-center gap-10">
                  <Button className="bg-[#FCD980] ">View our work</Button>
                  <Link to="/Pricing"><ArrowBTN>View Pricing</ArrowBTN></Link>
                </div>
              </div>
            </div>
            <div className="">
              <img className="w-full h-full" src={BannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
