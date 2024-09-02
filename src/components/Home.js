import Hero from "../assests/Hero.png";
import CV from "../assests/Govind_CV.pdf";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer", "MERN Stack Developer"],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <div className="flex items-center justify-between h-[calc(100vh-100px)]">
      <div className="mx-16 flex flex-col gap-8">
        <h1 className="text-6xl font-semibold">
          Hello, I'm <span className="text-6xl primary-font">Govind Ravi</span>
          <p className="text-sm font-medium secondary-font  ">Creating Cohesive Web Architectures</p>
        </h1>
        <div>
          <h2 className="text-4xl font-normal secondary-font">
            And I'm a <span className="text-5xl primary-font font-medium">{text}</span>
            <Cursor />
          </h2>
        </div>
        <div className="flex w-[400px]">
          <a
            href={CV}
            download="Govind CV"
            className="text-xl theme rounded p-2 mr-4 font-medium flex-1 flex items-center justify-center hover:scale-105 transition"
          >
            Download CV
          </a>
          <a
            href="mailto:govindnr20122001@gmail.com?subject=Hiring%20for%20[Job Position]&body=Dear%20Govind,%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20[Job%20Postion]%0A%0A[Job%20Details]"
            className="text-xl border-theme border-4 rounded font-medium p-2 flex-1 text-center hover:scale-105 transition"
          >
            Hire Me
          </a>
        </div>
        <div className="flex gap-8">
        <div className="w-8">
          <a href="http://linkedin.com/in/govind-ravi">
            <FaLinkedin className="w-full h-full text-theme hover:scale-105 transition" />
          </a>
        </div>
        <div className="w-8">
          <a href="https://github.com/Govind-ravi">
            <FaGithub className="w-full h-full text-theme hover:scale-105 transition" />
          </a>
        </div>
        <div className="w-8">
          <a href="https://www.instagram.com/govind.govu.2012">
            <FaInstagramSquare className="w-full h-full text-theme hover:scale-105 transition" />
          </a>
        </div>
        <div className="w-8">
          <a href="https://x.com/GovindR20122001">
            <FaXTwitter className="w-full h-full text-theme hover:scale-105 transition" />
          </a>
        </div>
      </div>
      </div>
      <div className="relative blob mx-16 overflow-hidden">
        <div className="absolute bottom-0 w-[500px]">
          <img className="w-full" src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
