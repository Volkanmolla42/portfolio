import "./globals.css";
import { AppProvider } from "@/app/[lang]/context/AppContext";

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
        </head>
        <body className="bg-gradient-to-b from-gray-900 via-black to-gray-900  h-[100svh] text-white">
          {children}
        </body>
      </html>
    </AppProvider>
  );
};

export default RootLayout;
