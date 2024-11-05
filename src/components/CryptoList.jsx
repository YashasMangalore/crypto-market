import React, { useState, useEffect } from "react";
import axios from "axios";

function CryptoList() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error("Error fetching cryptocurrency data:", error);
      }
    };

    fetchCryptoData();
  }, []);

  return (
    <div className="crypto-list">
      {cryptoData.map((crypto) => {
        const isPositive = crypto.price_change_percentage_24h > 0; // Determine if the price change is positive

        return (
          <div key={crypto.id} className="crypto-item">
            <img
              src={crypto.image}
              alt={`${crypto.name} logo`}
              width="30"
              height="30"
            />
            <h2>
              {crypto.name} ({crypto.symbol.toUpperCase()})
            </h2>
            <p>${crypto.current_price}</p>
            <p>{crypto.price_change_percentage_24h.toFixed(2)}%</p>
            <div
              className={`crypto-change ${
                isPositive ? "positive" : "negative"
              }`}
            >
              {crypto.price_change_percentage_24h.toFixed(2)}%
            </div>
            <p>Market Cap: ${crypto.market_cap.toLocaleString()}</p>
          </div>
        );
      })}
    </div>
  );
}

export default CryptoList;
