import * as React from "react";
import { GoHome } from "react-icons/go";
import { PiTimerBold } from "react-icons/pi";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoRocketOutline } from "react-icons/io5";
import { RiStackFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdLogout } from "react-icons/md";
import { IoChevronBackSharp } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";

function Sidebar() {
  return (
    <div className="flex flex-col px-6 pt-9 pb-5 mx-auto mt-4 ml-4 w-full h-full text-lg text-white whitespace-nowrap bg-cyan-800 shadow-sm rounded-3xl max-md:px-5 max-md:mt-10 ">
      <button className=" self-end">
        <IoChevronBackSharp className="w-8 h-8 self-end" />
      </button>
      <div className="flex gap-3 justify-between mt-7 text-5xl font-semibold">
        <IoCubeOutline />
        <div>Catalix</div>
      </div>
      <button className="flex gap-4 px-6 py-5 mt-12 text-center rounded-2xl leading-[100%] max-md:px-5 max-md:mt-10 focus:bg-cyan-600 focus:duration-500">
        <GoHome />
        <div>Home</div>
      </button>
      <button className="flex gap-4 px-6 py-5 mt-2.5 text-center rounded-2xl leading-[100%] max-md:px-5 focus:bg-cyan-600 focus:duration-500">
        <PiTimerBold />
        <div>Activities</div>
      </button>
      <button className="flex gap-4 px-6 py-5 mt-2.5 text-center rounded-2xl leading-[100%] max-md:px-5 focus:bg-cyan-600 focus:duration-500">
        <MdOutlineAnalytics />
        <div>Analytics</div>
      </button>
      <button className="flex gap-4 px-6 py-5 mt-2.5 text-center rounded-2xl leading-[100%] max-md:px-5 focus:bg-cyan-600 focus:duration-500">
        <IoRocketOutline />
        <div>Transformation</div>
      </button>
      <button className="flex gap-4 px-6 py-5 mt-2.5 text-center rounded-2xl leading-[100%] max-md:px-5 focus:bg-cyan-600 focus:duration-500">
        <RiStackFill />
        <div>Library</div>
      </button>
      <div className="flex flex-col justify-end py-3 mt-20 text-center border-t border-white border-solid leading-[100%] max-md:mt-10">
        <button className="flex gap-4 px-6 py-5 rounded-2xl max-md:px-5 focus:bg-cyan-600 focus:duration-500 ">
          <IoSettingsOutline />
          <div className="my-auto">Settings</div>
        </button>
        <button className="flex gap-4 px-6 py-5 rounded-2xl max-md:px-5 focus:bg-cyan-600 focus:duration-500">
          <MdLogout />
          <div className="my-auto">Logout</div>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
