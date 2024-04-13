import React from "react";
import serviceImg from "./2.jpg"
const Services = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-200 dark:bg-gray-800 mt-8" id="services">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Services</h2>
                        <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed dark:text-gray-400">
                            We offer a comprehensive range of services to meet your interior design needs. From concept to
                            execution, we are dedicated to delivering excellence.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                    <img
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                        height="310"
                        src={serviceImg}
                        width="550"
                    />
                    <div className="flex flex-col justify-center space-y-4">
                        <ul className="grid gap-6">
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">CONSTRUCTION PROJECT MANAGEMENT
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Personalized design consultation to understand your vision.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">ARCHITECTURAL AND  INTERIOR DESIGN
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Expert space optimization for functionality and aesthetics.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                    <h3 className="text-xl font-bold">CONSULTATION
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400">
                                        Curated choices to complement your style and enhance comfort.
                                    </p>
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
