import Image from "next/image";
import "./style.css";
import ContactButton from "./ContactButton";
import LanguageSwitcher from "../utils/LanguageSwitcher";
import InfoSlider from "./InfoSlider";

// Home Component
const Home = ({ data }) => {
  return (
    <div className="relative size-full flex flex-col items-center justify-center">
      {/* Language Switcher - top left */}
      <div className="absolute top-6 left-4 z-20">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left: Text + CTAs */}
          <div className="md:col-span-7 text-center md:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Volkan Molla
            </h1>
            <p className="text-zinc-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {data.aboutText}
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-2 sm:gap-3">
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
          </div>

          {/* Right: Portrait */}
          <div className="md:col-span-5 relative">
            {/* Glow Background */}
            <div className="absolute -inset-6 bg-linear-to-br from-red-700/30 via-fuchsia-500/20 to-indigo-500/20 blur-3xl rounded-3xl" aria-hidden="true" />
            <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src="/images/177041753.jpg"
                alt="Volkan Molla portrait"
                fill
                sizes="(max-width: 640px) 15rem, (max-width: 768px) 18rem, (max-width: 1024px) 20rem, 24rem"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Scrolling Info Slider */}
        <div className="mt-10">
          <div className="infoslider flex overflow-hidden text-xs md:text-sm py-2 rounded-full bg-zinc-800 text-red-200 w-full">
            <InfoSlider items={data.infoSliderItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
