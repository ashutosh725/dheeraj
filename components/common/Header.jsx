"use client"
import Image from "next/image";
import { useState,useEffect } from "react";
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNav from "./MobileNav";
import Logo from "../../public/2.png"




const Header = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
 
 

  
 

  const toggleMobileNav = () => {
    setMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <div className="h-">
      <div className="container  mx-auto ">
      <div className='flex justify-between items-center h-20'>
    <div>
    <Image src={Logo} alt="logo" className=" w-32 h-18 object-cover"/>
    </div>
    <ul className='flex justify-center items-center gap-6'>
        <li><Link href={'/'} className='hidden lg:flex  text-[15px] font-Roboto tracking-wide font-[400]  hover:text-primary duration-300 transition-all'>Home</Link></li>
        <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[400] hover:text-primary duration-300 transition-all'>About Us</Link></li>
      <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[400] hover:text-primary duration-300 transition-all'>Services</Link></li>
       <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[400] hover:text-primary duration-300 transition-all'>Blog </Link></li>
      
      <li><Link href={'/'} className='hidden lg:flex text-[15px] font-Roboto tracking-wide font-[400] hover:text-primary duration-300 transition-all'>Contact Us</Link></li>
      <Link
                href={"/contact"}
                class="hover:text-primary border hover:bg-transparent hover:border-primary border-white bg-primary text-white duration-500 transition-all font-medium shadow-md rounded-md lg:text-[16px] text-[12px] px-6 py-3 text-center flex justify-center items-start "
              >
              Get In Touch
              </Link>
              <div className="lg:hidden flex" onClick={toggleMobileNav}>
<GiHamburgerMenu className="text-[28px] cursor-pointer" />
</div>
    </ul>
   
</div>
       
      </div>
      {isMobileNavOpen && <MobileNav onLinkClick={closeMobileNav}/>}

    </div>
  );
};

export default Header;
