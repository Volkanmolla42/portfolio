import { Download, Github } from "lucide-react";
import "./style.css";
import { SiWhatsapp } from "react-icons/si";
const Hero = () => {
  return (
    <>
      <div className="w-full z-10 flex flex-col justify-center items-center select-none ">
        <img
          src="no-bg-logo.png"
          alt="portfolio logo"
          className=" w-[var(--text-box-width)] object-cover"
        />
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
          href="https://wa.me/905418224484"
          target="_blank"
          className="bg-zinc-800 text-nowrap w-36 md:w-48 text-red-300 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <SiWhatsapp className=" size-4 md:size-5 fill-green-600 animate-pulse" />
          <span>Get in Touch</span>
        </a>
        <a
          href="https://github.com/Volkanmolla42"
          className="bg-zinc-800 text-nowrap w-36 md:w-48 text-red-300 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-300 flex items-center justify-center gap-2"
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
