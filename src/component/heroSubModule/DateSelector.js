import React from "react";

const DateSelector = (props) => {
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="font-bold text-lg">Analytics Dashboard</div>
      <div className="flex space-x-0">
        <button
          className={` border-t-2 border-b-2 border-l-2 border-gray-400 hover:bg-blue-100 duration-150 px-3 rounded-l-md  
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
          className={` border-t-2 border-b-2 border-l-2 border-gray-400 hover:bg-blue-100 duration-150 px-3   
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
          className={` border-t-2 border-b-2 border-l-2 border-gray-400 hover:bg-blue-100 duration-150 px-3   
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
          className={` border-t-2 border-b-2 border-l-2 border-gray-400 hover:bg-blue-100 duration-150 px-3   
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
          className={` border-t-2 border-b-2 border-l-2 border-gray-400 hover:bg-blue-100 duration-150 px-3   
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
          className={` border-t-2 border-b-2 border-l-2 border-r-2 border-gray-400 hover:bg-blue-100 duration-150 px-3 rounded-r-md   
                     font-medium ${
                       props.selectedPeriod === "year"
                         ? "bg-blue-500 text-white"
                         : ""
                     }`}
          onClick={() => props.handlePeriodChange("year")}
        >
          Year
        </button>
        <div className=" pl-4">
          <select
            className=" border-2 rounded-md border-gray-400 hover:bg-gray-300 px-3 py-2 
                     font-medium"
            value={props.selectedPeriod}
            onChange={(e) => props.handlePeriodChange(e.target.value)}
          >
            <option value="">Select Duration</option>
            <option value="today">Today</option>
            <option value="yesterday">Yesterday</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
            <option value="quarter">Quarter</option>
            <option value="year">Year</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DateSelector;
