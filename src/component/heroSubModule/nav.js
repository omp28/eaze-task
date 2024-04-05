import * as React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";

function Nav() {
  return (
    <div className="flex gap-5 justify-between self-end max-w-full w-full max-md:flex-wrap">
      <div className="flex flex-col justify-center self-start mt-1.5 font-light rounded-sm border border-solid border-zinc-500">
        <div className="flex gap-2 items-center px-2 py-2 rounded-sm">
          <FaSearch className="w-4 h-4" />
          <div className="flex flex-col flex-1 justify-center self-stretch py-2">
            <div className="justify-center text-xs leading-3 whitespace-nowrap bg-fuchsia-50 text-slate-500">
              Search
            </div>
            <div className="text-xs leading-3 text-zinc-900">
              Search by profile, setting, artifact etc...
            </div>
          </div>
          <MdOutlineCancel className="w-4 h-4" />
        </div>
      </div>
      <div className="flex gap-3.5 items-center">
        <div className="flex justify-center items-center self-stretch p-2 my-auto w-8 h-8 bg-white rounded-xl shadow-lg">
          <IoMdNotificationsOutline className="w-5 h-5" />
        </div>
        <div className="flex justify-center items-center self-stretch p-2 my-auto bg-white rounded-xl shadow-lg h-8 w-8">
          <AiTwotoneMessage className="w-5 h-5" />
        </div>
        <div className="flex justify-center items-center self-stretch p-2 my-auto w-8 h-8 bg-white rounded-xl shadow-lg">
          <IoSettingsOutline className="w-5 h-5" />
        </div>
        <div className="flex justify-center items-center self-stretch p-2 my-auto w-8 h-8 bg-white rounded-xl shadow-lg">
          <FaRegUserCircle className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
