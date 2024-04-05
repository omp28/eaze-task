import React from "react";
import Nav from "./heroSubModule/nav";
import DashboardActions from "./heroSubModule/DashboardActions";

const hero = () => {
  return (
    <div className=" bg-slate-200">
      <Nav />
      <DashboardActions />
    </div>
  );
};

export default hero;
