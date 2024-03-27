import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import Switcher from "@/components/switcher";

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
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="!scroll-auto sm:!scroll-smooth">
      <body
        className={`${inter.className} bg-purple-100 text-gray-950 relative pt-28 sm:pt-28 gradient-background`}>
        {/* DIVS ON THE RIGHT CORNER */}
        <div className="bg-[#ffffff] absolute top-[-6rem] -z-10 sm-custom:-right-[12rem] sm-custom:h-[31.25rem] sm-custom:w-[60.25rem] sm-custom:rounded-full sm-custom:blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#ff1bb3] absolute top-[-1rem] -z-10 left-[-36rem] h-[20.00rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#7874a7]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
            <Switcher />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
