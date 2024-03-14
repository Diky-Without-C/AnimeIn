import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  function closeSidebar() {
    setIsOpen(false);
  }

  return (
    <main className="flex h-screen w-full flex-col">
      <Navbar brand={"AnimeIn"} {...{ isOpen, setIsOpen }} />
      <div className="flex">
        <Sidebar {...{ isOpen }} />
        <div
          onClick={closeSidebar}
          className="h-[calc(100vh-4.5rem)] w-full overflow-x-hidden overflow-y-scroll"
        >
          <div
            className={`h-full w-full p-2 md:p-4 lg:pointer-events-auto ${isOpen && "pointer-events-none"}`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}
