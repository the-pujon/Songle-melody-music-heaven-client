import React, { useEffect, useState } from "react";
import teacher from "../../assets/Header/teacher-1.jpg";
import PageCover from "../../Components/Shared/pageCover/PageCover";
import InstructorCard from "../../Components/Shared/InstructorCard/InstructorCard";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("https://backend-songle.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        setInstructors(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <PageCover
        img={teacher}
        title="Instructors"
        subtitle="A good Instructor is equal to a library"
      />
      <div className="grid grid-cols-1 gap-4 my-10 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto">
        {instructors.map((instructor) => (
          <div>
            <InstructorCard
              img={instructor.image}
              name={instructor.name}
              email={instructor.email}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
