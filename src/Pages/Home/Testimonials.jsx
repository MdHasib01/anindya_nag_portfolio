import { useEffect } from "react";
import data from "../../data/refrences.json";
import Aos from "aos";

export default function Testimonial() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  })
  return (
    <section
      className=" px-4 mx-auto max-w-[1280px] pt-24"
      id="testimonial"
    >
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <h2 className="sections--heading mb-8 text-4xl" data-aos="fade-up">References</h2>
        </div>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {data?.references?.map((item, index) => (
          <div
            key={index}
            className="border border-indigo-700 rounded p-4 drop-shadow shadow-lg hover:shadow-xl"
            data-aos="fade-up"  
          >
            <p className="font-bold">{item.name}</p>
            <p className="text-slate-500 ">{item.designation}</p>
            <p className="text-slate-500 ">{item.department}</p>
            <p className="text-slate-500 ">
              {item.institution}, {item.location}
            </p>
            <p className="text-slate-500 ">Email: {item.email}</p>
           { item.relationship &&<p className="text-slate-500 ">Relationship: {item.relationship}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}
