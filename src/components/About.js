import React, { useState } from "react";
import AboutPic from "../assests/About.png";

export default function About() {
  const [selectedTab, setSelectedTab] = useState("Education");

  return (
      <div className="h-full w-full flex flex-col md:flex-row items-center justify-center md:justify-between xl:w-[90%] xl:gap-4">
        <div className=" md:-translate-x-28 w-[35%]">
          <div className="ml-4 min-w-[300px] relative md:min-w-[calc(100%+40px)] aspect-square border-theme rounded-full border-[3px] flex items-center justify-center">
            <div className="w-[280px] overflow-hidden md:min-w-[calc(100%-20px)] xl2:min-w-[calc(100%-40px)] aspect-square rounded-full bg-theme">
              <img
                src={AboutPic}
                alt=""
                className="w-full md:min-w-full z-[1]"
              />
            </div>
          </div>
        </div>
        <div className="h-full p-2 flex items-center xl3:gap-10 w-[65%]">
          <div className="space-y-4 xl3:space-y-8  overflow-y-scroll">
            <div className="flex flex-col gap-2">
              <h1 className="text-theme lg:text-3xl 2xl:text-4xl xl2:text-5xl xl3:text-7xl font-semibold">
                Who I Am
              </h1>
              <p className="secondary-font indent-12 text-sm lg:text-base xl:text-lg 2xl:text-xl xl2:text-2xl xl3:text-3xl">
                I’m <span className="font-medium">Govind Ravi</span>, a
                dedicated software developer with expertise in both frontend and
                backend technologies. I specialize in the MERN stack (MongoDB,
                Express.js, React, Node.js), leveraging these tools to build
                scalable and efficient applications. My passion lies in crafting
                innovative solutions and continuously enhancing my technical
                skills. I’m enthusiastic about tackling new challenges and
                making a positive impact in the tech industry.
              </p>
            </div>
            <div className="w-[90%] 2xl:w-[75%] overflow-x-hidden">
              <div className="flex gap-6 font-medium items-center mx-1 mb-2">
                <div
                  onClick={() => setSelectedTab("Education")}
                  className={`cursor-pointer tab transition ${
                    selectedTab === "Education"
                      ? "text-theme scale-105 active lg:text-xl xl:text-2xl 2xl:text-3xl xl3:text-5xl"
                      : "scale-100 lg:text-xl xl:text-2xl 2xl:text-3xl xl3:text-5xl"
                  }`}
                >
                  Education
                </div>
                <div
                  onClick={() => setSelectedTab("Achievements")}
                  className={`cursor-pointer tab transition ${
                    selectedTab === "Achievements"
                      ? "text-theme scale-105 active lg:text-xl xl:text-2xl 2xl:text-3xl xl3:text-5xl"
                      : "scale-100 lg:text-lg xl:text-xl 2xl:text-2xl xl3:text-4xl"
                  }`}
                >
                  Achievements
                </div>
              </div>
              <div
                className={`w-[200%] flex ${
                  selectedTab === "Education" ? "" : "-translate-x-1/2"
                } transition duration-500 text-sm lg:text-sm xl:text-base 2xl:text-base xl2:text-xl xl3:text-2xl`}
              >
                <div className="education w-1/2 space-y-4 p-1">
                  <div className="flex gap-2">
                    <span className="font-medium">Graduation:</span>
                    <div>
                      <span className="font-medium">
                        Indian Institute of Technology, Bombay
                      </span>{" "}
                      | Bachelor of Science in Chemistry | Mumbai | (Nov 2020
                      and Sept 2024).
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-nowrap">
                      12th Standard:
                    </span>
                    <div>
                      <span className="font-medium">Soundarya PU College</span>{" "}
                      | Bengaluru | 89% (2019 - 2020)
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-nowrap">
                      10th Standard:
                    </span>
                    <div>
                      <span className="font-medium">
                        Sri Vidya Kendra School
                      </span>{" "}
                      | Bengaluru | 88% (2017 - 2018)
                    </div>
                  </div>
                </div>
                <div className="achievements w-1/2 space-y-2 p-1">
                  <div className="flex gap-2">
                    <span className="font-medium text-nowrap">
                      GATE CS 2024:
                    </span>
                    <div>Score 430 | AIR 9568</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-nowrap">
                      JEE Advanced:
                    </span>
                    <div>Rank 1900</div>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-medium text-nowrap">JEE Mains:</span>
                    <div>Rank 7912</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="lg:text-xl xl:text-2xl 2xl:text-3xl xl3:text-5xl text-theme font-semibold tab active scale-100 inline-block mb-2">
                Interests
              </h3>
              <ul className="space-y-2 text-sm lg:text-sm xl:text-base 2xl:text-base xl2:text-xl xl3:text-2xl">
                <li>
                  <span className="font-medium">AI Proficiency:</span> Skilled
                  in leveraging AI for smart solutions
                </li>
                <li>
                  <span className="font-medium">Sports:</span> Table Tennis,
                  Pool, Chess
                </li>
                <li>
                  <span className="font-medium">Google Search:</span> Continuous
                  curiosity drives my extensive Google searches
                </li>
                <li>
                  <span className="font-medium">Efficiency:</span> Ensuring
                  fast-paced task execution
                </li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  );
}
