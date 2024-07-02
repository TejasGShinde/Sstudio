import React, { useState, useEffect } from 'react';
import Team from "./Team";
import { Link } from 'react-router-dom';
import HeroImage from "./2.jpg";
import HeroImage3 from "./3.jpg";
import HeroImage4 from "./4.jpg";
import HeroImage5 from "./5.jpg";
import HeroImage6 from "./6.jpg";

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [HeroImage, HeroImage3, HeroImage4, HeroImage5, HeroImage6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-800 mt-8" id="about">
        <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-10">
          <div className="relative mx-auto overflow-hidden rounded-xl shadow-lg">
            <img
              alt={`Hero ${currentImage + 1}`}
              className="object-cover w-full h-96 transform transition-transform duration-1000 ease-in-out"
              src={images[currentImage]}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-bold">Stunning Interiors</p>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-pink-600 tracking-tight sm:text-5xl">About Swaraj Studio</h2>
              <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-400 leading-relaxed sm:text-lg lg:text-base xl:text-lg">
                We are a team of passionate designers dedicated to creating stunning interiors that reflect the essence of our clients. Our approach is rooted in elegance, and we pay meticulous attention to every detail to ensure that each space we design is a masterpiece.
              </p>
            </div>

            <div className="flex items-center justify-center space-x-4">
              <Link to="/contact" className="inline-block bg-pink-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-pink-700 transition-colors duration-300">
                Contact Us
              </Link>
              <Link to="/portfolio" className="inline-block bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg shadow-md hover:bg-gray-200 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800 opacity-50"></div>
      </section>
       
    </>
  );
};

export default About;
