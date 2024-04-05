import React from "react";

const Card = ({ title, description, value, delta, currency }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <div className="flex justify-between mt-2">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        <span
          className={`text-gray-700 ${
            delta < 0 ? "text-red-500" : "text-green-500"
          }`}
        >
          {delta} ({Math.abs(delta).toFixed(2)}%)
        </span>
      </div>
      <p className="text-gray-500 text-sm">{currency}</p>
    </div>
  );
};

export default Card;
