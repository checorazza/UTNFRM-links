import Link from "next/link";

const LinkItem = ({ href, text }) => {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        {text}
      </button>
    </Link>
  );
};

export default LinkItem;
