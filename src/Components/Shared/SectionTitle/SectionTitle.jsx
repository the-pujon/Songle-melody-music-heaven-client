import React from "react";

import { GiPickOfDestiny, GiSpadeSkull } from "react-icons/gi";
import { SiPeakdesign } from "react-icons/Si";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center justify-center my-8">
      <span className="flex text-2xl">
        <GiPickOfDestiny />
        <SiPeakdesign />
        <SiPeakdesign />
        <SiPeakdesign />
      </span>
      <span className="text-4xl font-semibold uppercase">{title}</span>
      <span className="flex text-2xl">
        <SiPeakdesign />
        <SiPeakdesign />
        <SiPeakdesign />
        <GiPickOfDestiny />
      </span>
    </div>
  );
};

export default SectionTitle;
