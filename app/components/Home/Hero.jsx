import { Github } from "lucide-react";
import "./style.css";
import { SiWhatsapp } from "react-icons/si";

// Hero Component
const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="w-full z-10 flex flex-col justify-center items-center select-none">
        {/* Logo */}
        <img
          src="no-bg-logo.png"
          alt="portfolio logo"
          className="w-[var(--text-box-width)] object-cover"
        />

        {/* Scrolling Info Slider */}
        <div className="infoslider flex overflow-hidden py-1 rounded-full mt-2 bg-zinc-800 text-red-300">
          <InfoSlider />
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="w-full flex justify-center items-center gap-2 text-xs md:text-base text-center mt-2">
        <ContactButton
          href="https://wa.me/905418224484"
          icon={
            <SiWhatsapp className="size-4 md:size-5 fill-green-600 animate-pulse" />
          }
          text="Get in Touch"
        />
        <ContactButton
          href="https://github.com/Volkanmolla42"
          icon={<Github className="size-4 md:size-5" />}
          text="Github"
        />
      </div>
    </>
  );
};

// Reusable InfoSlider Component
const InfoSlider = () => {
  const items = [
    "UI/UX Designer",
    "State management",
    "Front-End-Developer",
    "Creative problem solver",
    "Clean code principles",
    "Clean variable naming",
    "DOM manipulation",
    "Strategic thinker",
    "SEO optimization",
    "Web Performance",
    "Accessibility",
    "Responsive Design",
  ];

  return (
    <>
      {/* Two identical lists for continuous scrolling effect */}
      {[...Array(2)].map((_, index) => (
        <ul
          key={index}
          aria-hidden="true"
          className="list-none flex justify-between items-center flex-shrink-0 min-w-full"
        >
          {items.map((item, idx) => (
            <li key={idx}>
              {"~"} {item}
            </li>
          ))}
        </ul>
      ))}
    </>
  );
};

// Reusable ContactButton Component
const ContactButton = ({ href, icon, text }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 bg-zinc-800 text-nowrap w-36 md:w-48 text-red-300 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-300"
  >
    {icon}
    <span>{text}</span>
  </a>
);

export default Hero;
