import React from "react";
import Nav from "./heroSubModule/nav";
import DashboardActions from "./heroSubModule/DashboardActions";
import AnalyticsData from "./heroSubModule/AnalyticsData";

const hero = () => {
  return (
    <div className=" bg-slate-200">
      <Nav />
      <DashboardActions />
      <AnalyticsData />
    </div>
  );
};

export default hero;
