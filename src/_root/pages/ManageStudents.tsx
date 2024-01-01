import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { DataTable } from "../components/students_datatable/data-table";
import { columns } from "../components/students_datatable/columns";
import data from "../../data/students.json";

const ManageStudents = () => {
  const sideBar = useSelector((state: any) => state.main.sideBar);

  return (
    <div className="mt-4 ml-2">
      <div
        className={`${
          sideBar ? "ml-4 mt-3" : "mt-6"
        } flex flex-row items-center justify-between gap-2`}
      >
        <h1 className="text-2xl font-bold text-MainGrey-400 font-primary">
          Students List
        </h1>
        <Button className="flex flex-row items-center gap-2" size={"lg"}>
          <PlusCircle size={24} />
          <span>Add Student</span>
        </Button>
      </div>

      {/* container  */}
      <div className="flex flex-row gap-4 mt-4">
        <div className="w-full md:w-[calc(100%_-_300px)]">
          <DataTable columns={columns} data={data} />
        </div>
        <div className=" w-[300px] border-2 border-red-600 h-[100dvh] hidden md:flex">
          profile
        </div>
      </div>
    </div>
  );
};

export default ManageStudents;
