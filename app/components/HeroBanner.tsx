"use client";
import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { CarouselProps } from "react-responsive-carousel/lib/ts/components/Carousel/types";
import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
function HeroBanner() {
  return (
    <div className=" relative text-white texct-[20px] w-full max-w-[1360px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        renderArrowNext={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className=" absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text:lg" />
          </div>
        )}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className=" absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text:lg rotate-180" />
          </div>
        )}
      >
        <div>
          <Image
            height={500}
            width={800}
            alt="slide Image 1"
            src="/slide-1.png"
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
        <div>
          <Image
            alt="slide Image 1"
            src="/slide-1.png"
            height={500}
            width={800}
          />
          <div className="px-[15px] md:px-[40px] py-[10px] md:py-[25px] font-oswald bg-white absolute bottom-[25px] md:bottom-[75px] left-0 text-black/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            Shop Now
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default HeroBanner;
