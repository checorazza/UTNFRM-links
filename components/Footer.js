const Footer = () => {
  return (
    <footer className="relative flex flex-col py-8 items-center max-w-full mx-auto">
      <div className="flex flex-col items-center w-full">
        <div className="flex-grow border-t border-gray-400 w-full mb-6"></div>
        <div className="flex flex-col items-center gap-4">
          <p className="text-gray-600 text-base">
            © {new Date().getFullYear()}{" "}
            <span className="text-blue-500 hover:text-blue-700">
              <a href="https://instagram.com/checorazza"> checorazza </a>
            </span>
            - Diseño del maestro
            <span className="text-blue-500 hover:text-blue-700">
              <a href="https://github.com/jpbiondo"> jpbiondo</a>
            </span>
          </p>
          <div className="flex gap-6">
            <a
              href="#https://github.com/checorazza/UTNFRM-links"
              className="text-gray-500 hover:text-gray-700 transition-colors text-sm"
            >
              Repositorio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
