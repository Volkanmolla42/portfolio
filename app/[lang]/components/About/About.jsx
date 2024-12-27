import React, { memo } from "react";
import TechStack from "./TechStack";

const About = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row md:px-8   text-xs size-full tracking-wide">
      {/* About Me Section */}
      <div className="w-full md:w-8/12 px-4 pt-10 flex flex-col">
        <div className="text-3xl text-zinc-200 md:text-4xl font-bold mb-2  mx-4">
          <h2>
            {data.aboutTitle}{" "}
            <span className="text-blue-500 text-nowrap">Volkan Molla.</span>
          </h2>
          <h2 className="text-xl md:text-1xl">
            <span className="text-muted-foreground">Frontend Developer.</span>
          </h2>
        </div>
        {/* Scrollable content for about text */}
        <div className="overflow-y-auto my-auto scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-800 scroll-smooth">
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
        className="text-gray-100 leading-relaxed px-2 mb-8"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    ))}
  </>
));

AboutText.displayName = "AboutText";

// Component to display a quote with author
const Quote = ({ text, author }) => (
  <h3 className="text-red-400 mt-auto mb-6 font-verdana text-xs italic text-center">
    {`"${text}"`}
    <br />
    <span className="text-gray-400 font-light">{`- ${author}`}</span>
  </h3>
);

About.displayName = "About";

export default About;
