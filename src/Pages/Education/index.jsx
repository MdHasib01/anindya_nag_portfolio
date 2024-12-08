import React from "react";
import educations from "../../data/education.json";
const Education = () => {
  console.log(educations.education);
  return (
    <div class="w-full max-w-3xl mx-auto mt-28 px-4" id="formation">
      <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        <div className="flex justify-center">
          <div
            className="flex justify-center font-caveat text-indigo-500 font-bold text-4xl border-b border-slate-200 pb-2"
            data-aos="fade-up"
          >
            Formation
          </div>
        </div>
        {educations.education.map((edu) => (
          <div
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
                {edu.degree && (
                  <div class="font-bold text-slate-900 hover:text-indigo-900">
                    {edu.degree}
                  </div>
                )}
                {edu.level && (
                  <div class="font-bold text-slate-900 hover:text-indigo-900">
                    {edu.level}
                  </div>
                )}
              </div>
              {edu.institution && (
                <div class="font-bold text-indigo-500">{edu.institution}</div>
              )}
              {edu.batch && (
                <div class="text-slate-500">Batch: {edu.batch}</div>
              )}
              {edu.session && (
                <div class="text-slate-500">Session: {edu.session}</div>
              )}
              {edu.board && (
                <div class="text-slate-500">Board: {edu.board}</div>
              )}
              {edu.group && (
                <div class="text-slate-500">Group: {edu.group}</div>
              )}
              {edu.passing_year && (
                <div class="text-slate-500">
                  Passing Year: {edu.passing_year}
                </div>
              )}
              {edu.gpa && <div class="text-slate-500">GPA: {edu.gpa}</div>}
              {edu.cgpa && <div class="text-slate-500">CGPA: {edu.cgpa}</div>}
              {edu.status && (
                <div class="text-slate-500">Status: {edu.status}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
