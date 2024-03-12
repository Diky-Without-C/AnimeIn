import { useState, useRef } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";

export default function App() {
  const [isChecked, setChecked] = useState(false);
  const contentRef = useRef(null);

  return (
    <>
      <main className="flex h-screen w-full flex-col">
        <Navbar brand={"AnimeIn"} {...{ isChecked, setChecked }} />
        <div className="flex">
          <Sidebar isOpen={isChecked} />
          <div
            className="h-[calc(100vh-4.5rem)] w-full overflow-x-hidden overflow-y-scroll p-4"
            ref={contentRef}
          >
            <Outlet contentRef={contentRef} />
          </div>
        </div>
      </main>
    </>
  );
}
