
import Link from 'next/link'
import { IoLocationOutline , IoCallOutline} from "react-icons/io5";

import { FaFacebookF, FaTwitter , FaLinkedinIn, FaInstagram, FaYoutube   } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import React from 'react'
import Image from 'next/image';
import Logo from "../../public/2.png"
const Footer = () => {
  return (
    <div className='bg-blue-500 text-white'>
   <div className='container mx-auto'>
    <div className='flex flex-wrap  lg:flex-row justify-between items-start gap-4 pt-14 pb-8 '>
        <div className='flex flex-1 flex-col justify-center items-start gap-3'>
            <div>
            <Image src={Logo} alt='logo' className='h-24 w-32 object-cover'/>
            </div>
            <h1 className="text-[14px] text-white font-medium tracking-wider">Company,<br/>Training For Success,<br/> Solution For Tomorrow</h1>
            <ul className='flex justify-start items-center gap-2  '>
                <Link href="https://www.facebook.com/trackonweb/" target="_blank" className='p-2 bg-white rounded-full hover:bg-white hover:text-white group'><FaFacebookF  className='text-blue-500 text-[16px] group-hover:text-primary cursor-pointer'/></Link>
                <Link href="https://twitter.com/trackonweb" target="_blank" className='p-2 bg-white rounded-full hover:bg-white hover:text-white group'><FaTwitter  className='text-blue-500 text-[16px] group-hover:text-primary cursor-pointer'/></Link>
                <Link  href="https://www.linkedin.com/in/trackonweb-it-solutions-88134a202/" target="_blank" className='p-2 bg-white rounded-full hover:bg-white hover:text-white group'><FaLinkedinIn  className='text-blue-500 text-[16px] group-hover:text-primary cursor-pointer'/></Link>
                <Link href="https://www.instagram.com/trackonweb/"  target="_blank" className='p-2 bg-white rounded-full hover:bg-white hover:text-white group'><FaInstagram  className='text-blue-500 text-[16px] group-hover:text-primary cursor-pointer'/></Link>
                <Link href={'/'} className='p-2 bg-white rounded-full hover:bg-white hover:text-white group'><FaYoutube   className='text-blue-500 text-[16px] group-hover:text-primary cursor-pointer'/></Link>
            </ul>

        </div>
        <div className='flex flex-1 flex-col justify-center items-start gap-3'>
            <h4 className='text-[24px] font-medium text-white'>Company</h4>
            <ul className='flex flex-col justify-center items-start gap-2'>
                <Link href={'/'} className='text-[14px] text-white hover:text-primary duration-500 '>Home</Link>
                <Link href={'/about'} className='text-[14px] text-white hover:text-primary duration-500 '>About Us</Link>
                <Link href={'/explore-services'} className='text-[14px] text-white hover:text-primary duration-500 '>Services</Link>
                <Link href={'/explore_courses'} className='text-[14px] text-white hover:text-primary duration-500 '>Courses</Link>
                <Link href={'/blog'} className='text-[14px] text-white hover:text-primary duration-500 '>Blog</Link>
                <Link href={'/contact'} className='text-[14px] text-white hover:text-primary duration-500 '>Contact Us</Link>

            </ul>
        </div>
        <div className='flex flex-1 flex-col justify-center items-start gap-3'>
            <h4 className='text-[24px] font-medium text-white'>Services</h4>
            <ul className='flex flex-col justify-center items-start gap-2'>
                <Link href={`/explore-services/web-development`} className='text-[14px] text-white hover:text-primary duration-500'>Web Development</Link>
                <Link href={`/explore-services/graphic-design`} className='text-[14px] text-white hover:text-primary duration-500'>Graphic design</Link>
                <Link href={`/explore-services/digital-marketing`} className='text-[14px] text-white hover:text-primary duration-500'>Digital Marketing</Link>
                <Link href={`/explore-services/web-design`} className='text-[14px] text-white hover:text-primary duration-500'>Web Design</Link>
                <Link href={`/explore-services/mobile-app-development`} className='text-[14px] text-white hover:text-primary duration-500'>Mobile App Development</Link>
                <Link href={`/explore-services/ui-ux`} className='text-[14px] text-white hover:text-primary duration-500'>Ui & Ux</Link>

            </ul>
        </div>
        <div className='flex flex-1 flex-col justify-center items-start gap-4'>
            <h4 className='text-[24px] font-medium text-white'>Contact Info</h4>
           <div className='flex justify-center lg:items-center items-start gap-3'>
           <IoLocationOutline className='text-white text-[30px]'/>
           <span className='text-white'>Bassi, Jaipur, Rajasthan 303301</span>
           </div>
           <div className='flex justify-center items-center gap-3'>
           <AiOutlineMail className='text-white text-[30px]'/>
           <span className='text-white'>company0@gmail.com</span>
           </div>
           <div className='flex justify-center items-center gap-3'>
           <IoCallOutline className='text-white text-[30px]'/>
           <span className='text-white'>+91 123456789</span>
           </div>
        </div>
    </div>
    <hr/>
 <div className='flex flex-col lg:flex-row justify-between lg:items-center items-start py-7 '>
    <span className='text-white'>© Copyright 2024. Dheeraj </span>
    <span className='text-white cursor-pointer '><Link href={'/refund-policy'} >Refund Policy</Link> | <Link href={'/privacy-policy'}>Privacy Policy</Link> | <Link href={'/terms-and-conditions'}>Terms & Conditions</Link></span>
 </div>

   </div>
    </div>
  )
}

export default Footer
