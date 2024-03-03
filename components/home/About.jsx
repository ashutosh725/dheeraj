import Image from "next/image";
import React from "react";
import AboutUs from "../../public/about.png"

const About = () => {
  return (
    <div className=" ">
    <div className="container mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center  py-20 gap-8">
        <div className="lg:w-1/2 w-full">
          <Image
            src={AboutUs}
          
            alt="about us"
            className="object-contain"
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col justify-center items-start lg:gap-3 gap-3">
          <p className=" text-blue-500 text-center lg:text-[20px] text-[18px] font-medium uppercase">
            About Us
          </p>
          <h3 className="text-[#2f327d] lg:text-[34px] text-[22px] font-[700]">
            We Provide Quality Business & Smart Solution
          </h3>
          <span className="lg:text-[16px] text-[14px] text-[#6d6d6d] font-medium leading-6">
            Established 2020, company is a leading software development
            company committed to delivering high-quality, tailor-made
            solutions that meet the diverse needs of our clients. With a team
            of highly skilled developers, designers, and technology
            enthusiasts, we specialize in web development and mobile app
            development.
          </span>
          <span className="lg:text-[16px] text-[14px]  text-[#6d6d6d] font-medium leading-6">
            At company, we believe in a collaborative approach, working
            closely with our clients to understand their vision and
            objectives. We leverage the latest tools and technologies combined
            with industry best practices to create scalable, user-friendly,
            and future-proof solutions. Our iterative development process
            ensures transparency and flexibility, allowing us to adapt to
            evolving project requirements seamlessly.
          </span>
        </div>
      </div>
    </div>
  </div>
  );
};

export default About;