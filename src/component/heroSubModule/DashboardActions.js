import * as React from "react";
import { FaPlus } from "react-icons/fa6";

function DashboardActions() {
  return (
    <div className="flex gap-2.5 justify-between px-1 mt-7 text-lg font-medium leading-5 text-center text-neutral-500 max-md:flex-wrap">
      <div className="flex flex-col justify-center text-white bg-cyan-800 rounded-3xl">
        <button className="flex gap-2 justify-between px-4 py-2">
          <FaPlus />
          <div>Create Report</div>
        </button>
      </div>
      <button className="justify-center px-6 py-2 text-cyan-800 border border-solid border-neutral-500 rounded-3xl max-md:px-5">
        Share this dashboard
      </button>
      <button className="justify-center px-6 py-2 border border-solid border-neutral-500 rounded-3xl max-md:px-5">
        Select Duration
      </button>
      <button className="justify-center px-6 py-2 border border-solid border-neutral-500 rounded-3xl max-md:px-5">
        Compare with Duration
      </button>
    </div>
  );
}

export default DashboardActions;
