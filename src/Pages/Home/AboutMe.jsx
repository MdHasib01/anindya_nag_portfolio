import Aos from "aos";
import { useEffect } from "react";

export default function AboutMe() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  })
  return (
    <section id="AboutMe" className=" flex md:flex-row flex-col gap-4 justify-center items-center px-4 mx-auto max-w-[1280px]">
      <div className="about--section--img" data-aos="fade-right">
        <img src="./img/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box" data-aos="fade-left">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="text-justify text-2xl text-slate-600">
            Hi, I’m Anindya Nag, a lecturer at NUBTK, Bangladesh. I hold a Bachelor’s
            degree from Adamas University, Kolkata, and an MSc in CSE from Khulna University.
          </p>
          <p className="text-justify text-2xl text-slate-600">
            My research focuses on NLP, Artificial Intelligence, IoT,
            Blockchain, Cloud Computing, and Networking Systems.
          </p>
        </div>
      </div>
    </section>
  );
}
