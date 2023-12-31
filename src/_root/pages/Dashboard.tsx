import { Outlet } from "react-router-dom";
import SideBar from "../layouts/SideBar";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const sideBar = useSelector((state: any) => state.main.sideBar);

  return (
    <div
      id="DashBoard"
      className="bg-MainBlue-50 w-full h-[100dvh] overflow-hidden flex flex-row"
    >
      <div className="h-[100dvh]">
        <SideBar />
      </div>
      <div
        className="w-full h-[100dvh] 
      overflow-y-scroll
      "
      >
        {!sideBar && (
          <div
            id="logo"
            className="bg-white w-full sticky top-0 left-0 z-[999] py-2 flex flex-row items-end justify-end pr-[1rem] sm:pr-[2rem] shadow-md 
          
          "
          >
            <img
              src="/assets/logo.svg"
              alt="logo"
              className="w-full max-w-[160px]"
            />
          </div>
        )}
        <div className="w-full h-full  px-[1rem] sm:px-[2rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
