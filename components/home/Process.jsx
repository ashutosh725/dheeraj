import React from 'react'
import Pro from "../../public/experiences-1.png"
import Image from 'next/image'
const Process = () => {
  return (
    <div className='py-20'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row w-full gap-10'>
           <div className='lg:w-1/2 w-full flex flex-col justify-start items-start gap-4'>
            <h5 className='text-primary font-medium text-[18px]'>OUR PROCESS</h5>
            <h3 className='lg:text-[32px] text-[#2f327d] text-[22px] font-bold '>Over 12 Year Professional Experiences</h3>
            <span className='text-[16px] font-Roboto'>Best Strategic planning dolor sit amet consectetur adipiscing elit. Scelerisque amet odio velit auctor. nam elit nulla eget sodales dui pulvinar. Best Strategic planning dolor sit sectetur morethe Scelerisque amet odio velit eu auctor.</span>
           <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col justify-start items-start gap-2'>
                <h3 className='text-[22px] lg:text-[40px] text-blue-500 font-bold font-Roboto'>1.</h3>
                <h5 className='text-[22px] font-semibold'>Discovery</h5>
                <p className='text-[16px]'>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.</p>
            </div>
            <div className='flex flex-col justify-start items-start gap-2'>
                <h3 className='text-[22px] lg:text-[40px] text-blue-500 font-bold font-Roboto'>2.</h3>
                <h5 className='text-[22px] font-semibold'>Discovery</h5>
                <p className='text-[16px]'>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.</p>
            </div>
            <div className='flex flex-col justify-start items-start gap-2'>
                <h3 className='text-[22px] lg:text-[40px] text-blue-500 font-bold font-Roboto'>3.</h3>
                <h5 className='text-[22px] font-semibold'>Discovery</h5>
                <p className='text-[16px]'>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.</p>
            </div>
            <div className='flex flex-col justify-start items-start gap-2'>
                <h3 className='text-[22px] lg:text-[40px] text-blue-500 font-bold font-Roboto'>4.</h3>
                <h5 className='text-[22px] font-semibold'>Discovery</h5>
                <p className='text-[16px]'>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.</p>
            </div>
           </div>
            </div> 
            <div className='lg:w-1/2 w-full'>
                <Image src={Pro} alt='process' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Process
