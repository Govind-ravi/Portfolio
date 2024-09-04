import React, { useEffect, useRef, useState } from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CV from "../assests/Govind_CV.pdf";

function Contact() {
  const [aspectRatio, setAspectRatio] = useState(1.5);
  const contactRef = useRef(null);
  useEffect(() => {
    const updateSectionHeight = () => {
      if (contactRef.current) {
        const aboutHeight = contactRef.current.offsetHeight;
        const aboutWidth = contactRef.current.offsetWidth;
        const aspectRatio = aboutWidth / aboutHeight;
        setAspectRatio(aspectRatio);
      }
    };

    // Update height initially
    updateSectionHeight();

    // Add resize event listener to update height on window resize
    window.addEventListener("resize", updateSectionHeight);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", updateSectionHeight);
    };
  }, []);
  return (
    <footer
      ref={contactRef}
      className="flex items-center h-full text-sm xxs:text-base md:text-sm lg:text-base 2xl:text-xl xl2:text-3xl xl3:text-4xl md:overflow-y-scroll"
    >
      <div
        className={`flex flex-col items-center gap-8 md:gap-6 ml:gap-7 lg:gap-8 xl:gap-10 xl3:gap-14 sm:mt-8 ${
          aspectRatio > 2.5 && "md:h-full"
        } `}
      >
        <div>
          <h1 className="text-3xl xs:text-3xl sm:text-4xl md:text-3xl ml:text-4xl lg:text-5xl xl2:text-7xl xl3:text-8xl font-semibold text-center mb-2 xl2:mb-4 text-theme">
            Have a project in mind?
          </h1>
          <p className="text-center w-[95%] sm:w-4/5 md:w-3/4 xl:w-2/3 xsm:mx-4 mx-auto text-secondary">
            I am always open to new opportunities and collaborations. If you
            have a project in mind or just want to chat about the latest in
            tech, feel free to reach out!
          </p>
        </div>
        <div className=" flex flex-col items-center gap-2 ">
          <p className="flex items-center gap-2">
            <MdEmail className="text-theme text-xl ml:text-2xl" />
            govindnr20122001@gmail.com
          </p>
          <p className="flex items-center gap-2">
            <MdCall className="text-theme text-xl ml:text-2xl" />
            +91 8792589747
          </p>
          <p className="flex items-center gap-2">
            <FaLocationDot className="text-theme text-xl ml:text-2xl" />
            Bengaluru, Karnataka
          </p>
        </div>
        <div className="flex gap-4 xsm:gap-6 ml:gap-8 lg:gap-10 w-[95%] xxs:w-[90%] sm:w-2/3 md:w-auto mx-auto md:mx-0 flex-wrap md:flex-nowrap justify-evenly md:justify-normal">
          <a href="mailto:govindnr20122001@gmail.com?subject=Hiring%20for%20[Job Position]&body=Dear%20Govind,%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20[Job%20Postion]%0A%0A[Job%20Details]">
            <button className="border-theme w-[150px] xsm:w-[175px] md:w-auto shadow shadow-theme border-2 sm:px-4 py-2 rounded font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Hire Me
            </button>
          </a>
          <a href="mailto:govindnr20122001@gmail.com?subject=Request%20to%20Schedule%20a%20Call%20with%20Govind&body=Dear%20Govind%2C%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20%5Bbriefly%20mention%20the%20topic%5D.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20for%20you%2C%20and%20I'll%20do%20my%20best%20to%20accommodate.%0D%0A%0D%0ALooking%20forward%20to%20our%20conversation.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D%0D%0A%5BYour%20Contact%20Information%5D">
            <button className="border-theme w-[150px] xsm:w-[175px] md:w-auto shadow shadow-theme border-2 sm:px-4 py-2 rounded font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Schedule Call
            </button>{" "}
          </a>
          <a href={CV} download="Govind CV">
            <button className="border-theme w-[150px] xsm:w-[175px] md:w-auto shadow shadow-theme border-2 sm:px-4 py-2 rounded font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Download My CV
            </button>
          </a>
          <a href="mailto:govindnr20122001@gmail.com?subject=Feedback%20for%20your%20website&body=Hi%20Govind%2C%0A%0AI%20would%20like%20to%20provide%20some%20feedback%20regarding%20your%20website.%0A%0A">
            <button className="border-theme w-[150px] xsm:w-[175px] md:w-auto shadow shadow-theme border-2 sm:px-4 py-2 rounded font-medium transition duration-300 ease-in-out transform hover:scale-105">
              Send Feedback
            </button>
          </a>
        </div>
        <div className="flex gap-6 lg:gap-8 xl2:gap-10 xl3:gap-12">
          <div className="w-8 xs:w-10 md:w-7 ml:w-8 lg:w-10 xl2:w-16 xl3:w-20">
            <a href="http://linkedin.com/in/govind-ravi">
              <FaLinkedin className="w-full h-full text-theme" />
            </a>
          </div>
          <div className="w-8 xs:w-10 md:w-7 ml:w-8 lg:w-10 xl2:w-16 xl3:w-20">
            <a href="https://github.com/Govind-ravi">
              <FaGithub className="w-full h-full text-theme" />
            </a>
          </div>
          <div className="w-8 xs:w-10 md:w-7 ml:w-8 lg:w-10 xl2:w-16 xl3:w-20">
            <a href="https://www.instagram.com/govind.govu.2012">
              <FaInstagramSquare className="w-full h-full text-theme" />
            </a>
          </div>
          <div className="w-8 xs:w-10 md:w-7 ml:w-8 lg:w-10 xl2:w-16 xl3:w-20">
            <a href="https://x.com/GovindR20122001">
              <FaXTwitter className="w-full h-full text-theme" />
            </a>
          </div>
        </div>
        <hr className="bg-secondary w-2/3" />
        <div className="mb-8">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">Govind Ravi</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Contact;
