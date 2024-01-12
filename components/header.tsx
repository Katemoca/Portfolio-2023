// This instructs Next.js to treat the file as a client-side component, allowing you to use the "<motion.div>" component without encountering issues during the server-side rendering process.
"use client"; // 'use client' lets you mark what code runs on the client.

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import { Roboto_Mono } from "next/font/google";

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
});

export default function Header() {
  return (
    <header className={`${roboto_mono.className} z-[999] relative`}>
      <motion.div
        className="fixed w-full top-0 left-1/2  h-[4.5rem] rounded-none bg-white bg-opacity-80 border border-white border-opacity-40 shadow-lg shadow-black/[0.10] backdrop-blur-[0.rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}></motion.div>

      <nav className="fixed flex top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              className="flex relative items-center justify-center h-3/4"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 3 }}>
              <Link
                href={link.hash}
                className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-600 dark:hover:text-purple-700">
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

//! GENERAL NOTES
/*  

FRAMER MOTION:
- Initial: defines the initial state of the element.
- Animate: defines the target state of the element.
- Transition: specifies the duration of the animation. 



THE "HREF" PROPERTY:
The href property specifies the destination URL to which the user should be navigated when clicking on the link. When a user clicks on a link created with the Link component, it triggers a client-side navigation, preventing a full page refresh. Without the href property, the link would not have a specified destination, and clicking on it might result in a full page reload, which is what Next.js aims to avoid for improved performance.


Youtube Project Link: https://www.youtube.com/watch?v=sUKptmUVIBM&t=3742s
On NEXT.JS: https://www.youtube.com/watch?v=vwSlYG7hFk0&t=10s
On NEXT.JS: https://www.youtube.com/watch?v=ZVnjOPwW4ZA

To make it a toggle with frame motion: using "variants": https://www.framer.com/motion/examples/

*/
