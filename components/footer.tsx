// NEXT GOOGLE FONTS
import { roboto_mono } from "@/app/fonts";

export default function Footer() {
  return (
    <footer
      className={`${roboto_mono.className} bg-green-300  dark:bg-green-300/30 py-4 px-4 text-center text-white dark:text-gray-100/60`}>
      <small className="mb-2 block text-xs">
        &copy; 2030 Katerin Castro. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
