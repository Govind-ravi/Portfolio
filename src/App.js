import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import bgVideo from "./assests/BgVideo.mp4";
import bgVideo2 from "./assests/BgVideo2.mp4";
import About from "./components/About";
import Projects from "./components/Projects";
import Service from "./components/Service";
import Contact from "./components/Contact";

function App() {
  const navbarRef = useRef(null);

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const [aspectRatio, setAspectRatio] = useState(width / height);

  useEffect(() => {
    const updateWindow = () => {
      if (navbarRef.current) {
        const navberHeight = navbarRef.current.offsetHeight;
        document.documentElement.style.setProperty("--section-height", `calc(100vh - ${navberHeight}px)`)
        document.documentElement.style.setProperty("--mobileSection-height", `calc(100svh - ${navberHeight}px)`)
      }
      const newWidth = window.innerWidth
      const newHeight = window.innerHeight
      setWidth(newWidth);
      setHeight(newHeight);
      setAspectRatio(newWidth / newHeight);
    };

    // Update height initially
    updateWindow();

    // Add resize event listener to update height on window resize
    window.addEventListener("resize", updateWindow);

    // Clean up event listener
    return () => {
      window.removeEventListener("resize", updateWindow);
    };
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("id");
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`
              );
            });
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    const handleSmoothScroll = (event) => {
      if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      document.removeEventListener("click", handleSmoothScroll);
    };
  }, []);


  return (
    <>
      <video
        autoPlay
        muted
        loop
        src={aspectRatio >= 1 ? bgVideo : bgVideo2}
        className="fixed top-0 left-0 object-cover h-screen w-screen -z-[1]"
      ></video>
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-[rgba(40,40,40,0.9)]"></div>
      <div className="fixed h-[200px] glassEffect w-[max(500vw,500vh)]">
        <hr className="my-4 h-2 bg-white/50 w-full" />
      </div>
      <div className="App relative z-[1] h-screen flex flex-col">
        <Header ref={navbarRef} />  
        <main className="flex-col">
          <section id="home">
            <Home />
          </section>
          <div className="separator bg-white/20 h-3 my-8 shadow-md shadow-black/70"/>
          <section id="about">
            <About />
          </section>
          <div className="separator bg-white/20 h-3 my-8 shadow-md shadow-black/70"/>
          <section id="projects" className="mb-8">
            <Projects />
          </section>
          <div className="separator bg-white/20 h-3 my-8 shadow-md shadow-black/70"/>
          <section id="service" className="mb-8">
            <Service />
          </section>
          <div className="separator bg-white/20 h-3 my-8 shadow-md shadow-black/70"/>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
