import Aos from "aos";
import React, { useEffect } from "react";

const Cources = ({ item, index }) => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div class="relative" key={index}>
      <div class="md:flex items-center md:space-x-4 mb-3" data-aos="fade-up">
        <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
          <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
            <svg
              class="fill-emerald-500"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
            >
              <path d="M8 0a8 8 0 1 0 8 8 8.009 8.009 0 0 0-8-8Zm0 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
            </svg>
          </div>
          <time class="font-caveat font-medium text-xl text-indigo-500 md:w-28">
            Course Topic: {index < 10 ? "0" + (index + 1) : index + 1}
          </time>
        </div>
        <div class="text-slate-500 ml-14">
          <span class="text-slate-900 font-bold">{item}</span>
        </div>
      </div>
    </div>
  );
};

export default Cources;
