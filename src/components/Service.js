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
    <div className="mt-32">
      <div data-aos="zoom-in">
        <h1 className="light-text text-7xl text-center font-semibold mb-2">
          My Services
        </h1>
        <p className="text-center text-2xl mb-32 w-1/2 mx-auto">
          Bringing your digital ideas to life with expertise in website
          development, creating efficient, dynamic and user-friendly solutions.
        </p>
      </div>
      <div className="flex justify-center gap-16 flex-wrap content-between mb-24">
        {coreSkills.map((language, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="w-80 xs:w-96 flex flex-col justify-evenly flex-wrap aspect-square theme-border p-2 rounded-2xl theme-shadow hover:scale-[1.02] transition"
          >
            <a
              href={language.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col justify-evenly h-full text-xl"
            >
              <div className="h-1/2 mx-auto">
                <language.icon className="w-full min-w-[55px] text-theme h-full" />
              </div>
              <div className="text-center font-medium text-3xl">
                {language.name}
              </div>
              <p className="text-center text-wrap">{language.description}</p>
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center flex-wrap content-between gap-10 sm:gap-32">
        {additionalSkills.map((language, index) => (
          <div
            data-aos="zoom-in"
            key={index}
            className="w-40 sm:w-54 flex flex-col justify-evenly"
          >
            {" "}
            <a
              href={language.url}
              target="_blank"
              rel="noopener noreferrer"
              className="space-y-2"
            >
              <div className="theme-shadow p-2 mb-4">
                <language.icon className="w-full text-theme h-full" />
              </div>
              <div className="text-center text-2xl font-medium">
                {language.name}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
