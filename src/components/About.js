import React from "react";
import mihirPic from "../styles/images/mihir-cropped.png";

export default function About({ aboutRef }) {
  return (
    <div className="bg-neutral-800 h-80 text-center">
      <div
        ref={aboutRef}
        className="flex flex-row items-center text-center justify-center pt-24 sm:gap-40 gap-12 relative sm:right-5 sm:px-0 px-[25px]"
      >
        <img className="w-32" src={mihirPic} alt="mihir" />
        <div className="text-left sm:w-[510px] w-[300px]">
          <div className="text-white sm:text-3xl text-2xl">About me</div>
          <p className="text-white sm:text-lg text-xs">
            I am full-stack engineer and 2021 NJIT Alumni who loves working with
            both fron-end and back-end technologies! In my free time, I enjoy
            hiking and playing basketball.
          </p>
        </div>
      </div>
    </div>
  );
}
