import { useState, useEffect } from "react";
import logo from "../../assets/comingsite2.png";
import logosmalll from "../../assets/comingsite1.png";
import { IconButton, Collapse } from "@material-tailwind/react";

import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavbarHead() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 768 && setOpenNav(false)
    );
  }, [window.innerWidth]);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 ">
      <p className="p-1  text-white text-sm">
        <Link to="/service" className="flex items-center">
          Services
        </Link>
      </p>

      <p className="p-1  text-white text-sm">
        <Link to="/blog" className="flex items-center">
          Blogs
        </Link>
      </p>
      <p className="p-1  text-white text-sm">
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </p>
      <p className="p-1  text-white text-sm">
        <Link to="/team" className="flex items-center">
          Team
        </Link>
      </p>

      <p className="p-1  text-white text-sm">
        <Link to="/portfolio" className="flex items-center">
          Portfolio
        </Link>
      </p>
    </ul>
  );

  const mobileNavList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6 ">
      <p
        onClick={() => setOpenNav(!openNav)}
        className="p-1  text-white text-sm"
      >
        <Link to="/service" className="flex items-center">
          Services
        </Link>
      </p>

      <p
        onClick={() => setOpenNav(!openNav)}
        className="p-1  text-white text-sm"
      >
        <Link to="/blog" className="flex items-center">
          Blogs
        </Link>
      </p>
      <p
        onClick={() => setOpenNav(!openNav)}
        className="p-1  text-white text-sm"
      >
        <Link to="/about" className="flex items-center">
          About
        </Link>
      </p>
      <p
        onClick={() => setOpenNav(!openNav)}
        className="p-1  text-white text-sm"
      >
        <Link to="/team" className="flex items-center">
          Team
        </Link>
      </p>

      <p
        onClick={() => setOpenNav(!openNav)}
        className="p-1  text-white text-sm"
      >
        <Link to="/portfolio" className="flex items-center">
          Portfolio
        </Link>
      </p>
    </ul>
  );

  return (
    <div
      className="top-5 left-0 right-0   px-4 lg:px-8 lg:py-  mb-5 nav-border bg-transparent mx-[20px] xl:max-w-screen-xl xl:mx-auto"
      // style={{
      //   marginLeft: "20px",
      //   marginRight: "20px",
      // }}
    >
      <div className="mx-auto flex items-center justify-between text-white-900 ">
        <Link to="/">
          <div className="sm:flex items-center hidden">
            <img src={logo} alt="mocdt" className="w-14 h-14" />
            <div className="mt-1">
              <p className="text-[7px] text-[#f2f2f2] text-end tracking-widest font-thin">
                an mocdt company
              </p>
              <p className="text text-[#f2f2f2] tracking-widest font-thin">
                COMINGSITE
              </p>
            </div>
          </div>

          <img
            src={logosmalll}
            alt="mocdt"
            className="w-14 h-14 block sm:hidden"
          />
        </Link>

        <div className="flex gap-6 items-center">
          <div className="hidden md:block">{navList}</div>
          <Link to="/contact">
            <button className="hidden md:inline-block  bg-white px-5 py-1.5 rounded-md text-black">
              <span className="font-semibold text-sm">Contact Us</span>
            </button>
          </Link>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent md:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="white"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {mobileNavList}
          <Link to="/contact">
            <button
              className="mb-2 w-full bg-white rounded"
              onClick={() => setOpenNav(!openNav)}
            >
              <span className="text-black">Contact Us</span>
            </button>
          </Link>
        </div>
      </Collapse>
    </div>
  );
}
