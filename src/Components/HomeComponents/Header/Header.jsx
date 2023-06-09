import React from "react";

import banner1 from "../../../assets/Header/guitar.jpg";
import banner2 from "../../../assets/Header/piano.webp";
import banner3 from "../../../assets/Header/ukulele.webp";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Banner from "../Banner/Banner";

const Header = () => {
  return (
    <div>
      <>
        <Swiper
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          effect={"fade"}
          //navigation={true}
          //pagination={{
          //  clickable: true,
          //}}
          modules={[EffectFade, Autoplay, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/*<img src={banner1} />*/}
            <Banner image={banner1} title="lorem ipsum dolor" />
          </SwiperSlide>
          <SwiperSlide>
            {/*<img src={banner2} />*/}
            <Banner image={banner2} title="lorem ipsum dolor" />
          </SwiperSlide>
          <SwiperSlide>
            {/*<img src={banner3} />*/}
            <Banner image={banner3} title="lorem ipsum dolor" />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Header;
