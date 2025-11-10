import React from "react";
import Button from "../Global/Button";
import BannerImg from "../../assets/Features/Feature Hero Illustration.svg";

import { Link } from "react-router-dom";

import Heading from "../Global/Heading";

import Box from "../Features/Box";
import iocn from "../../assets/Features/Icon.png";
import iocn6 from "../../assets/Features/Icon6.png";
import iocn3 from "../../assets/Features/Icon3.png";
import Dlogo from "../../assets/AboutUs/Logo Section.png";

import BlogPhoto from "../../assets/Features/man-explaining-problems-to-faceless-psychologist-7176030.png";
import BlogPhoto2 from "../../assets/Features/photo-of-man-holding-a-book-927022.png";
import BlogPhoto3 from "../../assets/Features/a-man-working-in-a-call-center-8867431.png";
import BlogPhoto4 from "../../assets/Features/person-using-macbook-pro-3861964.png";
import Questions from "../questions/Questions";

const Features = () => {
  return (
    <>
      <div className="bg-[#1C1E53] py-16 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid md:grid-cols-2 gap-15">
            <div className="flex flex-col items-center md:items-start  lg:w-[582px] h-full ">
              <h1 className="text-[54px] font-semibold leading-[74px] text-white">
                All the features you need
              </h1>
              <p className="opacity-70 mt-6 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className=" mt-12">
                <div className="flex items-center gap-10">
                  <Link to="/Pricing">
                    <Button className="bg-[#FCD980] ">View Pricing</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <img className="w-full h-full" src={BannerImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-32">
        <div className=" mb-24">
          <img src={Dlogo} alt="" />
        </div>
        <div className="flex flex-col items-center">
          <Heading Heading={"The benefits of working "} />
          <Heading Heading={"with our team "} />
        </div>
        <div className="flex flex-col gap-10 items-center md:flex-row  py-12">
          <Box
            className={"bg-blue-100/40"}
            icon={iocn6}
            h1={"Customize with ease"}
            p={
              "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            }
          />
          <Box
            className={"bg-blue-100/40"}
            icon={iocn3}
            h1={"Perfectly Responsive"}
            p={
              "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            }
          />
          <Box
            className={"bg-blue-100/40"}
            icon={iocn}
            h1={"Friendly Support"}
            p={
              "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi. "
            }
          />
        </div>

        <div className="">
          <div className="flex flex-col items-center gap-8 py-32 md:flex md:items-start md:flex-row justify-between">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-lg mb-2 leading-8  text-[#282938]">
                Use Client-first
              </span>
              <div className=" md:w-[595px]">
                <Heading
                  Heading={
                    "Top agencies and freelancers around the world use Client-first "
                  }
                />
              </div>
              <p className="md:w-[623px] mt-8 text-[16px] leading-7 text-[#282938] opacity-70 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
            <div className="">
              <img src={BlogPhoto} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#EEF4FA]">
        <div className="container">
          <div className="">
            <div className="flex flex-col items-center gap-8 py-32 md:flex md:items-start md:flex-row justify-between">
              <div className="">
                <img src={BlogPhoto2} alt="" />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg mb-2 leading-8  text-[#282938]">
                  Free Revision Rounds
                </span>
                <div className=" md:w-[595px]">
                  <Heading
                    Heading={
                      "Get free Revisions and one week of free maintenance"
                    }
                  />
                </div>
                <p className="md:w-[623px] mt-8 text-[16px] leading-7 text-[#282938] opacity-70 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-32">
        <div className="flex flex-col items-center gap-8 py-32 md:flex md:items-start md:flex-row justify-between">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg mb-2 leading-8  text-[#282938]">
              24/7 Support
            </span>
            <div className=" md:w-[595px]">
              <Heading
                Heading={
                  "Working with us, you will be getting 24/7 priority support"
                }
              />
            </div>
            <p className="md:w-[623px] mt-8 text-[16px] leading-7 text-[#282938] opacity-70 ">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>
          <div className="">
            <img src={BlogPhoto3} alt="" />
          </div>
        </div>
      </div>


      <div className="bg-[#FCD980]/10">
        <div className="container">
          <div className="">
            <div className="flex flex-col items-center gap-8 py-32 md:flex md:items-start md:flex-row justify-between">
              <div className="">
                <img src={BlogPhoto4} alt="" />
              </div>
              <div className="flex flex-col items-center md:items-start">
                <span className="text-lg mb-2 leading-8  text-[#282938]">
                  Quick Delivery
                </span>
                <div className=" md:w-[595px]">
                  <Heading
                    Heading={
                      "Guranteed 1 week delivery for standard five pager website"
                    }
                  />
                </div>
                <p className="md:w-[623px] mt-8 text-[16px] leading-7 text-[#282938] opacity-70 ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>

        <Questions/>
    </>
  );
};

export default Features;
