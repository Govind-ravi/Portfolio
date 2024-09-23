import React from "react";
import AboutPic from "../assests/About.png";

export default function About({ aspectRatio }) {
  return (
    <div>
      <div
        className={`flex w-full ${
          aspectRatio < 1 ? "flex-col gap-16" : "flex-row gap-8"
        } items-center justify-center mb-32`}
      >
        <div
          data-aos="zoom-in"
          className={`theme-border theme-shadow border-2 rounded-full p-4 ${
            aspectRatio < 1 ? "w-2/3" : "w-1/3"
          }`}
        >
          <div className="overflow-hidden w-full bg-theme rounded-full aspect-square">
            <img src={AboutPic} alt="" className="w-full" />
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className={`${aspectRatio < 1 ? "w-full" : "w-[50%]"}`}
        >
          <div className="text-box text-2xl xsm:w-[80%] mx-auto font-medium">
            <h1 className="text-4xl font-bold mb-4">Who I Am</h1>
            I’m <span className="">Govind Ravi</span>, a dedicated software
            developer with expertise in both frontend and backend technologies.
            I specialize in the MERN stack (MongoDB, Express.js, React,
            Node.js), leveraging these tools to build scalable and efficient
            applications. My passion lies in crafting innovative solutions and
            continuously enhancing my technical skills. I’m enthusiastic about
            tackling new challenges and making a positive impact in the tech
            industry.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-32">
        <div
          data-aos="zoom-in"
          className={`text-box text-2xl font-semibold ${
            aspectRatio < 1 ? "xsm:w-4/5" : "w-2/3"
          } mx-auto`}
        >
          <h1 className="text-3xl font-bold mb-2">Education</h1>
          <div className="flex gap-2 mb-2">
            <span className="font-bold">Graduation:</span>
            Indian Institute of Technology, Bombay | Bachelor of Science in
            Chemistry | Mumbai | (Nov 2020 and Sept 2024).
          </div>
          <div className="flex gap-2 mb-2">
            <span className="font-bold text-nowrap">12th Standard:</span>
            <div>Soundarya PU College | Bengaluru | 89% (2019 - 2020)</div>
          </div>
          <div className="flex gap-2">
            <span className="font-bold text-nowrap">10th Standard:</span>
            <div>Sri Vidya Kendra School | Bengaluru | 88% (2017 - 2018)</div>
          </div>
        </div>
        <div
          className={`flex ${
            aspectRatio < 1 ? "flex-col gap-16" : "flex-row gap-8"
          } mx-auto xsm:w-[80%] gap-16`}
        >
          <div
            data-aos="zoom-in"
            className="text-box text-2xl font-medium flex-1 flex flex-col justify-center"
          >
            <h1 className="text-3xl font-bold mb-2">Achievements</h1>
            <div className="flex gap-2 mb-2">
              <span className="font-semibold text-nowrap">GATE CS 2024:</span>
              Score 430 | AIR 9568
            </div>
            <div className="flex gap-2 mb-2">
              <span className="font-semibold text-nowrap">JEE Advanced:</span>
              <div>Rank 1900</div>
            </div>
            <div className="flex gap-2">
              <span className="font-semibold text-nowrap">JEE Mains:</span>
              <div>Rank 7912</div>
            </div>
          </div>
          <div
            data-aos="zoom-in"
            className="text-box text-2xl font-medium flex-1 gap-8 flex flex-col justify-center"
          >
            <h1 className="text-3xl font-bold mb-2">Interests</h1>
            <div className="flex gap-2 mb-2 w-full text-wrap">
              <span className="font-semibold text-nowrap">AI Proficiency:</span>
              Skilled in leveraging AI for smart solutions
            </div>
            <div className="flex gap-2 mb-2 text-wrap">
              <span className="font-semibold text-nowrap">Sports:</span>
              <div>Table Tennis, Pool, Chess</div>
            </div>
            <div className="flex gap-2 text-wrap">
              <span className="font-semibold text-nowrap">Google Search:</span>
              <div>
                Continuous curiosity drives my extensive Google searches
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
