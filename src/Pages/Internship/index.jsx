import React from "react";
import Footer from "../Home/Footer";

const Internship = () => {
  return (
    <div className="px-4 mx-auto max-w-[1280px] pt-24">
      <img
        src="./img/internship-banner.png"
        className="w-full h-[400px] object-cover mb-10"
        width={100}
      />

      <h3 className="w-full text-3xl font-semibold text-center border-b-2 border-slate-200">
        Internship
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {/* --------------------card 1------------------ */}
        <div className="space-y-4 border rounded p-4 mt-10">
          <h4 className="text-2xl font-bold">
            <span className="text-blue-600">Company Name: </span>
            <span className="font-semibold">NASSCOM Insights & Spotle.ai</span>
          </h4>
          <p className="text-lg">
            <span className="text-blue-600 font-bold">Position: </span>
            <span className="font-semibold">Intern</span>
          </p>
          <p className="text-lg">
            <span className="text-blue-600 font-bold">Location: </span>
            <span className="font-semibold">India</span>
          </p>
          <p className="text-lg">
            <span className="text-blue-600 font-bold">
              Project (Spotle.ai):{" "}
            </span>
            <a
              href="https://spotle.ai/feeddetails/Assignment-Analyze-Crop-Production-of-India/8298"
              className="text-blue-600 underline font-semibold"
              target="_blank"
            >
              Analyze Crop Production of India.
            </a>
          </p>
          <p className="text-lg">
            <span className="text-blue-600 font-bold">
              Article (NASSCOM Community):
            </span>
            <span className="font-semibold">
              <a
                href="https://community.nasscom.in/communities/agritech/ai-agriculture-emerging-era-technology"
                target="_blank"
              >
                AI in Agriculture: An Emerging Era in Technology.
              </a>
            </span>
          </p>

          <a
            href="https://github.com/AnindyaNag/Project---Analyze-Crop-Production-of-India"
            target="_blank"
          >
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
              GitHub Link
            </button>
          </a>
        </div>
        {/* --------------------card 2------------------ */}
        <div className="space-y-4 border rounded p-4 mt-10">
          <h4 className="text-2xl font-bold">
            <span className="text-blue-600">Company Name: </span>
            <span className="font-semibold">Company Name: ShareTM </span>
          </h4>
          <p className="text-lg">
            <span className="text-blue-600 font-bold">Position: </span>
            <span className="font-semibold">Social Media Intern </span>
          </p>
          <p className="text-lg">
            <span className="text-blue-600 font-bold">Location: </span>
            <span className="font-semibold">India</span>
          </p>
          <p className="text-lg">
            <span className="text-blue-600 font-bold">Duration: </span>
            <span className="font-semibold">May 2021 - Jun 2021 </span>
          </p>
          <p className="text-lg">
            Worked as a Social Media Intern and Freelancer in ShareTM ,India.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Internship;
