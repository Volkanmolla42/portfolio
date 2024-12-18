import React, { memo } from "react";
import TechStack from "./TechStack";

const About = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row text-xs size-full tracking-wider">
      {/* About Me Section */}
      <div className="w-full px-4 md:px-8 py-4 md:py-2 flex flex-col justify-center">
        <h2 className="text-3xl text-zinc-200 md:text-4xl font-bold my-6 md:my-4">
          {data.title}
        </h2>
        {/* Scrollable content for about text */}
        <div className="overflow-y-auto">
          <AboutText data={data} />
        </div>
        {/* Inspirational quote */}
        <Quote text={data.quote.text} author={data.quote.author} />
      </div>

      {/* Technologies Section */}
      <div className="flex-auto">
        <TechStack data={data} />
      </div>
    </div>
  );
};

// Component to display about paragraphs
const AboutText = memo(({ data }) => (
  <>
    {data.aboutParagraphs.map((paragraph, index) => (
      <p
        key={index}
        className="text-gray-300 leading-relaxed px-2 mb-6"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    ))}
  </>
));

AboutText.displayName = "AboutText";

// Component to display a quote with author
const Quote = ({ text, author }) => (
  <h3 className="text-red-400 py-4 font-mono text-sm italic text-center">
    {`"${text}"`}
    <br />
    <span className="text-gray-400 font-light">{`- ${author}`}</span>
  </h3>
);

About.displayName = "About";

export default About;
