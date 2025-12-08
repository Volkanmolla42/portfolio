import Image from "next/image";
import "./style.css";
import ContactButton from "./ContactButton";
import LanguageSwitcher from "../utils/LanguageSwitcher";
import InfoSlider from "./InfoSlider";

// Home Component
const Home = ({ data }) => {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 md:py-0">
      {/* Language Switcher - top left */}
      <div className="absolute top-0 left-0 z-20">
        <LanguageSwitcher />
      </div>

      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Text + CTAs */}
          <div className="md:col-span-7 text-center md:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Volkan Molla
              </h1>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0">
                {data.aboutText}
              </p>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
              <ContactButton
                text={data.whatsapText}
                href="https://wa.me/905418224484"
                icon="/icons/socials-icons/whatsapp-brands-solid.svg"
                className="animate-pulse"
              />
              <ContactButton
                text={data.githubText}
                href="https://github.com/Volkanmolla42"
                icon="/icons/socials-icons/github-brands-solid.svg"
              />
              <ContactButton
                text={data.linkedinText}
                href="https://www.linkedin.com/in/volkan-molla-b851a3308/"
                icon="/icons/socials-icons/linkedin-in-brands-solid.svg"
              />
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="md:col-span-5 relative flex justify-center">
            {/* Glow Background */}
            <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-secondary/20 to-accent/20 blur-3xl rounded-3xl" aria-hidden="true" />
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl transition-transform hover:scale-105 duration-500">
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
        <div className="mt-16 md:mt-24">
          <div className="infoslider flex overflow-hidden text-sm py-3 rounded-full bg-card/50 border border-border text-muted-foreground w-full backdrop-blur-sm">
            <InfoSlider items={data.infoSliderItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
