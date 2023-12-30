import { routerData } from "@/router/routerData";
import {
  BellDot,
  BookCopy,
  LayoutTemplate,
  PieChart,
  Receipt,
  Users,
} from "lucide-react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const MenuStyle = `flex flex-row items-center gap-2 text-sm  w-full  rounded-sm p-2 text-sm`;

const SideBarMenu = () => {
  const location = useLocation();

  const isActive = (path: string): boolean => {
    const currentPathSegments = location.pathname.split("/");
    const targetPathSegments = path.split("/");

    return (
      currentPathSegments.length === targetPathSegments.length &&
      currentPathSegments.every(
        (segment, index) => segment === targetPathSegments[index]
      )
    );
  };
  return (
    <div>
      <Link
        to={routerData.dashboard.home}
        className={`${MenuStyle}  ${
          isActive(routerData.dashboard.home)
            ? "bg-MainBlue-500 hover:bg-MainBlue-600 text-white"
            : "text-MainGrey-100 hover:bg-MainGrey-600"
        } `}
      >
        <PieChart size={18} />
        <span>Dashboard</span>
      </Link>
      <Link
        to={routerData.dashboard.manageCourses}
        className={`${MenuStyle}  ${
          isActive(routerData.dashboard.manageCourses)
            ? "bg-MainBlue-500 hover:bg-MainBlue-600 text-white"
            : "text-MainGrey-100 hover:bg-MainGrey-600"
        } `}
      >
        <BookCopy size={18} />
        <span>Manage Courses</span>
      </Link>
      <Link
        to={routerData.dashboard.enroll}
        className={`${MenuStyle}  ${
          isActive(routerData.dashboard.enroll)
            ? "bg-MainBlue-500 hover:bg-MainBlue-600 text-white"
            : "text-MainGrey-100 hover:bg-MainGrey-600"
        } `}
      >
        <Receipt size={18} />
        <span>Enroll Students</span>
      </Link>
      <Link
        to={routerData.dashboard.manageStudents}
        className={`${MenuStyle}  ${
          isActive(routerData.dashboard.manageStudents)
            ? "bg-MainBlue-500 hover:bg-MainBlue-600 text-white"
            : "text-MainGrey-100 hover:bg-MainGrey-600"
        } `}
      >
        <Users size={18} />
        <span>Manage Students</span>
      </Link>
      <Link
        to={routerData.dashboard.manageTrainers}
        className={`${MenuStyle}  ${
          isActive(routerData.dashboard.manageTrainers)
            ? "bg-MainBlue-500 hover:bg-MainBlue-600 text-white"
            : "text-MainGrey-100 hover:bg-MainGrey-600 "
        } `}
      >
        <div className="text-[18px]">
          <FaChalkboardTeacher />
        </div>
        <span>Manage Trainers</span>
      </Link>
      <Link
        to={routerData.dashboard.manageWebsites}
        className={`${MenuStyle}  ${
          isActive(routerData.dashboard.manageWebsites)
            ? "bg-MainBlue-500 hover:bg-MainBlue-600 text-white"
            : "text-MainGrey-100 hover:bg-MainGrey-600"
        } `}
      >
        <LayoutTemplate size={18} />
        <span>Manage Websites</span>
      </Link>
      <Link
        to={routerData.dashboard.notifications}
        className={`${MenuStyle}  ${
          isActive(routerData.dashboard.notifications)
            ? "bg-MainBlue-500 hover:bg-MainBlue-600 text-white"
            : "text-MainGrey-100 hover:bg-MainGrey-600"
        } `}
      >
        <BellDot size={18} />
        <span>Notifications</span>
      </Link>
    </div>
  );
};

export default SideBarMenu;
