"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"
import { PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from "recharts"

interface ConvocationDataItem {
  total: number;
  male: number;
  female: number;
  undergraduate?: number;
  graduate?: number;
}

interface ConovocationDetailsChartProps {
  convocatonData: ConvocationDataItem;
}

const chartConfig = {
    male: {
      label: "Male",
      color: "hsl(var(--chart-1))",
    },
    female: {
      label: "Female",
      color: "hsl(var(--chart-2))",
    },
    undergraduate: {
      label: "Undergraduate",
      color: "hsl(var(--chart-3))",
    },
    graduate: {
      label: "Graduate",
      color: "hsl(var(--chart-4))",
    },
  } satisfies ChartConfig;

export function ConovocationDetailsChart({ convocatonData }: ConovocationDetailsChartProps) {
  const chartData = [
    {
      subject: "Total",
      value: convocatonData.total,
      fullMark: Math.max(convocatonData.total, convocatonData.male, convocatonData.female, 
        convocatonData.undergraduate || 0, convocatonData.graduate || 0)
    },
    {
      subject: "Male",
      value: convocatonData.male,
      fullMark: Math.max(convocatonData.total, convocatonData.male, convocatonData.female, 
        convocatonData.undergraduate || 0, convocatonData.graduate || 0)
    },
    {
      subject: "Female",
      value: convocatonData.female,
      fullMark: Math.max(convocatonData.total, convocatonData.male, convocatonData.female, 
        convocatonData.undergraduate || 0, convocatonData.graduate || 0)
    },
    {
      subject: "Undergraduate",
      value: convocatonData.undergraduate || 0,
      fullMark: Math.max(convocatonData.total, convocatonData.male, convocatonData.female, 
        convocatonData.undergraduate || 0, convocatonData.graduate || 0)
    },
    {
      subject: "Graduate",
      value: convocatonData.graduate || 0,
      fullMark: Math.max(convocatonData.total, convocatonData.male, convocatonData.female, 
        convocatonData.undergraduate || 0, convocatonData.graduate || 0)
    }
  ];

  return (
    <Card>
      <CardContent className="pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[350px]">
          <RadarChart 
            outerRadius={90} 
            width={350} 
            height={300} 
            data={chartData}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis />
            <Radar
              name="Students"
              dataKey="value"
              fill="#000000cd"
              fillOpacity={0.6}
            />
            <ChartTooltip />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}