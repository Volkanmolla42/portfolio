import "./globals.css";
import RightNavBar from "./components/RightNavBar";
import { AppProvider } from "@/app/context/AppContext";
import LeftNavBar from "./components/LeftNavBar";
import MailMeLink from "./components/MailMe/MailMeLink";

const RootLayout = ({ children }) => {
  return (
    <AppProvider>
      <html lang="en">
        <head>
          <title>{"Hi, I'm Volkan Molla"}</title>
          <meta name="description" content="Volkan's Portfolio" />
          <meta name="author" content="Volkan" />
          <meta
            name="keywords"
            content="Volkan, Portfolio, Volkan's Portfolio, frontend, developer"
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/icons/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/icons/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/icons/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body className="bg-zinc-900 h-screen text-white">
          <div
            className={`perspective h-full overflow-hidden origin-left duration-500 transition-all ease-in-out inactive`}
          >
            <div className="flex flex-col h-screen md:flex-row-reverse">
              <main className="h-full w-full">{children}</main>
              <LeftNavBar />
            </div>
          </div>
          <RightNavBar />
        </body>
      </html>
    </AppProvider>
  );
};

export default RootLayout;
