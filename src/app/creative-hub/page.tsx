import BlogCard from "@/components/Blogs/BlogCard";
import Image from "next/image";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const CreativeHub = () => {
  const blogs = [
    {
      title: "Editor Interview: Wingless Dreamer Writing Competitions",
      time: "19 hours agao",
      imgSrc: "/assets/images/contactus1.webp",
    },
    {
      title: "Land or Language: Three Indian Narratives in English",
      time: "June 29",
      imgSrc: "/assets/images/contactus1.webp",
    },
    {
      title:
        "From Oresteia to Hamlet: Greek and Roman Influences on English Literature",
      time: "June 15",
      imgSrc: "/assets/images/contactus1.webp",
    },
  ];
  const instagramData = [
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
    {
      imgSrc: "/assets/images/instagram1.jpeg",
    },
  ];
  return (
    <div className="flex flex-col items-center px-6">
      <div className="my-10 px-20">
        <div className="flex flex-col items-center bg-wd-green px-20 py-5">
          <p className="text-[47px] text-white mt-3 playfair font-bold">
            CREATIVE HUB
          </p>
        </div>
      </div>
      <div className="w-full mb-10">
        <div className="border-t-4 border-dashed border-white mx-20" />
      </div>
      <div className="bg-opacity-[0.58] bg-wd-green w-full h-[94px] flex items-center justify-center">
        <p className="text-white text-[50px] font-bold sacramento">
          Hello beautiful dreamers
        </p>
      </div>
      <div className="bg-opacity-[0.66] bg-[#A2C2CC] w-full flex items-center justify-center mt-5 px-8 pt-10 pb-14">
        <div className="flex flex-wrap xl:flex-nowrap w-full">
          <div className="flex-1">
            <iframe
              width="921"
              height="518"
              src="https://www.youtube.com/embed/S1X3DO7aUmU"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="ml-5 mt-5">
            <p className="bg-wd-green bg-opacity-60 flex items-center text-xl text-white py-0.5 px-2">
              Latest Blogs
            </p>
            <div className="flex flex-col space-y-3 mt-5">
              {blogs.map((blog, index) => (
                <div key={index}>
                  <BlogCard blog={blog} className="h-[140px]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 flex w-full">
        <div className="border-t-4 border-dashed max-w-[875px] flex items-center space-x-10 w-full mt-10">
          <div className="bg-opacity-[0.66] bg-[#A2C2CC] px-4 py-6 w-full relative mt-5">
            <div className="bg-white border-2 border-b-4 border-[#49D6D6] flex items-center justify-center relative h-[96px]">
              <p className="text-wd-green">Weekly&apos;s writing prompt</p>
              <div className="absolute top-0 right-0">
                <div className="h-[96px] flex items-center justify-center pr-3">
                  <BsChevronDown className={`h-4 w-4 text-wd-green`} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-20 px-20">
              <p className="text-black sacramento text-[50px] font-bold">
                It&apos;s time for your daily practice. Take out your writing
                journal and chop! chop!{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-24 w-full flex-1">
          <div className="flex flex-col w-full">
            <p className="bg-wd-green bg-opacity-60 flex items-center text-xl text-white py-0.5 px-2 w-full">
              Instagram
            </p>
            <div className="mt-10">
              <div className="bg-white grid grid-cols-12 w-full">
                {instagramData.map((data, index) => (
                  <div key={index} className="col-span-4 w-full h-full p-2">
                    <Image
                      src={data.imgSrc}
                      alt="instagram"
                      width={120}
                      height={70}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-10 flex w-full">
        <div className="max-w-[875px] flex items-center space-x-10 w-full mt-10">
          <div className="bg-opacity-[0.66] bg-[#A2C2CC] px-4 py-6 w-full relative mt-5">
            <div className="bg-white border-2 border-b-4 border-[#49D6D6] flex items-center justify-center relative h-[96px]">
              <p className="text-wd-green">Weekly&apos;s writing prompt</p>
              <div className="absolute top-0 right-0">
                <div className="h-[96px] flex items-center justify-center pr-3">
                  <BsChevronDown className={`h-4 w-4 text-wd-green`} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center my-20 px-20">
              <p className="text-black sacramento text-[50px] font-bold">
                It&apos;s time for your daily practice. Take out your writing
                journal and chop! chop!{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="ml-10 mt-24 w-full flex-1">
          <div className="flex flex-col w-full">
            <p className="bg-wd-green bg-opacity-60 flex items-center text-xl text-white py-0.5 px-2 w-full">
              Instagram
            </p>
            <div className="mt-10">
              <div className="bg-white grid grid-cols-12 w-full">
                {instagramData.map((data, index) => (
                  <div key={index} className="col-span-4 w-full h-full p-2">
                    <Image
                      src={data.imgSrc}
                      alt="instagram"
                      width={120}
                      height={70}
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeHub;
