import React, { useState } from "react";
import "./Hero.css";

const Hero = ({ handelSearch }) => {
  const [inputText, setInputText] = useState("");
  return (
    <section className="py-40 banner-section">
      <div className="w-[768px] mx-auto text-center">
        <h1 className="text-7xl font-bold text-white mb-6">
          Taste Our Delicious Best Foods
        </h1>
        <p className="text-xl font-semibold text-white mb-4">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected humou.
        </p>

        <div className="form-control">
          <div className="input-group">
            <input
              type="text"
              placeholder="Search Meal…"
              className="input input-bordered w-full"
              onChange={(e) => setInputText(e.target.value)}
            />
            <button
              onClick={() => handelSearch(inputText)}
              className="btn btn-square btn-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
