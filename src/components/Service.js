import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaPython,
  FaLaptopCode,
  FaCentercode,
} from "react-icons/fa";
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
      "Express.js is my major tool for backend for building robust APIs and handling server-side routing.",
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
    <div className="py-4 px-10 xl2:px-8 xl3:px-12 space-y-8 xl2:space-y-12">
      <div>
        <h1 className="text-3xl lg:text-4xl 2xl:text-5xl xl2:text-6xl xl3:text-8xl font-semibold text-center  mb-2 text-theme">
          My Services
        </h1>
        <p className="text-center w-2/3 xl:w-1/2 xl3:w-2/3 mx-auto mb-8 text-secondary text-sm lg:text-lg 2xl:text-xl xl2:text-2xl xl3:text-3xl">
          Bringing your digital ideas to life with expertise in website
          development, creating efficient, dynamic and user-friendly solutions.
        </p>
      </div>
      <div className="flex justify-center gap-8 xl:gap-12 3xl:gap-16 xl2:gap-11 xl3:gap-20 flex-wrap content-between">
        {coreSkills.map((language, index) => (
          <div
            key={index}
            className="w-[200px] lg2:w-[225px] xl:w-[250px] 2xl:w-[290px] 3xl:w-[300px] xl2:w-[350px] xl3:w-[400px] flex-wrap aspect-square glass p-4 flex flex-col justify-evenly"
          >
            <a href={language.url} target="_blank" rel="noopener noreferrer" className="flex flex-col justify-evenly h-full">
              <div className="h-1/2 mx-auto">
                <language.icon className="w-full text-theme h-full" />
              </div>
              <div className="text-lg lg2:text-xl 2xl:text-2xl xl2:text-3xl xl3:text-4xl text-center font-medium">
                {language.name}
              </div>
              <p className="text-xs lg2:text-sm 2xl:text-base xl2:text-lg xl3:text-xl text-center text-wrap">
                {language.description}
              </p>
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap content-between gap-6 xl:gap-8 mx-8">
        {additionalSkills.map((language, index) => (
          <div
            key={index}
            className="w-[100px] xl:w-[125px] 2xl:w-[150px] xl2:w-[175px] xl3:w-[200px] aspect-square glass flex flex-col justify-evenly"
          >
            {" "}
            <a href={language.url} target="_blank" rel="noopener noreferrer" className="space-y-2">
              <div className="w-1/2 mx-auto">
                <language.icon className="w-full text-theme h-full" />
              </div>
              <div className="text-xs lg:text-sm 2xl:text-base xl2:text-lg xl3:text-2xl text-center font-medium">{language.name}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
