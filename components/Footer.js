const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white py-3 mt-10">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        <h1 className="text-lg sm:text-xl font-semibold">
          Creado por{" "}
          <span className="text-blue-400">
            <a href="https://instagram.com/checorazza">checo :)</a> 🩵
          </span>
        </h1>
        <p className="text-xs text-gray-500 sm:text-lg mt-0">
          &copy; {new Date().getFullYear()} checorazza
        </p>
        <p className="text-xs text-gray-500">
          (Le robé el footer a
          <span className="text-blue-400">
            <a href="https://cuantas-te-quedan.vercel.app/"> los chicos</a>
          </span>
          )
        </p>
      </div>
    </footer>
  );
};

export default Footer;
