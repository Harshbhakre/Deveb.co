import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Heading = () => {
    gsap.registerPlugin(ScrollTrigger);
    const titles = useRef();
    useEffect(() => {
      gsap.to(titles.current, {
        y: -50,
        ease: "power2.inOut",
        opacity: 1,
        scrollTrigger: {
          trigger: titles.current,
          start: "-1000% 1%", // Adjust this as needed
          end: "-100% 40%",
          scrub:2, // Adjust this as needed
        },
      });
    });
  return (
    <>
    <div className="absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[10]">
    <h1 className="text-center text-white text-4xl md:text-[4vw] font-['sp'] font-light">
      React.Three.Gsap
    </h1>
  </div>
  <div ref={titles} className="opacity-0 absolute top-[90%] left-[51%] translate-x-[-50%] translate-y-[-50%] z-[10] ">
  <h1 className="text-center text-white text-[2vw] font-general font-semibold ">
      Check out My {' '}
      <a className="text-white relative text-[2vw] font-general uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer py-1" href="/Resume.pdf" download='Resume'>Resume</a>
    </h1>
    
  </div>
  </>
  )
}

export default Heading;