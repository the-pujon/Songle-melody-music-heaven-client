import React from "react";

import "./Banner.scss";
import { Fade } from "react-awesome-reveal";

const Banner = ({ image, title }) => {
  return (
    <div>
      <div
        className=" min-h-screen banner flex items-center space-y-14 "
        style={{
          backgroundImage: `url(${image}), linear-gradient(90deg, rgba(6,59,65,1) 30%, rgba(0,212,255,0) 100%)`,
        }}
      >
        {/*<div className="hero-overlay bg-opacity-60"></div>*/}
        <div className="  text-[color:var(--primaryColor)] uppercase  ">
          <Fade
            delay={0}
            cascade
            duration={2000}
            damping={1e-1}
            className=" text-6xl leading-tight md:text-8xl  font-bold flex flex-col"
          >
            <span>WELCOME To</span>

            <span className="my-0"> Songle </span>
            <span>Melody</span>

            <span>MUSIC </span>
            <span>HEAVEN</span>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Banner;
