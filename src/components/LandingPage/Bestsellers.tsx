// var Carousel = require('react-responsive-carousel').Carousel;
"use client";
import Image from "next/image";
import ReactCarousel from "../ReactCarousel";

const Bestsellers = () => {
  const bestSellers = [
    "/assets/images/paranormal_whispers.webp",
    "/assets/images/summer_fireflies.webp",
    "/assets/images/paranormal_whispers.webp",
    "/assets/images/summer_fireflies.webp",
    "/assets/images/paranormal_whispers.webp",
    "/assets/images/summer_fireflies.webp",
    "/assets/images/paranormal_whispers.webp",
    "/assets/images/summer_fireflies.webp",
  ];
  return (
    <div className="bg-[#799299] px-20 py-5 flex flex-col items-center">
      <h1 className="text-[#DBDBDB] text-[24px] font-bold">
        Wingless Dreamer Publisher
      </h1>
      <p className="text-[47px] font-bold text-white">BESTSELLERS</p>
      <div className="h-1 bg-[#A2C2CC] w-8 my-6" />
      <ReactCarousel
        showArrows={true}
        onChange={(e) => console.log(e)}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        {bestSellers.map((item, i) => (
          <div
            className="bg-[#799299] flex flex-col items-center px-5 mx-2"
            key={i}
          >
            {/* <div className="h-[264px]"> */}
            <Image
              src={item}
              alt="Picture of the book"
              height={264}
              width={175}
            />
            {/* </div> */}
            <div className="mt-2">
              <button className="rounded-[5px] bg-[#313131] px-2.5 py-3 flex items-center">
                <p className="text-xs text-white">Buy now at Amazon</p>
              </button>
            </div>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

export default Bestsellers;
