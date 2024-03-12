import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Icon from "./icon";

export default function SearchBar({ className }) {
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const handleInput = (event) => {
    const value = event.target.value;
    setKeyword(value);
  };

  const handleSearch = (event) => {
    if (event.key == "Enter" || event.type == "click") {
      event.preventDefault();
      if (keyword) {
        navigate(`search/${keyword}`);
      }
    }
  };

  return (
    <form className={`ml-14 w-[500px]`}>
      <div className="relative flex items-center">
        <input
          type="search"
          className="block w-full rounded-full border border-gray-300 p-2.5 pl-8 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500"
          placeholder="Search Here..."
          autoComplete="off"
          onKeyDown={handleSearch}
          onChange={handleInput}
        />
        <button
          type="submit"
          className="ml-2 rounded-full bg-blue-500 p-2.5"
          onClick={handleSearch}
        >
          <Icon name="search" color="white" />
        </button>
      </div>
    </form>
  );
}
