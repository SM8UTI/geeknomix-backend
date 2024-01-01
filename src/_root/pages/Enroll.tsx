import { columns } from "../components/enroll_datatable/columns";
import { DataTable } from "../components/enroll_datatable/data-table";
import data from "../../data/enrollment.json";
import { useSelector } from "react-redux";

const Enroll = () => {
  const sideBar = useSelector((state: any) => state.main.sideBar);

  return (
    <div className="w-full">
      <div className="mb-6  text-2xl font-bold text-MainGrey-400 font-primary">
        <h1 className={`${sideBar ? "ml-4 mt-3" : "mt-6"}`}>Enrolled lists</h1>
      </div>
      <div className="w-full">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default Enroll;
