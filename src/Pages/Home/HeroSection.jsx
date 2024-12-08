import { Typewriter } from "react-simple-typewriter";
import Logo from "../../components/Logo";
import data from "../../data/index.json";
import { useEffect } from "react";
import Aos from "aos";
export default function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="heroSection"
      className="container px-4 mx-auto max-w-[1280px] pt-24"
    >
      <div className="grid md:grid-cols-5 gap-4">
        <div data-aos="fade-right" className="md:col-span-3 flex items-center">
          <div>
            <div className="flex md:items-start flex-col items-center">
              <p className="col-span-3 text-3xl font-bold text-blue-600">
                Hey, I'm{" "}
              </p>
              <h1 className="">
                <div>
                  <span className={`text-5xl text-blue-600 font-bold `}>
                    <Typewriter
                      words={["Anindya"]}
                      loop={1}
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />{" "}
                  </span>
                  <span className={`text-5xl text-black font-bold `}>
                    <Typewriter
                      words={["", "Nag"]}
                      loop={1}
                      cursor
                      cursorStyle=""
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>
              </h1>
              <p className=" mb-6 text-justify text-lg">
                Currently a lecturer at NUBTK,I hold a B.Tech from Adamas
                University and an MSc in Computer Science from Khulna
                University.
              </p>
            </div>
            <a
              href="https://drive.google.com/file/d/1MZb07r7gf04KR2uCyfoL7hkgnkaBb3ZJ/"
              target="_blank"
              download="Md_Hasib_Resume.pdf"
              className="w-full flex justify-center md:justify-start"
            >
              <button className="btn btn-primary">Download Resume</button>
            </a>
          </div>
        </div>
        <div className="md:col-span-2 " data-aos="fade-left">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </div>
    </section>
  );
}
