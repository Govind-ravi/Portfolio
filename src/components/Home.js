import Hero from "../assests/Hero.png";
import CV from "../assests/Govind_CV.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = ({ aspectRatio }) => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div
      className={`flex justify-between items-center ${
        aspectRatio < 1 ? "flex-col-reverse" : "flex-row"
      } gap-32 w-full`}
    >
      <div
        data-aos={`${aspectRatio < 1 ? "zoom-in" : "fade-right"}`}
        className="flex flex-col justify-center gap-2 flex-1"
      >
        <h1 className="text-6xl font-semibold mb-4">
          Hello, I'm{" "}
          <span className="text-7xl light-text text-nowrap">Govind Ravi</span>
        </h1>
        <p className="mb-8 text-2xl">Creating Cohesive Web Architectures</p>
        <h2 className="text-4xl mb-8 font-medium">
          And I'm a{" "}
          <span className="light-text text-[2.75rem]">
            {text}
            <Cursor />
          </span>
        </h2>
        <div className="flex gap-8 text-3xl mb-8">
          <a
            href={CV}
            download="Govind CV"
            className="theme-shadow bg-theme text-bg p-2 font-medium rounded shadow-md flex items-center hover:scale-105 transition"
          >
            Download CV
          </a>
          <a
            href="mailto:govindnr20122001@gmail.com?subject=Hiring%20for%20[Job Position]&body=Dear%20Govind,%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20[Job%20Postion]%0A%0A[Job%20Details]"
            className="theme-border px-4 py-2 rounded-lg theme-shadow hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>
        <div className="flex gap-8 icons w-96">
          <a href="http://linkedin.com/in/govind-ravi">
            <FaLinkedin className="w-full h-full text-theme hover:scale-110 transition" />
          </a>
          <a href="https://github.com/Govind-ravi">
            <FaGithub className="w-full h-full text-theme hover:scale-110 transition" />
          </a>
          <a href="https://www.instagram.com/govind.govu.2012">
            <FaInstagramSquare className="w-full h-full text-theme hover:scale-110 transition" />
          </a>
          <a href="https://x.com/GovindR20122001">
            <FaXTwitter className="w-full h-full text-theme hover:scale-110 transition" />
          </a>
        </div>
      </div>
      <div
        data-aos={`${aspectRatio < 1 ? "zoom-in" : "fade-left"}`}
        className={`${aspectRatio < 1 ? "flex-1 w-full sm:w-3/4" : "w-[35%]"}`}
      >
        <div className="hero-pic aspect-square rounded-full overflow-hidden h-full bg-theme mx-auto">
          <img className="w-full" src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
