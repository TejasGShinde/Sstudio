import React, { useState, useEffect } from 'react';
import AboutImg from "./about.avif"
import Team from "./Team";
import HeroImage from "./2.jpg";
import HeroImage3 from "./3.jpg";
import HeroImage4 from "./4.jpg";
import HeroImage5 from "./5.jpg";
import HeroImage6 from "./6.jpg";
const About = () => {
    const [currentImage, setCurrentImage] = useState(1);
    // Array of image paths
    const images = [HeroImage, HeroImage3, HeroImage4, HeroImage5, HeroImage6];
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImage(prevImage => (prevImage === images.length ? 1 : prevImage + 1));
      }, 4000); 
  
      return () => clearInterval(interval); 
    }, []);
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about">
      <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-10">
        <img
          alt={`Hero ${currentImage}`}
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          src={images[currentImage - 1]}
          width="550"
        />
         
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">About Swaraj Studio</h2>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We are a team of passionate designers dedicated to creating stunning interiors that reflect the
              essence of our clients. Our approach is rooted in elegance, and we pay meticulous attention to every
              detail to ensure that each space we design is a masterpiece.
            </p>
          </div>
        </div>
      </div>
     
    </section>
    <Team />
    </>
  );
};

export default About;
