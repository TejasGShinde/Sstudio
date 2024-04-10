import React from "react";
import AboutImg from "./about.avif"
import Team from "./Team";
const About = () => {
  return (
    <>
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800" id="about">
      <div className="container grid items-center gap-6 px-4 text-center md:px-6 lg:grid-cols-2 lg:gap-10">
        <img
          alt="Image"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
          height="310"
          src={AboutImg}
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
