import { useState, useEffect, useRef } from "react";
import { useClickOutside } from "../services/utilities";
import Icon from "./icon";

export default function Dropdown({ list }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

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
        <div className="absolute top-full z-10 mt-2 max-h-80 w-56 overflow-y-auto rounded-lg border-2 bg-white py-2">
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
          <li key={index} className={`flex flex-col px-2 text-lg`}>
            {item.subList ? (
              <>
                <div className="flex items-center">
                  <span className="mr-2">
                    <Icon name="arrowRight" size="small" />
                  </span>
                  <span>{item.title}</span>
                </div>
                <DropdownSubMenu sub_items={item.subList} />
              </>
            ) : (
              <div className="flex items-center">
                <span className="mr-2">
                  <Icon name="arrowRight" size="small" />
                </span>
                <input type="checkbox" className="mr-2 size-4" />
                <span>{item.title}</span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function DropdownSubMenu({ sub_items }) {
  const [menuItems, setMenuItems] = useState(sub_items);

  function handleCheckbox(index) {
    const newMenu = [...menuItems];
    newMenu.forEach((item, i) => {
      const isSelected = i == index;
      if (isSelected) {
        item.action();
      }
      item.checked = isSelected;
    });
    setMenuItems(newMenu);
  }

  return (
    <ul className="py-2 pl-8">
      {menuItems.map((item, index) => {
        return (
          <li
            key={index}
            className="mb-1 flex flex-col hover:scale-105 hover:font-medium"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                name={`dropdown`}
                checked={item.checked}
                onChange={() => handleCheckbox(index)}
                className="mr-2 size-4"
              />
              <span>{item.title}</span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
