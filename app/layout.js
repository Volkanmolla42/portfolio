import "./globals.css";
import { AppProvider } from "@/app/[lang]/context/AppContext";
import { Analytics } from "@vercel/analytics/react";
export const metadata = {
  metadataBase: new URL("https://portfolio-volkanmolla42s-projects.vercel.app"),
  title: "Hi, I'm Volkan Molla",
  description:
    "Welcome to Volkan Molla's portfolio. Explore my projects, skills, and experiences as a frontend developer.",
  authors: [
    {
      name: "Volkan Molla",
      url: "https://portfolio-volkanmolla42s-projects.vercel.app",
    },
  ],
  keywords: [
    "Volkan Molla",
    "Portfolio",
    "Frontend Developer",
    "Web Developer",
    "React",
    "Next.js",
    "JavaScript",
  ],
  openGraph: {
    title: "Hi, I'm Volkan Molla",
    description:
      "Explore my projects, skills, and experiences as a frontend developer.",
    url: "https://portfolio-volkanmolla42s-projects.vercel.app",
    siteName: "Volkan Molla Portfolio",
    images: [
      {
        url: "https://portfolio-volkanmolla42s-projects.vercel.app/images/app-ss.webp",
        width: 1200,
        height: 630,
        alt: "Portfolio Thumbnail",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi, I'm Volkan Molla",
    description: "Explore my projects and skills as a frontend developer.",
    images: [
      "https://portfolio-volkanmolla42s-projects.vercel.app/images/app-ss.webp",
    ],
  },
  icons: {
    icon: "https://portfolio-volkanmolla42s-projects.vercel.app/icons/favicons/favicon-32x32.png",
    apple:
      "https://portfolio-volkanmolla42s-projects.vercel.app/icons/favicons/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <AppProvider>
      <html lang="en">
        <body className="bg-zinc-900 h-[100svh] text-white dark overflow-hidden font-trebuchet-ms">
          {children}
        </body>
      </html>
    </AppProvider>
  );
}
