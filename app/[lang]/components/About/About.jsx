import React from "react";
import TechStack from "./TechStack";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row text-xs size-full tracking-wider">
      {/* About Me Section */}
      <div className="w-full px-4 md:px-8 pt-4 flex flex-col justify-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white my-6 md:my-4">
          About me
        </h2>
        {/* Scrollable content for about text */}
        <div className="overflow-y-auto">
          <AboutText />
        </div>
        {/* Inspirational quote */}
        <Quote
          text="I have not failed. I've just found 10,000 ways that won't work"
          author="Thomas Edison"
        />
      </div>

      {/* Technologies Section */}
      <div className="flex-auto">
        <TechStack />
      </div>
    </div>
  );
};

// Component to display about paragraphs
const AboutText = () => (
  <>
    {aboutParagraphs.map((paragraph, index) => (
      <p key={index} className="text-gray-300 leading-relaxed px-2 mb-8">
        ~ {paragraph}
      </p>
    ))}
  </>
);

// Component to display a quote with author
const Quote = ({ text, author }) => (
  <h3 className="text-red-400 py-4 font-mono text-sm italic text-center">
    {`"${text}"`}
    <br />
    <span className="text-gray-400 font-light">{`- ${author}`}</span>
  </h3>
);

// About text paragraphs
const aboutParagraphs = [
  <>
    <span className="font-semibold text-white">Hello!</span> I&apos;m{" "}
    <span className="text-red-500 font-bold md:text-2xl">Volkan</span>,{" "}
    <span className="font-bold text-red-500">
      a 23-year-old Frontend Developer
    </span>{" "}
    passionate about creating user-friendly and visually appealing web
    interfaces. Over the past two years — and especially in the past year — I
    have been focusing on web technologies, developing{" "}
    <span className="font-bold text-red-500">responsive</span>,{" "}
    <span className="font-bold text-red-500">accessible</span>, and{" "}
    <span className="font-bold text-red-500">user-centered</span> web solutions.
  </>,
  <>
    My journey began with a strong foundation in{" "}
    <span className="font-bold text-red-500">HTML, CSS, and JavaScript</span>{" "}
    and has evolved into becoming a proficient developer experienced in using
    modern tools like{" "}
    <span className="font-bold text-red-500">
      React, Next.js, and Tailwind CSS
    </span>
    . I&apos;ve also worked with{" "}
    <span className="font-bold text-red-500">GSAP</span> and{" "}
    <span className="font-bold text-red-500">Three.js</span> to create engaging
    animations. Additionally, I have experience developing applications using{" "}
    <span className="font-bold text-red-500">Firebase</span> and{" "}
    <span className="font-bold text-red-500">MongoDB</span>. I studied web
    design and computer programming in both high school and university, which
    has greatly contributed to my skill set.
  </>,
  <>
    I adapt quickly to new technologies and{" "}
    <span className="font-bold text-red-500">learn effortlessly</span>. I take
    pride in my{" "}
    <span className="font-bold text-red-500">problem-solving skills</span>, and{" "}
    <span className="font-bold text-red-500">discipline</span>. When faced with
    challenges, I analyze their root causes, strive to solve them independently,
    and consult resources or AI tools when necessary.
  </>,
  <>
    Although I don&apos;t have professional work experience yet, my personal
    projects demonstrate my commitment to{" "}
    <span className="font-bold text-red-500">quality</span> and{" "}
    <span className="font-bold text-red-500">innovation</span>. I have a
    particular interest in{" "}
    <span className="font-bold text-red-500">visual design</span> and{" "}
    <span className="font-bold text-red-500">user experience</span> and enjoy
    exploring{" "}
    <span className="font-bold text-red-500">backend development</span>.
  </>,
  <>
    If I have the opportunity to join your team, I aim to contribute as a{" "}
    <span className="font-bold text-red-500">
      motivated and collaborative team member
    </span>
    , eager to learn and grow alongside your team.
  </>,
];

export default About;
