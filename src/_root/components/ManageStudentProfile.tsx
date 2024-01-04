import { Button } from "@/components/ui/button";
import { Mail, PhoneCall } from "lucide-react";
import ReactCountryFlag from "react-country-flag";
import { FaWhatsapp } from "react-icons/fa";
import ManageStudentProfileCourseCard from "./ManageStudentProfileCourseCard";

const ManageStudentProfile = () => {
  const data = {
    name: "Erika john",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    id: "85LKI4506",
    bio: "Bio small info about student and its optional",
    gender: "female",
    address: "Unit-1, Bhubaneswar",
    country: "IN",
    course_list: [
      {
        course_name: "Post Graduate Program in Data Analytics",
        batch_id: "PGPDA_JAN2021_BLR",
        Payment_id: "pay_JAN2021_BLR_46",
        student_id: "56XDS56",
      },
      {
        course_name: "Post Graduate Program in Cyber Security",
        batch_id: "PGPDA_JAN2023_BLR",
        Payment_id: "pay_JAN2021_BLR_45",
        student_id: "56JBCD56",
      },
      {
        course_name: "Post Graduate Program in Cloud Computing",
        batch_id: "PGPDA_JAN2024_BLR",
        Payment_id: "pay_JAN2021_BLR_35",
        student_id: "54JCBDCB545",
      },
    ],
  };
  return (
    <div className="w-full ">
      <div className="w-full h-full bg-white p-4 rounded-md overflow-hidden overflow-y-scroll">
        <div className="flex flex-col items-center gap-2">
          {/* id  */}
          <span className="text-sm text-MainGrey-200 font-medium uppercase">
            {data.id}
          </span>
          {/* image  */}
          <div className="w-[160px] aspect-square mx-auto rounded-full overflow-hidden border-4 border-MainBlue-500">
            <img
              src={data.img}
              alt="profile image"
              className="w-full h-full object-cover"
            />
          </div>
          {/* name  */}
          <h1 className="font-semibold text-xl capitalize">{data.name}</h1>
          <div className="flex flex-row gap-2">
            {/* buttons  */}
            <Button className="rounded-full w-12 h-12">
              <PhoneCall size={18} />
            </Button>
            <Button className="rounded-full w-12 h-12">
              <Mail size={18} />
            </Button>
            <Button className="rounded-full w-12 h-12">
              <FaWhatsapp size={18} />
            </Button>
          </div>
        </div>

        <div className="mt-6 flex flex-row flex-wrap gap-3">
          <div className="flex flex-col">
            <span className="text-xs text-MainGrey-300 capitalize">About</span>
            <h1 className="text-MainGrey-500 font-semibold text-sm">
              {data.bio}
            </h1>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-MainGrey-300 capitalize">Gender</span>
            <h1 className="text-MainGrey-500 font-semibold capitalize  text-sm">
              {data.gender}
            </h1>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-MainGrey-300 capitalize ">
              Address
            </span>
            <h1 className="text-MainGrey-500 font-semibold capitalize  text-sm">
              {data.address}
            </h1>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-MainGrey-300 capitalize">
              Country
            </span>
            <div className="flex flex-row gap-2 items-center">
              <ReactCountryFlag
                countryCode={data.country}
                svg
                style={{
                  width: "3em",
                  height: "3em",
                }}
                title={data.country}
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <div className="flex w-full h-full">
            <h1 className="text-md font-semibold text-MainGrey-300 relative before:absolute before:top-0 before:left-[-0.5rem] before:w-[4px] before:h-full  before:bg-MainBlue-500 ml-2">
              Enrolled List
            </h1>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            {data.course_list.map((elem, index) => (
              <ManageStudentProfileCourseCard data={elem} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageStudentProfile;
