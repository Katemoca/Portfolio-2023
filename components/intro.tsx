"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import imgProfile from "@/public/imgprofile2.jpg";

export default function Intro() {
  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div>
            <Image
              src={imgProfile}
              alt="Katerin image profile"
              width="195"
              height="195"
              quality="95"
              priority={true}
              className="h-40 w-40 rounded-full object-cover shadow-xl border-white border-[0.35rem]"
            />
          </motion.div>
          <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 text-4xl flex -space-x-3">
            <span>2️⃣</span>
            <span>💐</span>
            <span>0️⃣</span>
            <span>💐</span>
            <span>2️⃣</span>
            <span>💐</span>
            <span>4️⃣</span>
          </div>
        </div>
      </div>
    </section>
  );
}
