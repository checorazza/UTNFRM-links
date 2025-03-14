import Image from "next/image";
import LinkGroup from "../components/LinkGroup.jsx";
import { linksSections } from "../data/link.js";

export default function Home() {
  return (
    <main className="bg-gradient-to-b p-4 text-center items-center justify-center min-h-screen font-sans">
      <section className="m-8 px-8 py-12 rounded-3xl shadow-md w-full max-w-md mx-auto bg-white">
        <header className="mx-auto">
          <Image
            src={"/logo-utn.png"}
            alt="Logo UTN"
            width={72}
            height={72}
            className="mx-auto"
          />
          <h1 className="text-3xl font-bold tracking-tight text-balance mt-2">
            UTN FRM
          </h1>
          <p className="text-gray-600">Links Útiles</p>
        </header>
        <hr className="my-8 border-gray-300" />
        <div className="flex flex-col gap-4">
          {linksSections.map((linkSection, index) => (
            <LinkGroup
              key={index}
              title={linkSection.title}
              items={linkSection.items}
              icon={linkSection.icon}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
