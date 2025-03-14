import Image from "next/image";

import LinkList from "../components/LinkList.js";
import LinkItem from "../components/LinkItem.js";
import Divider from "../components/Divider.js";
import { principal, apuntes, horarios, grupos } from "../data/link.js";

export default function Home() {
  return (
    <main className="bg-gradient-to-b text-center items-center justify-center min-h-screen font-sans">
      <section className="m-8 p-8 rounded-3xl shadow-md w-full max-w-md mx-auto bg-white">
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
        <h2 className="text-3xl font-bold tracking-tight text-blue-500 mb-5">
          Links Útiles
        </h2>
        <LinkList linkitems={principal} />
        <Divider text="Apuntes"></Divider>
        <LinkList linkitems={apuntes} />
        <Divider text="Horarios"></Divider>
        <LinkList linkitems={horarios} />
        <Divider text="Grupos"></Divider>
        <LinkList linkitems={grupos} />
      </section>
    </main>
  );
}
