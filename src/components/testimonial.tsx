"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css";

const Testimonial = () => {
  return (
    <div className="testimonial relative bg-[#8a47f613] about">
      <div className="hero-wrapper max-w-7xl mx-auto px-2 sm:px-3 py-14 overflow-hidden">
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={{
            nextEl: ".testimonial-swiper-button-next",
            prevEl: ".testimonial-swiper-button-prev",
          }}
          className="!overflow-visible hero-slider">
          {[1, 2, 3].map((item) => {
            return (
              <SwiperSlide key={item}>
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-14 items-center">
                  <div className="content">
                    <p className="text sub-title mb-3 flex items-center gap-2 justify-center lg:justify-start">
                      <span className="line"></span>
                      Testimonials
                    </p>
                    <h2 className="heading mb-6 text-center lg:text-left">
                      What Our Clients Say
                    </h2>
                    <p className="text mb-6 text-center lg:text-left">
                      This photography website is a true gem for anyone who
                      appreciates artistry and storytelling through the lens.
                      The images are awe-inspiring, and the website provides an
                      engaging and immersive experience. With a few minor
                      enhancements in user-friendliness and performance, it
                      could become an even more exceptional platform for
                      showcasing photography talent.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-3 sm:gap-8">
                      <div className="profile bg-[#8a47f624] p-1 pr-6 rounded-full flex items-center gap-4">
                        <img src="/images/profile.png" alt="" />
                        <p className="name text-[22px] text-[#333]">
                          Amane Indahnya
                        </p>
                      </div>
                      <div className="btns flex items-center gap-[10px]">
                        <button className="testimonial-swiper-button-prev cursor-pointer btn-testimonial-slider h-11 w-11 rounded-full border border-[#333] flex items-center justify-center text-[#333]">
                          <svg className="icon !fill-current">
                            <use xlinkHref="/icons.svg#icon-arrow-left"></use>
                          </svg>
                        </button>
                        <button className="testimonial-swiper-button-next cursor-pointer btn-testimonial-slider h-11 w-11 rounded-full border border-[#333] flex items-center justify-center">
                          <svg className="icon !fill-current">
                            <use xlinkHref="/icons.svg#icon-arrow-right"></use>
                          </svg>
                        </button>
                      </div>
                    </div>
                    {/* <div className="flex items-center justify-center lg:justify-start">
                      <a
                        href="#"
                        className="px-8 py-3 shadow-sm text-base font-medium rounded-full text-white bg-[#FE8C45] gap-2">
                        See Our Portfolio
                      </a>
                    </div> */}
                  </div>
                  <div className="image-area">
                    <figure className="w-full h-full">
                      <img
                        src="/images/testimonial-img-1.png"
                        className="h-full w-full"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className="group testimonial-swiper-button-prev swiper-button-prev shadow-white-volume absolute !top-1/2 !-left-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-left-6 after:hidden">
          left
        </div>
        <div className="group testimonial-swiper-button-next swiper-button-next shadow-white-volume absolute !top-1/2 !-right-4 z-10 -mt-6 flex !h-12 !w-12 cursor-pointer items-center justify-center rounded-full bg-white p-3 text-jacarta-700 text-xl sm:!-right-6 after:hidden">
          right
        </div> */}
        {/* <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="content">
            <p className="text sub-title mb-3 flex items-center gap-2 justify-center lg:justify-start">
              <span className="line"></span>
              Testimonials
            </p>
            <h2 className="heading mb-6 text-center lg:text-left">
              What Our Clients Say
            </h2>
            <p className="text mb-6 text-center lg:text-left">
              This photography website is a true gem for anyone who appreciates
              artistry and storytelling through the lens. The images are
              awe-inspiring, and the website provides an engaging and immersive
              experience. With a few minor enhancements in user-friendliness and
              performance, it could become an even more exceptional platform for
              showcasing photography talent.
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="#"
                className="px-8 py-3 shadow-sm text-base font-medium rounded-full text-white bg-[#FE8C45] gap-2">
                See Our Portfolio
              </a>
            </div>
          </div>
          <div className="image-area">
            <figure className="w-full h-full">
              <img
                src="/images/testimonial-img-1.png"
                className="h-full w-full"
                alt=""
              />
            </figure>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Testimonial;
