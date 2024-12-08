import React from "react";
import "./style.css";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div className=" size-full flex flex-col tracking-wider justify-between items-center">
      {/* Main Content Container */}
      <div className="flex flex-col md:flex-row text-xs  size-full gap-4">
        {/* About Me Section */}
        <div className="w-full md:w-8/12 px-6 pt-4 ">
          <h2 className="text-2xl md:text-5xl  font-bold text-white my-5 md:my-4">
            About Me
          </h2>
          <AboutText />
          <Quote
            text="I have not failed. I've just found 10,000 ways that won't work"
            author="Thomas Edison"
          />
        </div>

        {/* Technologies Section */}
        <div className="flex-auto ">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

// Reusable AboutText Component
const AboutText = () => (
  <>
    {aboutParagraphs.map((paragraph, index) => (
      <p key={index} className="text-gray-300 leading-relaxed   mb-4">
        {paragraph}
      </p>
    ))}
  </>
);

// Reusable Quote Component
const Quote = ({ text, author }) => (
  <h3 className="text-red-400 py-4 mt-auto font-mono text-sm italic text-center">
    {`"${text}"`}
    <br />
    <span className="text-gray-400 font-light">{`- ${author}`}</span>
  </h3>
);

// Text Content
const aboutParagraphs = [
  <>
    <span className="font-semibold text-white">Hello!</span> I&apos;m{" "}
    <span className="text-red-500 font-bold md:text-2xl">Volkan</span>,{" "}
    <span className="font-medium text-gray-100">a Frontend Developer</span>{" "}
    passionate about creating user-friendly and visually appealing web
    interfaces. Over the past two years—and actively in the last year—I have
    been focusing on web technologies, developing{" "}
    <span className="font-medium text-gray-100">responsive</span>,{" "}
    <span className="font-medium text-gray-100">accessible</span>, and{" "}
    <span className="font-medium text-gray-100">user-centered</span> web
    solutions.
  </>,
  <>
    I have a solid foundation in{" "}
    <span className="font-medium text-gray-100">HTML, CSS, and JavaScript</span>{" "}
    and have gained experience with modern tools like{" "}
    <span className="font-medium text-gray-100">
      React, Next.js, and Tailwind CSS
    </span>
    . I&apos;ve also worked with{" "}
    <span className="font-medium text-gray-100">GSAP</span> and{" "}
    <span className="font-medium text-gray-100">Three.js</span> to create
    engaging animations. Additionally, I have experience developing applications
    using{" "}
    <span className="font-medium text-gray-100">Firebase and MongoDB</span>.
  </>,
  <>
    I adapt quickly to new technologies and{" "}
    <span className="font-medium text-gray-100">learn effortlessly</span>. I
    take pride in my{" "}
    <span className="font-medium text-gray-100">problem-solving skills</span>,{" "}
    <span className="font-medium text-gray-100">attention to detail</span>, and{" "}
    <span className="font-medium text-gray-100">discipline</span>. When faced
    with challenges, I analyze their root causes, strive to solve them
    independently, and consult resources or AI tools when necessary.
  </>,
  <>
    Although I don&apos;t have professional work experience yet, my personal
    projects reflect my commitment to{" "}
    <span className="font-medium text-gray-100">quality</span> and{" "}
    <span className="font-medium text-gray-100">innovation</span>. I have a
    particular interest in{" "}
    <span className="font-medium text-gray-100">visual design</span> and{" "}
    <span className="font-medium text-gray-100">user experience</span> and enjoy
    exploring{" "}
    <span className="font-medium text-gray-100">backend development</span>.
  </>,
  <>
    If I have the opportunity to join your team, I aim to contribute as a{" "}
    <span className="font-medium text-gray-50">
      motivated and collaborative team member
    </span>
    , eager to learn and grow alongside your team.
  </>,
];

export default About;
