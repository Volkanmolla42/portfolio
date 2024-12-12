import { ExternalLink } from "lucide-react";
import Image from "next/image";
import "./style.css";

// Hero Component
const Hero = () => {
  return (
    <div className="size-full flex items-center justify-center flex-col text-xs md:text-base">
      {/* Hero Section */}
      <div className="w-full z-10 flex flex-col justify-center items-center select-none">
        {/* Logo */}
        <Image
          src="/main-logo.webp"
          alt="portfolio logo"
          width={500}
          height={500}
          className="w-[var(--text-box-width)] h-auto object-cover"
          priority="true"
        />

        {/* Scrolling Info Slider */}
        <div className="infoslider flex overflow-hidden py-1 rounded-full mt-2 bg-zinc-800 text-red-300 ">
          <InfoSlider />
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="w-full flex justify-center items-center gap-2 text-center mt-2">
        <ContactButton
          text="Get in Touch"
          href="https://wa.me/905418224484"
          icon="/icons/socials-icons/whatsapp-brands-solid.svg"
          className="size-4 md:size-5 animate-pulse"
        />
        <ContactButton
          text="Github"
          href="https://github.com/Volkanmolla42"
          icon="/icons/socials-icons/github-brands-solid.svg"
          className="size-4 md:size-5"
        />
      </div>
    </div>
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
          className="list-none flex  justify-between items-center flex-shrink-0 min-w-full"
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
const ContactButton = ({ href, icon, text, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center text-sm justify-center gap-2 bg-zinc-800 text-nowrap w-36 md:w-48 text-red-300 px-4 py-2 rounded-full hover:bg-zinc-700 transition-colors duration-300"
  >
    <img src={icon} alt="contact icon" className={className}></img>
    <span>{text}</span>
    <ExternalLink size={16} />
  </a>
);

export default Hero;
