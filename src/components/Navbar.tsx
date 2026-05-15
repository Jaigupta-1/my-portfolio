import { useState } from "react";

const OpenMenu = ({ handleFn }) => {
  return (
    <div className="h-52 w-full absolute top-0 right-0 flex flex-col p-1 gap-1 backdrop-blur-lg rounded z-50">
      <i className="ri-close-line self-end pr-10 pt-3" onClick={handleFn}></i>
      <div className="pl-5">
        <a href="#home">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer "
            onClick={handleFn}
          >
            Home
          </li>
        </a>
        <a href="#skills">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer"
            onClick={handleFn}
          >
            Skills
          </li>
        </a>
        <a href="#projects">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer"
            onClick={handleFn}
          >
            My Projects
          </li>
        </a>
        <a href="#about">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer"
            onClick={handleFn}
          >
            About
          </li>
        </a>
        <a href="#contact">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer"
            onClick={handleFn}
          >
            Contact
          </li>
        </a>
      </div>
    </div>
  );
};

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleNavBar = () => {
    openMenu ? setOpenMenu(false) : setOpenMenu(true);
  };
  return (
    // bg-[#202733]
    <div className="bg-[#202733]  text-white text-xl  min-h-[10vh] w-full flex justify-between items-center px-10 fixed top-0 left-0 z-10 ">
      <div className="tracking-wide text-2xl font-bold">
        <a href="#home"><p>Portfolio</p></a>
      </div>
      <div className="">
        <ul className="flex ">
          <a href="#home">
           <li className = "px-3 hidden sm:block hover:text-amber-400 transition duration-300 cursor-pointer">
              Home
            </li>
          </a>
          <a href="#skills">
            <li className="px-3 hidden sm:block hover:text-amber-400 transition duration-300 cursor-pointer">
              Skills
            </li>
          </a>
          <a href="#projects">
            <li className="px-3 hidden sm:block hover:text-amber-400 transition duration-300 cursor-pointer">
              My Projects
            </li>
          </a>
          <a href="#about">
            <li className="px-3 hidden sm:block hover:text-amber-400 transition duration-300 cursor-pointer">
              About
            </li>
          </a>
          <a href="#contact">
            <li className="px-3 hidden sm:block hover:text-amber-400 transition duration-300 cursor-pointer">
              Contact
            </li>
          </a>
          {openMenu ? (
            <OpenMenu handleFn={handleNavBar} />
          ) : (
            <i
              className="ri-menu-line hidden max-sm:block"
              onClick={handleNavBar}
            ></i>
          )}
        </ul>
      </div>
    </div>
  );
};
