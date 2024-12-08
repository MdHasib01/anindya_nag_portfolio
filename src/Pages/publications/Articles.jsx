import React from "react";

import { Link } from "react-router-dom";
const Articles = ({ items, title, subtitle }) => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-600">
              <h3 className="text-2xl font-semibold">{title}</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-600">
                {subtitle}
              </span>
            </div>
          </div>

          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
              {items.map((article, index) => (
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-600">
                  <h3 className="text-xl font-semibold tracking-wide">
                    {index + 1}. [{article.type}] Tittle: {article.title}
                  </h3>
                  <div className="flex flex-wrap">
                    <span className="mr-1 font-bold">Authors:</span>
                    {article.authors &&
                      article.authors.map((author, index) =>
                        author == "Anindya Nag" ? (
                          <p
                            key={index}
                            className=" text-gray-600 font-bold mr-1"
                          >
                            {` ${author}${
                              index < article.authors.length - 1 ? ", " : "."
                            }`}
                          </p>
                        ) : (
                          <p key={index} className="text-gray-600 mr-1">
                            {` ${author}${
                              index < article.authors.length - 1 ? ", " : "."
                            }`}
                          </p>
                        )
                      )}
                    {article.editors &&
                      article.editors.map((editor, index) =>
                        editor == "Anindya Nag" ? (
                          <p
                            key={index}
                            className=" text-gray-600 font-bold mr-1"
                          >
                            {` ${editor}${
                              index < article.editors.length - 1 ? ", " : "."
                            }`}
                          </p>
                        ) : (
                          <p key={index} className="text-gray-600 mr-1">
                            {` ${editor}${
                              index < article.editors.length - 1 ? ", " : "."
                            }`}
                          </p>
                        )
                      )}
                  </div>
                  {article.doi && (
                    <Link target="_blank" to={article.doi} className="mt-3">
                      <span className="mr-1 font-bold text-black">DOI: </span>
                      <span className=" text-blue-500 underline">
                        {" "}
                        {article.doi}
                      </span>
                    </Link>
                  )}
                  {article.book && <p className="mt-3">{article.book}</p>}
                  {article.journal_info && (
                    <p className="mt-3">{article.journal_info}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;
