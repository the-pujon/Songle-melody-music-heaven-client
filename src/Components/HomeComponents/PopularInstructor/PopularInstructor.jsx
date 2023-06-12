import React, { useEffect, useState } from "react";

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";
import InstructorCard from "../../Shared/InstructorCard/InstructorCard";

const PopularInstructor = () => {
  const [popularInstructor, setPopularInstructor] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/instructors")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 6);

        setPopularInstructor(sliceData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-10">
      <SectionTitle title="Popular Instructor" />
      {/*<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit gap-8 mx-auto">
        {popularInstructor.map((card) => (
          <div key={card.name}>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img src={card.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Name: {card.name}</h2>
                <p>Email: {card.email}</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Select Class</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>*/}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        initialSlide={2}
        centeredSlides={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 10,
          slideShadows: true,
        }}
        //pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper w-11/12 mx-auto"
      >
        {popularInstructor.map((card) => (
          <SwiperSlide key={card._id}>
            <InstructorCard
              img={card.image}
              name={card.name}
              email={card.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PopularInstructor;
