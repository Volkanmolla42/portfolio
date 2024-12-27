import Image from "next/image";
import "./style.css";
import ContactButton from "./ContactButton";
import LanguageSwitcher from "../utils/LanguageSwitcher";
import InfoSlider from "./InfoSlider";

// Home Component
const Home = ({ data }) => {
  return (
    <div className="size-full flex items-center justify-center flex-col">
      {/* Home Section */}
      <div className="w-full z-10 flex flex-col justify-center items-center select-none px-4">
        {/* Logo */}
        <Image
          src="/main-logo.webp"
          alt="portfolio logo"
          width={800}
          height={600}
          className="w-full sm:w-4/6 lg:w-3/6   object-cover"
          priority="true"
        />

        {/* Scrolling Info Slider */}
        <div className="infoslider flex overflow-hidden text-xs md:text-sm   py-2 rounded-full mt-1 bg-zinc-900 text-red-200 w-full sm:w-4/6 lg:w-3/6 ">
          <InfoSlider items={data.infoSliderItems} />
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-2 text-center mt-2 ">
        <ContactButton
          text={data.whatsapText}
          href="https://wa.me/905418224484"
          icon="/icons/socials-icons/whatsapp-brands-solid.svg"
          className="animate-pulse aspect-square"
        />
        <ContactButton
          text={data.githubText}
          href="https://github.com/Volkanmolla42"
          icon="/icons/socials-icons/github-brands-solid.svg"
          className="aspect-square"
        />
        <ContactButton
          text={data.linkedinText}
          href="https://www.linkedin.com/in/volkan-molla-b851a3308/"
          icon="/icons/socials-icons/linkedin-in-brands-solid.svg"
          className="aspect-square"
        />
      </div>
      <div className=" absolute top-6 left-4 flex">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Home;
