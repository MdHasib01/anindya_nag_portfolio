import React from "react";
import Articles from "./Articles";
import publications from "../../data/publications.json";

const Publications = () => {
  return (
    <div id="publications">
      <img
        src="./img/publications-header.jpg"
        alt=""
        className="w-full mt-16 mb-10"
        width={100}
      />
      <div className="flex justify-center">
        <div className="portfolio--container">
          <h2 className="text-5xl font-bold text-indigo-500">Publications</h2>
        </div>
      </div>
      <Articles
        items={publications.publishedArticles}
        title="Published Articles"
        subtitle="My Published articles"
      />
      <Articles items={publications.accepted} title="Accepted " />
      <Articles items={publications.edited_books} title="Edited Books" />
    </div>
  );
};

export default Publications;
