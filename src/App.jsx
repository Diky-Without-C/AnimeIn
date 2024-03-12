import { Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Sidebar from "./component/sidebar";
import Navbar from "./component/navbar";
import HomePage from "./pages/home-page";
import PopularPage from "./pages/popular-page";
import SeasonPage from "./pages/season-page";
import SearchPage from "./pages/search-page";
import DetailsPage from "./pages/details-page";
import NotFound from "./pages/404-page";

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
            <Routes>
              <Route
                path="/AnimeIn/"
                element={<HomePage {...{ contentRef }} />}
              />
              <Route
                path="/AnimeIn/popular"
                element={<PopularPage {...{ contentRef }} />}
              />
              <Route
                path="/AnimeIn/season"
                element={<SeasonPage {...{ contentRef }} />}
              />
              <Route
                path="/AnimeIn/search/:query"
                element={<SearchPage {...{ contentRef }} />}
              />
              <Route
                path="/AnimeIn/anime/:mal_id"
                element={<DetailsPage {...{ contentRef }} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}
