import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchRecipes = (e) => {
    e.preventDefault();
    console.log("hello");
    navigate(`/results/${search}`);
    console.log("test");
  };
  return (
    <form onSubmit={searchRecipes}>
      <input
        className="w-[600px] bg-gray-300 rounded-xl px-4 py-3 text-base outline-none"
        type="text"
        placeholder="Search for a recipe..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  );
}

export default SearchInput;
