"use client";
import dynamic from "next/dynamic";
import Section from "@/app/components/Section";
import { useEffect } from "react";

const Hero = dynamic(() => import("@/app/components/Home/Hero"));
const About = dynamic(() => import("@/app/components/About/About"));
const Projects = dynamic(() => import("@/app/components/Projects/Projects"));
const MailMe = dynamic(() => import("@/app/components/MailMe/MailMe"));

export default function Home() {
  useEffect(() => {
    if (window.location.hash === "") {
      window.location.hash = "#home";
    }
  }, []);

  return (
    <div className="relative h-full">
      <Section id="home">
        <Hero />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <MailMe />
      </Section>
    </div>
  );
}
