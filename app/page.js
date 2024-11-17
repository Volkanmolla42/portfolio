"use client";
import dynamic from "next/dynamic";
import Section from "@/app/components/Section";
import { useEffect } from "react";

const Hero = dynamic(() => import("@/app/components/HeroSection/Hero"));
const About = dynamic(() => import("@/app/components/AboutSection/About"));

export default function Home() {
  useEffect(() => {
    window.location.hash = "#home";
  }, []);

  return (
    <div className="relative h-full">
      <Section id="home">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
    </div>
  );
}
