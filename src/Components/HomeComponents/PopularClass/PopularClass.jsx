import React, { useEffect, useState } from "react";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ClassCard from "../../Shared/ClassCard/ClassCard";

const PopularClass = () => {
  const [popularClasses, setPopularClasses] = useState([]);

  useEffect(() => {
    fetch("PopularClass.json")
      .then((res) => res.json())
      .then((data) => {
        setPopularClasses(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-20">
      <SectionTitle title="Popular Classes" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-8 mx-auto">
        {popularClasses.map((card) => (
          <div key={card.instrument}>
            <ClassCard
              img={card.image}
              instructor={card.instructor}
              seats={card.seats}
              price={card.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularClass;
