import React from "react";
import { Fade } from "react-awesome-reveal";

import { GiPickOfDestiny, GiSpadeSkull } from "react-icons/gi";
import { SiPeakdesign } from "react-icons/Si";

const SectionTitle = ({ title1, title2 }) => {
  return (
    <div className="ms-3 md:ms-8 my-8">
      <Fade
        delay={100}
        cascade
        duration={500}
        damping={1e-1}
        className="text-4xl md:text-7xl text-[color:var(--secondaryColor)] font-bold uppercase"
      >
        {title1}
      </Fade>
      <Fade
        delay={300}
        cascade
        duration={500}
        damping={1e-1}
        className="text-4xl md:text-7xl text-[color:var(--secondaryColor)] font-bold uppercase"
      >
        {title2}
      </Fade>
    </div>
  );
};

export default SectionTitle;
