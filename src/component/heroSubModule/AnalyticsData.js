import React, { useState } from "react";
import DateSelector from "./DateSelector";
import AnalyticsTable from "./AnalyticsTable";

const AnalyticsData = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("today");

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const dataForPeriod = {
    today: [
      {
        page: "/Defect Arrival Rate",
        pageviews: "356,928",
        uniquePageviews: "275,588",
        avgTimeOnPage: "00:03:51",
        entrances: "315,643",
        exitRate: "39.84%",
        pageValue: "$19,983",
      },
      {
        page: "/Fixed Rate",
        pageviews: "803,792",
        uniquePageviews: "456,792",
        avgTimeOnPage: "00:05:24",
        entrances: "793,982",
        exitRate: "76.13%",
        pageValue: "$6,792",
      },
      {
        page: "/Product Roadmap",
        pageviews: "123,456",
        uniquePageviews: "98,431",
        avgTimeOnPage: "00:02:15",
        entrances: "110,354",
        exitRate: "23.58%",
        pageValue: "$2,485",
      },
      {
        page: "/Sprint Burndown",
        pageviews: "287,631",
        uniquePageviews: "176,341",
        avgTimeOnPage: "00:04:31",
        entrances: "240,672",
        exitRate: "52.37%",
        pageValue: "$10,123",
      },
      {
        page: "/Customer Support",
        pageviews: "533,123",
        uniquePageviews: "445,286",
        avgTimeOnPage: "00:03:22",
        entrances: "489,293",
        exitRate: "16.76%",
        pageValue: "$3,455",
      },
    ],
    yesterday: [
      {
        page: "/Cycle Time",
        pageviews: "456,832",
        uniquePageviews: "345,231",
        avgTimeOnPage: "00:04:18",
        entrances: "422,391",
        exitRate: "41.21%",
        pageValue: "$15,287",
      },
      {
        page: "/Lead Time",
        pageviews: "543,234",
        uniquePageviews: "398,542",
        avgTimeOnPage: "00:03:59",
        entrances: "476,123",
        exitRate: "36.78%",
        pageValue: "$18,432",
      },
      {
        page: "/Bug Reports",
        pageviews: "223,455",
        uniquePageviews: "192,321",
        avgTimeOnPage: "00:02:57",
        entrances: "201,351",
        exitRate: "66.22%",
        pageValue: "$4,652",
      },
      {
        page: "/Feature Requests",
        pageviews: "176,111",
        uniquePageviews: "120,876",
        avgTimeOnPage: "00:03:33",
        entrances: "144,987",
        exitRate: "31.44%",
        pageValue: "$1,223",
      },
    ],
    week: [
      {
        page: "/Top Defects",
        pageviews: "1,283,782",
        uniquePageviews: "945,343",
        avgTimeOnPage: "00:06:38",
        entrances: "1,139,281",
        exitRate: "25.13%",
        pageValue: "$51,243",
      },
      {
        page: "/Velocity",
        pageviews: "762,345",
        uniquePageviews: "553,235",
        avgTimeOnPage: "00:04:52",
        entrances: "653,282",
        exitRate: "38.93%",
        pageValue: "$33,234",
      },
      {
        page: "/Sprint Retrospective",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Sprint Planning",
        pageviews: "345,678",
        uniquePageviews: "234,567",
        avgTimeOnPage: "00:02:59",
        entrances: "187,654",
        exitRate: "35.76%",
        pageValue: "$12,789",
      },
    ],
    month: [
      {
        page: "/Dummy Page 3",
        pageviews: "345,678",
        uniquePageviews: "234,567",
        avgTimeOnPage: "00:04:20",
        entrances: "187,654",
        exitRate: "35.76%",
        pageValue: "$12,789",
      },
      {
        page: "/Dummy Page 4",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Dummy Page 5",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Dummy Page 6",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
    ],
    quarter: [
      {
        page: "/Dummy Page 5",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Dummy Page 6",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Dummy Page 7",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Dummy Page 8",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
    ],
    year: [
      {
        page: "/Dummy Page 7",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Dummy Page 8",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Dummy Page 9",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
      {
        page: "/Dummy Page 10",
        pageviews: "456,789",
        uniquePageviews: "345,678",
        avgTimeOnPage: "00:03:45",
        entrances: "210,987",
        exitRate: "28.43%",
        pageValue: "$14,567",
      },
    ],
  };

  return (
    <div>
      <DateSelector handlePeriodChange={handlePeriodChange} />
      <div className="font-bold text-lg mb-4">Analytics Data</div>
      <AnalyticsTable data={dataForPeriod[selectedPeriod]} />
    </div>
  );
};

export default AnalyticsData;
