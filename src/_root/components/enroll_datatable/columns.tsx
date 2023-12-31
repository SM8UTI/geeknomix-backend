import { ColumnDef } from "@tanstack/react-table";
import ReactCountryFlag from "react-country-flag";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export type CoursePayment = {
  country_code: string;
  name: string;
  email: string;
  phone: string;
  course_name: string;
  course_price: string;
  payment_id: number;
  date: string;
  success: boolean;
};

export const columns: ColumnDef<CoursePayment>[] = [
  {
    accessorKey: "country_code",
    header: "Country",
    cell: ({ row }) => {
      return (
        <div>
          <ReactCountryFlag
            countryCode={row.original.country_code}
            svg
            style={{
              width: "3em",
              height: "3em",
            }}
            title={row.original.country_code}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "name",
    header: "Full Name",
    cell: ({ row }) => {
      return (
        <div>
          <h3 className="text-sm font-semibold text-MainGrey-500">
            {row.original.name}
          </h3>
          <span className="text-xs font-normal text-MainGrey-300 whitespace-nowrap">
            {row.original.email}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-sm font-normal text-MainGrey-300 whitespace-nowrap">
            {row.original.phone}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "course_name",
    header: "Course Name",
    cell: ({ row }) => {
      return (
        <div className="w-[300px]">
          <span className="text-sm font-normal text-MainGrey-300 w-full leading-6">
            {row.original.course_name}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "course_price",
    header: "Course Price",
  },
  {
    accessorKey: "payment_id",
    header: "Payment ID",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "success",
    header: "Success",
    cell: ({ row }) => {
      return row.original.success ? (
        <Badge variant="success">Success</Badge>
      ) : (
        <Badge variant="destructive">Failed</Badge>
      );
    },
  },
  {
    id: "actions",
    enableHiding: false,
    header: "Actions",
    cell: ({ row }) => {
      const rowOriginal = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0 bg-green-50">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className={
              "w-[200px] bg-MainBlue-900 border-none text-white p-4 border-2 border-neutral-700 shadow-2xl"
            }
          >
            <DropdownMenuItem
              onClick={() => {
                alert("Name:" + rowOriginal.name);
              }}
              className="cursor-pointer"
            >
              Verified
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                alert("Name:" + rowOriginal.name);
              }}
              className="cursor-pointer"
            >
              Edit
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                alert("Name:" + rowOriginal.name);
              }}
              className="cursor-pointer"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
