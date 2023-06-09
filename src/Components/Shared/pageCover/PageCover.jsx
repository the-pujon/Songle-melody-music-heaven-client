import React from "react";

const PageCover = ({ img, title, subtitle }) => {
  return (
    <div>
      <div
        className="hero h-96 text-white"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageCover;
