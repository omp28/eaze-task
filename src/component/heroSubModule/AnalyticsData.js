import React from "react";
import DateSelector from "./DateSelector";
import AnalyticsTable from "./AnalyticsTable";

const AnalyticsData = () => {
  const analyticsData = [
    {
      page: "/Defect Arrival Rate",
      pageviews: "872,337 (15.82%)",
      uniquePageviews: "574,332 (15.33%)",
      avgTimeOnPage: "00:05:43",
      entrances: "802,873 (16.75%)",
      exitRate: "25.96%",
      pageValue: "$1,093 (5.11%)",
    },
    {
      page: "/Fixed Rate",
      pageviews: "803,792 (14.39%)",
      uniquePageviews: "456,792 (13.93%)",
      avgTimeOnPage: "00:05:24",
      entrances: "793,982 (15.64%)",
      exitRate: "76.13%",
      pageValue: "$6,792 (36.16%)",
    },
    {
      page: "/cycle time",
      pageviews: "740,702 (13.46%)",
      uniquePageviews: "405,860 (13.25%)",
      avgTimeOnPage: "00:04:36",
      entrances: "684,873 (14.33%)",
      exitRate: "41.54%",
      pageValue: "$702 (3.47%)",
    },
  ];

  return (
    <div>
      <DateSelector />
      <AnalyticsTable data={analyticsData} />
    </div>
  );
};

export default AnalyticsData;
