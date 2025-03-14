import LinkItem from "../components/LinkItem";
import Divider from "../components/Divider";

export default function Home() {
  return (
    <div className="text-center items-center justify-center min-h-screen py-15 bg-gray-100">
      <div className="">
        <h1 className="text-5xl font-bold tracking-normal text-balance text-gray-900 sm:text-5xl m-4">
          UTN Facultad Regional Mendoza
        </h1>
        <h2 className="text-3xl tracking-tight text-gray-700 m-4">
          Links Útiles
        </h2>
      </div>
      <Divider text="Apuntes"></Divider>
      <div className="">
        <LinkItem href="https://youtube.com" text="YouTube ahre"></LinkItem>
      </div>
    </div>
  );
}
