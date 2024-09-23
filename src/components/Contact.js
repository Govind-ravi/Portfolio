import React from "react";
import { MdEmail, MdCall } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import CV from "../assests/Govind_CV.pdf";

function Contact() {
  return (
    <footer className="">
      <div data-aos="zoom-in">
        <h1 className="light-text text-7xl text-center font-semibold mb-2">
          Have a project in mind?
        </h1>
        <p className="text-center text-2xl mb-16 xsm:w-4/5 md:w-2/3 mx-auto">
          I am always open to new opportunities and collaborations. If you have
          a project in mind or just want to chat about the latest in tech, feel
          free to reach out!
        </p>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-col items-center text-4xl gap-4 mb-16"
      >
        <p className="flex items-center gap-2">
          <MdEmail className="text-theme" />
          govindnr20122001@gmail.com
        </p>
        <p className="flex items-center gap-2">
          <MdCall className="text-theme" />
          +91 8792589747
        </p>
        <p className="flex items-center gap-2">
          <FaLocationDot className="text-theme" />
          Bengaluru, Karnataka
        </p>
      </div>
      <div
        data-aos="zoom-in"
        className="flex flex-wrap justify-center gap-16 call-to-actions text-3xl mb-16"
      >
        <a href="mailto:govindnr20122001@gmail.com?subject=Hiring%20for%20[Job Position]&body=Dear%20Govind,%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20[Job%20Postion]%0A%0A[Job%20Details]">
          Hire Me
        </a>
        <a href="mailto:govindnr20122001@gmail.com?subject=Request%20to%20Schedule%20a%20Call%20with%20Govind&body=Dear%20Govind%2C%0D%0A%0D%0AI%20hope%20this%20message%20finds%20you%20well.%20I%20would%20like%20to%20schedule%20a%20call%20to%20discuss%20%5Bbriefly%20mention%20the%20topic%5D.%0D%0A%0D%0APlease%20let%20me%20know%20a%20convenient%20time%20for%20you%2C%20and%20I'll%20do%20my%20best%20to%20accommodate.%0D%0A%0D%0ALooking%20forward%20to%20our%20conversation.%0D%0A%0D%0ABest%20regards%2C%0D%0A%5BYour%20Name%5D%0D%0A%5BYour%20Contact%20Information%5D">
          Schedule Call
        </a>
        <a href={CV} download="Govind CV">
          Download CV
        </a>
        <a href="mailto:govindnr20122001@gmail.com?subject=Feedback%20for%20your%20website&body=Hi%20Govind%2C%0A%0AI%20would%20like%20to%20provide%20some%20feedback%20regarding%20your%20website.%0A%0A">
          Send Feedback
        </a>
      </div>
      <div data-aos="zoom-in" className="flex justify-center gap-16 mb-16">
        <div className="w-16">
          <a href="http://linkedin.com/in/govind-ravi">
            <FaLinkedin className="w-full h-full text-theme" />
          </a>
        </div>
        <div className="w-16">
          <a href="https://github.com/Govind-ravi">
            <FaGithub className="w-full h-full text-theme" />
          </a>
        </div>
        <div className="w-16">
          <a href="https://www.instagram.com/govind.govu.2012">
            <FaInstagramSquare className="w-full h-full text-theme" />
          </a>
        </div>
        <div className="w-16">
          <a href="https://x.com/GovindR20122001">
            <FaXTwitter className="w-full h-full text-theme" />
          </a>
        </div>
      </div>
      <hr data-aos="zoom-in" className="bg-secondary h-[0.1rem]" />
      <div data-aos="zoom-in" className="my-4 text-center text-2xl">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold">Govind Ravi</span>. All rights reserved.
      </div>
    </footer>
  );
}

export default Contact;
