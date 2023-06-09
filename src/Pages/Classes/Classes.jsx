import React, { useEffect, useState } from "react";
import PageCover from "../../Components/Shared/pageCover/PageCover";
import class1 from "../../assets/Header/class1.jpg";
import ClassCard from "../../Components/Shared/ClassCard/ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    fetch("Classes.json")
      .then((res) => res.json())
      .then((data) => {
        setClasses(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <PageCover img={class1} title="Classes" subtitle="You can learn" />
      <div className="grid my-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto">
        {classes.map((card) => (
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

export default Classes;
