import React, { useEffect } from "react";
import experience from "../../data/experience.json";
import WorkExperience from "./WorkExperience";
import Cources from "./Cources";
import BoardMembership from "./BoardMembership";
import Aos from "aos";
import { Typewriter } from "react-simple-typewriter";
const Experience = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <main
      id="experience"
      class=" min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden"
    >
      <div class="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex justify-center">
          <div className="portfolio--container">
            <h2 className="skills--section--heading" data-aos="fade-left">
              My{" "}
              <span className="text-indigo-500">
                <Typewriter
                  words={["Experience"]}
                  loop={5}
                  cursor
                  cursorStyle=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />{" "}
              </span>
            </h2>
          </div>
        </div>
        <div class="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
          <div class="w-full max-w-3xl mx-auto">
            <div class="-my-6">
              {experience.work_experience.map((item, index) => (
                <WorkExperience item={item} key={index} />
              ))}
            </div>
          </div>

          <div class="w-full flex justify-center max-w-3xl mx-auto">
            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              <div className="flex justify-center font-caveat text-indigo-500 font-bold text-4xl border-b border-slate-200 pb-2">
               C<Typewriter
                  words={["ourse Conducted:"]}
                  loop={5}
                  cursor
                  cursorStyle=""
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />{" "}
              </div>
              {experience.courses_conducted.map((item, index) => (
                <Cources item={item} index={index} key={index} />
              ))}
            </div>
          </div>

          <div class="w-full max-w-3xl mx-auto">
            <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              <div className="flex justify-center">
                <div
                  className="flex justify-center font-caveat text-indigo-500 font-bold text-4xl border-b border-slate-200 pb-2"
                  data-aos="fade-up"
                >
                  B<Typewriter
                    words={["oard Memberships:"]}
                    loop={5}
                    cursor
                    cursorStyle=""
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </div>
              </div>
              {experience.board_memberships.map((item, index) => (
                <BoardMembership item={item} key={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Experience;
