import React, { useState, useEffect } from "react";
import SearchSortBar from "./components/SearchSortBar";
import CryptoList from "./components/CryptoList";
import axios from "axios";
import "./styles.css";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cryptoData, setCryptoData] = useState([]);
  const [displayData, setDisplayData] = useState([]); // Filtered and sorted data

  // Fetch cryptocurrency data from the API on initial load
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        setCryptoData(response.data);
        setDisplayData(response.data); // Set initial display data
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  // Function to handle filtering and sorting
  const filterAndSortData = () => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();

    // Filter the data based on the search term
    let filteredData = cryptoData.filter(
      (crypto) =>
        crypto.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        crypto.symbol.toLowerCase().includes(lowerCaseSearchTerm)
    );

    // Apply sorting based on the selected sort option
    if (sortOption === "marketCap") {
      filteredData.sort((a, b) => b.market_cap - a.market_cap);
    } else if (sortOption === "percentage") {
      filteredData.sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );
    }

    setDisplayData(filteredData);
  };

  // Trigger filter and sort when searchTerm, sortOption, or cryptoData changes
  useEffect(() => {
    filterAndSortData();
  }, [searchTerm, sortOption, cryptoData]);

  return (
    <div className="container">
      <SearchSortBar
        setSearchTerm={setSearchTerm}
        setSortOption={setSortOption}
      />
      {/* Pass the displayData to CryptoList */}
      <CryptoList cryptos={displayData} />
    </div>
  );
};

export default App;
