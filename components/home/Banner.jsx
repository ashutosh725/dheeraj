import Image from 'next/image'
import React from 'react'
import Banners from '../../public/banner.png'
import Link from 'next/link'

const Banner = () => {
  return (
    <div className='py-20'>
    <div className='container mx-auto'>
        <div className=''>
            <div className='bg-gradient-to-r from-blue-500 to-blue-500 via-black-28 text-white  p-8 flex flex-col md:flex-row justify-center items-center rounded-md  gap-5 md:gap-0'>
              <div className='md:w-[60%] w-full flex flex-col md:justify-start md:items-start justify-center items-center gap-5'>
                 <h2 className='lg:text-[32px] text-[22px] font-bold text-center md:text-start tracking-wide '>Unlock Clarity Unveiling Transparent Costs for Web App Development Services</h2> 
                 <p className='text-[16px] text-center md:text-start  tracking-wide'>Reach out to Trackonweb to get a precise cost estimation for your project.</p>
                 <Link href={'/contact'} className="hover:text-white border hover:bg-transparent border-white bg-white text-[#0588b0] duration-500 transition-all font-medium shadow-md rounded-md lg:text-[16px] text-[12px] px-8 py-3 text-center flex justify-center items-start uppercase tracking-wide">Schedule a Call Today!  </Link>
              </div>
              <div className='md:w-[40%] w-full'>
               <div>
               <Image src={Banners} alt='' className='banner'/>
               </div>
              </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner
