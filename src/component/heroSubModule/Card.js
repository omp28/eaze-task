import React from "react";

const Card = ({ title, description, value, delta, currency }) => {
  console.log("delta", delta);
  const deltaValue = parseFloat(delta);
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="flex-col justify-between mt-2">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>

        <h1
          className={`text-gray-700 ${
            deltaValue < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {delta} ({Math.abs(deltaValue).toFixed(2)}%)
        </h1>
      </div>
      <p className="text-gray-500 text-sm">{currency}</p>
    </div>
  );
};

export default Card;
