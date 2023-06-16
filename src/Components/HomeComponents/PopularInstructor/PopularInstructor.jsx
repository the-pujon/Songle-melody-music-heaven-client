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
    fetch("https://backend-songle.vercel.app/instructors")
      .then((res) => res.json())
      .then((data) => {
        const sliceData = data.slice(0, 6);

        setPopularInstructor(sliceData);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="my-10 flex">
      <SectionTitle title1="Popular" title2="Instructors" />

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
