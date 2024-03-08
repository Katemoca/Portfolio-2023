import React from "react";
import { CiLocationArrow1 } from "react-icons/ci";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <div>
      <button
        type="submit"
        className="group h-[3rem] w-[8rem] bg-purple-100 rounded-full text-purple-950 outline-none transition-all flex items-center justify-center gap-2 focus:scale-110 hover:scale-110 hover:bg-purple-950 hover:text-white active:scale-105 dark:bg-white/10 dark:text-white dark:hover:bg-purple-700/10"
        disabled={pending}>
        {pending ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit
            <CiLocationArrow1 className="text-md opacity-70 transition-all group-hover:text-xs  group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </button>
    </div>
  );
}
