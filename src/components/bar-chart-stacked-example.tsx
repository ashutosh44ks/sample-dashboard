import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A stacked bar chart with a legend";

const chartData = [
  { month: "January", actuals: 12000000, projections: 8000000 },
  { month: "February", actuals: 22000000, projections: 15000000 },
  { month: "March", actuals: 18000000, projections: 12000000 },
  { month: "April", actuals: 25000000, projections: 17000000 },
  { month: "May", actuals: 29000000, projections: 21000000 },
  { month: "June", actuals: 30000000, projections: 23000000 },
];

const chartConfig = {
  projections: {
    label: "Projections",
    color: "var(--chart-1)",
  },
  actuals: {
    label: "Actuals",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartBarStacked() {
  return (
    <Card className="xl:w-4/10 bg-custom-bg-secondary border-0">
      <CardHeader>
        <CardTitle>Projections vs Actuals</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="projections"
              stackId="a"
              fill="var(--color-projections)"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="actuals"
              stackId="a"
              fill="var(--color-actuals)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
