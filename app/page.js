import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blogs from "@/components/home/Blog";
import Features from "@/components/home/Features";
import HeroSection from "@/components/home/HeroSection";
import Process from "@/components/home/Process";
import Services from "@/components/home/Services";
import ServicesSlider from "@/components/home/ServicesSlider";
import Technologies from "@/components/home/Technologies";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <HeroSection/>
   <About/>
   {/* <Features/> */}

   <Services/>
   <ServicesSlider/>
   <Process/>
   <Banner/>
   <Technologies/>
   <Blogs/>
   </>
  );
}
