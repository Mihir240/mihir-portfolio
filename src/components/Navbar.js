import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "resume",
      title: "Resume",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  return (
    <div className=''>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <div className="sm:hidden flex flex-1 justify-end items-center relative right-2">

             { toggle && <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true"  onClick={() => setToggle(false)}/> }
              { !toggle && <Bars3Icon className="h-6 w-6 text-white" aria-hidden="true" onClick={()=> setToggle(true)} /> }

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-1 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                  onClick={() => setActive(nav.title)}
                >
                  <a className={active === nav.title ? 'text-red-500': 'text-white'} href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
            {navLinks.map((nav, index) => (
            <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                onClick={() => setActive(nav.title)}
            >
                <a className={active === nav.title ? 'text-red-500': 'text-white'} href={`#${nav.id}`}>{nav.title}</a>
            </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
