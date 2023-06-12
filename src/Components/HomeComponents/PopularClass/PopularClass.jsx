import React, { useEffect, useState } from "react";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ClassCard from "../../Shared/ClassCard/ClassCard";
import { Fade } from "react-awesome-reveal";

const PopularClass = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/classes")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 6);

        setPopularClasses(sliceData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-20">
      <SectionTitle title="Popular Classes" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-8 mx-auto">
        {popularClasses.map((card) => (
          <div key={card._id}>
            <ClassCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
