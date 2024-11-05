import React from "react";

const SearchSortBar = ({ setSearchTerm, setSortOption }) => {
  // Define an array of sort options
  const sortOptions = [
    { label: "Sort By Mkt Cap", value: "marketCap" },
    { label: "Sort by Percentage", value: "percentage" },
  ];

  return (
    <div className="search-sort-bar">
      <input
        type="text"
        placeholder="Search By Name or Symbol"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {sortOptions.map((option, index) => (
        <button key={index} onClick={() => setSortOption(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default SearchSortBar;
