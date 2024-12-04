import React from "react";
import "./style.css";
const About = () => {
  return (
    <div className="container flex flex-col  tracking-wider justify-between items-center h-full w-full  overflow-y-auto   ">
      <div className="px-6 md:px-20 md:py-14  text-xs h-full w-full overflow-y-auto flex flex-col">
        <h2 className="text-2xl md:text-5xl  font-bold text-white my-5 md:my-4 ">
          About Me
        </h2>
        <p className="text-gray-300 leading-relaxed mb-1">
          <span className="font-semibold text-white">Hello!</span> I&apos;m
          <span className="text-red-500 font-bold md:text-2xl">Volkan</span>,
          <span className="font-medium text-gray-100">
            a creative frontend developer
          </span>
          focused on delivering exceptional user experiences. My passion for web
          technologies and modern design trends drives me to push the boundaries
          and improve with every project. I have a solid foundation in
          <span className="font-medium text-gray-100">
            HTML, CSS, and JavaScript
          </span>
          , and I&apos;m skilled at solving complex challenges with modern tools
          like
          <span className="font-medium text-gray-100">
            React, Next.js, and Tailwind CSS
          </span>
          .
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          In recent months, I have focused on building web solutions that are
          not only
          <span className="font-medium text-gray-100">visually impressive</span>
          but also
          <span className="font-medium text-gray-100">
            performance-oriented
          </span>
          and <span className="font-medium text-gray-100">accessible</span>. My
          goal is to create projects that enhance brands&apos; digital presence,
          simplify users&apos; lives, and align with business objectives.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          My strengths in
          <span className="font-medium text-gray-100">problem-solving</span>,
          <span className="font-medium text-gray-100">attention to detail</span>
          , and <span className="font-medium text-gray-100">teamwork</span>
          help set me apart. Additionally, my commitment to
          <span className="font-medium text-gray-100">timely delivery</span>
          and
          <span className="font-medium text-gray-100">
            high-quality standards
          </span>
          aims to make a positive impact in every project I work on.
        </p>
        <p className="text-gray-300 leading-relaxed mb-4">
          Alongside my love for technology, I am dedicated to
          <span className="font-medium text-gray-100">continuous learning</span>
          and self-improvement. I keep up with the latest frontend trends and
          push my limits to develop
          <span className="font-medium text-gray-100">
            innovative solutions
          </span>
          .
        </p>
        <p className="text-gray-300 leading-relaxed">
          If given the chance to join your team, I aim to be not just an
          employee but a
          <span className="font-medium text-gray-50">
            collaborative partner
          </span>
          in your success.
        </p>
        <h3 className=" text-red-400 py-4 mt-auto font-mono text-sm">
          <i>
            {`"I have not failed. I've just found 10,000 ways that won't work"`}
          </i>
        </h3>
      </div>
    </div>
  );
};

export default About;
