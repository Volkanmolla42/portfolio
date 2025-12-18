import Section from "./components/Section";
import { getTranslations } from "@/lib/getTranslations";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import LeftNavBar from "./components/LeftNavBar";
import RightNavBar from "./components/RightNavBar";
import MailMe from "./components/MailMe/MailMe";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";
import FloatingCTA from "./components/FloatingCTA";

// Build time'da hangi dillerin pre-render edileceğini belirtiyoruz
export function generateStaticParams() {
  return [
    { lang: 'en' },
    { lang: 'tr' }
  ];
}

// Tam statik sayfa
export const dynamic = 'force-static';
export const dynamicParams = false;

export default async function HomePage({ params }) {
  const { lang } = await params;
  const translations = getTranslations(lang, "app");
  const { home, about, projects, services, testimonials, mailMe, floatingCTA } = translations;

  return (
    <>
      <div className="perspective h-full overflow-hidden origin-left duration-500 transition-all ease-in-out inactive">
        <div className="flex flex-col h-full md:flex-row-reverse">
          <main className="h-full w-full" aria-labelledby="main-content">
            <div className="relative h-full">
              <Section id="home">
                <Home data={home} />
              </Section>
              <Section id="about">
                <About data={about} />
              </Section>
              <Section id="services">
                <Services data={services} />
              </Section>
              <Section id="projects">
                <Projects data={projects} />
              </Section>
              <Section id="testimonials">
                <Testimonials data={testimonials} />
              </Section>
              <Section id="contact">
                <MailMe data={mailMe} />
              </Section>
            </div>
          </main>
          <LeftNavBar navLinks={translations.navLinks} />
        </div>
      </div>
      <RightNavBar navLinks={translations.navLinks} />
      <FloatingCTA data={floatingCTA} />
    </>
  );
}
