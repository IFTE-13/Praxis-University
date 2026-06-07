"use client";

import { Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { AlumniEmploymentSectorData } from "@/staticData/AlumniData";
import { colors } from "@/constants/ChartColors";
import { SyntheticEvent } from "react";

interface SectorData {
  sector: string;
  percentage: number;
  fill: string;
}

const topSectors = AlumniEmploymentSectorData
  .filter(sector => sector.sectorName !== "Total")
  .sort((a, b) => b.alumniEmployedPercentage - a.alumniEmployedPercentage)
  .slice(0, 5);

const otherSectorsPercentage = AlumniEmploymentSectorData
  .filter(sector => sector.sectorName !== "Total" && 
    !topSectors.find(top => top.sectorName === sector.sectorName))
  .reduce((sum, sector) => sum + sector.alumniEmployedPercentage, 0);

const chartData: SectorData[] = [
  ...topSectors.map((sector, index) => ({
    sector: sector.sectorName,
    percentage: sector.alumniEmployedPercentage,
    fill: colors[index % colors.length]
  })),
  {
    sector: "Others",
    percentage: otherSectorsPercentage,
    fill: colors[5]
  }
];

const chartConfig = {
  ...Object.fromEntries(
    topSectors.map((sector, index) => [
      sector.sectorName,
      {
        color: colors[index % colors.length]
      }
    ])
  ),
  others: {
    label: "Others",
    color: colors[5]
  }
} satisfies ChartConfig;

export function AlumniDetailsChart() {
  const date = new Date();
  const month = date.getMonth();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthAbbr = monthNames[(month - 1 + 12) % 12];

  const handleVolumeChange = (event: SyntheticEvent<HTMLDivElement>) => {
    const value = (event.target as HTMLDivElement).textContent;
    if (value) {
      return `${parseFloat(value).toFixed(2)}%`;
    }
    return "0%";
  };

  return (
    <Card className="flex flex-col my-10">
      <CardHeader className="items-center pb-0">
        <CardTitle>Alumni Employment by Sector</CardTitle>
        <CardDescription>Results of Last Tracer Study completed on {monthAbbr} 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square w-full max-h-[450px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip 
              content={
                <ChartTooltipContent 
                  onVolumeChangeCapture={handleVolumeChange}
                />
              } 
            />
            <Pie 
              data={chartData} 
              dataKey="percentage"
              label={(entry) => `${entry.sector}: ${entry.percentage.toFixed(1)}%`}
              labelLine={true}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}