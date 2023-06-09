import React from "react";

const ClassCard = ({ img, instructor, seats, price }) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-none">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <p>Instructor: {instructor}</p>
          <p>Seats: {seats}</p>
          <p>Price: {price}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline  hover:bg-[color:var(--hoverColor2)] border-2 border-black rounded-none">
              Select Class
            </button>
            {/*<button className="btn btn-wide rounded-none text-white bg-[color:var(--secondaryColor)] hover:bg-[color:var(--hoverColor1)] border-0">
              Select Class
            </button>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
