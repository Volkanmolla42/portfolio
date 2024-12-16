import Image from "next/image";
import "./style.css";
import ContactButton from "./ContactButton";
import LanguageSwitcher from "../LanguageSwitcher";
import InfoSlider from "./InfoSlider";

// Home Component
const Home = ({ t }) => {
  return (
    <div className="size-full flex items-center justify-center flex-col text-xs md:text-base ">
      {/* Home Section */}
      <div className="w-full z-10 flex flex-col justify-center items-center select-none">
        {/* Logo */}
        <Image
          src="/main-logo.webp"
          alt="portfolio logo"
          width={700}
          height={300}
          className="w-[var(--text-box-width)] h-auto object-cover"
          priority="true"
        />

        {/* Scrolling Info Slider */}
        <div className="infoslider flex overflow-hidden py-3 rounded-full mt-2 bg-zinc-800 text-red-300 ">
          <InfoSlider items={t.infoSliderItems} />
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="w-full flex justify-center items-center gap-2 text-center mt-2">
        <ContactButton
          text={t.whatsapText}
          href="https://wa.me/905418224484"
          icon="/icons/socials-icons/whatsapp-brands-solid.svg"
          className="size-4 md:size-5 animate-pulse"
        />
        <ContactButton
          text={t.githubText}
          href="https://github.com/Volkanmolla42"
          icon="/icons/socials-icons/github-brands-solid.svg"
          className="size-4 md:size-5"
        />
      </div>
      <div className=" absolute top-0 left-4 flex">
        <LanguageSwitcher />
      </div>
    </div>
  );
};

export default Home;
