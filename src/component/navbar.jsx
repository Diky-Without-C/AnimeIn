import { Link } from "react-router-dom";
import SearchBar from "./searchbar";
import HamburgerMenu from "./hamburger-menu";

export default function Navbar({ setChecked, isChecked, brand }) {
  return (
    <nav className="sticky flex w-full items-center justify-start border-b-2 border-gray-200 bg-white p-2">
      <HamburgerMenu {...{ isChecked, setChecked }} />
      <h1 className="ml-6 text-2xl font-bold text-blue-500">
        <Link to="/">{brand}</Link>
      </h1>
      <SearchBar />
    </nav>
  );
}
