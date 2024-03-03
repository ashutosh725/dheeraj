import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const services = [
  {
    title: "Software Development",
    des: "Mobile application Development is the process by which application software is developed for low-power portable devices, such as personal iPhone or Android phones.",
    img: "/1 (1).png",

  },
  {
    title: "Web Development",
    des: "Mobile application Development is the process by which application software is developed for low-power portable devices, such as personal iPhone or Android phones.",
    img: "/2 (1).png",

  },
  {
    title: "Analytic Solutions",
    des: "Mobile application Development is the process by which application software is developed for low-power portable devices, such as personal iPhone or Android phones.",
    img: "/3.png",

  },
  {
    title: "Clould & DevOps",
    des: "Mobile application Development is the process by which application software is developed for low-power portable devices, such as personal iPhone or Android phones.",
    img: "/4.png",

  }
]

const Services = () => {
  return (
    <div>
       <div className='bg-slate-50 py-20'>
        <div className='container mx-auto'>
        <div className='flex flex-col justify-center items-center gap-3 '>

<h2 className='lg:text-[32px] text-[#2f327d] text-[22px] font-bold capitalize text-center'> SERVICES WE OFFER</h2>
<p className=' text-gray-500 text-center text-[16px] tracking-wide leading-7'>{`Our web development team combines years of experience with an understanding of the most up-to-date programming skills and approaches. When we build your app, we'll leverage the latest development innovations. The entire process is built around your precise specifications and requirements.`}</p>
</div>
<div className='grid  grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-y-10 lg:gap-y-0 gap-6 mt-10 '>

{
  services.map((item,index)=>{
    return <div key={index} className="card">
    <div className=" flex flex-col justify-start items-center gap-5">
     <div>
      <Image src={item.img} alt='services' width={80} height={80}/>
     </div>
      <p className="text-[20px] font-bold">{item.title}</p>
      <p className="text-body">{item.des}</p>
    </div>
    <button className="card-button">More info</button>
  </div>
  })
}

</div>



        </div>
    </div>
    </div>
  )
}

export default Services
