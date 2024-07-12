import React from "react";
import { FaHardHat, FaRulerCombined, FaHandsHelping } from 'react-icons/fa';
import serviceImg from "./2.jpg";

const Services = () => {
    return (
        <section className="w-full mt-16 py-12 md:py-24 lg:py-32 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 dark:bg-gradient-to-r dark:from-gray-800 dark:via-gray-700 dark:to-gray-600" id="services">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-extrabold tracking-tighter text-gray-800 dark:text-gray-200 sm:text-5xl">Our Services</h2>
                        <p className="max-w-[900px] text-gray-600 md:text-xl dark:text-gray-300">
                            We offer a comprehensive range of services to meet your interior design needs. From concept to execution, we are dedicated to delivering excellence.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <img
                        alt="Service Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last transform transition duration-500 hover:scale-105"
                        height="310"
                        src={serviceImg}
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li className="flex items-start space-x-4">
                                <FaHardHat className="text-3xl text-gray-800 dark:text-gray-200" />
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Construction Project Management</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Personalized design consultation to understand your vision.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4">
                                <FaRulerCombined className="text-3xl text-gray-800 dark:text-gray-200" />
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Architectural and Interior Design</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Expert space optimization for functionality and aesthetics.</p>
                                </div>
                            </li>
                            <li className="flex items-start space-x-4">
                                <FaHandsHelping className="text-3xl text-gray-800 dark:text-gray-200" />
                                <div className="space-y-1">
                                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200">Consultation</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Curated choices to complement your style and enhance comfort.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
