import LinkList from "../components/LinkList.js";
import LinkItem from "../components/LinkItem.js";
import Divider from "../components/Divider.js";
import Link from "next/link.js";

export default function Home() {
  const autogestion = {
    text: "¿Se cayó Autogestión?",
    href: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  };

  const apuntes = [
    { text: "Descargá apuntes y exámenes", href: "https://apuntesutnmza.com" },
    {
      text: "Subí tu apunte",
      href: "https://drive.google.com/drive/folders/1XqAJvCCtzAFxJ5hlaerHdUF8qgCsPCVi",
    },
  ];

  const grupos = [
    {
      text: "WhatsApp Apuntes",
      href: "https://chat.whatsapp.com/IY4RsQtBvzJ4MB7hGJEGlZ",
    },
    {
      text: "Telegram Apuntes",
      href: "https://t.me/+JJxj6DbwD1RhNjVh",
    },
    {
      text: "WhatsApp Debates",
      href: "https://chat.whatsapp.com/JyitRhuOh99HfwGdkFFfGy",
    },
  ];

  return (
    <div className="text-center items-center justify-center min-h-screen">
      <div className="mt-15">
        <h1 className="text-5xl font-bold tracking-tight text-balance text-gray-900 sm:text-5xl mb-1">
          UTN Mendoza
        </h1>
        <h2 className="text-3xl font-bold tracking-tight text-blue-500 mb-5">
          Links Útiles
        </h2>
      </div>
      <LinkItem text={autogestion.text} href={autogestion.href}></LinkItem>
      <Divider text="Apuntes"></Divider>
      <LinkList linkitems={apuntes} />
      <Divider text="Grupos"></Divider>
      <LinkList linkitems={grupos} />
    </div>
  );
}
