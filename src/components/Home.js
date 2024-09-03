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
    <div className="home h-full flex items-center w-full">
      <div className="w-full flex items-center justify-between">
        <div className="mx-16 flex flex-col gap-8 w-[60%]">
          <h1 className="lg:text-3xl xl:text-[47px] 2xl:text-5xl xl2:text-7xl font-semibold">
            Hello, I'm{" "}
            <span className="lg:text-[35px] xl:text-[47px] 2xl:text-6xl xl2:text-7xl text-theme xl3:text-[90px]">
              Govind Ravi
            </span>
            <p className="text-xs lg:text-sm xl:text-lg 2xl:text-xl xl2:text-2xl xl3:text-3xl font-medium secondary-font">
              Creating Cohesive Web Architectures
            </p>
          </h1>
          <div>
            <h2 className="lg:text-xl xl:text-2xl 2xl:text-3xl xl3:text-5xl font-normal secondary-font">
              And I'm a{" "}
              <span className="lg:text-[22px] xl:text-3xl 2xl:text-4xl xl3:text-6xl primary-font font-medium xl2:font-semibold">
                {text}
              </span>
              <Cursor />
            </h2>
          </div>
          <div className="flex lg:w-[300px] xl:w-[350px] 2xl:w-[400px] xl2:w-[500px] xl3:w-[600px]">
            <a
              href={CV}
              download="Govind CV"
              className="xl:text-xl xl2:text-2xl xl3:text-4xl text-nowrap theme rounded mr-4 font-semibold p-1 xl:p-2 xl2:p-4 flex-1 flex items-center justify-center hover:scale-105 transition"
            >
              Download CV
            </a>
            <a
              href="mailto:govindnr20122001@gmail.com?subject=Hiring%20for%20[Job Position]&body=Dear%20Govind,%0A%0AI%20am%20interested%20in%20hiring%20you%20for%20[Job%20Postion]%0A%0A[Job%20Details]"
              className="xl:text-xl xl2:text-2xl xl3:text-4xl text-nowrap border-theme border-4 xl2:border-[6px] rounded font-semibold p-1 xl:p-2 xl2:p-4 flex-1 text-center hover:scale-105 transition"
            >
              Hire Me
            </a>
          </div>
          <div className="flex gap-6 2xl:gap-10 xl3:gap-12">
            <div className="w-8 xl:w-10 xl2:w-12 xl3:w-16">
              <a href="http://linkedin.com/in/govind-ravi">
                <FaLinkedin className="w-full h-full text-theme hover:scale-105 transition" />
              </a>
            </div>
            <div className="w-8 xl:w-10 xl2:w-12 xl3:w-16">
              <a href="https://github.com/Govind-ravi">
                <FaGithub className="w-full h-full text-theme hover:scale-105 transition" />
              </a>
            </div>
            <div className="w-8 xl:w-10 xl2:w-12 xl3:w-16">
              <a href="https://www.instagram.com/govind.govu.2012">
                <FaInstagramSquare className="w-full h-full text-theme hover:scale-105 transition" />
              </a>
            </div>
            <div className="w-8 xl:w-10 xl2:w-12 xl3:w-16">
              <a href="https://x.com/GovindR20122001">
                <FaXTwitter className="w-full h-full text-theme hover:scale-105 transition" />
              </a>
            </div>
          </div>
        </div>
        <div className="relative blob w-[40%] mx-16 overflow-hidden min-w-[400px] xl3:w-[800px] aspect-square">
          <div className="absolute bottom-0 w-full">
            <img className="w-full" src={Hero} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
