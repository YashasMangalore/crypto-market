import React from "react";

const CryptoList = ({ cryptos }) => {
  return (
    <div className="crypto-list">
      {cryptos.map((crypto) => {
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
};

export default CryptoList;
