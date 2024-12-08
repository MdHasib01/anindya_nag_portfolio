import React from "react";
import educations from "../data/education.json";

const Awards = () => {
  const award = [
    {
      tittle: "Dean's List",
      description:
        "The Dean’s list is prepared taking outstanding scholars based on academic performances of @ADAMAS University",
      link: "https://adamasuniversity.ac.in/",
    },
    {
      tittle: "Adamas University Scholarship Award",
      description:
        "Merit Scholarship based on academic performances 2020-2021 Session. ",
    },
  ];
  console.log(educations.education);
  return (
    <div class="w-full max-w-3xl mx-auto mt-28 px-4" id="formation">
      <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="flex justify-center">
          <div
            className="flex justify-center font-caveat text-indigo-500 font-bold text-4xl border-b border-slate-200 pb-2"
            data-aos="fade-up"
          >
            Awards & Honors
          </div>
        </div>

        <div
          class="relative hover:cursor-pointer  flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active "
          data-aos="fade-up"
        >
          <div class="flex items-center justify-center  w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M2.5.5A.5.5 0 013 0h10a.5.5 0 01.5.5c0 .538-.012 1.05-.034 1.536a3 3 0 11-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 01-.3.9H3a.5.5 0 01-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 11-1.132-5.89A33.076 33.076 0 012.5.5zm.099 2.54a2 2 0 00.72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 00.72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
            </svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-indigo-500">Dean's List</div>
            </div>
            <div class="font-bold text-slate-900 hover:text-indigo-900">
              The Dean’s list is prepared taking outstanding scholars based on
              academic performances of{" "}
              <a
                href="https://adamasuniversity.ac.in/"
                className="text-blue-600 underline"
                target="_blank"
              >
                @ADAMAS University.
              </a>
            </div>
          </div>
        </div>
        {/* Award -2 -------------------- */}
        <div
          class="relative hover:cursor-pointer  flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active "
          data-aos="fade-up"
        >
          <div class="flex items-center justify-center  w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-emerald-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="1em"
              width="1em"
            >
              <path d="M2.5.5A.5.5 0 013 0h10a.5.5 0 01.5.5c0 .538-.012 1.05-.034 1.536a3 3 0 11-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 01-.3.9H3a.5.5 0 01-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 11-1.132-5.89A33.076 33.076 0 012.5.5zm.099 2.54a2 2 0 00.72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 00.72-3.935c-.133 1.59-.388 2.885-.72 3.935z" />
            </svg>
          </div>
          <div class="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
            <div class="flex items-center justify-between space-x-2 mb-1">
              <div class="font-bold text-indigo-500">
                Adamas University Scholarship Award
              </div>
            </div>
            <div class="font-bold text-slate-900 hover:text-indigo-900">
              Merit Scholarship based on academic performances 2020-2021
              Session.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
