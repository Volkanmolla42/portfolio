"use client";
import "./globals.css";
import RightNavBar from "./components/RightNavBar";
import LeftNavBar from "./components/LeftNavBar";
import { AppProvider } from "@/app/context/AppContext";

const RootLayout = ({ children }) => {
  return (
    <AppProvider>
      <head>
        <title>Portfolio</title>
      </head>
      <html lang="en">
        <body className="bg-zinc-900">
          <div className={`perspective inactive `}>
            <header className="text-white fixed bottom-0 md:top-0 md:left-0 md:w-max w-full z-50">
              <nav className="flex bg-zinc-800 items-center justify-evenly md:flex-col md:h-full">
                <LeftNavBar />
              </nav>
            </header>
            <main>{children}</main>
          </div>
          <RightNavBar />
        </body>
      </html>
    </AppProvider>
  );
};

export default RootLayout;
