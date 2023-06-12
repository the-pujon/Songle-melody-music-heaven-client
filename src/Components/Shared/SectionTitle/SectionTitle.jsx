import React from "react";
import { Fade } from "react-awesome-reveal";

import { GiPickOfDestiny, GiSpadeSkull } from "react-icons/gi";
import { SiPeakdesign } from "react-icons/Si";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-8">
      <Fade
        delay={100}
        cascade
        duration={500}
        damping={1e-1}
        className="flex text-2xl"
      >
        <GiPickOfDestiny />
        <SiPeakdesign />
        <SiPeakdesign />
        <SiPeakdesign />
      </Fade>
      <Fade
        delay={600}
        cascade
        duration={500}
        damping={1e-1}
        className="text-4xl font-semibold uppercase"
      >
        {title}
      </Fade>
      <Fade
        delay={1500}
        cascade
        duration={500}
        damping={1e-1}
        className="flex text-2xl"
      >
        <SiPeakdesign />
        <SiPeakdesign />
        <SiPeakdesign />
        <GiPickOfDestiny />
      </Fade>
    </div>
  );
};

export default SectionTitle;
