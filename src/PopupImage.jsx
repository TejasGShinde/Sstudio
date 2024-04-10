import React from "react";
import img1 from "./heroo.jpeg"
const PopupImage = ({ handleGetStarted }) => {
    return (
        <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
            <div className="absolute inset-0">
                <img src={img1} className="w-full h-full object-cover" alt="Hero" />
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
                {/* <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Swaraj Studio</h1>
        <p className="text-lg text-gray-300 mb-8">Crafting Spaces, Inspiring Lives Your Journey to Exceptional Interiors Begins Here with Swaraj Studio.</p> */}

                <button onClick={handleGetStarted} className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg mt-32">Get Started</button>
            </div>
        </div>
    );
};

export default PopupImage;
