import Aos from "aos";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const BoardMembership = ({ item }) => {
  function handleClick() {
    window.open(item.link, "_blank");
  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      onClick={handleClick}
      class="relative hover:cursor-pointer  flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active "
      data-aos="fade-up"
    >
      <div class="flex items-center justify-center  w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
        <svg
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
        >
          <path
            fill-rule="nonzero"
            d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
          />
        </svg>
      </div>
      <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
        <div class="flex items-center justify-between space-x-2 mb-1">
          <div class="font-bold text-slate-900 hover:text-indigo-900">
            {" "}
            {item.journal_name}
          </div>
        </div>
        <div class="font-bold text-indigo-500"> ISSN:{item.issn}</div>
        <div class="text-slate-500">{item.tittle}</div>
      </div>
    </div>
  );
};

export default BoardMembership;
