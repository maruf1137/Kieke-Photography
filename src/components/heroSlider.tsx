"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import { Pagination } from "swiper/modules";
import "swiper/css";

const sliderData = ["/images/hero-item-1.png", "/images/hero-item-2.png"];

const HeroSlider = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        className="!overflow-visible hero-slider">
        {sliderData.map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                src={item}
                alt=""
                className="md:h-[680px] w-full rounded-md"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
