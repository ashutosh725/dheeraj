import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blog";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import Services from "@/components/home/Services";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <About/>
   {/* <Features/> */}

   <Services/>
   <Banner/>
   <Blogs/>
   </>
  );
}
