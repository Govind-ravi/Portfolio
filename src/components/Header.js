import React, { forwardRef } from "react";
import Logo from "../assests/Logo.PNG";

const Header = forwardRef((props,ref ) => {
  return (
    <nav ref={ref} className='p-1 xxs:p-2 md:px-4 lg:px-10 xl:py-6 2xl:px-16 2xl:py-6 flex flex-col sm:flex-row gap-2 sm:gap-1 justify-between items-center'>
      <div className='flex items-center'>
        <div className='w-14 xsm:w-16 md:w-20'><img src={Logo} alt="Logo" /></div>
        <span className='font-medium text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl 2xl:text-5xl xl2:text-7xl'>TechPortfolio</span>
      </div>
      <div className='flex items-center gap-3 xxs:gap-4 md:gap-5 ml:gap-8 lg:gap-12 xl:gap-16 xxs:font-medium text-[15px] xxs:text-[17px] xsm:text-lg sm:text-base md:text-lg xl:text-xl 2xl:text-2xl xl2:text-3xl'>
        <div><a href="#home">Home</a></div>
        <div><a href="#about">About</a></div>
        <div><a href="#projects">Projects</a></div>
        <div><a href="#service">Service</a></div>
        <div><a href="#contact">Contact</a></div>
      </div>
    </nav>
  );
});

export default Header;
