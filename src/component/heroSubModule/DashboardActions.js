import * as React from "react";
import { FaPlus } from "react-icons/fa6";
import Card from "./Card";

function DashboardActions() {
  return (
    <>
      <div className="flex gap-2.5 justify-between px-1 mt-8 text-lg font-medium leading-5 text-center text-neutral-500 max-md:flex-wrap">
        <div className="flex flex-col justify-center   rounded-3xl">
          <button className="flex justify-center px-6 py-4 border border-solid border-neutral-500 rounded-3xl max-md:px-5 hover:bg-cyan-800 hover:text-white hover:duration-500 focus:bg-cyan-800 focus:text-white">
            <FaPlus />
            <div className=" ml-2">Create Report</div>
          </button>
        </div>
        <button className="justify-center px-6 py-4 border border-solid border-neutral-500 rounded-3xl max-md:px-5 hover:bg-cyan-800 hover:text-white hover:duration-500 focus:bg-cyan-800 focus:text-white">
          Share this dashboard
        </button>
        <button className="justify-center px-6 py-4 border border-solid border-neutral-500 rounded-3xl max-md:px-5 hover:bg-cyan-800 hover:text-white hover:duration-500 focus:bg-cyan-800 focus:text-white">
          Select Duration
        </button>
        <button className="justify-center px-6 py-4 border border-solid border-neutral-500 rounded-3xl max-md:px-5 hover:bg-cyan-800 hover:text-white hover:duration-500 focus:bg-cyan-800 focus:text-white">
          Compare with Duration
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-8">
        <Card
          title="EFFICIENCY"
          description="Lorem Ipsum"
          value="1.1921"
          delta="+0.0015 (+0.13%)"
          currency="0.00 USD"
        />
        <Card
          title="TIME TO MARKET"
          description="Lorem Ipsum"
          value="327,176.00"
          delta="-97,914.00 (-23.03%)"
          currency="131,040,723,108 JPY"
        />
        <Card
          title="TECH DEBT"
          description="Lorem Ipsum"
          value="1.1763"
          delta="+0.0015 (+0.13%)"
          currency="0.00 USD"
        />
        <Card
          title="PREDICTABILITY"
          description="Lorem Ipsum"
          value="0.00313010"
          delta="-0.00050430 (-13.88%)"
          currency="1.566 BTC"
        />
      </div>

      <div className="mt-8 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-6 mx-auto w-full text-base leading-5 text-black bg-white rounded-xl shadow-sm max-md:px-5 max-md:mt-3">
              <div className="flex gap-5 justify-between items-start text-base font-semibold leading-5">
                <div className="mt-4">On Time</div>
                <div className="shrink-0 bg-green-500 rounded-full h-[15px] w-[15px]" />
              </div>
              <div className="flex gap-0 mt-3.5">
                <div className="font-light">Completed Iteratiions</div>
                <div className="font-semibold text-right">7</div>
              </div>
              <div className="flex gap-5 justify-between">
                <div className="font-light">Total Iterations</div>
                <div className="font-semibold text-right">9</div>
              </div>
              <div className="flex gap-5 justify-between">
                <div className="font-light">% Iterations Done</div>
                <div className="font-semibold text-right">77.8%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center p-6 mx-auto w-full text-base leading-5 text-black bg-white rounded-xl shadow-sm max-md:px-5 max-md:mt-3">
              <div className="flex gap-5 justify-between items-start text-base font-semibold leading-5">
                <div className="mt-4">On Scope</div>
                <div className="shrink-0 w-4 bg-green-500 rounded-full h-[15px]" />
              </div>
              <div className="flex gap-0 mt-4">
                <div className="font-light">Story Points Done</div>
                <div className="font-semibold text-right">3200</div>
              </div>
              <div className="flex gap-5 justify-between">
                <div className="font-light">Total Story Points</div>
                <div className="font-semibold text-right">4230</div>
              </div>
              <div className="flex gap-5 justify-between">
                <div className="font-light">% Stories Done</div>
                <div className="font-semibold text-right">70.9%</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow justify-center py-6 w-full text-base leading-5 text-black bg-white rounded-xl shadow-sm max-md:mt-3">
              <div className="shrink-0 self-end mr-8 bg-red-400 rounded-full h-[15px] w-[15px] max-md:mr-3" />
              <div className="flex flex-col px-5 mt-3 max-md:px-5">
                <div className="text-base font-semibold leading-5">
                  On Velocity
                </div>
                <div className="flex gap-0 mt-4">
                  <div className="font-light">Average Velocity</div>
                  <div className="font-semibold text-right">428.6</div>
                </div>
                <div className="flex gap-5 justify-between">
                  <div className="font-light">Required Velocity</div>
                  <div className="font-semibold text-right">615.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardActions;
