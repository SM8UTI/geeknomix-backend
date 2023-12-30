import { Outlet } from "react-router-dom";
import SideBar from "../layouts/SideBar";

const Dashboard = () => {
  return (
    <div
      id="DashBoard"
      className="bg-MainBlue-50 w-full h-[100dvh] overflow-hidden flex flex-row items-center"
    >
      <div className="h-[100dvh]">
        <SideBar />
      </div>
      <div>
        Dashboard
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
