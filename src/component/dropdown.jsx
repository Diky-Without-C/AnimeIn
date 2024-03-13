import { useState, useEffect, useRef } from "react";
import Icon from "./icon";
import { useClickOutside } from "../services/utilities";

export default function Dropdown({ list }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    useClickOutside(dropdownRef, setIsOpen);
  }, []);

  return (
    <div className="relative flex w-auto flex-row-reverse" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="flex h-11 w-auto items-center justify-center rounded-lg bg-gray-200 p-2"
      >
        <span className="px-2 text-lg font-semibold">Filter</span>
        <Icon name="filter" />
      </button>
      {isOpen && (
        <div className="absolute top-full z-10 mt-1 w-40 rounded border-2 bg-white py-2">
          <DropdownMenu items={list} />
        </div>
      )}
    </div>
  );
}

function DropdownMenu({ items }) {
  return (
    <ul>
      {items.map((item, index) => {
        return (
          <li
            key={index}
            className={`flex flex-col px-2 text-lg ${!item.subList && "cursor-pointer hover:bg-gray-300"}`}
          >
            <span className="flex items-center">{item.title}</span>
            {item.subList && <DropdownSubMenu sub_items={item.subList} />}
          </li>
        );
      })}
    </ul>
  );
}

function DropdownSubMenu({ sub_items }) {
  return (
    <ul>
      {sub_items.map((sub_item, index) => {
        return (
          <li
            key={index}
            className="cursor-pointer px-2 text-lg hover:bg-gray-300"
          >
            <span>{sub_item.title}</span>
          </li>
        );
      })}
    </ul>
  );
}
