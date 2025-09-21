import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const chartData = [
  { label: "New York", coords: [40.7128, -74.006], value: 72000 },
  { label: "San Francisco", coords: [37.7749, -122.4194], value: 39000 },
  { label: "Sydney", coords: [-33.8688, 151.2093], value: 25000 },
  { label: "Singapore", coords: [1.3521, 103.8198], value: 61000 },
];
export function ChartWorldMap() {
  return (
    <Card className="xl:w-4/10">
      <CardHeader>
        <CardTitle>Revenue by Location</CardTitle>
        <CardDescription>January - June 2025</CardDescription>
      </CardHeader>
      <CardContent>
        <img src="/world-map-placeholder.png" alt="World Map Placeholder" />
        <div className="mt-4 space-y-2">
          {chartData.map((location) => (
            <div key={location.label}>
              <div className="flex justify-between text-sm">
                <span>{location.label}</span>
                <span className="font-medium">
                  ${location.value.toLocaleString()}
                </span>
              </div>
              <meter
                className="w-full h-2"
                min="0"
                max="100000"
                value={location.value}
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
