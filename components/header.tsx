"use client"; // These client components are pre-rendered on the server.

import { motion } from "framer-motion";
import { links } from "@/lib/data";
// NEXT GOOGLE FONTS
import { roboto_mono } from "@/app/fonts";
import Link from "next/link";
import clsx from "clsx"; // This is a package for Tailwind CSS
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  // We need to use the hook useContext to use the corresponded context
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className={`${roboto_mono.className} z-[999] relative`}>
      <motion.div
        className="fixed w-full top-0 left-1/2  h-[4.5rem] rounded-none bg-white bg-opacity-80 border border-white border-opacity-40 shadow-lg shadow-black/[0.10] backdrop-blur-[0.rem] sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full dark:bg-gray-950 dark:bg-opacity-75"
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
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 transition hover:text-purple-700 dark:text-gray-400 dark:hover:text-gray-500",
                  { "text-gray-950": activeSection === link.name }
                )}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}>
                {link.name}
              </Link>

              {link.name === activeSection && (
                <motion.span
                  className="bg-pink-300 dark:bg-gray-600 dark:bg-opacity-15 rounded-full absolute inset-0 -z-10"
                  layoutId="activeSection"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}></motion.span>
              )}
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



CLSX => It's mostly used for conditionally applyind "classNames" with Tailwind css. 


*/
