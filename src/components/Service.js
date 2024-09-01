import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaGithub, FaPython, FaLaptopCode, FaCentercode } from "react-icons/fa";
import { SiExpress, SiMongodb, SiRedux } from "react-icons/si";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";

const coreSkills = [
  {
    name: "React",
    icon: FaReact,
    description:
      "React is my primary tool for creating dynamic user interfaces and building scalable web applications.",
    url: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    description:
      "Node.js enables me to build scalable network applications and handle server-side logic efficiently.",
    url: "https://nodejs.org/en/docs/",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    description:
      "Express.js is used for building robust APIs and handling server-side routing.",
    url: "https://expressjs.com/",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    description:
      "MongoDB is my choice for a NoSQL database, allowing for flexible data structures and scalability.",
    url: "https://www.mongodb.com/docs/",
  },
];

const additionalSkills = [
  {
    name: "HTML",
    icon: FaHtml5,
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    icon: RiJavascriptFill,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Redux",
    icon: SiRedux,
    url: "https://redux.js.org",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    url: "https://tailwindcss.com/docs",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    url: "https://git-scm.com/doc",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    url: "https://docs.github.com/en",
  },
  {
    name: "Python",
    icon: FaPython,
    url: "https://docs.python.org/3/",
  },
  {
    name: "UI/UX",
    icon: FaCentercode,
    url: "https://www.nngroup.com/",
  },
  {
    name: "Web Development",
    icon: FaLaptopCode,
    url: "https://developer.mozilla.org/",
  },
];

function Service() {
  return (
    <div className="py-4 px-10 space-y-8">
      <div>
        <h1 className="text-5xl font-semibold text-center  mb-2 text-theme">
          My Services
        </h1>
        <p className="text-center w-1/2 mx-auto mb-8 text-secondary">
          Bringing your digital ideas to life with expertise in website
          development, creating efficient, dynamic and user-friendly solutions.
        </p>
      </div>
      <div className="flex justify-center gap-16 flex-wrap content-between">
        {coreSkills.map((language, index) => (
          <div
            key={index}
            className="w-[300px] h-[300px] glass p-4 flex flex-col justify-evenly"
            onClick={() => window.open(language.url, "_blank")}
          >
            <div className="w-1/2 mx-auto">
              <language.icon className="w-full text-theme h-full" />
            </div>
            <div className="text-2xl text-center font-medium">
              {language.name}
            </div>
            <p className="text-sm text-center text-wrap">
              {language.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap content-between gap-8 mx-8">
        {additionalSkills.map((language, index) => (
          <div
            key={index}
            className="w-[150px] h-[150px] glass flex flex-col justify-evenly"
            onClick={() => window.open(language.url, "_blank")}
          >
            <div className="w-1/2 mx-auto">
              <language.icon className="w-full text-theme h-full" />
            </div>
            <div className="text-center font-medium">
              {language.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
