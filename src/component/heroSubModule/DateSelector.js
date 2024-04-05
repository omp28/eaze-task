import React from "react";

const DateSelector = (props) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <div className="font-bold text-lg">Analytics Dashboard</div>
      <div className="flex space-x-4">
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       props.selectedPeriod === "today"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("today")}
        >
          Today
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       props.selectedPeriod === "yesterday"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("yesterday")}
        >
          Yesterday
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       props.selectedPeriod === "week"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("week")}
        >
          Week
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       props.selectedPeriod === "month"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("month")}
        >
          Month
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       props.selectedPeriod === "quarter"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("quarter")}
        >
          Quarter
        </button>
        <button
          className={`bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium ${
                       props.selectedPeriod === "year"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("year")}
        >
          Year
        </button>
        <select
          className="bg-gray-200 hover:bg-gray-300 px-3 py-2 rounded-md 
                     font-medium"
          value={props.selectedPeriod}
          onChange={(e) => props.handlePeriodChange(e.target.value)}
        >
          <option value="today">Today</option>
          <option value="yesterday">Yesterday</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
          <option value="quarter">Quarter</option>
          <option value="year">Year</option>
        </select>
      </div>
    </div>
  );
};

export default DateSelector;
