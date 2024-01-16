"use client";

// import React from "react";
//! NEXT GOOGLE FONTS
import { roboto_mono, inter } from "@/app/fonts";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2
      className={`${roboto_mono.className} text-3xl font-medium capitalize mb-8 text-center`}>
      {children}
    </h2>
  );
}
