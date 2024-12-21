import dynamic from "next/dynamic";
import Section from "./components/Section";
import { getTranslations } from "@/lib/getTranslations";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

const components = {
  Home: dynamic(() => import("./components/Home/Home")),
  LeftNavBar: dynamic(() => import("./components/LeftNavBar")),
  RightNavBar: dynamic(() => import("./components/RightNavBar")),
  MailMe: dynamic(() => import("./components/MailMe/MailMe")),
};

export default async function HomePage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, "app");
  const { home, about, projects, mailMe } = translations;

  return (
    <>
      <div className="perspective h-full overflow-hidden origin-left duration-500 transition-all ease-in-out inactive">
        <div className="flex flex-col h-full md:flex-row-reverse">
          <main className="h-full w-full" aria-labelledby="main-content">
            <div className="relative h-full">
              <Section id="home">
                <components.Home data={home} />
              </Section>
              <Section id="about">
                <About data={about} />
              </Section>
              <Section id="projects">
                <Projects data={projects} />
              </Section>
              <Section id="contact">
                <components.MailMe data={mailMe} />
              </Section>
            </div>
          </main>
          <components.LeftNavBar navLinks={translations.navLinks} />
        </div>
      </div>
      <components.RightNavBar navLinks={translations.navLinks} />
    </>
  );
}
