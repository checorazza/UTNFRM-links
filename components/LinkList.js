import LinkItem from "./LinkItem.js";

const LinkList = ({ linkitems }) => {
  return (
    <div className="items-center justify-center flex flex-col w-full max-w-sm space-y-2 mx-auto">
      {linkitems.map((linkitem, index) => (
        <LinkItem key={index} href={linkitem.href} text={linkitem.text} />
      ))}
    </div>
  );
};

export default LinkList;
