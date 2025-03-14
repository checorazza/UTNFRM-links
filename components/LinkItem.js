import Link from "next/link";

const LinkItem = ({ href, text }) => {
  return (
    <button className="flex w-full items-center text-white justify-center gap-3 rounded-2xl bg-gray-800 p-4 text-center font-medium text-primary-foreground transition-all hover:cursor-pointer hover:bg-black hover:shadow-md hover:translate-y-[-2px]">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {text}
      </Link>
    </button>
  );
};

export default LinkItem;
