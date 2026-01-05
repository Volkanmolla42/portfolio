"use client";

import Image from "next/image";
import "./style.css";
import ContactButton from "./ContactButton";
import LanguageSwitcher from "../utils/LanguageSwitcher";
import InfoSlider from "./InfoSlider";
import { useScrollNavigation } from "@/lib/hooks";
import { CONTACT_INFO, ASSETS } from "@/lib/constants";
import { CheckCircleIcon } from "../ui/icons";
import type { HomeTranslations } from "@/lib/types";

// ============================================
// Types
// ============================================

interface HomeProps {
  data: HomeTranslations;
}

// ============================================
// Sub-Components
// ============================================

interface TrustIndicatorProps {
  indicator: string;
}

function TrustIndicator({ indicator }: TrustIndicatorProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-zinc-400">
      <CheckCircleIcon size={20} />
      <span className="font-medium">{indicator}</span>
    </div>
  );
}

// ============================================
// Main Component
// ============================================

export default function Home({ data }: HomeProps) {
  const { scrollToProjects } = useScrollNavigation();

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
              {data.heroTitle || "Volkan Molla"}
            </h1>

            <p className="text-lg sm:text-xl text-blue-400 font-semibold">
              {data.heroSubtitle || "Full Stack Developer"}
            </p>

            <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-red-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
              {data.valueProposition}
            </p>

            <p className="text-zinc-300 leading-relaxed max-w-2xl mx-auto md:mx-0">
              {data.aboutText}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4 pt-4">
              <a
                href={CONTACT_INFO.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-bold rounded-full shadow-lg hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-center"
              >
                <span className="relative z-10">{data.primaryCTA}</span>
                <div 
                  className="absolute inset-0 rounded-full bg-white/20 blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" 
                  aria-hidden="true"
                />
              </a>

              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-full border-2 border-zinc-700 hover:border-zinc-600 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
              >
                {data.secondaryCTA}
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-4">
              {data.trustIndicators &&
                Object.values(data.trustIndicators).map((indicator, index) => (
                  <TrustIndicator key={index} indicator={indicator} />
                ))}
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start items-center gap-3 pt-2">
              <ContactButton
                text={data.githubText}
                href={CONTACT_INFO.github.url}
                icon={ASSETS.icons.github}
                className="aspect-square opacity-70 hover:opacity-100 transition-opacity"
              />
              <ContactButton
                text={data.linkedinText}
                href={CONTACT_INFO.linkedin.url}
                icon={ASSETS.icons.linkedin}
                className="aspect-square opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="md:col-span-5 relative">
            {/* Glow Background */}
            <div
              className="absolute -inset-6 bg-gradient-to-br from-red-700/30 via-fuchsia-500/20 to-indigo-500/20 blur-3xl rounded-3xl"
              aria-hidden="true"
            />
            <div className="relative mx-auto w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Image
                src={ASSETS.images.profile}
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
}