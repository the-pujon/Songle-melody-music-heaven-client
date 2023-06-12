import React, { useEffect, useState } from "react";
import PageCover from "../../Components/Shared/pageCover/PageCover";
import class1 from "../../assets/Header/class1.jpg";
import ClassCard from "../../Components/Shared/ClassCard/ClassCard";
import useClasses from "../../Hooks/useClasses";

const Classes = () => {
  const [allClasses] = useClasses();

  return (
    <div>
      <PageCover img={class1} title="Classes" subtitle="You can learn" />
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
        {allClasses.map((card) => (
          <div key={card._id}>
            <ClassCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
