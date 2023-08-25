import React from "react";
import About from "./About";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faArrowCircleDown,
} from "@fortawesome/free-solid-svg-icons";
import Resume from "./Resume";

export default function Home({ homeRef, aboutRef, resumeRef }) {
  return (
    <div>
      <div ref={homeRef} className="h-screen flex flex-col items-center pt-48">
        <div className="flex flex-col items-center gap-8">
          <h1 className="sm:text-8xl text-4xl text-white text-center">
            I am Mihir Rana.
          </h1>
          <p className="sm:text-lg text-sm text-white break-words text-center w-1/2">
            I am a Software Engineer at ADP. I love working with Node.js, React
            and cloud technologies on AWS!
          </p>
        </div>
        <hr className="w-1/6 mt-6" />
        <div className="contact-icons mt-6 flex gap-4">
          <a
            href="https://www.linkedin.com/in/mr744/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white"
              size="2x"
            />{" "}
          </a>
          <a
            href="https://github.com/Mihir240"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white"
              size="2x"
            />{" "}
          </a>
          <a href="mailto:mihirr240@gmail.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white"
              size="2x"
            />{" "}
          </a>
        </div>

        <div
          onClick={() =>
            aboutRef.current.scrollIntoView({ behavior: "smooth" })
          }
          className="my-auto"
        >
          <FontAwesomeIcon
            className="text-white hover:text-sky-500 hover:cursor-pointer"
            size="2x"
            icon={faArrowCircleDown}
          />
        </div>
      </div>
      <About aboutRef={aboutRef} />
      <Resume resumeRef={resumeRef} />
    </div>
  );
}
