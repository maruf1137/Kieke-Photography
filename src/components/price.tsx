import React from "react";

const Price = () => {
  return (
    <div className="price relative">
      <div className="hero-wrapper max-w-7xl mx-auto px-2 sm:px-3 py-14">
        <div className="heading mb-8 text-center">
          <h2 className="heading text-[#111]">Price</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="price__item bg-white rounded-md py-9 px-7 text-center">
            <h4 className="heading mb-5 break-words">
              Children's photography/family/pregnancy/loveshoot
            </h4>
            <p className="text mb-5">
              The price for this is €50.00 (incl. VAT) and takes approximately
              one hour.For that you get 10/15 edited digital files in large
              format.
            </p>
            <div className="price mb-8">€50.00</div>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="px-8 py-3 shadow-sm text-base font-medium rounded-full text-white bg-[#FE8C45] gap-2">
                Get Purchase
              </a>
            </div>
          </div>
          <div className="price__item bg-[#222] rounded-md py-9 px-7 text-center">
            <h4 className="heading mb-5 text-white break-words">
              Children's photography/family/pregnancy/loveshoot
            </h4>
            <p className="text mb-5 text-white">
              The price for this is €50.00 (incl. VAT) and takes approximately
              one hour.For that you get 10/15 edited digital files in large
              format.
            </p>
            <div className="price mb-8 text-white">€50.00</div>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="px-8 py-3 shadow-sm text-base font-medium rounded-full text-[#222] bg-white gap-2">
                Get Purchase
              </a>
            </div>
          </div>
          <div className="price__item bg-white rounded-md py-9 px-7 text-center">
            <h4 className="heading mb-5 break-words">
              Children's photography/family/pregnancy/loveshoot
            </h4>
            <p className="text mb-5">
              The price for this is €50.00 (incl. VAT) and takes approximately
              one hour.For that you get 10/15 edited digital files in large
              format.
            </p>
            <div className="price mb-8">€50.00</div>
            <div className="flex items-center justify-center">
              <a
                href="#"
                className="px-8 py-3 shadow-sm text-base font-medium rounded-full text-white bg-[#FE8C45] gap-2">
                Get Purchase
              </a>
            </div>
          </div>
        </div>
      </div>

      <img src="/images/circle-1.png" alt="" className="circle circle-1" />
    </div>
  );
};

export default Price;
