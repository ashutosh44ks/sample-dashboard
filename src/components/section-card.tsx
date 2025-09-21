import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const sectionCardVariants = cva("border-0", {
  variants: {
    variant: {
      primary: "bg-custom-bg-primary",
      secondary: "bg-custom-bg-secondary",
      tertiary: "bg-custom-bg-tertiary",
    },
  },
  defaultVariants: {
    variant: "secondary",
  },
});

export interface SectionCardProps {
  title: string;
  value: string;
  trend: "up" | "down";
  trendValue: string;
  className?: string;
}
export function SectionCard({
  variant,
  title,
  value,
  trend,
  trendValue,
  className,
}: SectionCardProps &
  VariantProps<typeof sectionCardVariants> & {
    asChild?: boolean;
  }) {
  return (
    <Card className={cn(sectionCardVariants({ variant }), className)}>
      <CardHeader>
        <CardDescription
          className={cn(
            "text-custom-text-primary font-medium",
            variant !== "secondary" && "text-black"
          )}
        >
          {title}
        </CardDescription>
        <CardTitle
          className={cn(
            "text-custom-text-primary text-3xl font-semibold tabular-nums @[250px]/card:text-3xl flex justify-between items-center",
            variant !== "secondary" && "text-black"
          )}
        >
          {value}
          <span
            className={cn(
              "inline-flex items-center gap-1 text-xs font-light tabular-nums text-custom-text-primary",
              variant !== "secondary" && "text-black"
            )}
          >
            {trend === "down" ? <IconTrendingDown /> : <IconTrendingUp />}
            {trendValue}
          </span>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
