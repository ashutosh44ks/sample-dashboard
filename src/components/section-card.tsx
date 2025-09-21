import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

export interface SectionCardProps {
  title: string;
  value: string;
  trend: "up" | "down";
  trendValue: string;
  className?: string;
}
export function SectionCard({
  title,
  value,
  trend,
  trendValue,
  className,
}: SectionCardProps) {
  return (
    <Card className={cn(className, "border-0")}>
      <CardHeader>
        <CardDescription className="text-custom-text-primary font-medium">
          {title}
        </CardDescription>
        <CardTitle className="text-custom-text-primary text-3xl font-semibold tabular-nums @[250px]/card:text-3xl flex justify-between items-center">
          {value}
          <span className="inline-flex items-center gap-1 text-xs font-light tabular-nums text-custom-text-primary">
            {trend === "down" ? <IconTrendingDown /> : <IconTrendingUp />}
            {trendValue}
          </span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
