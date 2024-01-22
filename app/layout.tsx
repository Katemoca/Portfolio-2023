import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";

export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Katerin Castro | Personal Portfolio",
  description:
    "I'm a fullstack developer with experience using the MERN and PERN stacks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-auto sm:!scroll-smooth">
      <body
        className={`${inter.className} bg-purple-100 text-gray-950 relative pt-28 sm:pt-28`}>
        {/* DIVS ON THE RIGHT CORNER */}
        <div className="bg-[#e78686] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#f6bbff] absolute top-[-1rem] -z-10 left-[-36rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}

//! The {children} of the layout.tsx file is page.tsx

// The !scroll-smooth class is a utility class in Tailwind CSS that applies scroll-behavior: smooth; to an element. This makes the scroll behavior of the element smooth, meaning it will smoothly transition from one part of the page to another when you click on a link that targets an anchor on the page12. The ! before scroll-smooth is used to make this class important, overriding any potential conflicts from other classes.
