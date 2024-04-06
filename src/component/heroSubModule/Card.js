import React from "react";
import blue_background from "../../component/image/blue.jpeg";

const Card = ({ title, description, value, delta, currency }) => {
  console.log("delta", delta);
  const deltaValue = parseFloat(delta);
  return (
    <div className="bg-white shadow-md relative flex flex-col justify-center">
      <div className=" rounded-lg relative">
        <img className=" rounded-lg h-48" src={blue_background} alt="" />
      </div>
      <div className=" absolute top-0 pl-4 pt-4">
        <h3 className="text-lg font-medium text-white">{title}</h3>
        <p className="text-white">{description}</p>
        <div className="flex-col justify-between mt-2">
          <span className="text-2xl font-semibold text-white">{value}</span>

          <h1
            className={`text-gray-700 ${
              deltaValue < 0 ? "text-red-500" : "text-green-500"
            }`}
          >
            {delta} ({Math.abs(deltaValue).toFixed(2)}%)
          </h1>
        </div>
        <p className="text-gray-300 text-sm">{currency}</p>
      </div>
    </div>
  );
};

export default Card;
