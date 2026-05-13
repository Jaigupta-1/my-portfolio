import { useState } from "react";
import { Link } from "react-router-dom";

const OpenMenu = ({ handleFn }) => {
  return (
    <div className=" w-full  flex flex-col p-1 gap-1 backdrop-blur-lg rounded bg-red-300">
      <i className="ri-close-line self-end pr-10 pt-3" onClick={handleFn}></i>
      <div className="pl-5">
        <Link to="/">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer "
            onClick={handleFn}
          >
            Home
          </li>
        </Link>
        <Link to="/skills">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer"
            onClick={handleFn}
          >
            Skills
          </li>
        </Link>
        <Link to="/projects">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer"
            onClick={handleFn}
          >
            My Projects
          </li>
        </Link>
        <Link to="/about">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer"
            onClick={handleFn}
          >
            About
          </li>
        </Link>
        <Link to="/contact">
          <li
            className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer"
            onClick={handleFn}
          >
            Contact
          </li>
        </Link>
      </div>
    </div>
  );
};

export const Navbar1 = () => {
  const [openMenu, setOpenMenu] = useState(false);
  //   const handleNavBar = () => {
  //     openMenu ? setOpenMenu(false) : setOpenMenu(true);
  //   };
  return (
    <div className=" bg-[#202733] text-white text-xl  h-[10vh] w-full flex justify-between items-center px-10" onMouseLeave={() => setOpenMenu(false)}>
      <div className="tracking-wide text-2xl font-bold">
        <p>Portfolio</p>
      </div>
      <div className="hidden sm:block">
        <ul className="flex ">
          <Link to="/">
            <li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/skills">
            <li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">
              Skills
            </li>
          </Link>
          <Link to="/projects">
            <li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">
              My Projects
            </li>
          </Link>
          <Link to="/about">
            <li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="px-3 hover:text-amber-400 transition duration-300 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="sm:hidden transition ease-in-out duration-300 cursor-pointer" onClick={() => setOpenMenu(!openMenu)} >
        {/* {openMenu ? (
        <OpenMenu handleFn={handleNavBar} />
      ) : (
        <i
          className="ri-menu-line hidden max-sm:block"
          onClick={handleNavBar}
        ></i>
      )} */}
        {!openMenu ? <i className="ri-menu-line"></i> : "X"}
      </div>
    </div>
  );
};
