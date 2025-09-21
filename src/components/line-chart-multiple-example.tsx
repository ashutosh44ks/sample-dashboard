import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Separator } from "./ui/separator";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", actuals: 12000000, projections: 8000000 },
  { month: "February", actuals: 22000000, projections: 15000000 },
  { month: "March", actuals: 18000000, projections: 12000000 },
  { month: "April", actuals: 25000000, projections: 17000000 },
  { month: "May", actuals: 29000000, projections: 21000000 },
  { month: "June", actuals: 30000000, projections: 23000000 },
];

const chartConfig = {
  actuals: {
    label: "Actuals",
    color: "var(--chart-1)",
  },
  projections: {
    label: "Projections",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ChartLineMultiple() {
  return (
    <Card className="flex-1 bg-custom-bg-secondary border-0">
      <CardHeader>
        <CardTitle className="flex items-center">
          Revenue{" "}
          <Separator
            orientation="vertical"
            className="mx-2 data-[orientation=vertical]:h-4"
          />
          <ul className="ml-6 list-disc flex gap-8 font-normal text-sm">
            <li>Current Week <span className="font-medium">$58,211</span></li>
            <li>Previous Week <span className="font-medium">$68,768</span></li>
          </ul>
        </CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="actuals"
              type="monotone"
              stroke="var(--color-actuals)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="projections"
              type="monotone"
              stroke="var(--color-projections)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
