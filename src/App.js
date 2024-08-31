import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import bgVideo from "./assests/BgVideo.mp4";
import About from "./components/About";

function App() {
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
        src={bgVideo}
        className="fixed top-0 left-0 w-full -z-[1]"
      ></video>
      <div className="fixed top-0 left-0 w-full h-full z-0 bg-[rgba(40,40,40,0.9)]"></div>
      <div className="App relative z-[1] h-screen flex flex-col">
        <Header />
        <main className="flex flex-col">
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">My Projects</section>
        </main>
      </div>
    </>
  );
}

export default App;
