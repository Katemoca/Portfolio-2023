import Link from "next/link";

const Switcher = () => {
  return (
    <div className="fixed bottom-[100px] right-[20px] flex flex-col gap-1">
      <Link
        href="/en"
        className=" bg-green-300 text-white font-semibold rounded-md p-3">
        EN
      </Link>
      <Link
        href="/fr"
        className=" bg-green-300 text-white font-semibold rounded-md p-3">
        FR
      </Link>
      <Link
        href="/es"
        className=" bg-green-300 text-white font-semibold rounded-md p-3">
        ES
      </Link>
    </div>
  );
};

export default Switcher;
