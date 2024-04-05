import React, { useState } from "react";

const DateSelector = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("today");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <div className="font-bold text-lg">Analytics Dashboard</div>
      <div className="flex space-x-4">
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       selectedPeriod === "today"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => handlePeriodChange("today")}
        >
          Today
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       selectedPeriod === "yesterday"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => handlePeriodChange("yesterday")}
        >
          Yesterday
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       selectedPeriod === "month"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => handlePeriodChange("month")}
        >
          Month
        </button>
        <button
          className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium"
        >
          Select Period
        </button>
      </div>
    </div>
  );
};

export default DateSelector;
