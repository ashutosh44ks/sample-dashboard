import { ChartBarStacked } from "@/components/bar-chart-stacked-example";
import { ChartLineMultiple } from "@/components/line-chart-multiple-example";
import { ChartPieDonut } from "@/components/pie-chart-donut-example";
import { SectionCard, type SectionCardProps } from "@/components/section-card";
import { TopSellingProducts } from "@/components/table-example";
import { ChartWorldMap } from "@/components/world-map-chart";

const SectionCardsData: Array<
  SectionCardProps & { theme: "primary" | "secondary" | "tertiary" }
> = [
  {
    title: "Customers",
    value: "3,781",
    trend: "up",
    trendValue: "+11.01%",
    theme: "primary",
  },
  {
    title: "Orders",
    value: "1,219",
    trend: "down",
    trendValue: "-0.03%",
    theme: "secondary",
  },
  {
    title: "Revenue",
    value: "$695",
    trend: "up",
    trendValue: "+15.03%",
    theme: "secondary",
  },
  {
    title: "Growth",
    value: "30.1%",
    trend: "up",
    trendValue: "+6.08%",
    theme: "tertiary",
  },
];
const Dashboard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      <h2 className="font-semibold">eCommerce</h2>
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className="flex-1 grid grid-cols-1 gap-4 xl:grid-cols-2 2xl:grid-cols-4">
          {SectionCardsData.map((card, index) => {
            const variants: ("primary" | "secondary" | "tertiary")[] = [
              "primary",
              "secondary",
              "secondary",
              "tertiary",
            ];
            return (
              <SectionCard
                key={card.title}
                {...card}
                variant={variants[index]}
              />
            );
          })}
        </div>
        <ChartBarStacked />
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <ChartLineMultiple />
        <ChartWorldMap />
      </div>
      <div className="flex gap-4 lg:flex-row flex-col">
        <TopSellingProducts />
        <ChartPieDonut />
      </div>
    </div>
  );
};

export default Dashboard;
