import React from "react";

const NavBar = () => {
  return (
    < > 
    
    <div className="h-10 w-100% flex justify-between items-center px-5 mx-3 z-[10] fixed gap-x-190 top-5">
      
      <div><h1 className="uppercase font-bold text-white font-['sp']">Portfolio</h1></div>
      <div className="flex" >
        <a className="text-white font-['sp'] relative ms-10 font-general text-xs uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer py-1" href="#">Home</a>
        <a className="text-white font-['sp'] relative ms-10 font-general text-xs uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer py-1" href="/Resume.pdf" download='Resume'>Resume</a>
        <a className="text-white font-['sp'] relative ms-10 font-general text-xs uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer py-1" href="about">About</a>
        <a className="text-white font-['sp'] relative ms-10 font-general text-xs uppercase after:absolute after:-bottom-0.5 after:left-0 after:h-[2px] after:w-full after:origin-bottom-right after:scale-x-0 after:bg-neutral-800 after:transition-transform after:duration-300 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 dark:after:bg-white cursor-pointer py-1" href="mailto:harshbhakreh3@gmail.com">Contact</a>
      </div>
    
    </div>
    </>
  );
};

export default NavBar;
