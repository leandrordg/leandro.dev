import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-6 fixed top-0 w-full bg-white shadow-sm">
      <div>
        <Link href="/" className="font-extrabold text-lg text-[#141414]">
          Leandro.dev
        </Link>
      </div>
      <nav className="font-bold hidden sm:block">
        <ul className="flex items-center gap-4">
          <Link
            href="#home"
            className="opacity-70 hover:opacity-100 transition cursor-pointer"
          >
            Início
          </Link>
          <Link
            href="#sobre"
            className="opacity-70 hover:opacity-100 transition cursor-pointer"
          >
            Sobre
          </Link>
          <Link
            href="#projetos"
            className="opacity-70 hover:opacity-100 transition cursor-pointer"
          >
            Projetos
          </Link>
          <Link
            href="#contato"
            className="opacity-70 hover:opacity-100 transition cursor-pointer"
          >
            Contato
          </Link>
        </ul>
      </nav>

      <MobileMenu />
    </header>
  );
};

export default Header;
