import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { FaArrowUp } from "react-icons/fa";
import Home from "./components/Home";
import bgVideo from "./assests/BgVideo.mp4";
import bgVideo2 from "./assests/BgVideo2.mp4";
import About from "./components/About";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [aspectRatio, setAspectRatio] = useState(
    window.innerWidth / window.innerHeight
  );

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;
      setAspectRatio(newWidth / newHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Scroll
  const [scrollWidth, setScrollWidth] = useState(0);
  const [showScroll, setShowScroll] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    const windowHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    // progressionbar
    const scrollPercentage = (scrollTop / windowHeight) * 100;
    setScrollWidth(scrollPercentage);

    // scroll to top
    const viewportHeight = window.innerHeight;
    if (scrollTop > viewportHeight * 0.4) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // active tab
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <div className="progress-bar" style={{ width: `${scrollWidth}%` }}></div>
      <div
        className={`scroll-to-top ${showScroll ? "show" : ""} text-theme`}
        onClick={scrollToTop}
      >
        <FaArrowUp className="text-bg" />
        <div className="tooltip text-2xl">Scroll to Top</div>
      </div>
      <video
        autoPlay
        muted
        loop
        src={aspectRatio >= 1 ? bgVideo : bgVideo2}
        className="fixed top-0 left-0 object-cover h-screen w-screen -z-[1] opacity-5"
      ></video>
      <Header activeSection={activeSection} />
      <section id="home" className="flex items-center mt-32">
        <Home aspectRatio={aspectRatio} />
      </section>
      <section id="about" className="mb-32 flex items-center">
        <About aspectRatio={aspectRatio} />
      </section>
      <section id="projects" className="flex items-center">
        <Projects aspectRatio={aspectRatio} />
      </section>
      <section id="service" className="flex items-center">
        <Service />
      </section>
      <section id="contact" className="flex items-center">
        <Contact />
      </section>
    </>
  );
}

export default App;
