import React, { memo } from "react";
import TechStack from "./TechStack";

const About = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 w-full">
      {/* About Me Section */}
      <div className="w-full lg:w-7/12 flex flex-col space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold">
            {data.aboutTitle}{" "}
            <span className="text-primary whitespace-nowrap">Volkan Molla.</span>
          </h2>
          <h3 className="text-xl md:text-2xl text-muted-foreground font-medium">
            Frontend Developer.
          </h3>
        </div>

        {/* About text */}
        <div className="prose prose-invert max-w-none text-muted-foreground">
          <AboutText data={data} />
        </div>

        {/* Inspirational quote */}
        <Quote text={data.quote.text} author={data.quote.author} />
      </div>

      {/* Technologies Section */}
      <div className="w-full lg:w-5/12">
        <div className="bg-card/50 rounded-2xl p-6 border border-border backdrop-blur-sm sticky top-24">
          <TechStack data={data} />
        </div>
      </div>
    </div>
  );
};

// Component to display about paragraphs
const AboutText = memo(({ data }) => (
  <div className="space-y-6">
    {data.aboutParagraphs.map((paragraph, index) => (
      <div
        key={index}
        className="leading-relaxed"
        dangerouslySetInnerHTML={{ __html: paragraph }}
      />
    ))}
  </div>
));

AboutText.displayName = "AboutText";

// Component to display a quote with author
const Quote = ({ text, author }) => (
  <blockquote className="mt-8 border-l-4 border-primary pl-4 py-1 italic text-muted-foreground">
    <p className="mb-2 text-lg">"{text}"</p>
    <footer className="text-sm font-semibold not-italic">- {author}</footer>
  </blockquote>
);

About.displayName = "About";

export default About;
