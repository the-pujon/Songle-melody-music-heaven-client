import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const InstructorCard = ({ img, name, email }) => {
  return (
    <Fade delay={0} duration={500} cascade damping={1e-1}>
      <div className="card card-compact w-80 md:w-96 bg-[color:var(--primaryColor)] shadow-xl rounded-none">
        <figure className="h-64">
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Email: {email}</p>
          <div className="card-actions justify-end">
            {/*<button className="btn btn-primary">Select Class</button>*/}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default InstructorCard;
