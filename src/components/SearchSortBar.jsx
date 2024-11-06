import React from "react";

const SearchSortBar = ({ setSearchTerm, setSortOption }) => {
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    console.log("Search Term (Input):", value); // Log search term from input
  };

  const handleSort = (option) => {
    setSortOption(option);
    console.log("Sort Option Selected:", option); // Log selected sort option
  };

  return (
    <div className="search-sort-bar">
      <input
        type="text"
        placeholder="Search By Name or Symbol"
        onChange={handleSearch}
        className="search-input"
      />
      <button onClick={() => handleSort("marketCap")}>Sort By Mkt Cap</button>
      <button onClick={() => handleSort("percentage")}>
        Sort by Percentage
      </button>
    </div>
  );
};

export default SearchSortBar;
