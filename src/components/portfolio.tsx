"use client";
import React, { useEffect, useState } from "react";

const btnsData = [
  "All",
  "Childrens",
  "Potraits",
  "Family",
  "Other Photography",
];

const itemData = [
  {
    categories: "Childrens",
    img: "/images/portfolio-img-1.png",
  },
  {
    categories: "Potraits",
    img: "/images/portfolio-img-2.png",
  },
  {
    categories: "Other Photography",
    img: "/images/portfolio-img-3.png",
  },
  {
    categories: "Childrens",
    img: "/images/portfolio-img-4.png",
  },
  {
    categories: "Family",
    img: "/images/portfolio-img-5.png",
  },
  {
    categories: "Potraits",
    img: "/images/portfolio-img-6.png",
  },
  {
    categories: "Family",
    img: "/images/portfolio-img-7.png",
  },
  {
    categories: "Childrens",
    img: "/images/portfolio-img-8.png",
  },
  {
    categories: "Potraits",
    img: "/images/portfolio-img-9.png",
  },
  {
    categories: "Childrens",
    img: "/images/portfolio-img-10.png",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeItemData, setActiveItemData] = useState(itemData);
  const [isPopup, setIsPopup] = useState(false);
  const [popupImg, setpopupImg] = useState("");

  const handleFilterItem = (btn: any) => {
    setActiveTab(btn);
    const newData = itemData.filter((item) => item.categories == btn);
    if (btn == "All") {
      setActiveItemData(itemData);
    } else {
      setActiveItemData(newData);
    }
  };

  const handlePortfolioPopup = (img: any) => {
    setIsPopup(true);
    setpopupImg(img);
  };

  //   useEffect(() => {
  //     console.log(activeItemData);
  //   }, []);

  return (
    <div className="portfolio relative">
      <div className="hero-wrapper max-w-7xl mx-auto px-2 sm:px-3 py-14">
        <div className="heading mb-8 text-center">
          <h2 className="heading text-[#111]">
            Our <span className="text-[#8A47F6]">Portfolio</span>
          </h2>
        </div>

        <div className="portfolio__nav flex flex-wrap justify-between gap-4 py-6 px-9 bg-white rounded-md mb-8">
          {btnsData.map((btn, i) => {
            return (
              <button
                className={`${
                  activeTab == btn ? "text-[#8A47F6] underline" : ""
                }`}
                key={i}
                onClick={() => handleFilterItem(btn)}>
                {btn}
              </button>
            );
          })}
        </div>

        <div className="portfolio__items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-4 gap-6 md:h-[1095px]">
          {activeItemData.map(({ img }, i) => {
            return (
              <figure
                className="portfolio__item cursor-pointer"
                key={i}
                onClick={() => handlePortfolioPopup(img)}>
                <img
                  src={img}
                  alt=""
                  className="h-full w-full object-cover rounded-md"
                />
              </figure>
            );
          })}
        </div>
      </div>
      <img src="/images/circle-1.png" alt="" className="circle circle-1" />
      <img src="/images/circle-2.png" alt="" className="circle circle-2" />

      <div
        className={`${
          isPopup && "popup-show"
        } popup fixed top-0 left-0 z-[101] flex items-center justify-center h-screen w-full`}>
        <div
          className="overlay fixed top-0 left-0 z-[1] bg-[#000000bb] h-screen w-full"
          onClick={() => setIsPopup(false)}></div>
        <button
          className="absolute top-2 right-2 z-10"
          onClick={() => setIsPopup(false)}>
          <svg className="icon !fill-white !h-10 !w-10">
            <use xlinkHref="/icons.svg#icon-clear"></use>
          </svg>
        </button>
        <img src={popupImg} alt="" className="relative z-10" />
      </div>
    </div>
  );
};

export default Portfolio;
