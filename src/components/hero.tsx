import React from "react";
import HeroSlider from "./heroSlider";

const Hero = () => {
  return (
    <>
      <div className="hero pt-28 pb-14 bg-white">
        <div className="hero-wrapper max-w-7xl mx-auto px-2 sm:px-3">
          <div className="lg:grid lg:grid-cols-12 lg:gap-4 items-center">
            <div className="content lg:col-span-5 mb-10 lg:mb-0">
              <h1 className="heading text-center lg:text-left">
                CAPTURING MOMENTS <span className="text-[#8A47F6]">IN</span>{" "}
                TIME
              </h1>
              <p className="text mb-10 text-center lg:text-left">
                A Glimpse into the Past, a Snapshot of the Present.
              </p>
              <div className="flex items-center justify-center lg:justify-start">
                <a
                  href="#"
                  className="px-8 py-3 shadow-sm text-base font-medium rounded-full text-white bg-[#FE8C45] gap-2">
                  Get Started
                </a>
              </div>
            </div>
            <div className="image-area lg:col-span-7">
              {/* hero slider */}
              <HeroSlider />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
