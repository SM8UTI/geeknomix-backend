import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeftFromLine, ArrowRightFromLine, LogOut } from "lucide-react";
import SideBarMenu from "../components/SideBarMenu";
import { useDispatch, useSelector } from "react-redux";
import { setSideBar } from "@/store/slices/MainSlice";

const SideBar = () => {
  const dispatch = useDispatch();

  const sideBar = useSelector((state: any) => state.main.sideBar);

  const data = {
    name: "Smruti Ranjan Nayak",
    email: "smruti@admin.com",
  };

  console.log(sideBar);

  return (
    <div
      className={` bg-black h-full text-white absolute sm:relative top-0 left-0 z-[9999]  transition-all ease-in-out duration-200  ${
        sideBar ? "p-2 w-[260px] " : "w-0 p-0"
      }`}
    >
      <Button
        className="absolute top-2 -right-[2.2rem] rounded-none rounded-tr-sm rounded-br-sm p-2 transition-all ease-in-out duration-300"
        onClick={() => {
          dispatch(setSideBar(!sideBar));
        }}
      >
        {sideBar ? (
          <ArrowLeftFromLine size={20} />
        ) : (
          <ArrowRightFromLine size={20} />
        )}
      </Button>
      <div
        className={` h-full flex flex-col justify-between gap-4 transition-all ease-linear duration-75${
          sideBar ? "w-full opacity-100" : "w-0 overflow-hidden opacity-0"
        }`}
      >
        <div
          id="logo"
          className="w-full border-b-[1px] border-MainGrey-400 pb-2"
        >
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="w-full max-w-[160px]"
          />
        </div>
        <div className="w-full flex-1">
          <SideBarMenu />
        </div>
        <div className="bg-MainGrey-600 px-2 py-4 rounded-md">
          <div className="flex flex-row items-center gap-1">
            <Avatar>
              <AvatarFallback>
                {data.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col gap-1">
                <h3 className="text-sm">{data.name.slice(0, 6)}</h3>
                <span className="text-xs text-MainGrey-300">{data.email}</span>
              </div>
              <Button className="bg-MainGrey-700 p-3">
                <LogOut size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
