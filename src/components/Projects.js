import React from "react";
import ECommerceVideo from "../assests/E-commerce.mp4";
import RealEstate from "../assests/RealEstate.mp4";

function Projects({ aspectRatio }) {
  const projects = [
    {
      title: "E-Commerce Platform",
      date: "August 2024",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Redux",
        "JavaScript",
      ],
      features: [
        "Admin interface for product, collection and user management",
        "User authentication and authorization",
        "Cart and wishlist functionality",
        "Password reset via email",
      ],
      tools: [
        "Git for Version Control",
        "Client side deployed on Vercel",
        "Server side deployed on Render",
      ],
      liveDemo: "https://e-commerce-fawn-kappa-80.vercel.app/",
      sourceCode: "https://github.com/Govind-ravi/E_Commerce.git",
      video: ECommerceVideo,
    },
    {
      title: "Ravi Real Estate",
      date: "July 2024",
      technologies: [
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
        "Redux",
        "JavaScript",
      ],
      features: [
        "Dynamic property listings with advanced search and filter options",
        "User authentication and profile management",
        "Google Authentication using firebase",
        "Responsive design for optimal viewing on all devices",
        "Contact Landlord",
      ],
      tools: [
        "Git for Version Control",
        "Firebase to store images",
        "Client side deployed on Vercel",
        "Server side deployed on Render",
      ],
      liveDemo: "https://mern-estate-c0ij.onrender.com/",
      sourceCode: "https://github.com/Govind-ravi/MERN_Estate.git",
      video: RealEstate,
    },
  ];

  return (
    <div className="xsm:mx-16">
      <h1
        data-aos="zoom-in"
        className="light-text text-7xl text-center font-semibold mb-32"
      >
        Projects
      </h1>
      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex ${
              aspectRatio < 1 ? "flex-col" : ""
            } items-center gap-8 ${
              index % 2 === 0 && aspectRatio >= 1
                ? "flex-row"
                : "flex-row-reverse"
            }`}
          >
            <div
              data-aos="zoom-in"
              className={`text-3xl font-medium ${
                aspectRatio < 1 ? "w-full" : "w-1/2"
              }`}
            >
              <div className="text-box w-full" style={{ padding: "10px" }}>
                <h1 className="text-4xl font-bold mb-2">
                  {project.title}{" "}
                  <span className="text-2xl">({project.date})</span>
                </h1>
                <div className="flex gap-2">
                  <span className="font-semibold text-nowrap text-2xl">
                    Technologies used:{" "}
                  </span>
                  <span className="text-2xl">
                    {project.technologies.join(", ")}
                  </span>
                </div>
                <ul className="mt-2 list-disc list-inside text-2xl">
                  <span className="font-semibold">Key Features:</span>
                  {project.features.map((feature, i) => (
                    <li key={i} className="mt-1">
                      {feature}
                    </li>
                  ))}
                </ul>
                <ul className="mt-2 list-disc list-inside text-2xl">
                  <span className="font-semibold">Tools used:</span>
                  {project.tools.map((tool, i) => (
                    <li key={i} className="mt-1">
                      {tool}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex gap-8 font-bold underline">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400"
                  >
                    Source Code
                  </a>
                </div>
                <div
                  data-ao="zoom-in"
                  className={`${aspectRatio < 1 ? "mt-8" : "hidden"}`}
                >
                  <video
                    controls
                    muted
                    autoPlay
                    loop
                    src={project.video}
                    className="w-full rounded"
                  ></video>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              className={`${aspectRatio < 1 ? "hidden" : "w-1/2"}`}
            >
              <video
                controls
                muted
                autoPlay
                loop
                src={project.video}
                className="w-full rounded"
              ></video>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
