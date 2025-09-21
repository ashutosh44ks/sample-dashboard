import { Pie, PieChart, Cell } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A donut chart";

const chartData = [
  {
    label: "Direct",
    value: 300.56,
  },
  {
    label: "Affiliate",
    value: 135.18,
  },
  {
    label: "Sponsored",
    value: 154.02,
  },
  {
    label: "E-mail",
    value: 48.96,
  },
];

const chartConfig = {
  direct: {
    label: "Direct",
    color: "var(--chart-1)",
  },
  affiliate: {
    label: "Affiliate",
    color: "var(--chart-2)",
  },
  sponsored: {
    label: "Sponsored",
    color: "var(--chart-3)",
  },
  "e-mail": {
    label: "E-mail",
    color: "var(--chart-4)",
  },
} satisfies ChartConfig;

// Map chartData to config color
const getColor = (label: string) => {
  const key = label.toLowerCase().replace(" ", "-");
  return chartConfig[key as keyof typeof chartConfig]?.color || "#8884d8";
};

export function ChartPieDonut() {
  return (
    <Card className="xl:w-4/10">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Sales</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="label"
              innerRadius={60}
            >
              {chartData.map((entry) => (
                <Cell key={entry.label} fill={getColor(entry.label)} />
              ))}
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 items-start text-sm">
        {chartData.map((entry) => (
          <div
            key={entry.label}
            className="flex items-center gap-6 font-medium"
          >
            <div className="flex items-center gap-2">
              <span
                className="inline-block h-3 w-3 flex-shrink-0 rounded-sm"
                style={{ backgroundColor: getColor(entry.label) }}
              ></span>
              {entry.label}
            </div>
            <div className="tabular-nums">${entry.value.toLocaleString()}</div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
