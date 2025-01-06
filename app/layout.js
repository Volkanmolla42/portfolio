import "./globals.css";
import { AppProvider } from "@/app/[lang]/context/AppContext";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://portfolio-volkanmolla42s-projects.vercel.app"),
  title: {
    default: "Hi, I'm Volkan Molla | Frontend Developer",
    template: "%s | Volkan Molla",
  },
  description:
    "Welcome to Volkan Molla's portfolio. Explore my projects, skills, and experiences as a passionate frontend developer specializing in React and Next.js.",
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
    "TypeScript",
    "UI/UX",
    "Web Development",
  ],
  openGraph: {
    title: "Hi, I'm Volkan Molla | Frontend Developer",
    description:
      "Explore my projects, skills, and experiences as a passionate frontend developer specializing in React and Next.js.",
    url: "https://portfolio-volkanmolla42s-projects.vercel.app",
    siteName: "Volkan Molla Portfolio",
    images: [
      {
        url: "https://portfolio-volkanmolla42s-projects.vercel.app/images/app-ss.webp",
        width: 1200,
        height: 630,
        alt: "Volkan Molla Portfolio Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi, I'm Volkan Molla | Frontend Developer",
    description: "Explore my projects and skills as a frontend developer.",
    creator: "@volkanmolla",
    images: [
      "https://portfolio-volkanmolla42s-projects.vercel.app/images/app-ss.webp",
    ],
  },
  icons: {
    icon: [
      {
        url: "/icons/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/icons/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
   
       
      <html lang="en" className={inter.className}>
        <body className="bg-zinc-900 h-[100svh] text-white dark overflow-hidden font-trebuchet-ms">
        <AppProvider>
          {children}
          </AppProvider>
      </body>
    </html>
  );
}
