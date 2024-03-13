import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import HamburgerMenu from "./hamburger-menu";

export default function Navbar({ isOpen, setIsOpen, brand }) {
  return (
    <nav className="sticky flex w-full items-center justify-start border-b-2 border-gray-200 bg-white p-2">
      <HamburgerMenu {...{ isOpen, setIsOpen }} />
      <h1 className="ml-2 text-2xl font-bold text-blue-500 md:ml-6">
        <Link to="/AnimeIn/">{brand}</Link>
      </h1>
      <SearchBar />
    </nav>
  );
}
