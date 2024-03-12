import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./login-page.jsx";
import RegisterPage from "./register-page.jsx";
import HomePage from "./pages/home-page.jsx";
import PopularPage from "./pages/popular-page.jsx";
import SearchPage from "./pages/search-page.jsx";
import SeasonPage from "./pages/season-page.jsx";
import DetailsPage from "./pages/details-page.jsx";
import NotFound from "./pages/404-page.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/AnimeIn/",
    element: <App />,
    children: [
      {
        path: "/AnimeIn/",
        element: <HomePage />,
        errorElement: <NotFound />,
      },
      {
        path: "/AnimeIn/popular",
        element: <PopularPage />,
        errorElement: <NotFound />,
      },
      {
        path: "/AnimeIn/season",
        element: <SeasonPage />,
        errorElement: <NotFound />,
      },
      {
        path: "/AnimeIn/search/:query",
        element: <SearchPage />,
        errorElement: <NotFound />,
      },
      {
        path: "/AnimeIn/anime/:mal_id",
        element: <DetailsPage />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "/AnimeIn/login",
    element: <LoginPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/AnimeIn/register",
    element: <RegisterPage />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
