import React from "react";
import ECommerceVideo from "../assests/E-commerce.mp4";
import RealEstate from "../assests/RealEstate.mp4";

function Projects() {
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
    <div className="py-4 px-10">
      <h1 className="text-5xl font-semibold mb-8 text-center text-theme">
        Projects
      </h1>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`flex items-center ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            } gap-4`}
          >
            <div className="w-1/2">
              <h2 className="text-4xl font-medium">
                {project.title}{" "}
                <span className="text-xl text-secondary">({project.date})</span>
              </h2>
              <p className="mt-2 flex gap-2">
                <span className="font-medium text-nowrap">
                  Technologies used:{" "}
                </span>
                {project.technologies.join(", ")}
              </p>
              <ul className="mt-2 list-disc list-inside">
                <span className="font-medium">Key Features:</span>
                {project.features.map((feature, i) => (
                  <li key={i} className="mt-1 text-secondary">
                    {feature}
                  </li>
                ))}
              </ul>
              <ul className="mt-2 list-disc list-inside">
                <span className="font-medium">Tools:</span>
                {project.tools.map((feature, i) => (
                  <li key={i} className="mt-1 text-secondary">
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex space-x-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="theme py-2 px-4 rounded font-medium"
                >
                  Live Demo
                </a>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg"
                >
                  Source Code
                </a>
              </div>
            </div>
            <div className="w-[700px]">
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
