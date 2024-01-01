import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export type Student = {
  id: number;
  name: string;
  email: string;
  gender: string;
  phone_number: string;
  city: string;
  country: string;
  id_card: string;
  created: string;
};

export const columns: ColumnDef<Student>[] = [
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
    accessorKey: "phone_number",
    header: "Phone Number",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-sm font-normal text-MainGrey-300 whitespace-nowrap">
            {row.original.phone_number}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "id_card",
    header: "ID Card",
    cell: ({ row }) => {
      return (
        <div>
          <span className="text-sm font-normal text-MainGrey-300 whitespace-nowrap">
            {row.original.id_card}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "city",
    header: "Location",
    cell: ({ row }) => {
      return (
        <div>
          <h3 className="text-sm font-semibold text-MainGrey-500 whitespace-nowrap">
            {row.original.city}
          </h3>
          <span className="text-xs font-normal text-MainGrey-300 whitespace-nowrap">
            {row.original.country}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "created",
    header: "Date",
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
            <Button variant="ghost" className="h-8 w-8 p-0 bg-MainBlue-50">
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
