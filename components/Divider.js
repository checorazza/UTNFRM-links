const Divider = ({ text, description }) => {
  return (
    <div className="relative flex flex-col py-5 items-center max-w-md mx-auto">
      <div className="flex w-full items-center">
        <div className="flex-grow border-t border-gray-400"></div>
        <span className="flex-shrink mx-4 text-gray-600 text-xl">{text}</span>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
      {description && (
        <p className="mt-2 text-gray-500 text-sm text-center">{description}</p>
      )}
    </div>
  );
};

export default Divider;
