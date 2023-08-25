import React, { useState, useEffect, useMemo } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar({ homeRef, aboutRef, resumeRef }) {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState("bg-transparent");

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
  ];

  const scrollIntoRef = (title) => {
    setActive(title);

    switch (title) {
      case "About":
        aboutRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case "Resume":
        resumeRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        homeRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setBackgroundStyle("sm:bg-neutral-800 bg-transparent");
    } else {
      setBackgroundStyle("bg-transparent");
    }
  };

  function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = useMemo(
      () =>
        new IntersectionObserver(([entry]) =>
          setIsIntersecting(entry.isIntersecting)
        ),
      []
    );

    useEffect(() => {
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }, [ref, observer]);

    return isIntersecting;
  }

  const isHomeRefInView = useIsInViewport(homeRef);
  const isAboutRefInView = useIsInViewport(aboutRef);
  const isResumeRefInView = useIsInViewport(resumeRef);

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);

    if (isAboutRefInView) {
      setActive("About");
    } else if (isResumeRefInView) {
      setActive("Resume");
    } else if(isHomeRefInView) {
      setActive("Home");
    }
  }, [isAboutRefInView, isResumeRefInView, isHomeRefInView]);

  return (
    <div className={`sticky top-0 z-50 ${backgroundStyle}`}>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <div className={`sm:hidden flex flex-1 justify-end items-center relative right-2`}>
          {toggle && (
            <XMarkIcon
              className="h-6 w-6 text-white z-50 relative top-5 right-5"
              aria-hidden="true"
              onClick={() => setToggle(false)}
            />
          )}
          {!toggle && (
              <Bars3Icon
                className={`h-6 w-6 text-white z-50 relative top-5 right-5 ${active !== 'Home' ? 'bg-neutral-800' : ''}`}
                aria-hidden="true"
                onClick={() => setToggle(true)}
              />
          )}

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-black-gradient absolute top-1 right-0 mx-4 my-2 min-w-[140px] sidebar bg-neutral-800`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                    index === navLinks.length - 1 ? "mb-0" : "mb-4"
                  }`}
                  onClick={() => scrollIntoRef(nav.title)}
                >
                  <div
                    className={
                      active === nav.title ? "text-red-500" : "text-white"
                    }
                  >
                    {nav.title}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <ul className="list-none sm:flex hidden justify-center items-center flex-1">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursor-pointer text-[16px] ${
                index === navLinks.length - 1 ? "mr-0" : "mr-10"
              }`}
              onClick={() => scrollIntoRef(nav.title)}
            >
              <div
                className={active === nav.title ? "text-red-500" : "text-white"}
              >
                {nav.title}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
