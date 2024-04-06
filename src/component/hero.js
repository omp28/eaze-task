import React from "react";
import Nav from "./heroSubModule/nav";
import DashboardActions from "./heroSubModule/DashboardActions";
import AnalyticsData from "./heroSubModule/AnalyticsData";

const hero = () => {
  return (
    <div className=" bg-[#F9F9F9] mx-12">
      <Nav />
      <DashboardActions />
      <AnalyticsData />
    </div>
  );
};

export default hero;
