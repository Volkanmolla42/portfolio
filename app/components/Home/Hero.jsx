import { Download, Github } from "lucide-react";
import "./style.css";
const Hero = () => {
  return (
    <>
      <div className="w-full z-10 flex flex-col justify-center items-center select-none ">
        <div className="text-box">
          <div className="letter M gradient">M</div>
          <div className="letter V">V</div>
          <div className="letter O gradient">O</div>
          <div className="letter slash gradient">/</div>
          <div className="letter slash2 gradient">/</div>
          <div className="letter slash3">/</div>
          <div className="letter slash4">/</div>
          <div className="letter A gradient">A</div>
          <div className="letter dot gradient">.</div>
          <div className="letter N">N</div>
        </div>
        <div className="infoslider  flex overflow-hidden py-1 rounded-full mt-2 bg-zinc-800  text-red-300">
          <ul aria-hidden="true">
            <li> {"~"} UI/UX Designer</li>
            <li> {"~"} State management</li>
            <li> {"~"} Front-End-Developer</li>
            <li> {"~"} Creative problem solver</li>
            <li> {"~"} Clean code principles</li>
            <li> {"~"} Clean variable naming</li>
            <li> {"~"} DOM manipulation</li>
            <li> {"~"} Strategic thinker</li>
            <li> {"~"} SEO optimization</li>
            <li> {"~"} Web Performance</li>
            <li> {"~"} Accessibility</li>
            <li> {"~"} Responsive Design</li>
          </ul>
          <ul>
            <li> {"~"} UI/UX Designer</li>
            <li> {"~"} State management</li>
            <li> {"~"} Front-End-Developer</li>
            <li> {"~"} Creative problem solver</li>
            <li> {"~"} Clean code principles</li>
            <li> {"~"} Clean variable naming</li>
            <li> {"~"} DOM manipulation</li>
            <li> {"~"} Strategic thinker</li>
            <li> {"~"} SEO optimization</li>
            <li> {"~"} Web Performance</li>
            <li> {"~"} Accessibility</li>
            <li> {"~"} Responsive Design</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex justify-center items-center gap-2 text-xs md:text-base text-center mt-2">
        <a
          href="/cv.pdf"
          target="_blank"
          download="cv.pdf"
          className="bg-zinc-800 w-48 text-red-300 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <Download />
          <span>Download CV</span>
        </a>
        <a
          href="https://github.com/Volkanmolla42"
          className="bg-zinc-800 w-48 text-red-300 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-300 flex items-center justify-center gap-2"
          target="_blank"
        >
          <Github />
          <span>Github</span>
        </a>
      </div>
    </>
  );
};

export default Hero;
