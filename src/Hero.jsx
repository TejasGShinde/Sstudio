import React from "react";
import HeroImage from "./2.jpg";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <img src={HeroImage} className="w-full h-full object-cover" alt="Hero" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Swaraj Studio</h1>
        <p className="text-lg text-gray-300 mb-8">Crafting Spaces, Inspiring Lives Your Journey to Exceptional Interiors Begins Here with Swaraj Studio.</p>
        {/* <a href="#" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a> */}
      </div>
    </div>
    
  );
};

export default HeroSection;


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
