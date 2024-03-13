import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useClickOutside } from "../services/utilities";
import Icon from "./icon";

export default function Sidebar({ isOpen, setIsOpen }) {
  const sidebarRef = useRef(null);

  const data = [
    {
      name: "Home",
      icon: "home",
      link: "/AnimeIn/",
    },
    {
      name: "Popular",
      icon: "fire",
      link: "/AnimeIn/popular",
    },
    {
      name: "Season",
      icon: "tv",
      link: "/AnimeIn/season",
    },
    {
      name: "date",
      icon: "calendar",
      link: "/AnimeIn/date",
    },
  ];

  useEffect(() => {
    useClickOutside(sidebarRef, setIsOpen);
  }, []);

  return (
    <aside
      className={`absolute z-10 flex h-[calc(100vh-4.5rem)] flex-col space-y-2 overflow-hidden border-r-2 border-gray-200 bg-white transition-all duration-500 lg:relative ${
        isOpen ? "w-72" : "w-72 -translate-x-full md:w-24 lg:translate-x-0"
      }`}
      ref={sidebarRef}
    >
      <div className="w-full border-b-2 p-2">
        <NavList items={data} isVisible={isOpen} />
      </div>
      <div className="w-full border-gray-300 p-2">
        <button className="w-full rounded bg-blue-600 p-3 text-center font-bold text-white">
          <Link to="/AnimeIn/login">Login</Link>
        </button>
      </div>
    </aside>
  );
}

function NavList({ items, isVisible }) {
  return (
    <ul>
      {items.map((item) => (
        <NavListItem key={item.name} {...{ item, isVisible }} />
      ))}
    </ul>
  );
}

function NavListItem({ item, isVisible }) {
  const { pathname } = useLocation();
  return (
    <Link to={item.link}>
      <li
        className={`mb-1 flex items-center rounded-md px-2 font-bold transition-all duration-500 hover:bg-gray-300 hover:duration-0 ${
          isVisible ? "py-4" : "py-5"
        } ${pathname == item.link && "bg-gray-300"}`}
      >
        <span
          className={`mx-4 transform text-2xl transition-all ${
            isVisible ? "scale-1" : "scale-125"
          }`}
        >
          <Icon name={item.icon} />
        </span>
        <span className="whitespace-nowrap">{isVisible && item.name}</span>
      </li>
    </Link>
  );
}
