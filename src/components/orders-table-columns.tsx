import { IconCalendar } from "@tabler/icons-react";
import { type ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

export const STATUS_MAP = {
  "In Progress": "blue",
  Complete: "green",
  Pending: "yellow",
  Rejected: "red",
  Approved: "purple",
};
type User = {
  icon: string | null;
  name: string;
};
export type Order = {
  id: string;
  user: User;
  project: string;
  address: string;
  date: string;
  status: keyof typeof STATUS_MAP;
};

export const columns: ColumnDef<Order>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: boolean) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: boolean) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableColumnFilter: false,
  },
  {
    accessorKey: "id",
    header: "Order ID",
  },
  {
    accessorKey: "user",
    header: "User",
    cell: ({ row }) => {
      const user: User = row.getValue("user");
      return (
        <div className="flex items-center">
          <img
            src={user.icon || "/default-avatar.png"}
            alt={user.name}
            className="w-8 h-8 rounded-full mr-2 hidden lg:inline-flex"
          />
          <span>{user.name}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "project",
    header: "Project",
  },
  {
    accessorKey: "address",
    header: "Address",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      const date: string = row.getValue("date");
      return (
        <span>
          <IconCalendar className="inline mr-1 mb-1" size={14} />
          {date}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status: keyof typeof STATUS_MAP = row.getValue("status");
      const color = STATUS_MAP[status];
      const getColorClass = (color: string) => {
        switch (color) {
          case "blue":
            return "text-blue-600";
          case "green":
            return "text-green-600";
          case "yellow":
            return "text-yellow-600";
          case "red":
            return "text-red-600";
          case "purple":
            return "text-purple-600";
          default:
            return "text-gray-600";
        }
      };
      const getColorBgClass = (color: string) => {
        switch (color) {
          case "blue":
            return "bg-blue-600";
          case "green":
            return "bg-green-600";
          case "yellow":
            return "bg-yellow-600";
          case "red":
            return "bg-red-600";
          case "purple":
            return "bg-purple-600";
          default:
            return "bg-gray-600";
        }
      };
      const colorClass = getColorClass(color);
      const bgColorClass = getColorBgClass(color);
      return (
        <span className={`flex items-center ${colorClass}`}>
          <span className={`w-2 h-2 rounded-full ${bgColorClass} mr-2`}></span>
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const order = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(order.id)}
            >
              Copy order ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit order details</DropdownMenuItem>
            <DropdownMenuItem>View order details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
