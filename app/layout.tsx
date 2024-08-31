import "../global.css";
import "@/app/styles/loader.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Antihegemonic Molds",
    template: "%s | Antihegemonic Molds",
  },
  description: "Developed by Juan Gómez.",
  openGraph: {
    title: "Antihegemonic Molds",
    description: "Developed by Juan Gómez.",
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

const appleFont = LocalFont({
  src: "../public/fonts/apple/AppleGaramond.ttf",
  variable: "--font-apple",
});

const appleFontLight = LocalFont({
  src: "../public/fonts/apple/AppleGaramond-Light.ttf",
  variable: "--font-apple-light",
});

const appleFontBold = LocalFont({
  src: "../public/fonts/apple/AppleGaramond-Bold.ttf",
  variable: "--font-bold-apple",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[
        inter.variable,
        calSans.variable,
        appleFont.variable,
        appleFontLight.variable,
        appleFontBold.variable,
      ].join(" ")}
    >
      <head>
        {/* Agrega esta línea para tu favicon */}
        <link rel="icon" type="image/webp" href="/favicon.png" />
      </head>
      <body
        className={`bg-slate-100 overflow-x-hidden ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
      </body>
    </html>
  );
}