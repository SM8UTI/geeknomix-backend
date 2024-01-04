import { SiGoogleclassroom } from "react-icons/si";

const ManageStudentProfileCourseCard = ({ data }: { data: any }) => {
  return (
    <div className="bg-MainBlue-50 w-full h-full p-2 rounded-sm">
      <div>
        <div className="flex flex-col gap-2">
          <div className="w-[50px] h-[50px] bg-MainBlue-500 text-white rounded-md grid place-content-center text-2xl ml-auto">
            <SiGoogleclassroom />
          </div>
          <h1 className="text-base font-bold text-MainGrey-400">
            {data.course_name}
          </h1>
        </div>
        <div>
          <div className="flex flex-col mt-2">
            <span className="text-xs text-MainGrey-300">Batch ID</span>
            <h1 className="text-sm text-MainGrey-400 font-semibold">
              {data.batch_id}
            </h1>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-xs text-MainGrey-300">Payment ID</span>
            <h1 className="text-sm text-MainGrey-400 font-semibold">
              {data.Payment_id}
            </h1>
          </div>
          <div className="flex flex-col mt-2">
            <span className="text-xs text-MainGrey-300">Student ID</span>
            <h1 className="text-sm text-MainGrey-400 font-semibold">
              {data.student_id}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudentProfileCourseCard;
