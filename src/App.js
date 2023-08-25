import "./App.css";
import "./styles/styles.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useRef } from "react";

export default function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);

  return (
    <div>
      <div className="background-image">
        <Navbar homeRef={homeRef} aboutRef={aboutRef} resumeRef={resumeRef} />
        <Home homeRef={homeRef} aboutRef={aboutRef} resumeRef={resumeRef} />
      </div>
    </div>
  );
}
