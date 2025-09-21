import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { createColumnHelper } from "@tanstack/react-table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const columnHelper = createColumnHelper();
const data = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: "Half Sleeve Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];
function formatCurrency(value: number) {
  return `$${value.toFixed(2)}`;
}
export const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    header: "Price",
    cell: (info) => formatCurrency(info.getValue()), // Formats as currency
  }),
  columnHelper.accessor("quantity", {
    header: "Quantity",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("amount", {
    header: "Amount",
    cell: (info) => formatCurrency(info.getValue()), // Formats as currency
  }),
];

export function TopSellingProducts() {
  return (
    <Card className="flex-1 bg-custom-bg-secondary border-0">
      <CardHeader>
        <CardTitle>Top Selling Products</CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-custom-text-secondary">Name</TableHead>
                <TableHead className="text-custom-text-secondary">Price</TableHead>
                <TableHead className="text-custom-text-secondary">Quantity</TableHead>
                <TableHead className="text-custom-text-secondary">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={index} className="border-0">
                  <TableCell>{row.name}</TableCell>
                  <TableCell>${row.price.toFixed(2)}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                  <TableCell className="text-right">
                    ${row.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
