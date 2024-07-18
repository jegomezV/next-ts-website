import "../global.css";
import "@/app/styles/loader.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import Particles from './components/sharedComponents/Particles';

export const metadata: Metadata = {
  title: {
    default: "Fashion.com",
    template: "%s | Fashion.com",
  },
  description: "Developed by Juan Gómez.",
  openGraph: {
    title: "Fashion.com",
    description:
      "Developed by Juan Gómez.",
    url: "",
    siteName: "",
    images: [
      {
        url: "https://chronark.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
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
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        {/* Agrega esta línea para tu favicon */}
        <link rel="icon" type="image/webp" href="/favicon.png" />
      </head>
      <body className={`bg-slate-200 overflow-x-hidden ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined}`}>
        <Particles className="fixed inset-0 -z-10 animate-fade-in" quantity={500} />
        {children}
      </body>
    </html>
  );
}
