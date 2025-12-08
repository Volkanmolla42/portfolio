import dynamic from "next/dynamic";
import Section from "./components/Section";
import Navigation from "./components/Navigation";
import { getTranslations } from "@/lib/getTranslations";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

// Dinamik bileşenleri optimize edilmiş şekilde yüklüyoruz
const components = {
  Home: dynamic(() => import("./components/Home/Home"), {
    loading: () => null,
    ssr: true
  }),
  MailMe: dynamic(() => import("./components/MailMe/MailMe"), {
    loading: () => null,
    ssr: true
  })
};

// Route cache'leme
export const revalidate = 3600; // 1 saat

export default async function HomePage({ params }) {
  const { lang } = await params;
  const translations = await getTranslations(lang, "app");
  const { home, about, projects, mailMe } = translations;

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background text-foreground">
      <Navigation navLinks={translations.navLinks} />

      <main className="flex-1 w-full md:ml-64 relative">
        <div className="flex flex-col w-full">
          <Section id="home" className="flex items-center justify-center">
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
    </div>
  );
}
