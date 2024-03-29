import Image from "next/image";
import Link from "next/link";
import React from "react";
import WebDevs from "../../public/webdevs.png"

const HeroSection = () => {
  return (
    <div>
      <div className={`bg-gradient-to-r h-full  from-blue-500 to-blue-500 via-black-28  `}>
      <div className="container mx-auto ">
       <div className="">
       <div className="flex  justify-between gap-7 items-center w-full h-full pt-28 pb-20 ">
            <div className=" md:w-1/2 w-full flex flex-col justify-start lg:items-start items-center  gap-4">
            <span className="text-white text-center  lg:text-start  lg:text-[32px] text-[22px] font-bold tracking-wider ">
              Elevating Your Online Presence Through Expert Web Development
            </span>
            <span className="text-white text-center lg:text-start lg:text-[17px] text-[14px] mt-3">
              {`Transform your online presence with Trackonweb IT Solution's
              expert web development services. Our skilled team of web
              developers is committed to turning your ideas into reality,
              propelling your business to new heights. Realize your dreams with
              Trackonweb by your side!`}
            </span>
          <div className="mt-7 flex justify-start lg:items-start items-center">
          <Link
                href={"/contact"}
                class="hover:text-white border hover:bg-transparent border-white bg-white text-[#0588b0] duration-500 transition-all font-medium shadow-md rounded-md lg:text-[16px] text-[12px] px-8 py-3 text-center flex justify-center items-start uppercase tracking-wide"
              >
              {`let's connect`}
              </Link>
          </div>
            </div>
            <div className=" hidden md:flex w-1/2">
                <div className="">
                <Image
              src={WebDevs}
            
              alt="Web Development "
              className="object-cover"
            />
                </div>
            </div>
        </div>
       </div>
       
      </div>
    </div>
    </div>
  )
}

export default HeroSection
