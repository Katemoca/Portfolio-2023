"use client";

// NEXT GOOGLE FONTS
import { roboto_mono } from "@/app/fonts";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2
      className={`${roboto_mono.className} text-3xl font-medium capitalize mb-8 text-center dark:text-gray-100/60`}>
      {children}
    </h2>
  );
}
