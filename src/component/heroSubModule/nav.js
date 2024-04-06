import * as React from "react";
import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

function Nav() {
  const profile =
    "https://s3-alpha-sig.figma.com/img/0198/7e91/bd98ea2594a62a77ed0b46ad32d0015a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ilxR8xzLq9A8kuKnn6UPM4eq~MSKCo2NkgYXttVNmte1p3S4baZhsk~8u7yMqAYncIesU6p08zsWCgHY3dW2VEtCqcNnPlY~bvaiYdNrFP~u5jKtMwevDjVgLNn62A3yZB13E2c0RDe9bo9HG357M6mq0Eml2p5fNYrWL6kNIBTARQWm1TDf5sro0hSIzo~GytQYPpnfnd96ja9kE57kxPD3B8LCl4B4kU9oUjLXVqICo6XOVk7XYMaMZFXVk1fs5yo5Tfy607w4QxL9GmjXtCOlmin4Ikr1B~kzlVmULgT-esXAPR~im85k8IPSyAieA1434I3EkIYFSXUIh3GnKg__";
  return (
    <div className="flex gap-5 justify-between self-end max-w-full w-full mt-8 max-md:flex-wrap">
      <div className="flex flex-col justify-center self-start mt-1.5 font-light ml-20 rounded border border-solid border-zinc-500 w-[70vh]">
        <div className="flex gap-2 items-center px-2 py-2 rounded-sm relative">
          <label className=" absolute bottom-[80%] px-2 bg-[#F9F9F9] left-4 text-sm text-black">
            Search
          </label>
          <button className=" mx-4">
            <FaSearch className="w-4 h-4 text-[#6599B8]" />
          </button>
          <div className="flex flex-col flex-1 justify-center self-stretch py-2 h-8">
            <div className="justify-center  text-s leading-5 whitespace-nowrap text-slate-500 relative p-2">
              <input
                className="w-full bg-transparent border-none focus:outline-none "
                placeholder=" Search by profile, setting, artifact etc..."
              />
            </div>
          </div>
          <button className=" mx-4">
            <MdOutlineCancel className="w-6 h-6 text-[#6599B8]" />
          </button>
        </div>
      </div>
      <div className="flex gap-3.5 items-center">
        <button className="flex justify-center items-center self-stretch p-2 my-auto w-8 h-8 bg-white rounded-xl shadow-lg">
          <IoMdNotificationsOutline className=" text-[#3D657D]" />
        </button>
        <button className="flex justify-center items-center self-stretch p-2 my-auto bg-white rounded-xl shadow-lg h-8 w-8">
          <AiTwotoneMessage className=" text-[#3D657D]" />
        </button>
        <button className="flex justify-center items-center self-stretch p-2 my-auto w-8 h-8 bg-white rounded-xl shadow-lg">
          <IoSettingsOutline className=" text-[#3D657D]" />
        </button>
        <button className="flex justify-center items-center self-stretch my-auto w-10 h-10 bg-white rounded-full shadow-lg">
          <img className=" rounded-full object-center" src={profile} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
