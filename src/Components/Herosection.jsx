import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Herosection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const samagri = useRef();
  useEffect(() => {
    gsap.to(samagri.current, {
      y: -50,
      ease: "power2.inOut",
      stagger: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: samagri.current,
        start: "-150% 1%", // Adjust this as needed
        end: " 40%", // Adjust this as needed
        scrub: 2,
      },
    });
  });
  return (
    <>
      <div className="about h-max w-screen bg-black">
        <h1 className="text-center font-bold text-white text-[10vw] font-['sp']">
          About
        </h1>
        <div ref={samagri} className="opacity-0 md:mt-0 mt-20">
          <div className=" text-white mt-10 ml-3 ">
            <h3 className="font-['sp'] opacity-70">Ingredients I used</h3>
            <h1 className="whitespace-nowrap font-['sp'] text-[5vw] md:leading-15 hover:tracking-wide transition-all duration-200 cursor-pointer">
              ReactJs, ThreeJs, Gsap, Tailwindcss.
            </h1>
          </div>
          <div className=" text-white mt-10 ml-3 ">
            <h3 className="font-['sp'] opacity-70">Problems I Faced</h3>
            <h1 className="font-['sp'] text-[5vw] md:leading-15 hover:tracking-wider transition-all duration-200 cursor-pointer">
              understanding Glsl language.
            </h1>
          </div>
          <div className=" text-white mt-10 ml-3 ">
            <h3 className="font-['sp'] opacity-70">Things I Enjoyed</h3>
            <h1 className="font-['sp'] text-[5vw] md:leading-15 hover:tracking-wider transition-all duration-200 cursor-pointer">
              Gsap, ThreeJS.
            </h1>
          </div>
        </div>
        <footer className="h-10 w-[100%] flex justify-center items-center mt-8 gap-10 bg-black">
          <div className="flex gap-2">
            <a
              href="https://github.com/Harshbhakre"
              className="text-white text-2xl duration-500 cursor-pointer
            ease-in-out hover:text-white hover:scale-150 transition-all"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/harshbhakreh3"
              className="text-white text-2xl duration-500 cursor-pointer
            ease-in-out hover:text-white hover:scale-150 transition-all"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className=" text-white text-sm absolute right-1 md:right-10">
            @Copyright 2025
          </p>
        </footer>
      </div>
    </>
  );
};

export default Herosection;
