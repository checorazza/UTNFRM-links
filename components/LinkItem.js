import Link from "next/link";

const LinkItem = ({ href, text }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-3 py-4 rounded-2xl text-2xl">
        {text}
      </button>
    </Link>
  );
};

export default LinkItem;
