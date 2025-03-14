import LinkList from "../components/LinkList.js";
import LinkItem from "../components/LinkItem.js";
import Divider from "../components/Divider.js";
import Footer from "../components/Footer.js";
import {
  principal,
  apuntes,
  horarios,
  grupos,
  recursos,
} from "../data/link.js";

export default function Home() {
  return (
    <div className="text-center items-center justify-center min-h-screen">
      <div className="mt-15">
        <h1 className="text-7xl font-bold tracking-tight text-balance text-gray-900 mb-1">
          UTN Mendoza
        </h1>
        <h2 className="text-3xl font-bold tracking-tight text-blue-500 mb-2">
          Links Útiles
        </h2>
        <Divider></Divider>
      </div>
      <LinkList linkitems={principal} />
      <Divider text="Apuntes"></Divider>
      <LinkList linkitems={apuntes} />
      <Divider text="Horarios"></Divider>
      <LinkList linkitems={horarios} />
      <Divider text="Grupos"></Divider>
      <LinkList linkitems={grupos} />
      <Divider
        text="Recursos"
        description="Recursos creados por los estudiantes"
      ></Divider>
      <LinkList linkitems={recursos} />
      <Footer></Footer>
    </div>
  );
}
