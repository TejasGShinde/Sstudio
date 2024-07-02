import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroImage from "./2.jpg";
import HeroImage3 from "./3.jpg";
import HeroImage4 from "./4.jpg";
import HeroImage5 from "./5.jpg";
import HeroImage6 from "./6.jpg";

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  // Array of image paths
  const images = [HeroImage, HeroImage3, HeroImage4, HeroImage5, HeroImage6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage === images.length - 1 ? 0 : prevImage + 1));
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden mt-8">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img src={images[currentImage]} className="w-full h-full object-cover" alt={`Hero ${currentImage + 1}`} />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
          Welcome to <span className="text-grey-300">Swaraj Studio</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Make Your Dream Home A Reality Here with Swaraj Studio.
        </p>
        <Link to="/about" className="px-8 py-3 bg-pink-700 text-white rounded-md shadow-md hover:bg-pink-600 transition duration-300">
          Learn More
        </Link>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index ? 'bg-pink-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
 );
};

export default HeroSection;

    // older by Tejas.
    
    // <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    //   <div className="absolute inset-0">
    //     <img src={HeroImage} className="w-full h-full object-cover" alt="Hero" />
    //     <div className="absolute inset-0 bg-black opacity-50"></div>
    //   </div>

    //   <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    //     <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Swaraj Studio</h1>
    //     <p className="text-lg text-gray-300 mb-8">Crafting Spaces, Inspiring Lives Your Journey to Exceptional Interiors Begins Here with Swaraj Studio.</p>
    //     {/* <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a> */}
    //   </div>
    // </div>
    
 


// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import HeroImage1 from "./2.jpg";
// import HeroImage2 from "./3.jpg"; // Add additional images if needed
// import HeroImage3 from "./4.jpg"; // Add additional images if needed

// const HeroSection = () => {
//   return (
//     <Carousel
//       autoPlay
//       infiniteLoop
//       showThumbs={false}
//       showStatus={false}
//       showIndicators={false}
//       className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden"
//     >
//       <div className="relative">
//         <img src={HeroImage1} className="w-full h-full object-cover" alt="Hero 1" />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//           <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Swaraj Studio</h1>
//           <p className="text-lg text-gray-300 mb-8">Crafting Spaces, Inspiring Lives Your Journey to Exceptional Interiors Begins Here with Swaraj Studio.</p>
//         </div>
//       </div>
//       <div className="relative">
//         <img src={HeroImage2} className="w-full h-full object-cover" alt="Hero 2" />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//           <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Swaraj Studio</h1>
//           <p className="text-lg text-gray-300 mb-8">Crafting Spaces, Inspiring Lives Your Journey to Exceptional Interiors Begins Here with Swaraj Studio.</p>
//         </div>
//       </div>
//       <div className="relative">
//         <img src={HeroImage3} className="w-full h-full object-cover" alt="Hero 3" />
//         <div className="absolute inset-0 bg-black opacity-50"></div>
//         <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
//           <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Swaraj Studio</h1>
//           <p className="text-lg text-gray-300 mb-8">Crafting Spaces, Inspiring Lives Your Journey to Exceptional Interiors Begins Here with Swaraj Studio.</p>
//         </div>
//       </div>
//     </Carousel>
//   );
// };

// export default HeroSection;
