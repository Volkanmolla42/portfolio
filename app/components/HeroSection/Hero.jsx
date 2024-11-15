"use client";
import "./style.css";
const Hero = () => {
  return (
    <section id="home" className="hero-section  mx-auto">
      <div className="my-container select-none ">
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
            <li> {"~"} Front-End-Developer</li>
            <li> {"~"} Creative problem solver</li>
            <li> {"~"} Clean code principles</li>
            <li> {"~"} Clean variable naming</li>
            <li> {"~"} DOM manipulation</li>
            <li> {"~"} Strategic thinker</li>
            <li> {"~"} SEO optimization</li>
          </ul>
          <ul>
            <li> {"~"} UI/UX Designer</li>
            <li> {"~"} Front-End-Developer</li>
            <li> {"~"} Creative problem solver</li>
            <li> {"~"} Clean code principles</li>
            <li> {"~"} Clean variable naming</li>
            <li> {"~"} DOM manipulation</li>
            <li> {"~"} Strategic thinker</li>
            <li> {"~"} SEO optimization</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
