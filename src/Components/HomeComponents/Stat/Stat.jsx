import React from "react";
import { Fade } from "react-awesome-reveal";

const Stat = () => {
  return (
    <Fade className="flex items-center justify-center my-8">
      <div className="stats stats-vertical lg:stats-horizontal  shadow-2xl w-3/5">
        <div className="stat flex flex-col items-center">
          <div className="stat-title">Videos</div>
          <Fade delay={0} cascade damping={1e-1} className="stat-value">
            500+
          </Fade>
          {/*<div className="stat-desc">Jan 1st - Feb 1st</div>*/}
        </div>

        <div className="stat flex flex-col items-center">
          <div className="stat-title">Instructors</div>
          <Fade delay={0} cascade damping={1e-1} className="stat-value">
            40+
          </Fade>
          {/*<div className="stat-desc">↗︎ 400 (22%)</div>*/}
        </div>

        <div className="stat flex flex-col items-center">
          <div className="stat-title">Students</div>
          <Fade delay={0} cascade damping={1e-1} className="stat-value">
            1,200+
          </Fade>
          {/*<div className="stat-desc">↘︎ 90 (14%)</div>*/}
        </div>
      </div>
    </Fade>
  );
};

export default Stat;
