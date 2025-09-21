import { DataTable } from "@/components/data-table";
import { columns, type Order } from "@/components/orders-table-columns";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  type SortingState,
  type ColumnFiltersState,
  getFilteredRowModel,
  type VisibilityState,
} from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { IconArrowsSort, IconFilter, IconPlus } from "@tabler/icons-react";

const data: Order[] = [
  {
    id: "#CM9801",
    user: {
      icon: "https://randomuser.me/api/portraits/women/1.jpg", // Example URL
      name: "Natali Craig",
    },
    project: "Landing Page",
    address: "Meadow Lane Oakland",
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: {
      icon: "https://randomuser.me/api/portraits/women/2.jpg", // Example URL
      name: "Kate Morrison",
    },
    project: "CRM Admin pages",
    address: "Larry San Francisco",
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: {
      icon: "https://randomuser.me/api/portraits/men/1.jpg", // Example URL
      name: "Drew Cano",
    },
    project: "Client Project",
    address: "Bagwell Avenue Ocala",
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: {
      icon: "https://randomuser.me/api/portraits/men/2.jpg", // Example URL
      name: "Orlando Diggs",
    },
    project: "Admin Dashboard",
    address: "Washburn Baton Rouge",
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: {
      icon: "https://randomuser.me/api/portraits/men/3.jpg", // Example URL
      name: "Andi Lane",
    },
    project: "App Landing Page",
    address: "Nest Lane Olivette",
    date: "Feb 2, 2023",
    status: "Rejected",
  },
];
const OrderList = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="font-semibold">Order List</h2>
      <div className="bg-blue-100/50 p-3 py-1 rounded flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" title="Add a new order">
            <IconPlus size={16} />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" title="Filter orders">
                <IconFilter size={16} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  );
                })}
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            variant="ghost"
            size="icon"
            title="Sort orders by Id"
            onClick={() =>
              setSorting([{ id: "id", desc: sorting[0]?.desc !== true }])
            }
          >
            <IconArrowsSort size={16} />
          </Button>
        </div>
        <Input
          placeholder="Search projects..."
          className="max-w-64 bg-white"
          value={(table.getColumn("project")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("project")?.setFilterValue(event.target.value)
          }
        />
      </div>
      <DataTable columns={columns} table={table} />
    </div>
  );
};

export default OrderList;
