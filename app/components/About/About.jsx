import React from "react";
import "./style.css";
import JumpingCubes from "../jumpingCubes/JumpingCubes";

const About = () => {
  return (
    <div className="container size-full flex flex-col tracking-wider justify-between items-center">
      {/* Main Content Container */}
      <div className="px-6 md:px-20 md:py-14 flex flex-col md:flex-row text-xs overflow-y-auto scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-800 scroll-smooth size-full gap-4">
        {/* About Me Section */}
        <div className="w-full md:w-10/12">
          <h2 className="text-2xl md:text-5xl mx-4 font-bold text-white my-5 md:my-4">
            About Me
          </h2>
          <AboutText />
          <Quote
            text="I have not failed. I've just found 10,000 ways that won't work"
            author="Thomas Edison"
          />
        </div>

        {/* Skills Section */}
        <div className="w-full mb-4 md:mb-0 md:w-4/12 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-6 shadow-lg">
          <h3 className="text-2xl font-extrabold text-white mb-6">
            Technologies I Use
          </h3>

          <JumpingCubes />
        </div>
      </div>
    </div>
  );
};

// Reusable AboutText Component
const AboutText = () => (
  <>
    {aboutParagraphs.map((paragraph, index) => (
      <p key={index} className="text-gray-300 leading-relaxed mb-4">
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
    <span className="font-semibold text-white">Hello!</span> I'm{" "}
    <span className="text-red-500 font-bold md:text-2xl">Volkan</span>,{" "}
    <span className="font-medium text-gray-100">a Frontend Developer</span>{" "}
    passionate about building user-friendly and visually appealing web
    interfaces. I’m enthusiastic about web technologies and design trends, and
    I’m eager to grow my skills and take on new challenges. I have a solid
    foundation in{" "}
    <span className="font-medium text-gray-100">HTML, CSS, and JavaScript</span>{" "}
    and am currently improving my knowledge of modern tools like{" "}
    <span className="font-medium text-gray-100">
      React, Next.js, and Tailwind CSS
    </span>
    .
  </>,
  <>
    I have recently focused on developing projects that are{" "}
    <span className="font-medium text-gray-100">user-focused</span>,{" "}
    <span className="font-medium text-gray-100">responsive</span>, and{" "}
    <span className="font-medium text-gray-100">accessible</span>. My goal is to
    create web solutions that not only look great but also provide seamless
    experiences for users.
  </>,
  <>
    I take pride in my{" "}
    <span className="font-medium text-gray-100">eagerness to learn</span>,{" "}
    <span className="font-medium text-gray-100">problem-solving abilities</span>
    , and <span className="font-medium text-gray-100">teamwork skills</span>.
    While I’m still early in my career, I’m committed to{" "}
    <span className="font-medium text-gray-100">delivering quality</span> and
    growing with every project.
  </>,
  <>
    I’m deeply dedicated to{" "}
    <span className="font-medium text-gray-100">continuous learning</span>. I
    stay updated with the latest trends in frontend development and strive to
    apply my knowledge to build{" "}
    <span className="font-medium text-gray-100">effective</span> and{" "}
    <span className="font-medium text-gray-100">modern solutions</span>.
  </>,
  <>
    If I have the opportunity to join your team, I aim to contribute as a{" "}
    <span className="font-medium text-gray-50">
      motivated and collaborative
    </span>{" "}
    partner, ready to learn and grow alongside your team.
  </>,
];

export default About;
