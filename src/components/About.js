import React from "react";
import mihirPic from '../styles/images/mihir-cropped.png'

export default function About() {
  return (
    <div className="bg-neutral-800 h-80 text-center">
      <div className="flex sm:flex-row flex-col items-center text-center justify-center pt-24 gap-12">
        <img className="w-32" src={mihirPic} alt="mihir" />
        <div className="text-left">
          <div className="text-white text-3xl">About me</div>
          <p className="text-white">I am a software engineer at ADP</p>
        </div>
      </div>
    </div>
  );
}
