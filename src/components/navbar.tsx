"use client";
import Link from "next/link";
import React, { useState } from "react";

const navData = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "About Us",
    url: "/",
  },
  {
    id: 3,
    title: "Portfolio",
    url: "/",
  },
  {
    id: 3,
    title: "Prices",
    url: "/",
  },
  {
    id: 3,
    title: "Contact Us",
    url: "/",
  },
];

const Navbar = () => {
  const [mblNav, setMblNav] = useState<boolean>(false);

  const showMblNav = (): void => {
    setMblNav(true);
  };
  const hideMblNav = (): void => {
    setMblNav(false);
  };
  return (
    <div className="navbar z-10 fixed top-0 left-0 w-full bg-transparent">
      <div className="navbar-wrapper flex justify-between items-center gap-2 py-3 px-10 max-w-[1400px] mx-auto ">
        <Link href="/">
          <img src="images/logo.png" alt="LOGO" />
        </Link>
        {/* DAO Ecosystem Audits Partners */}

        <div
          className={`main-nav !w-full sm:!w-1/2 lg:!w-auto ${
            mblNav && "show-nev"
          }`}>
          <button
            type="button"
            className="inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-[#333] bg-transparent lg:hidden"
            onClick={hideMblNav}>
            <svg className="icon !h-6 !w-6 absolute top-8 left-8">
              <use xlinkHref="/icons.svg#icon-clear"></use>
            </svg>
          </button>
          <ul className="navbar-list flex items-center gap-6">
            {navData.map(({ id, title, url }) => {
              return (
                <li className="link" onClick={hideMblNav} key={id}>
                  <Link href={url} className="text-[#333] font-medium">
                    {title}
                  </Link>
                </li>
              );
            })}
          </ul>
          <a
            href="#"
            className="flex justify-center items-center px-4 py-2 shadow-sm text-base font-medium rounded-md text-white bg-[#FE8C45] gap-2 sm:hidden mt-8">
            Get Started
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#"
            className="hidden justify-center items-center px-8 py-3 shadow-sm text-base font-medium rounded-full text-white bg-[#FE8C45] gap-2 sm:flex">
            Get Started
          </a>
          <button
            type="button"
            className="inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-full shadow-sm text-white bg-transparent lg:hidden"
            onClick={showMblNav}>
            <svg className="icon !h-6 !w-6 !fill-[#333]">
              <use xlinkHref="/icons.svg#icon-bars"></use>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
