import React, { useState } from "react";

export default function About() {
  const [selectedTab, setSelectedTab] = useState("Education");

  return (
    <div className="flex items-center justify-between h-full mr-28">
      <div className="w-[540px] h-[540px] border-theme rounded-full border-[3px] -translate-x-28 flex items-center justify-center">
        <div className="w-[500px] h-[500px] rounded-full bg-theme"></div>
      </div>
      <div className="flex-1 h-full p-2 flex flex-col gap-6 w-[]">
        <div className="flex flex-col gap-2">
          <h1 className="text-theme text-4xl font-semibold">Who I Am</h1>
          <p className="secondary-font indent-12 text-lg">
            I’m <span className="font-medium">Govind Ravi</span>, a dedicated software developer with expertise in
            both frontend and backend technologies. I specialize in the MERN
            stack (MongoDB, Express.js, React, Node.js), leveraging these tools
            to build scalable and efficient applications. My passion lies in
            crafting innovative solutions and continuously enhancing my
            technical skills. I’m enthusiastic about tackling new challenges and
            making a positive impact in the tech industry.
          </p>
        </div>
        <div className="w-[600px] overflow-x-hidden">
          <div className="flex gap-6 font-medium items-center mx-1 mb-2">
            <div
              onClick={() => setSelectedTab("Education")}
              className={`cursor-pointer tab transition ${
                selectedTab === "Education" ? "text-theme scale-105 active text-2xl" : "scale-100 text-xl"
              }`}
            >
              Education
            </div>
            <div
              onClick={() => setSelectedTab("Achievements")}
              className={`cursor-pointer tab transition ${
                selectedTab === "Achievements" ? "text-theme scale-105 active text-2xl" : "scale-100 text-xl"
              }`}
            >
              Achievements
            </div>
          </div>
          <div
            className={`w-[1200px] flex ${
              selectedTab === "Education" ? "" : "-translate-x-[600px]"
            } transition duration-500`}
          >
            <div className="education w-[600px] space-y-4">
              <div className="flex gap-2">
                <span className="font-medium">Graduation:</span>
                <div>
                  <span className="font-medium">
                    Indian Institute of Technology, Bombay
                  </span>{" "}
                  | Bachelor of Science in Chemistry | Mumbai | (Nov 2020 and
                  Sept 2024).
                </div>
              </div>
              <div className="flex gap-2">
                <span className="font-medium text-nowrap">12th Standard:</span>
                <div>
                  <span className="font-medium">Soundarya PU College</span> |
                  Bengaluru | 89% (2019 - 2020)
                </div>
              </div>
              <div className="flex gap-2">
                <span className="font-medium text-nowrap">10th Standard:</span>
                <div>
                  <span className="font-medium">Sri Vidya Kendra School</span> |
                  Bengaluru | 88% (2017 - 2018)
                </div>
              </div>
            </div>
            <div className="achievements w-[600px] space-y-2">
              <div className="flex gap-2">
                <span className="font-medium text-nowrap">GATE CS 2024:</span>
                <div>Score 430 | AIR 9568</div>
              </div>
              <div className="flex gap-2">
                <span className="font-medium text-nowrap">JEE Advanced:</span>
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
          <h3 className="text-xl text-theme font-semibold tab active scale-100 inline-block mb-2">Interests</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">AI Proficiency:</span> Skilled in leveraging AI for smart
              solutions
            </li>
            <li>
              <span className="font-medium">Sports:</span> Table Tennis, Pool, Chess
            </li>
            <li>
              <span className="font-medium">Google Search:</span> Continuous curiosity drives my
              extensive Google searches
            </li>
            <li>
              <span className="font-medium">Efficiency:</span> Ensuring fast-paced task execution
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
