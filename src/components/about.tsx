import React from "react";

const About = () => {
  return (
    <div className="bg-[#8a47f613] about">
      <div className="hero-wrapper max-w-7xl mx-auto px-2 sm:px-3 py-14">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="image-area hidden lg:grid grid-cols-2 gap-4">
            <figure className="w-full h-full">
              <img
                src="/images/about-img-1.png"
                className="h-full w-full"
                alt=""
              />
            </figure>
            <div className="flex flex-col gap-4">
              <figure className="h-full w-full">
                <img
                  src="/images/about-img-2.png"
                  className="h-full w-full"
                  alt=""
                />
              </figure>
              <figure className="h-full w-full">
                <img
                  src="/images/about-img-3.png"
                  className="h-full w-full"
                  alt=""
                />
              </figure>
            </div>
          </div>
          <div className="content">
            <p className="text sub-title mb-3 flex items-center gap-2 justify-center lg:justify-start">
              <span className="line"></span>
              About Us
            </p>
            <h2 className="heading mb-6 text-center lg:text-left">
              We Are Very <span className="text-[#8A47F6]">Skilled</span> In{" "}
              <span className="text-[#8A47F6]">Photography</span>
            </h2>
            <p className="text mb-6 text-center lg:text-left">
              Hi, I'm Angelique and photography is my passion! My father passed
              on the “photographer virus” to me. From analogue to digital. I
              have taken a number of courses and workshops and, above all,
              practiced a lot! My children are now used to modeling. Perhaps
              that is where the penchant for taking photos of children comes
              from. The pure appearance and enthusiasm of children. It's always
              fun! <br />
              <br />
              “Photography is the art of frozen time… the ability to store
              emotions and feelings within a frame.”
            </p>
            <div className="flex items-center justify-center lg:justify-start">
              <a
                href="#"
                className="px-8 py-3 shadow-sm text-base font-medium rounded-full text-white bg-[#FE8C45] gap-2">
                See Our Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
