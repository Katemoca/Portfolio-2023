import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body
        className={`${inter.className} bg-purple-100 text-gray-950 relative h-[5000px]`}>
        <div className="bg-[#e78686] absolute top-[-6rem] -z-10 rigth-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#f6bbff] absolute top-[-1rem] -z-10 left-[-36rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>

        <Header />
        {children}
      </body>
    </html>
  );
}
